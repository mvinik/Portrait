import React, { useState } from 'react';
import all from '../Assets/AllProduct.json';
import ChildAllProduct from './ChildAllProduct';
import { Link } from 'react-router-dom';

const Products = () => {
  const [allproducts] = useState(all);
  

  return (
    <>
     <h6 className='text-sm p-5 ml-5'>
                <Link className='text-gray-400 hover:text-black' to='/'>Home</Link>
                <span className='text-gray-400'> / </span> Products

            </h6>
      <div className='w-full h-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {allproducts.map((product) => (
          <ChildAllProduct  key={product.id } product={product}/>
        ))}
      </div>
    </>
  );
};

export default Products;
