import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from './Assets/assets';
import { useFeedback } from './FeedbackContext';
import axios from 'axios';
import MobileMenu from './Components/MobileMenu';  // Import the MobileMenu component
import Search from './Pages/Search';

function Header() {
  const { cartlen, setCartLen } = useFeedback(); // Global cart quantity
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt = localStorage.getItem('jwt')
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openSearchBar = () => setIsSearchOpen(true);
  const closeSearchBar = () => setIsSearchOpen(false);

  // Fetch cart data and calculate total quantity & price
  useEffect(() => {
    const fetchCartData = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `https://test4-ayw7.onrender.com/api/paintcarts?filters[users_permissions_user][documentId]=${user.documentId}&populate=paint.image&populate=users_permissions_user`
          );
          setCart(response.data.data);

          // Recalculate total quantity and total price
          const totalQty = response.data.data.reduce((acc, curr) => acc + curr.qty, 0);
          const totalPrice = response.data.data.reduce((acc, curr) => acc + parseFloat(curr.paint.price) * curr.qty, 0);

          // Update global state
          setCartLen(totalQty);
          setTotal(totalPrice);

        } catch (err) {
          console.error('Error fetching cart data', err);
        }
      }
    };

    fetchCartData();
  }, [user, setCartLen]); // Runs when `user` or `setCartLen` changes

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <>
      <header className="sticky h-20 top-0 bg-teal-600  text-white p-4 shadow-lg  mx-auto flex justify-between items-center z-10">

        <div className="text-2xl font-semibold">
          <a href="/">
            <span className="text-yellow-300">My</span>Portraits
          </a>
        </div>
        <nav>
          <ul className="hidden md:flex tracking-wide space-x-6">
            <li><a href="/handmade" className="hover:text-yellow-300">Handmade Portraits</a></li>
            <li><a href="/digital" className="hover:text-yellow-300">Digital Portraits</a></li>
            <li><a href="/pet" className="hover:text-yellow-300">Pet Portraits</a></li>
            <li><a href="/ourstory" className="hover:text-yellow-300">Our Story</a></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex flex-row space-x-6 items-center">
          <button onClick={openSearchBar} aria-label="Open Search" className='justify-center items-center cursor-pointer'>
            <img src={assets.search} alt="search" className="w-5 h-5 filter brightness-0 invert" />
            <h4>Search</h4>
          </button>

          {/* Conditionally render login/logout button */}
          {user ? (
            <div className=" flex flex-col items-center cursor-pointer">
              <span>{user.username}</span>
              <button onClick={handleLogout} className="text-white">

                Logout</button>
            </div>
          ) : (
            <button>
              <Link to="/login">
                <img src={assets.l3} alt="login" className="w-6 h-6 filter brightness-0 invert" />
                <h4>Profile</h4>
              </Link>
            </button>
          )}

          <button>
            <Link to="/cartpage" className='flex-col items-center  justify-center'>
              <span className="absolute top-1 right-12 md:top-1 md:right-8 bg-yellow-500 text-teal-800 text-xs rounded-full px-2 py-1">
                {cartlen}
              </span>
              <img src={assets.c1} alt="cart" className="w-5 h-5 filter brightness-0 invert" />
              <h4>Cart</h4>
            </Link>
          </button>

          <button onClick={toggleMenu} aria-label="Toggle Mobile Menu cursor-pointer">
            <img src={assets.menu} alt="menu" className="md:hidden w-6 h-6 filter brightness-0 invert" />
          </button>
        </div>

      </header>

      {/* Pass the state and toggle function to the MobileMenu component */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Search Component */}
      <Search isOpen={isSearchOpen} closeSearchBar={closeSearchBar} />
    </>
  );
}

export default Header;