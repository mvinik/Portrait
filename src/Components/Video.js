import React from "react"
import { assets } from "../Assets/assets"
const Video = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center space-x-4 items-center mx-10 mt-16">


        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold hover:text-black-900 transition duration-300">
            Happiness Revealed</h2>
        </div>

        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold">Customers Smile</h2>
        </div>

        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold">Home Decor</h2>
        </div>

        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold">Magic of Art</h2>
        </div>

        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold">Behind the Scenes</h2>
        </div>

        <div className="items-center p-1 m-6">

          <video
            className="rounded-full w-35 h-35 p-2 object-cover border-4 border-gray-500 animate-zoom"
            autoPlay
            loop
            muted
          >
            <source src={assets.kayal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="text-center p-1 text-gray-500 font-bold">Love for Family</h2>
        </div>



      </div>
    </>
  )
}

export default Video