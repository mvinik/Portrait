import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const fruits=useSelector((state)=>(state.fruitsInfo.fruits))
    console.log(fruits)
  return (
    <>
    <div>Contact</div>
    <div>
      {
        fruits.map((fruit,index)=>(
          <div hey={index}>
            <h1>{fruit.index}</h1>
          </div>
        ))
      }
    </div></>
  )
}

export default Contact;