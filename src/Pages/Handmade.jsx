import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import HMProducts from '../Components/HMProducts';

const Handmade = () => {
  const [products, setProducts] = useState([]); // Initialize products state
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://test4-ayw7.onrender.com/api/paints?populate=image')
      .then(response => {
        setProducts(response.data.data); // Set products data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError(err.message); // Set error message if request fails
        setLoading(false); // Set loading to false if error occurs
      });
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(products)

  return (
    <>
      <h6 className='text-sm p-5 ml-5'>
        <Link className='text-gray-400 hover:text-black' to='/'>Home</Link>
        <span className='text-gray-400'> / </span> Buy Handmade Portraits Sketch
      </h6>
      <div className='flex justify-center items-center flex-col'>
        <div className='mx-auto text-center'>
          <h1 className='font-thin m-12 text-5xl'>Buy Handmade Portraits Sketch</h1>

          <div className='flex flex-wrap justify-center gap-6 mt-8'>
            <section className='flex flex-col items-center'>
              <img
                className='w-32 h-32 rounded-full hover:translate-y-[-10px] duration-300'
                src='https://fabusframes.com/cdn/shop/t/38/assets/Handmade%20Portraits.png?v=49225267350704488681737184417'
                alt='Handmade Portraits'
              />
              <h4 className='text-sm mt-3'>Handmade Portraits</h4>
            </section>

            <section className='flex flex-col items-center'>
              <img
                className='w-32 h-32 rounded-full hover:translate-y-[-10px] duration-300'
                src='https://fabusframes.com/cdn/shop/t/38/assets/Digital%20Portraits.png?v=20135880381151974141737184417'
                alt='Digital Portraits'
              />
              <h4 className='text-sm mt-3'>Digital Portraits</h4>
            </section>

            <section className='flex flex-col items-center'>
              <img
                className='w-32 h-32 rounded-full hover:translate-y-[-10px] duration-300'
                src='https://fabusframes.com/cdn/shop/t/38/assets/Pet%20Portraits.png?v=168623689127024168061737184417'
                alt='Pet Portraits'
              />
              <h4 className='text-sm mt-3'>Pet Portraits</h4>
            </section>

            <section className='flex flex-col items-center'>
              <img
                className='w-32 h-32 rounded-full hover:translate-y-[-10px] duration-300'
                src='https://fabusframes.com/cdn/shop/t/38/assets/Indian%20Traditional%20Art.png?v=66108258406866748701737184417'
                alt='Indian Traditional Art'
              />
              <h4 className='text-sm mt-3'>Indian Traditional Art</h4>
            </section>

            <section className='flex flex-col items-center'>
              <img
                className='w-32 h-32 rounded-full hover:translate-y-[-10px] duration-300'
                src='https://fabusframes.com/cdn/shop/t/38/assets/Corporate%20Gifting.png?v=681742551300159231737184417'
                alt='Corporate Gifting'
              />
              <h4 className='text-sm mt-3'>Corporate Gifting</h4>
            </section>
          </div>

          {/* Products */}
          <div className='grid md:grid-cols-2 m-10 gap-5'>
            {products.map((product) => (
              <HMProducts key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Handmade;
