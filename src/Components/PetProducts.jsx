import React, { useContext,useState } from 'react';
import { cartContext } from './CartProvider';  // Import cart context
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import axios from 'axios';

const PetProducts = ({ product }) => {
  const [cart,setCart]=useState()  // Access cart and setCart from context
  const navDetails = useNavigate();  // Hook for navigation
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
  const jwt = localStorage.getItem('jwt'); // Retrieve JWT token from localStorage

  // const addCart = async () => {
  //   if (!user) {
  //     alert("User not logged in.");
  //     return;
  //   }
  //   const data1 = {
  //     users_permissions_user: user.documentId,
  //     paint: product.documentId,
  //     qty: 1
  //   };  // Add product to cart and send POST request

  //   try {
  //     await axios.post("https://test4-ayw7.onrender.com/api/paintcarts", { data: data1 }, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Error adding product to cart.');
  //   }
  // };



  const handleClick = () => {
    navDetails(`/productdetails/${product.documentId}`); // Navigate to product details page
  };

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

        </div>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default PetProducts;
