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

import Cart2 from './Components/CartPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PetPortraits from './Components/PetPortraits';
import Productdetails from './productdetails';
import { FeedbackProvider } from './FeedbackContext';
import AdressForm from './userAdressForm';
import MyOrders from './MyOrders';
import PlacingOrderPage from './Pages/PlacingOrderPage';
import OrderSuccessPage from './Components/OrderSuccessPage';
// Creating a new QueryClient instance
const queryClient= new QueryClient()

function App() {
  return (
    <div className="App">
      {/* Wrap your app with the QueryClientProvider to allow react-query to work */}
        <QueryClientProvider client={queryClient}>
        
        {/* CartProvider and WishlistProvider wrap the entire app to share the state */}
        {/* <CartProvider> */}
          <FeedbackProvider> <BrowserRouter>
           
           <Header />

   
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/addressform" element={<AdressForm />} />
             <Route path="/myorders" element={<MyOrders />} />
             <Route path="/register" element={<Register />} />
             <Route path="/handmade" element={<Handmade />} />  
             <Route path="/digital" element={<Digital />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/login" element={<Login />} />
             <Route path="/ourstory" element={<OurStory />} />
             <Route path="/cartpage" element={<Cart2/>} />
             <Route path='/pet' element={<PetPortraits/>}/>
             <Route path='/placeorder' element={<PlacingOrderPage/>}/>
             <Route path='/ordersuccesspage' element={< OrderSuccessPage/>}/>
             <Route path='/productdetails/:id' element={<Productdetails/>}/>
           </Routes>

          
           <Footer />
         </BrowserRouter></FeedbackProvider>
         

      {/* </CartProvider> */}
  
        </QueryClientProvider>
    </div>
  );
}

export default App;
