import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../Assets/assets';
import { WishlistContext } from '../Components/WishlistProvider';
import { useContext } from 'react';
const ChildAllProduct = ({product}) => {
    
const {addWish}=useContext(WishlistContext)

    const name=product.name.length > 15 ? product.name.substring(0,15):product.name;
  return (
    <div>

<div className='w-full h-96 border p-4'>
            <div>
              <img 
              src={product.pic} alt={product.name} className='w-full h-55 object-cover' />
            </div>
            <div className='mt-4'>
              <h1 className='text-xl font-bold'>{name}</h1>
              <p><span className='font-semibold'>Price:</span> ${product.amt}</p>
            </div>
            <div className='mt-4 flex flex-row justify-center items-center'>
              <button className='bg-blue-500 text-white mr-20 p-2 rounded'>Add To Cart</button>
  
            <button ><Link to='/wish'>
            <img 
            onClick={() => addWish(product)}
            src={assets.wish}
            className='w-5 h-5  text-center'
             alt='wish'/></Link></button>

            </div>
          </div>
    </div>
  )
}

export default ChildAllProduct