import React, { useContext, useEffect, useState } from 'react';
import  {cartContext} from './CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartproduct,removeCartProduct } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartproduct.reduce((acc, curr) => acc + parseFloat(curr.amt), 0));
  }, [cartproduct]);

  return (
    <div className='m-10'>
      {/* Check if the cart is empty */}
      {cartproduct.length === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <Link to='/'>
            <button>
              <img
                src='https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png'
                alt='cart'
                className='w-50 '
              />
            </button>
          </Link>
          <p className="text-lg text-center pl-3 font-bold text-teal-800">Your cart is empty!</p>
        </div>
      ) : (
        <div className='m-10  flex flex-col gap-10'>
          <p className='text-3xl font-thin'>Cart Products</p>
          {cartproduct.map((product) => (
            <div
              key={product.id}
              className='p-5 w-full h-70 flex md:flex-row gap-8 border m-2 border-gray-500 rounded shadow-lg'
            >
              <div>
                <img
                  src={product.pic}
                  alt={product.name}
                  className="w-60 h-60"
                />
              </div>
              <div className='p-1 tracking-wide'>
                <h3 className='font-bold text-lg'>{product.name}</h3>
                <p><span>Price:</span> {product.amt}</p>
                {/* Add a remove button */}
                <button
                  onClick={() => removeCartProduct(product.id)}
                  className="bg-red-800 rounded p-2 mt-1 hover:bg-red-700 transition duration-300"
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show total only if there are products */}
      {cartproduct.length > 0 && <h3 className="m-10 font-bold">Total Amount: {total}</h3>}
    </div>
  );
};

export default Cart;