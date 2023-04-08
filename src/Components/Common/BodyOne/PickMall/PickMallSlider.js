import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './PickMallStyle.css'

import MallSliderOne from '../../../../Asset/BodyOne/MallSlider/Mall-Slider-One.jpg'
import MallSliderTwo from '../../../../Asset/BodyOne/MallSlider/Mall-slider-two.jpg'
const PickMallSlider = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={MallSliderOne} alt="" /></SwiperSlide>
        <SwiperSlide><img src={MallSliderTwo} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default PickMallSlider;