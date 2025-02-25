import React, {  createContext, useEffect, useState } from 'react'

export const WishlistContext=createContext()


const WishlistProvider = ({Children}) => {

    const [wishlist,setWishlist]=useState([])

    useEffect(()=>{
        const storedWishItem=JSON.parse(localStorage.getItem('wishlist'));
        setWishlist(storedWishItem)
    },[])

    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])

    const addWish=(product)=>{
        setWishlist((prevWish)=>[...prevWish,wishlist])
    }
     

    const removeWish=(productId)=>{
        setWishlist((prevWish)=>prevWish.filter((product)=>product.id!== productId))
    }

  return (
    <>
    <div>
        <WishlistContext.Provider value={{wishlist,addWish,removeWish}}>
            {Children}
        </WishlistContext.Provider>

    </div>
    
    </>
  )
}

export default WishlistProvider