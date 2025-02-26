import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Login from './Pages/Login';
import Handmade from './Pages/Handmade';
import Digital from './Pages/Digital';
import OurStory from './Pages/OurStory';
import OrderForm from './Components/OrderForm';
import CartProduct from './Components/CartProducts';
import Register from './Pages/Register';
import Products from './Pages/Products';
import WishList from './Components/WishList';
import Cart2 from './Components/CartPage';
import CartProvider from './Components/CartProvider';
//import WishlistProvider from './Components/WishlistProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Creating a new QueryClient instance
const queryClient= new QueryClient()

function App() {
  return (
    <div className="App">
      {/* Wrap your app with the QueryClientProvider to allow react-query to work */}

        <QueryClientProvider client={queryClient}>
          {/* CartProvider and WishlistProvider wrap the entire app to share the state */}
        <CartProvider>
          
          <BrowserRouter>
            {/* The Header is displayed on all pages */}
            <Header />

            {/* All the routes for different pages in your app */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cartproduct" element={<CartProduct />} />
              <Route path="/products" element={<Products />} />
              <Route path="/register" element={<Register />} />
              <Route path="/handmade" element={<Handmade />} />
              <Route path="/orderform" element={<OrderForm />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/wish" element={<WishList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ourstory" element={<OurStory />} />
              <Route path="/cartpage" element={<Cart2/>} />

            </Routes>

            {/* The Footer is displayed on all pages */}
            <Footer />
          </BrowserRouter>

      </CartProvider>
  
        </QueryClientProvider>
    </div>
  );
}

export default App;
