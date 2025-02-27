import React, { useContext } from 'react';
import { cartContext } from './CartProvider';  // Import cart context
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
const PetProducts = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);  // Access cart and setCart from context
  const navCart = useNavigate();  // Hook for navigation
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
  const jwt = localStorage.getItem('jwt'); // Retrieve JWT token from localStorage


  const addCart = async () => {
    if (!user) {
      alert("User not logged in.");
      return;
    }
    const data1 = {
      users_permissions_user: user.documentId,
      paint: product.documentId,
      qty: 1
    };  // Add product to cart and send POST request


    try {
      await axios.post("https://test4-ayw7.onrender.com/api/paintcarts", { data: data1 }, {
        headers: {
          "Content-Type": "application/json",
        },

      }
      );


      // if (response.ok) {
      //   const result = await response.json();
      //   console.log('Product added to cart:', result);

      //   // Add product to cart state if the API call is successful
      //   setCart([...cart, product]);
      //   navCart('/cart');  // Navigate to the cart page
      // } else {
      //   console.error('Error adding to cart:', response);
      //   alert('Failed to add product to cart.');
      // }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product to cart.');
    }
  };

  // Remove product from cart
  const removeCart = () => {
    if (Array.isArray(cart)) {
      console.log('Removing from cart:', product);
      setCart(cart.filter((c) => c.id !== product.id)); // Remove product by id
    } else {
      console.error('Cart is not an array:', cart);
    }
  };
  console.log(product)
  // console.log(data1)
  return (
    <div>
      <div className='bg-teal-600 w-80 p-5 rounded'>
        <div>
          <img
            className='w-70 h-70 object-cover rounded'
            src={product.image.url}
            alt={product.name}  // Alt text for the image
          />
        </div>
        <p className='text-lg text-white'>
          <span className="font-medium text-lg">Name:</span> {product.name}
        </p>
        <p className='text-lg text-white font-bold'>
          <span className="font-medium text-lg">Price:</span> {product.price}
        </p>

        <div>
          {/* Check if product is already in cart */}
          {cart.some((c) => c.id === product.id) ? (
            <button
              onClick={removeCart}
              className="bg-red-800 rounded p-2 mt-1 hover:bg-red-700 transition duration-300"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={addCart}
              className="bg-green-800 rounded p-2 mt-1 hover:bg-green-700 transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetProducts;
