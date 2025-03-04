import React, { useContext,useState } from 'react';
import { cartContext } from './CartProvider';  // Import cart context
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
const DigProducts = ({ product }) => {
  // const { cart, setCart } = useContext(cartContext);  // Access cart and setCart from context
   const [cart,setCart]=useState()
  const navDetails = useNavigate();  // Hook for navigation
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
    };   // Add product to cart and send POST request



    try {
      await axios.post("https://test4-ayw7.onrender.com/api/paintcarts", { data: data1 }, {
        headers: {
          "Content-Type": "application/json",
        },

      }
      );
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

  const handleClick = () => {
    navDetails(`/productdetails/${product.documentId}`); // Navigate to the root URL
  };
  console.log(product)
  // console.log(data1)
  return (
    <div className='flex flex-wrap justify-center gap-6'>
       {product.image && product.image.length > 0 ? (
        <div className="border border-rounded p-5 rounded flex flex-col items-center w-60">
          <div onClick={handleClick} className="cursor-pointer">
            <img
              className='w-50 h-50 object-cover rounded'
              src={product.image[0].url}
              alt={product.name}
            />
          </div>

            <p className='text-lg text-black mt-3'>
              <span className="font-medium text-lg">Name:</span> {product.name}
            </p>
            <p className='text-lg text-black font-bold'>
              <span className="font-medium text-lg">Price:</span> {product.price}
            </p>

          <div className="mt-4">
            {/* Check if product is already in cart */}
              <button
                onClick={addCart}
                className="bg-green-800 rounded p-2 hover:bg-green-700 transition duration-300"
              >
                Add to Cart
              </button>
            
          </div>
        </div>
      
    ) : (
      <p>No images available</p>
    )}
  </div>
  );
};

export default DigProducts;
