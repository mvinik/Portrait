import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validate from '../Components/Validate';
import { useFeedback } from '../FeedbackContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert'
const Register = () => {
  const { showFeedback ,feedback} = useFeedback
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const navLogin = useNavigate();
  const [regData, setRegData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});


  // useref for the input fields
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleKeyPress = (e, nextRef) => {
    if (e.key === 'Enter') {
      nextRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(regData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length > 0) return; // Prevent submission if there are errors

    try {
      const response = await fetch('https://test4-ayw7.onrender.com/api/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: regData.username,
          email: regData.email,
          password: regData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message); // If error occurs, throw it
      }

      // Store JWT token and user data in localStorage
      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Set success message and show the toast
      showFeedback('Registration Successful! Please log in.');

      // Redirect to login page after successful registration
      navLogin('/login');
    } catch (err) {
      showFeedback(`Error: ${err.message}`);

    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="w-96 h-96 mx-auto mx-20 mt-20 mb-35 items-center">
      <h1 className="text-center text-gray-400 text-5xl font-thin">Register</h1>
      <p className="p-5 text-center text-lg text-gray-500">Please fill in the fields below.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="User Name"
            type="text"
            name="username"
            ref={usernameRef}
            onKeyDown={(e) => handleKeyPress(e, emailRef)}
            value={regData.username}
            onChange={handleChange}
            className="p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          />
          {error.username && <p className='text-red-500'>{error.username}</p>}
          <br />

          <input
            placeholder="Email"
            type="email"
            name="email"
            ref={emailRef}
            onKeyDown={(e) => handleKeyPress(e, passwordRef)}
            value={regData.email}
            onChange={handleChange}
            className="p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          />
          {error.email && <p className='text-red-500'>{error.email}</p>}
          <br />

          <input
            placeholder="Password"
            type="password"
            name="password"
            ref={passwordRef}
            value={regData.password}
            onChange={handleChange}
            className="p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          />
          {error.password && <p className='text-red-500'>{error.password}</p>}
          <br />
          <button className="bg-teal-500 w-full m-2 p-2 text-white text-md tracking-wider font-bold rounded hover:bg-teal-300 transition duration-300">
            CREATE ACCOUNT
          </button>
          <br />
        </div>
      </form>

      <p className="text-lg p-5 text-gray-500 text-center">
        Already have an account? <Link className="hover:underline" to="/login">Login</Link>
      </p>


      <Snackbar open={!!feedback} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <div style={{}}>
          <Alert severity="success" sx={{ backgroundColor: 'green', color: 'white' }}>{feedback}</Alert>
        </div>
      </Snackbar>
    </div>
  );
};

export default Register;
