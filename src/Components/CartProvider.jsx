// CartProvider.js
import { createContext, useState } from "react";

// Create cart context
export const cartContext = createContext();

const CartProvider = ({ children }) => {  // Now it receives children dynamically

//initialize the data for cart page
  const [cart, setCart] = useState([]);


  // Add item to cart
  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Persist cart in localStorage
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Persist cart in localStorage
  };

  //remove the product from the cart page
  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <cartContext.Provider value={{ cart, setCart, removeProduct,removeFromCart,addToCart}}>
      {/* Dynamically rendering whatever components are passed as children */}
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
