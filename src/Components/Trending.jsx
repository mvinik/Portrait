import React from 'react';
import { assets } from '../Assets/assets';

const Trending = () => {
    return (
        <>
            {/* Flexbox container to center everything */}
            <div className='flex flex-col justify-center mt-5 items-center min-h-screen bg-gray-100'>
                {/* Header */}
                <h1 className='font-thin text-center mb-5 text-4xl'>Trending On Reels</h1>

                {/* Grid for video items, centered and responsive */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
                    {/* Item 1 */}
                    <div className='p-4 rounded-lg shadow-md flex flex-col items-center hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300'>
                        <video className='h-96 w-full object-cover rounded-lg' autoPlay muted loop>
                            <source src={assets.kayal} type='video/mp4' />
                            Your browser does not support this video
                        </video>
                        <h1 className='flex items-center mt-4'>
                            <img src={assets.pic2} alt='pic' className='rounded-full w-8 h-8 mr-2' />
                            Graphite Art
                        </h1>
                        <p className='text-center mt-2'>1200</p>
                        <button className='bg-teal-400 rounded p-2 w-32 text-white mt-3'>
                            Buy Now
                        </button>
                    </div>

                    {/* Item 2 */}
                    <div className='p-4 rounded-lg shadow-md flex flex-col items-center hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300'>
                        <video className='h-96 w-full object-cover rounded-lg' autoPlay muted loop>
                            <source src={assets.kayal} type='video/mp4' />
                            Your browser does not support this video
                        </video>
                        <h1 className='flex items-center mt-4'>
                            <img src={assets.pic2} alt='pic' className='rounded-full w-8 h-8 mr-2' />
                            Graphite Art
                        </h1>
                        <p className='text-center mt-2'>1200</p>
                        <button className='bg-teal-400 rounded p-2 w-32 text-white mt-3'>
                            Buy Now
                        </button>
                    </div>

                    {/* Item 3 */}
                    <div className='p-4 rounded-lg shadow-md flex flex-col items-center hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300'>
                        <video className='h-96 w-full object-cover rounded-lg' autoPlay muted loop>
                            <source src={assets.kayal} type='video/mp4' />
                            Your browser does not support this video
                        </video>
                        <h1 className='flex items-center mt-4'>
                            <img src={assets.pic2} alt='pic' className='rounded-full w-8 h-8 mr-2' />
                            Graphite Art
                        </h1>
                        <p className='text-center mt-2'>1200</p>
                        <button className='bg-teal-400 rounded p-2 w-32 text-white mt-3'>
                            Buy Now
                        </button>
                    </div>

                    {/* Item 4 */}
                    <div className='p-4 rounded-lg shadow-md flex flex-col items-center hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300'>
                        <video className='h-96 w-full object-cover rounded-lg' autoPlay muted loop>
                            <source src={"https://video.gumlet.io/64661d8e673536e1fe9044e2/67a97fdae5458a0349339b9c/main.mp4"} type='video/mp4' />
                            Your browser does not support this video
                        </video>
                        <h1 className='flex items-center mt-4'>
                            <img src={assets.pic2} alt='pic' className='rounded-full w-8 h-8 mr-2' />
                            Graphite Art
                        </h1>
                        <p className='text-center mt-2'>1200</p>
                        <button className='bg-teal-400 rounded p-2 w-32 text-white mt-3'>
                            Buy Now
                        </button>
                        {/* <select
                    name="faces"
                    value={formData.faces}
                    onChange={handleChange}
                    className="w-full md:w-64 p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
                  >
                    <option value="">Select Faces</option>
                    <option value='1'>1 Face</option>
                    <option value='2'>2 Faces</option>
                    <option value='3'>3 Faces</option>
                    <option value='4'>4 Faces</option>
                    <option value='5'>5 Faces</option>
                    <option value='6'>6 Faces</option>
                    <option value='7'>7 Faces</option>
                    <option value='8'>8 Faces</option>
                    <option value='9'>9 Faces</option>
                    <option value='10'>10 Faces</option>
                  </select> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trending;
