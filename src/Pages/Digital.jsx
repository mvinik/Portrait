
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Digital = () => {
    const fetchData=()=>{
        fetch("public/Asset/Digital.json")
        .then(
            (res)=>res.json()
            
        )

    }

    const {isLoading,data,error } =useQuery({queryKey:['data'],queryFn:fetchData})
    
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error Occurred:{error.message}</p>
    }
    console.log("data is:",data)


    return (
        <>
            <h6 className='text-sm p-5 ml-5'>
                <Link className='text-gray-400 hover:text-black' to='/'>Home</Link>
                <span className='text-gray-400'> / </span> Digital Portraits

            </h6>
            
            <div className='flex justify-center items-center flex-col'>

                <div className='mx-auto text-center'>
                    <h1 className='font-thin m-12 text-5xl'>Digital Portraits</h1>

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

                    {/*Products */}
                    <div className='grid md:grid-cols-2 m-10 gap-5'>
                        <div className='bg-teal-600 p-5 rounded'>
                            <div className='relative'>
                                <img className='  w-full rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/digitalmerge_4.jpg?v=1734945149&width=400' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/digitalmerge_1.jpg?v=1734945149&width=900' URL
                                    alt='Hover Image'
                                />
                            </div>
                            <p className='text-lg text-white'>Family Portrait from Multiple Photos- Digital Merge Portrait

                            </p>
                            <p className='text-lg text-white font-bold'>₹ 1,700.00 INR - ₹ 13,499.00 INR</p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>
                       
                       
                        {/* <div className='bg-teal-600 p-5 rounded'>
                            <div className='relative'>
                                <img className='  w-full rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/photo_to_art_4.jpg?v=1738064740&width=900' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/photo_to_art_1_486df265-6b5f-4af3-afa6-675ba169f8fa.jpg?v=1738059073&width=900'  
                                    alt='Hover Image'
                                />
                            </div>        <p className='text-lg text-white'>Digital Photo to art
                            </p>
                            <p className='text-lg text-white font-bold'>                        ₹ 499.00 INR - ₹ 5,799.00 INR
                            </p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>
                        <div className='bg-teal-600 p-5 rounded'>
                            <div className='relative'>
                                <img className='  w-full rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/caricature_3.jpg?v=1734946277&width=900' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/caricature_4.jpg?v=1734946277&width=900'  
                                    alt='Hover Image'
                                />
                            </div>      <p className='text-lg text-white'>Family Portrait from Multiple Photos- Simple Merge Portrait

                            </p>
                            <p className='text-lg text-white font-bold'>₹ 1,300.00 INR - ₹ 6,899.00 INR</p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>

                        <div className='bg-teal-600 p-5 rounded'>
                            <div className='relative'>
                                <img className='  w-full rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/scrible_2.jpg?v=1734946072&width=900' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/scrible_1.jpg?v=1734946072&width=900'  
                                    alt='Hover Image'
                                />
                            </div>      <p className='text-lg text-white'>Digital Scribble Portrait

                            </p>
                            <p className='text-lg text-white font-bold'>₹ 799.00 INR - ₹ 9,999.00 INR</p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>
                        <div className='bg-teal-600 p-5 rounded'>
                            <div className='relative'>
                                <img className='  w-full rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/simple_merge_4.jpg?v=1734945813&width=900' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/simple_merge_1.jpg?v=1734945813&width=900'  // Replace with your second image URL
                                    alt='Hover Image'
                                />
                            </div>    <p className='text-lg text-white'>Digital Caricature Portrait</p>

                            <p className='text-lg text-white font-bold'>₹ 1,299.00 INR - ₹ 7,449.00 INR
                            </p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>
                        <div className='bg-teal-600 p-5 rounded'>

                            <div className='relative'>
                                <img className='  rounded  transition duration-300 ease-in-out '
                                    src='https://fabusframes.com/cdn/shop/files/oil_painting_3.jpg?v=1734946858&width=900' alt='img' />
                                <img
                                    className='absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'
                                    src='https://fabusframes.com/cdn/shop/files/oil_painting_1.jpg?v=1734946858&width=900'  
                                    alt='Hover Image'
                                />
                            </div>      <p className='text-lg text-white'>Digital Oil Painting Pet Portrait

                            </p>
                            <p className='text-lg text-white font-bold'>₹ 499.00 INR - ₹ 5,799.00 INR</p>
                            <button className='bg-white text-teal-600 rounded w-full h-8 text-sm font-bold'>ORDER NOW</button>
                        </div>
 */}

                    </div>

                </div>
            </div>
        </>

    )
}

export default Digital