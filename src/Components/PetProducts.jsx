import React, { useContext } from 'react';
import { cartContext } from './CartProvider';  // Import cart context
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
const PetProducts = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);  // Access cart and setCart from context
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

  const handleClick=()=>{
    navDetails(`/productdetails/${product.documentId}`)
  }
  console.log(product)
  // console.log(data1)
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {product.image && product.image.length > 0 ? (
        product.image.map((img, index) => (
          <div key={index} className="bg-teal-600 w-80 p-5 rounded flex flex-col md:flex-row-3 items-center">
            <div onClick={handleClick} className="cursor-pointer">
              <img
                className='w-70 h-70 object-cover rounded'
                src={img.url}
                alt={`${product.name} image ${index + 1}`}
              />
            </div>

            <p className='text-lg text-white mt-3'>
              <span className="font-medium text-lg">Name:</span> {product.name}
            </p>
            <p className='text-lg text-white font-bold'>
              <span className="font-medium text-lg">Price:</span> {product.price}
            </p>

            <div className="mt-4">
              {/* Check if product is already in cart */}
              {cart.some((c) => c.id === product.id) ? (
                <button
                  onClick={removeCart}
                  className="bg-red-800 rounded p-2 hover:bg-red-700 transition duration-300"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={addCart}
                  className="bg-green-800 rounded p-2 hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default PetProducts;
