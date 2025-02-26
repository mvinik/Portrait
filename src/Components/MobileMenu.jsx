// MobileMenu.js
import React from 'react';
import { Link } from 'react-router-dom';


function MobileMenu({ isMenuOpen, toggleMenu }) {

  
  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 z-20 ${isMenuOpen ? 'block' : 'hidden'}`}
      onClick={toggleMenu}
    >
      <aside
        className={`fixed left-0 top-0 w-64 h-full bg-white text-gray-800 shadow-lg transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-semibold">
            <a href="/">
              <span className="text-yellow-300">My</span>Portraits
            </a>
          </div>
          <button onClick={toggleMenu} className="text-gray-900 text-2xl">
            &times;
          </button>

         
        </div>
        <div  className="flex justify-between items-center p-4">
        {
          user?
          ( <span>Hello {user.username}!</span>):(<span></span>)
         }
        </div>
        <nav>
          <ul className="flex flex-col space-y-6 p-4">
            <li>
              <a href="/handmade" className="hover:text-teal-800 transition duration-300">
                Handmade Portraits
              </a>
            </li>
            <li>
              <a href="/digital" className="hover:text-teal-800 transition duration-300">
                Digital Portraits
              </a>
            </li>
            <li>
              <a href="/ourstory" className="hover:text-teal-800 transition duration-300">
               Our Story
              </a>
            </li>
           
            <li>
              <Link to="/contact" className="hover:text-teal-800 transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-teal-800 transition duration-300">
                Products
              </Link>
            </li> 
            {
              user?(<li>
                <Link to="/login" className="hover:text-teal-800 transition duration-300">
                 logout
                </Link>
              </li>):
              (<li>
                <Link to="/login" className="hover:text-teal-800 transition duration-300">
                 Login
                </Link>
              </li>)
            }
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default MobileMenu;
