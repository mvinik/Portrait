import { assets } from "./Assets/assets";

import Slider from "./Components/slider";

import React, { useState } from 'react'

import Video from "./Components/Video";
import Trending from "./Components/Trending";

import HowItWorks from "./Components/HowItWorks";

import data from "../src/Assets/product.json"
import ProductList from "./Components/ProductList";






const Home = () => {
const[products]=useState(data)

    return (
        <>
            <div>
                {/* intro slides */}
                <Video />
                
                {/*Hero Section */}
                <section className="bg-white-800 mt-16 leading-10 text-black text-center ">
                    <h1 className="text-4xl font-thin ">Custom Portrait Drawings, Created Just For You</h1>
                    <p className="text-lg mt-4">Turn your favorite memories into beautiful art pieces with our professional artists.</p>
                    <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Order Your Portrait</button>
                </section>
 
                
                
                <div className='mx-auto items-center  md:p-10 mt-16 flex flex-col md:flex-row gap-6'>
                {products.map((product)=>(
                    
                    <ProductList key={product.id} product={product} />
                ))}
                </div>
                
                
                
                
                
                {/* Trending Reels*/}
                <Trending />


                {/*For any occasion*/}

                <section className="px-4 bg-gray-100 text-center py-10">
    <h2 className="text-3xl font-thin mb-10">Perfect for Any Occasion</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <video
                className="w-full h-56 object-cover rounded-lg"
                autoPlay
                loop
                muted
            >
                <source src={assets.kayal} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mb-4">Weddings</h3>
            <p>Commemorate your special day with a custom portrait.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <video
                className="w-full h-56 object-cover rounded-lg"
                autoPlay
                loop
                muted
            >
                <source src={assets.kayal} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mb-4">Birthdays</h3>
            <p>Give a thoughtful and unique gift with a custom portrait.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <video
                className="w-full h-56 object-cover rounded-lg"
                autoPlay
                loop
                muted
            >
                <source src={assets.kayal} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3 className="text-xl font-semibold mb-4">Anniversaries</h3>
            <p>Celebrate love with a timeless portrait of you and your partner.</p>
        </div>
    </div>
</section>
               {/* How it work*/}
                <HowItWorks />

                {/*Coummunity */}
                <div className="container mt-12 mx-auto flex px-10 items-center flex-col md:flex-row ">
                    <section className="md:w-1/2 mb-12 mt-12 ">
                        <img className="h-100 w-100 mx-auto " src={assets.team} alt='img' />
                    </section>
                    <section className="md:w-1/2 text-center items-center mb-12 mt-12 leading-8">
                        <h1 className="text-4xl font-thin mb-5 ">Community of artists</h1>
                        <p className="text-lg p-3 leading-8">
                            Our passion lies in supporting and promoting the incredible talent within the artistic community. Our vision is to build a strong network of exceptional artists..
                        </p>
                        <button className="mt-6 px-5 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition" >KNOW MORE</button>
                    </section>
                </div>
            {/* <CardSlider/> */}
                <Slider />

            </div>

        </>
    )
}
export default Home;