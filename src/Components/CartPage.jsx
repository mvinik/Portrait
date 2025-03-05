import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cartloginwarning from '../cartloginwarning';
import CartEmptyWarning from '../CartEmptyWarning';
import { useFeedback } from '../FeedbackContext';
import { Button, CircularProgress } from '@mui/material';
import CircularSize from '../loadingpage';
import StripeCheckout from 'react-stripe-checkout';
import { Margin } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const navgate = useNavigate()
  const { setCartLen } = useFeedback(); // This will allow you to update the global state for cart quantity
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state for the whole cart
  const [loadingDelete, setLoadingDelete] = useState({}); // Track loading state for each individual delete
  const [error, setError] = useState(null); // To handle errors if the request fails
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  // Recalculate total whenever cart is updated
  useEffect(() => {
    const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0); // Calculate total quantity
    setCartLen(totalQty); // Set the total quantity in the global state

    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.paint.price) * curr.qty, 0)); // Recalculate total price
  }, [cart, setCartLen]);

  // Fetch cart data when the component mounts
  useEffect(() => {
    const fetchCartData = async () => {
      if (!user) {
        setError('User not logged in');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://test4-ayw7.onrender.com/api/paintcarts?filters[users_permissions_user][documentId]=${user.documentId}&populate=paint.image&populate=users_permissions_user`
        );
        setCart(response.data.data);
        // Optional: Update global state initially if needed
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCartData();
  }, [user, setCartLen]);

  // Handle item deletion from the cart
  const handleDelete = async (id) => {
    setLoadingDelete((prevState) => ({
      ...prevState,
      [id]: true, // Set loading state for this specific item
    }));

    try {
      await axios.delete(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`);
      setCart((prevCart) => prevCart.filter(item => item.documentId !== id)); // Remove item from state
    } catch (err) {
      setError('Failed to remove the product. Please try again.');
    } finally {
      setLoadingDelete((prevState) => ({
        ...prevState,
        [id]: false, // Reset loading state for this item after deletion is complete
      }));
    }
  };

  // Handle quantity increase
  const handleIncreaseQuantity = async (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.documentId === id) {
          return { ...item, qty: item.qty + 1 }; // Increase quantity locally
        }
        return item;
      });
    });

    try {
      await axios.put(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`, {
        data: { qty: cart.find(item => item.documentId === id).qty + 1 },
      });
    } catch (err) {
      setError('Failed to update quantity. Please try again.');
    }
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = async (id) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.documentId === id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 }; // Decrease quantity locally, ensuring qty > 0
        }
        return item;
      });


    });

    try {
      await axios.put(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`, {
        data: { qty: cart.find(item => item.documentId === id).qty - 1 },
      });
    } catch (err) {
      setError('Failed to update quantity. Please try again.');
    }
  };

  if (loading) {
    return <CircularSize />
  }



  async function handelcheckout() {
    // console.log(user)
    if (!user.address) {
      navgate('/addressform')
    }
    const createorder = {
      users_permissions_user: user.documentId,
      delivery_address: user.address,
      order_status: 'pending',
      payment_status: 'success',
      total_amount: total

    }
    const response = await axios.post('https://test4-ayw7.onrender.com/api/orders', { data: createorder })
    const response1 = await axios.post('https://test4-ayw7.onrender.com/api/orderitems/bulk-create', { data: cart.map((e) => ({ paint: e.paint.documentId, qty: e.qty, order: response.data.data.documentId })) })
    console.log(response)
    console.log(response1)

  }

  return (
    <>
      {user == null ? (
        <Cartloginwarning /> // Render Page if user is null
      ) : cart.length === 0 ? (
        <CartEmptyWarning />
      ) : (
        <div className="m-10">
          <p className="text-3xl pl-10 py-10 font-thin">Cart Products</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
            {cart.map((cartItem) => (
              <div
                key={cartItem.id}
                className="w-60 md:w-50 p-4 border m-2 flex flex-col border-gray-500 rounded shadow-lg"
              >
                <div>
                  <img
                    src={cartItem.paint.image[0].url}
                    alt={cartItem.paint.name}
                    className="w-50 h-50"
                  />
                  <h3 className="font-medium text-lg">{cartItem.paint.name}</h3>
                  <p className="text-md text-gray-700">${cartItem.paint.price}</p>
                  <div className="flex flex-row gap-3">
                    <button
                      onClick={() => handleDecreaseQuantity(cartItem.documentId)}
                      className="border rounded bg-gray-300 px-2"
                    >
                      -
                    </button>
                    <p className="text-md text-gray-700">{cartItem.qty}</p>
                    <button
                      onClick={() => handleIncreaseQuantity(cartItem.documentId)}
                      className="border rounded bg-gray-300 px-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-red-800 text-white rounded py-1 px-3 mt-2 hover:bg-red-700 transition duration-300"
                    onClick={() => handleDelete(cartItem.documentId)} // Correct ID used here
                    disabled={loadingDelete[cartItem.documentId]} // Disable button when deleting for this item
                  >
                    {loadingDelete[cartItem.documentId] ? 'Removing...' : 'Remove'} {/* Show loading text while deleting */}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && <h3 className="m-10 font-bold">Total Amount: ${total}</h3>}
          <Button variant='contained' sx={{ margin: "25px" }} onClick={handelcheckout}  >checkout</Button>
          {/* <StripeCheckout name='MyPortrait' amount={product.price}>
          </StripeCheckout> */}
        </div>
      )}
    </>
  );
};

export default CartPage;
