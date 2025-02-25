import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navHome=useNavigate()
  //  const [values,setValues]=useState({
  //   email:'',
  //   password:''
  //  })

   const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    try {
      // Send POST request to Strapi auth/local endpoint
      const response = await axios.post("https://test4-ayw7.onrender.com/api/auth/local", {
        identifier: username,
        password,
      });
  
      // If successful, Strapi will return a token (JWT) in the response
      const { jwt, user } = response.data;
  
      // Store JWT token and user data in localStorage
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));
  
      // Redirect user to the homepage or dashboard
      navHome('/'); // Use navigate to redirect to home page
  
    } catch (error) {
      console.error(error);
      // Handle any login errors here (e.g., show error message)
    }
  };
  return (
    <>

     <div className='w-96 h-96 mx-auto m-20 items-center'>
        <h1 className='text-5xl text-gray-400 text-center font-thin'>Login</h1>
        <p className='p-5 text-center text-lg text-gray-500'>Please enter your email and password.</p>
       <form onSubmit={handleSubmit}>
       <div >
          <input placeholder='UserName'
          // onChange={(e)=>{setValues({...values,email:e.target.value})}}
            type='text'
            name='username'
            className='p-2 text-lg border border-gray-200 shadow rounded w-full m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200' />
          <br />
          <input placeholder='Password'
          // onChange={(e)=>{setValues({...values,password:e.target.value})}}
            type="pass"
            name='password'
            className='p-2 text-lg border border-gray-200 shadow  rounded w-full m-2  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200' />
          <br />
          <button className='bg-teal-500 w-full m-2 p-2 text-white text-md tracking-wider font-bold rounded hover:bg-teal-300 transition duration-300 '>LOGIN</button>

        </div>
       </form>
        <p className='p-5 text-center text-lg  text-gray-500'><span>New Customer?</span><Link path to="/register" className='hover:underline '>Create an account</Link></p>
      </div>
    
     {/* <span>https://test4-ayw7.onrender.com/api/auth/local</span> */}
     {/* <span>{
"identifier":"dfd",
"password":"erererer"
}</span> */}
    </>
  )
}

export default Login