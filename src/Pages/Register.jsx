import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
const navLogin=useNavigate()
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [error,setError]=useState({});
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try {
      // Send POST request to Strapi auth/local/register endpoint
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
   
      // Store JWT token and user data in sessionStorage
       localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
  

      // Redirect to home page (or any page you want) after successful registration
      navLogin('/login'); // Redirect to the home page or other route
    } catch (err) {
      setError(err.message); // Handle the error
    }
   }
        
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((pre) => ({
      ...pre, [name]: value
    }))
    console.log("Data from Register:", regData)
  }
  return (
    <>
      <div className='w-96 h-96 mx-auto mx-20 mt-15 mb-35 items-center'>
        <h1 className='text-center text-gray-400 text-5xl font-thin'>Register</h1>
        <p className='p-5 text-center text-lg text-gray-500'>Please fill in the fields below.</p>

       <form onSubmit={handleSubmit}>
       <div>
          <input
            placeholder='User Name'
            type='text'
            name='username'
            value={regData.username}
            onChange={handleChange}
            className='p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200'
          />
          <br />

          
          <input
            placeholder='Email'
            type='email'
            name='email'
            value={regData.email}
            onChange={handleChange}
            className='p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200'
          />
          <br />

          <input
            placeholder='Password'
            type='password'
            name='password'
            value={regData.pass}
            onChange={handleChange}
            className='p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200'
          />
          <br />
          <button
           
           className='bg-teal-500 w-full m-2 p-2 text-white text-md tracking-wider font-bold rounded hover:bg-teal-300 transition duration-300'
          
          >CREATE ACCOUNT</button>
          <br />
        </div>

       </form>
        <p className='text-lg p-5 text-gray-500 text-center'>Already have an account?<Link className='hover:underline' to='/login'>Login</Link></p>
      </div>
      {/* <span>https://test4-ayw7.onrender.com/api/auth/local/register</span> */}
    </>
  )
}

export default Register