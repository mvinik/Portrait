import React from 'react'
import { useContext } from 'react';
import { cartContext } from './CartProvider';
import { useNavigate } from 'react-router-dom';
const HMProducts = ({ product }) => {

  const { cart, setCart } = useContext(cartContext)

  const navCart = useNavigate()

  // Add product to cart
  const addCart = () => {
    setCart([...cart, product]);
    // Add the product to the cart state
    navCart('/cart')
  };

  // Remove product from cart
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id)); // Remove product from cart by id
  };

  return (
    <>
      <div>
        <div className='bg-teal-600 p-5 rounded'>
          <img className='  w-55 h-70 object-cover rounded '
            src={`https://test4-ayw7.onrender.com${product.image.url}`} alt='img' />
          <p className='text-lg text-white'><span className="font-medium text-lg">Name:</span>{product.name}
          </p>
          <p className='text-lg text-white font-bold'><span className="font-medium text-lg">Price:</span>{product.price}</p>

          <div>
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
    </>
  )
}

export default HMProducts;