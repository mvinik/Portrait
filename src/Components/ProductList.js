import React from 'react';
import  {cartContext} from './CartProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../Assets/assets';

const ProductList = ({ product }) => {
  const { cartproduct, setCartproduct } = useContext(cartContext);
  const name=product.name.length > 20 ? product.name.substring(0,20):product.name;

  const navCart=useNavigate()
  const navProduct=useNavigate()

  // Add product to cart
  const addCart = () => {
    setCartproduct([...cartproduct, product]);
     // Add the product to the cart state
    navCart('/cartproduct')
  };

  // Remove product from cart
  const removeCart = () => {
    setCartproduct(cartproduct.filter((c) => c.id !== product.id)); // Remove product from cart by id
  };


  return (
    <div className="p-5 w-96 h-96 border m-2 border-gray-500 rounded shadow-lg">
      <div>
        <img
          className="w-96 h-60 object-cover rounded"
          src={product.image.url} 
          alt={name} 
        />
      </div>
      <div className="p-1 tracking-wide">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>
          <span>Price: </span>{product.amt}
        </p>

        <div className='flex flex-row'>
          <section className='w-2/3'>
          {/* {cartproduct.some((c) => c.id === product.id) ? (
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
        )} */}
        <button onClick={()=>navProduct('/products')}
         className="bg-green-800 rounded p-2 mt-1 hover:bg-green-700 transition duration-300"
          
          >ORDER NOW</button>
          </section>
          {/* <section className='w-1/3'>
            <button onClick={addWish}><Link to='/cart'>
            <img src={assets.wish}
            className='w-8 h-8 ml-10 text-center'
             alt='wish'/></Link></button>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
