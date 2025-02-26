import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../Assets/assets';
import { cartContext} from '../Components/CartProvider'
import { useContext } from 'react';
const ChildAllProduct = ({product}) => {
    
const {setWishlist,wishlist,cart,setCart}=useContext(cartContext)

const addWish=()=>{
  setWishlist([...wishlist,product])
}

const addWishCart=()=>{
  setCart([...cart,product])
}
const removeWishCart =()=>{
  setCart(cart.filter((c)=>c.id !== product.id))
}

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
             {
              cart.some((c)=>c.id === product.id) ? 
              (<button
              onClick={removeWishCart}> Remove</button>):
              (<button
              onClick={addWishCart}>Add</button>)

             }
  
            <button ><Link to='/wish'>
            <img 
            onClick={addWish}
            src={assets.wish}
            className='w-5 h-5  text-center'
             alt='wish'/></Link></button>

            </div>
          </div>
    </div>
  )
}

export default ChildAllProduct