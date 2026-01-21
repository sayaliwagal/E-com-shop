import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import HeroSlide from './HeroSlide';
import { banners } from '../constant.js';
import useCallApi from '../Utils/useCallApi';


const Hero = () => {
    return (

      <Slider autoplay dots arrows={false}>
        {banners.map((banner) => (
          
          <HeroSlide key={banner.id} {...banner} />
        ))}
      </Slider>

    )

}

export default Hero
