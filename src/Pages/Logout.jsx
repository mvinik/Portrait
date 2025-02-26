import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the JWT and user data from localStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate('/login'); // Or redirect to any other page like the homepage
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="bg-red-500 w-full p-2 text-white text-md font-bold rounded hover:bg-red-300 transition duration-300">
        Logout
      </button>
    </div>
  );
};

export default Logout;
