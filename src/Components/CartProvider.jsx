// CartProvider.js
import { createContext, useEffect, useState } from "react";

// Create cart context
export const cartContext = createContext();

const CartProvider = ({ children }) => {  // Now it receives children dynamically

//initialize the data for cart page
  const [cart, setCart] = useState([]);
//initialize the data for cartproduct page
  // const [cartproduct, setCartproduct] = useState([]);
  //initialize the data for cart page

  // const [order, setOrder] = useState([]);


   //store the data using local storage in cart page
  // useEffect(() => {
  //   const storedItem = JSON.parse(localStorage.getItem('cart'));
  //   if (storedItem) {
  //     setCart(storedItem);
  //   }
  // }, []);


  // useEffect(() => {
  //   if (cart.length > 0) {
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // }, [cart]);

  //store the data using local storage in cartproduct page
  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cartproduct'));
  //   if (storedCart) {
  //     setCartproduct(storedCart);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (cartproduct.length > 0) {
  //     localStorage.setItem('cartproduct', JSON.stringify(cartproduct));
  //   }
  // }, [cartproduct]);

  
  // const addToCartproduct = (formData) => {
  //   setCartproduct((prevCart) => [...prevCart, formData]);
  // };

  

  //remove the product from the cart page
  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };


  // const addToCart = (formData) => {
  //   setOrder((prevCart) => [...prevCart, formData]);
  // };

  // const cancelOrder=(productId)=>{
  //   setCart((prevCart)=>prevCart.filter((product)=>product.id!==productId))
  // }

  //remove the product from the cartproduct page
  // const removeCartProduct = (productId) => {
  //   setCartproduct((prevCart) => prevCart.filter((c) => c.id !== productId));
  // };

  return (
    <cartContext.Provider value={{ cart, setCart, removeProduct}}>
      {/* Dynamically rendering whatever components are passed as children */}
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
