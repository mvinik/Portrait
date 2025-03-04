import React from 'react';
import  {cartContext} from './CartProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const ProductList = ({ product }) => {
  const navDetails = useNavigate(); // Hook to get the navigate function

  // const { cartproduct, setCartproduct } = useContext(cartContext);
  const name=product.name.length > 20 ? product.name.substring(0,20)+"..":product.name;

  const navCart=useNavigate()
  const navProduct=useNavigate()

  // Add product to cart
  // const addCart = () => {
  //   setCartproduct([...cartproduct, product]);
  //    // Add the product to the cart state
  //   navCart('/cartproduct')
  // };

  // // Remove product from cart
  // const removeCart = () => {
  //   setCartproduct(cartproduct.filter((c) => c.id !== product.id)); // Remove product from cart by id
  // };
  const handleClick = () => {
    navDetails(`/productdetails/${product.documentId}`); // Navigate to the root URL
  };

  return (
    <div onClick={handleClick} className="p-5 w-50 border m-10 border-gray-500 rounded shadow-lg">
      <div>
        <img
          className="w-50 h-40 object-cover rounded"
          src={product.image[0]?.url} 
          alt={name} 
        />
      </div>
      <div className="p-1 tracking-wide">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>
          <span>Price: </span>{product.price}₹
        </p>

        <div className='flex flex-row'>
          <section className='w-2/3'>
{/* 
        <button onClick={()=>navProduct('/products')}
         className="bg-green-800 rounded p-2 my-1 hover:bg-green-700 transition duration-300"
          
          >ORDER NOW</button> */}
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProductList;
