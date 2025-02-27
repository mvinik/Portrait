// Wishlist.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist ] = useState();

  const removeWish=(productId)=>{
    console.log('Removing product with ID:', productId);
    setWishlist((prevWish)=>prevWish.filter((product)=>product.id!== productId))
}

  return (
    <div className="m-10">
      {/* Check if the wishlist is empty */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <button className="bg-teal-600 text-white py-2 px-4 rounded">Go to Products</button>
          </Link>
          <p className="text-lg text-center pl-3 font-bold text-teal-800">Your wishlist is empty!</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8">
          <p className="text-3xl font-thin">Wishlist</p>
          {wishlist.map((product) => (
            <div key={product.id} className="w-full md:w-1/4 p-4 border m-2 border-gray-500 rounded shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
              <div>
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-md text-gray-700">{product.price}</p>
                <button
                  onClick={() => removeWish(product.id)}
                  className="bg-red-800 text-white rounded py-1 px-3 mt-2 hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
