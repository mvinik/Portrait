import React from 'react'
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../Assets/assets';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Occasions = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation

             
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
              
              <SwiperSlide>
                <video
                       className="w-70 h-50 object-cover"
                       autoPlay
                       loop
                       muted
                     >
                       <source src={assets.kayal} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
               </SwiperSlide>
               <SwiperSlide><video
                       className="w-70 h-50 object-cover"
                       autoPlay
                       loop
                       muted
                     >
                       <source src={assets.kayal} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
               </SwiperSlide>
               <SwiperSlide><video
                       className="w-70 h-50 object-cover "
                       autoPlay
                       loop
                       muted
                     >
                       <source src={assets.kayal} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
               </SwiperSlide>
               <SwiperSlide><video
                       className="w-70 h-50 object-cover"
                       autoPlay
                       loop
                       muted
                     >
                       <source src={assets.kayal} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
               </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Occasions;

