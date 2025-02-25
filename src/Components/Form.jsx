
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../Slices/usersSlice'

const Form = () => {
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currentInput) => {
      return {
        ...currentInput, 
        [name]: value,
      }
    })
   
  }

  const addUser = (event) => {
    event.preventDefault()
    dispatch(setUsers(formInput) );
  }
  return (<>
    <div className='w-80 h-80 border mx-auto m-6 border-gray-600 flex items-center justify-center rounded '>
      <form>
        <label className='p-1'>Name</label>
        <br />
        <input className='border border-gray-300 h-7 w-50 my-1 rounded ' onChange={handleChange} name="name" type='text' value={formInput.name}></input>
        <br />
        <label>Age</label>
        <br />
        <input className='border border-gray-300  h-7 w-50 my-1 rounded' onChange={handleChange} name="age" type='number' value={formInput.age}></input>
        <br />
        <label>Email</label>
        <br />
        <input className='border border-gray-300  h-7 w-50 my-1 rounded' onChange={handleChange} name="email" type='email' value={formInput.email}></input>
        <br />
        <label>Contact</label>
        <br />
        <input className='border border-gray-300 h-7 w-50 my-1 rounded' onChange={handleChange} name="contact" type='number' value={formInput.contact}></input>
        <br />
        <button onClick={addUser} className=' bg-teal-800 hover:bg-teal-700 transition duration-300 p-1 m-1 rounded'>Add</button>
      </form>
    </div>
  </>
  )
}

export default Form;