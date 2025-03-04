import axios from 'axios'
import React, { useState, useRef } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Toast from '../Components/Toast' // Import the Toast component
import { useFeedback } from "../FeedbackContext";
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Login = () => {


  const { showFeedback ,feedback} = useFeedback();

  const navHome = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()

  // Toast state
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('') // 'success' or 'error'
  const [showToast, setShowToast] = useState(false) // Control the visibility of the toast

  const handleKeyPress = (e, nextRef) => {
    if (e.key === 'Enter') {
      nextRef.current.focus()
    }
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    try {
      // Send POST request to Strapi auth/local endpoint
      const response = await axios.post("https://test4-ayw7.onrender.com/api/auth/local", {
        identifier: username,
        password,
      })

      // If successful, Strapi will return a token (JWT) in the response
      const { jwt, user } = response.data

      // Store JWT token and user data in localStorage
      localStorage.setItem("jwt", jwt)
      localStorage.setItem("user", JSON.stringify(user))

      showFeedback('login sucessfully')
      // Redirect user to the homepage or dashboard
      navHome('/') // Use navigate to redirect to home page

    } catch (error) {
      console.error(error)

      // Set error message and show the toast
      showFeedback(error.message)
    }
  }

  const handleCloseToast = () => {
    setShowToast(false)
  }

  return (
    <div className="w-96 h-96 mx-auto m-20 items-center">
      <h1 className="text-5xl text-gray-400 text-center font-thin">Login</h1>
      <p className="p-5 text-center text-lg text-gray-500">Please enter your email and password.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="UserName"
            type="text"
            name="username"
            ref={usernameRef}
            onKeyDown={(e) => handleKeyPress(e, passwordRef)}
            className="p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            ref={passwordRef}
            className="p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          />
          <br />
          <button className="bg-teal-500 w-full m-2 p-2 text-white text-md tracking-wider font-bold rounded hover:bg-teal-300 transition duration-300">LOGIN</button>
        </div>
      </form>
      <p className="p-5 text-center text-lg text-gray-500">
        <span>New Customer? </span>
        <Link to="/register" className="hover:underline">Create an account</Link>
      </p>

      {/* Conditionally render the Toast if showToast is true */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={handleCloseToast}
        />
      )}
                      <Snackbar open={!!feedback} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                          <div style={{}}>
                              <Alert  severity="success" sx={{ backgroundColor: 'green', color: 'white' }}>{feedback}</Alert>
                          </div>
                      </Snackbar>
    </div>
  )
}

export default Login
