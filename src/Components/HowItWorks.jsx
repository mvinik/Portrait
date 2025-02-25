import React from 'react'
import { assets } from '../Assets/assets'

const HowItWorks = () => {
  return (
   <>
   <div className='justify-center mt-10 items-center flex flex-col'>
   <h1 className='font-thin text-4xl my-5 p-10'>How It Works?</h1>
   <div className='flex flex-col md:flex-row gap-6'>
    <section className='w-60 h-50 bg-white-300 items-center border border-gray-200 rounded p-2'>
        <img className='w-20 h-20 mb-4 mx-auto' alt='upload' src={assets.upload}/>
        <h4 className='text-teal-800 font-bold'>Upload Photo & Order</h4>
        <p className='text-sm'>Select portrait type,number of characters and size.upload photo & place the order.</p>
    </section>
    <section>

    </section>
    <section className='w-60 h-50 bg-white-300 items-center border border-gray-200 rounded p-2'>
        <img className='w-16 h-16 my-4 mx-auto' alt='upload' src={assets.paint}/>
        <h4 className='text-teal-800 font-bold'>Painting Starts</h4>
        <p className='text-sm'>Our skilled artists will initiate their work with the selected medium.</p>
    </section>
    <section>

    </section>
    <section className='w-60 h-50 bg-white-300 items-center border border-gray-200 rounded p-2'>
        <img className='w-15 h-15 my-4 mx-auto' alt='upload' src={assets.find}/>
        <h4 className='text-teal-800 font-bold'>Preview your portrait</h4>
        <p className='text-sm'>Our artists will share a preview of your portrait for feedback.</p>
    </section>
    <section>

    </section>
    <section className='w-60 h-50 bg-white-300 items-center border border-gray-200 rounded p-2'>
        <img className='w-17 h-17 my-4 mx-auto' alt='upload' src={assets.shipping}/>
        <h4 className='text-teal-800 font-bold'>Framed & Delivered</h4>
        <p className='text-sm'>Our artists will share a preview of your portrait for feedback.</p>
    </section>
   
   </div>
   <div>
    <section></section>
   </div>

    </div>
    </>
  )
}

export default HowItWorks