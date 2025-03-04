import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cartloginwarning from '../cartloginwarning';
import CartEmptyWarning from '../CartEmptyWarning';
import { cartContext } from './CartProvider';
import { useFeedback } from '../FeedbackContext';
const CartPage = () => {
  const{setCartLen}=useFeedback()
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To handle errors if the request fails
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  // Recalculate total whenever cart is updated
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.paint.price) * curr.qty, 0));
  }, [cart]);

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
        setCartLen(response.data.data.length())
         // Set the cart items in the state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart data. Please try again later.'); // Handle error
        setLoading(false);
      }
    };

    fetchCartData();
  }, [user]);

  // Handle item deletion from the cart
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`);
      setCart((prevCart) => prevCart.filter(item => item.documentId !== id)); // Remove item from state
    } catch (err) {
      setError('Failed to remove the product. Please try again.');
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
    return <div>Loading cart...</div>; // Display loading message or spinner
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
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && <h3 className="m-10 font-bold">Total Amount: ${total}</h3>}
        </div>
      )}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default CartPage;
