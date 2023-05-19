import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/580x450" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/145x120" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
