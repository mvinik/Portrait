import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { assets } from './Assets/assets';
import { cartContext } from './Components/CartProvider';
import Search from './Pages/Search';
import MobileMenu from './Components/MobileMenu';  // Import the MobileMenu component

function Header() {
  const { cart } = useContext(cartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();  // Hook for redirection after logout

  // Toggle for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openSearchBar = () => setIsSearchOpen(true);
  const closeSearchBar = () => setIsSearchOpen(false);

  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Logout functionality
  const handleLogout = () => {
    // Remove user data and JWT token from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');

    // Redirect the user to the login page after logging out
    navigate('/login');
  };

  return (
    <>
      <header className="sticky top-0 bg-teal-600 text-white p-4 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <a href="/">
              <span className="text-yellow-300">My</span>Portraits
            </a>
          </div>
          <nav>
            <ul className="hidden md:flex tracking-wide space-x-6">
              <li>
                <a href="/handmade" className="hover:text-yellow-300">Handmade Portraits</a>
              </li>
              <li>
                <a href="/digital" className="hover:text-yellow-300">Digital Portraits</a>
              </li>
              <li>
                <a href="/ourstory" className="hover:text-yellow-300">Our Story</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-row space-x-2 items-center">
            <button onClick={openSearchBar} aria-label="Open Search" >
              <img src={assets.search} alt="search" className="w-5 h-5 filter brightness-0 invert" />
            </button>

            {/* Conditionally render login/logout button */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span>{user.username}</span>
                {/* Logout button */}
                <button 
                
                onClick={handleLogout}
                className="text-white hidden md:block">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" >
                
                <img src={assets.l3} alt="login" className="w-6 h-6 hidden md:block filter brightness-0 invert" />
              </Link>
            )}
            
            <button>
              <Link to="/cartpage" >
                {cart.length > 0 && (
                  <span className="absolute top-1 right-12 md:top-1 md:right-4 bg-yellow-500 text-teal-800 text-xs rounded-full px-2 py-1">
                    {cart.length}
                  </span>
                )}
                <img src={assets.c1} alt="cart" className="w-5 h-5 filter brightness-0 invert" />
              </Link>
            </button>

            <button onClick={toggleMenu} aria-label="Toggle Mobile Menu">
              <img src={assets.menu} alt="menu" className="md:hidden w-6 h-6 filter brightness-0 invert" />
            </button>
          </div>
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
