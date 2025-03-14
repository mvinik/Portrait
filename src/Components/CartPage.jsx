


import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useFeedback } from '../FeedbackContext';
import { Button, CircularProgress, Typography } from '@mui/material';
import CircularSize from '../loadingpage';
import Cartloginwarning from '../cartloginwarning';
import CartEmptyWarning from '../CartEmptyWarning';
import { useNavigate } from 'react-router-dom';
import PlacingOrderPage from '../Pages/PlacingOrderPage';

const CartPage = () => {
  const navigate = useNavigate();
  const { setCartLen } = useFeedback();
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState({
    general: true,
    delete: {},
    quantity: null,
  });
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [placeOrder, setOrderPlaced] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  // Fetch Cart Data
  const fetchCartData = useCallback(async () => {
    try {
      const response = await axios.get(
       `https://test4-ayw7.onrender.com/api/paintcarts?filters[users_permissions_user][documentId]=${user.documentId}&populate=paint.image&populate=users_permissions_user` 
      );
      setCart(response.data.data);
    } catch (err) {
      setError('Failed to fetch cart data. Please try again later.');
    } finally {
      setLoadingState((prevState) => ({ ...prevState, general: false }));
    }
  }, [user]);

  // Recalculate Cart Total and Quantity
  useEffect(() => {
    if (!user) {
      setError('User not logged in');
      setLoadingState({ general: false });
      return;
    }

    fetchCartData();
  }, [fetchCartData, user]);

  useEffect(() => {
    const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
    setCartLen(totalQty);
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.paint.price) * curr.qty, 0));
  }, [cart, setCartLen]);

  // Handle Quantity Change
  const handleQuantityChange = async (id, type) => {
    setLoadingState((prevState) => ({
      ...prevState,
      quantity: id,
    }));

    const currentItem = cart.find((item) => item.documentId === id);
console.log(currentItem)
    if (type === 'increase' && currentItem.qty < currentItem.paint.stock_qty) {
      const newQty = currentItem.qty + 1;

      // Optimistically update the UI
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.documentId === id ? { ...item, qty: newQty } : item
        )
      );

      try {
        // Update the quantity in the backend
        await axios.put(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`, {
          data: { qty: newQty },
        });
      } catch (error) {
        setError('Failed to update quantity. Please try again later.');
        // Revert the quantity update in case of failure
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.documentId === id ? { ...item, qty: currentItem.qty } : item
          )
        );
      }
    } else if (type === 'decrease' && currentItem.qty > 1) {
      const newQty = currentItem.qty - 1;

      // Optimistically update the UI
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.documentId === id ? { ...item, qty: newQty } : item
        )
      );

      try {
        // Update the quantity in the backend
        await axios.put(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`, {
          data: { qty: newQty },
        });
      } catch (error) {
        setError('Failed to update quantity. Please try again later.');
        // Revert the quantity update in case of failure
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.documentId === id ? { ...item, qty: currentItem.qty } : item
          )
        );
      }
    }

    setLoadingState((prevState) => ({
      ...prevState,
      quantity: null,
    }));
  };


  // Handle Item Deletion
  const handleDelete = async (id) => {
    setLoadingState((prevState) => ({
      ...prevState,
      delete: { ...prevState.delete, [id]: true },
    }));

    try {
      await axios.delete(`https://test4-ayw7.onrender.com/api/paintcarts/${id}`);
      setCart((prevCart) => prevCart.filter((item) => item.documentId !== id));
    } catch (err) {
      setError('Failed to remove the product. Please try again.');
    } finally {
      setLoadingState((prevState) => ({
        ...prevState,
        delete: { ...prevState.delete, [id]: false },
      }));
    }
  };

  // Handle Checkout
  const handleCheckout = async () => {
    if (!user.address) {
      navigate('/addressform');
      return;
    }

    try {
      const response = await fetch('https://test4-ayw7.onrender.com/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      });

      const data = await response.json();
      var { order } = data;
console.log(response)
console.log(order)
      var options = {
        key: 'rzp_test_euWxGXLGZqu4aC',
        amount: order.amount,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Payment',
        order_id: order.id,
        handler: async (response) => {
          setOrderPlaced(true)
          // setLoadingState((prevState) => ({ ...prevState, general: true }));
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

          try {
            const verificationResponse = await fetch('https://test4-ayw7.onrender.com/api/verify-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                payment_id: razorpay_payment_id,
                order_id: razorpay_order_id,
                signature: razorpay_signature,
                user: user.documentId,
                amount: total,
              }),
            });
            const verificationData = await verificationResponse.json();
            if (verificationData.success) {
              const createOrderData = {
                users_permissions_user: user.documentId,
                delivery_address: user.address,
                order_status: 'pending',
                total_amount: total,
                payment_id: razorpay_payment_id,
                payment_status: 'success',
              };

              const orderResponse = await axios.post('https://test4-ayw7.onrender.com/api/orders', { data: createOrderData });
              await axios.post('https://test4-ayw7.onrender.com/api/orderitems/bulk-create', {
                data: cart.map((item) => ({
                  paint: item.paint.documentId,
                  qty: item.qty,
                  order: orderResponse.data.data.documentId,
                })),
              });
              
              setOrderPlaced(false);
              navigate('/ordersuccesspage');
            } else {
              console.error('Payment verification failed');
            }
          } catch (err) {
            console.error('Error during payment verification:', err);
          } finally {
            setLoadingState((prevState) => ({ ...prevState, general: false }));
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          contact: '9999999999',
        },
        theme: { color: '#F37254' },
      };
      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        console.error("Razorpay script not loaded.");
      }
      
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  if (loadingState.general) return <CircularSize />;
  if (!cart) return <CircularSize />;
  if (!user) return <Cartloginwarning />;
  if (cart.length === 0) return <CartEmptyWarning />;
  // if (placeOrder) return <PlacingOrderPage />;

  return (
    <div className="m-10">
      <p className="text-3xl pl-10 py-10 font-thin">Cart Products</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
        {cart.map((cartItem) => (
          <div key={cartItem.documentId} className="w-60 md:w-50 p-4 border m-2 flex flex-col border-gray-500 rounded shadow-lg">
            <div>
              {/* Check if cartItem.paint is not null or undefined */}
              {cartItem.paint && cartItem.paint.image && cartItem.paint.image[0] && (
                <img src={cartItem.paint.image[0].url} alt={cartItem.paint.name} className="w-50 h-50" />
              )}
              {/* Render other product details if cartItem.paint is valid */}
              <h3 className="font-medium text-lg">{cartItem.paint ? cartItem.paint.name : 'Product Name'}</h3>
              <p className="text-md text-gray-700">{cartItem.paint ? `$${cartItem.paint.price} `: 'Price not available'}</p>

              <div className="flex items-center justify-center gap-3 py-2 px-4 bg-gray-50 rounded-md shadow-sm">
                <button
                  onClick={() => handleQuantityChange(cartItem.documentId, 'decrease')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                  disabled={loadingState.quantity === cartItem.documentId}
                >
                  -
                </button>
                {loadingState.quantity === cartItem.documentId ? <CircularProgress size={20} /> : <Typography>{cartItem.qty}</Typography>}
                <button
                  onClick={() => handleQuantityChange(cartItem.documentId, 'increase')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                  disabled={loadingState.quantity === cartItem.documentId}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-800 text-white rounded py-1 px-3 mt-2 hover:bg-red-700"
                onClick={() => handleDelete(cartItem.documentId)}
                disabled={loadingState.delete[cartItem.documentId]}
              >
                {loadingState.delete[cartItem.documentId] ? 'Removing...' : 'Remove'}
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && <h3 className="m-10 font-bold">Total Amount: ${total}</h3>}
      <Button variant="contained" sx={{ margin: '25px' }} onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default CartPage;    