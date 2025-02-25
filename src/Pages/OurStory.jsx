import React, { useState } from 'react';
import info from '../Assets/info.json';
import { assets } from '../Assets/assets';
const OurStory = () => {
  const [datas] = useState(info);

  return (
    <>
        <div className="mx-auto max-w-4xl p-4 text-center">
         <p className="mt-10 text-lg font-medium  leading-8 text-gray-700">
          The story of Fabus Frames is deeply rooted in personal struggle and a passion for supporting the talented artists of India. It all began when the founder faced a heart-wrenching dilemma that would change his life forever. As his father faced significant health challenges, he made the difficult decision to leave behind a successful career in engineering and take over his family's frame business. Yet, he always wished to make a positive impact in the world.

          <br />
          During this period, a meeting with an artist revealed the struggles and challenges faced by modern artists. As an art enthusiast, the founder was deeply moved by the fact that many talented artists around us were not getting the recognition and opportunities they deserved. This realization sparked a desire to make a difference in the lives of these artists and create a platform where their skills could be showcased to the world.

          <br />
          Thus, Fabus Frames was born - a platform that brings together authentic artists from all over India to create bespoke hand-drawn paintings that cater to the cravings of art lovers worldwide. At Fabus Frames, it is believed that every artist has a story, and the company's mission is to help them tell it through their art.

          <br />
          The team at Fabus Frames is committed to promoting the works of emerging artists and making art more accessible to a wider audience. By celebrating the talent and creativity of India's artists, they are dedicated to supporting and uplifting the art community. This dedication has helped create a more vibrant and dynamic art scene.
         </p>
        </div>

       {/*Coummunity */}
       <div className="container mt-10  mx-auto flex px-10 items-center flex-col md:flex-row ">
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
        <div className='mb-10'>
            <h1 className='text-center font-thin text-4xl'>Meet Our Team</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mx-auto max-w-5xl">
            
            {datas.map((data, id) => (
            <div key={id} className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <img src={data.pic} alt={data.name} className="w-96 h-80 object-cover rounded-md" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
            <h3 className="text-md text-teal-600">{data.role}</h3>
            </div>
            ))}
            </div>
        </div>

                     
    </>
  );
};

export default OurStory;
