import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Components/Contact';
import Login from './Pages/Login';
import Handmade from './Pages/Handmade';
import Digital from './Pages/Digital';
import OurStory from './Pages/OurStory';
import Register from './Pages/Register';
import WishList from './Components/WishList';
import Cart2 from './Components/CartPage';
import CartProvider from './Components/CartProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PetPortraits from './Components/PetPortraits';

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
           
            <Header />

    
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/handmade" element={<Handmade />} />  
              <Route path="/digital" element={<Digital />} />
              <Route path="/wish" element={<WishList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ourstory" element={<OurStory />} />
              <Route path="/cartpage" element={<Cart2/>} />
              <Route path='/pet' element={<PetPortraits/>}/>
            </Routes>

           
            <Footer />
          </BrowserRouter>

      </CartProvider>
  
        </QueryClientProvider>
    </div>
  );
}

export default App;
