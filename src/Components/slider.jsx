import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { assets } from '../Assets/assets';

const Slider = () => {
  return (
    <div className='my-16'>
      <Swiper
        spaceBetween={20}
        slidesPerView={5} // Default slides per view (Desktop)
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        breakpoints={{
          640: {
            slidesPerView: 1, // Mobile: 1 slide per view
          },
          768: {
            slidesPerView: 3, // Tablets: 2 slides per view
          },
          1024: {
            slidesPerView: 5, // Laptops: 3 slides per view
          },
          1280: {
            slidesPerView: 5, // Desktop: 5 slides per view
          },
        }}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Autoplay]} // Importing Swiper modules
        className='g-4'
      >
        {/* Swiper Slides */}
        <SwiperSlide><img src={assets.pic4} className='h-64 w-full rounded-lg shadow-lg' alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://fastly.picsum.photos/id/415/536/354.jpg?hmac=btwxhNonil-ZGpQuM9f5B62gV3I85HPtR8HEMTtyHDk" alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://fastly.picsum.photos/id/900/536/354.jpg?hmac=aM3xIlI7zRdmtSN1chGKcnWpeVFmLX-cduVI5sYMA7M" alt="img" /></SwiperSlide>
        <SwiperSlide><img src={assets.pic4} className='h-64 w-full rounded-lg shadow-lg' alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://veronicasart.com/wp-content/uploads/2017/10/the-silent-one_9x12_veronica-winters-drawing.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://fastly.picsum.photos/id/1023/536/354.jpg?hmac=q17Uvpe-LDdjeCkEbPPP9qjcYpxVPRpzdTeloXPZaVY" alt="img" /></SwiperSlide>
        <SwiperSlide><img src={assets.pic4} className='h-64 w-full rounded-lg shadow-lg' alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src={assets.pic7} alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://www.giftasketch.com/wp-content/uploads/2020/07/Color-pencil-drawing-of-girl.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src='https://i.etsystatic.com/33571157/r/il/3c1c93/4593940941/il_794xN.4593940941_qesp.jpg' alt="img" /></SwiperSlide>
        <SwiperSlide><img className='h-64 w-full rounded-lg shadow-lg' src="https://fastly.picsum.photos/id/1023/536/354.jpg?hmac=q17Uvpe-LDdjeCkEbPPP9qjcYpxVPRpzdTeloXPZaVY" alt="img" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
