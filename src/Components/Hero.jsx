import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import HeroSlide from './HeroSlide';
import { banners } from '../constant.js';
import useCallApi from '../Utils/useCallApi';
import { useNavigate } from 'react-router';


const Hero = () => {
  const navigate = useNavigate()
    return (

      <Slider autoplay dots arrows={false}>
        {banners.map((banner) => (
          
          <HeroSlide key={banner.id} {...banner} onCtaClick={() =>{ navigate("/products")}} />
        ))}
      </Slider>

    )

}

export default Hero
