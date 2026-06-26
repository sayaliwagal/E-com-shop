import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from "./HeroSlide";
import { banners } from "../constant.js";
import useCallApi from "../Utils/useCallApi";
import { useNavigate } from "react-router";
import NextArrow from "./NextArrow.jsx";
import PrevArrow from "./PrevArrow.jsx";

const Hero = () => {
  const navigate = useNavigate();
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-9 w-full">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
  };
  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
      <div className="overflow-hidden">
        <Slider {...setting}>
          {banners.map((banner) => (
            <HeroSlide
              key={banner.id}
              {...banner}
              onCtaClick={() => {
                navigate(`/products/${encodeURIComponent(banner.category)}`);
              }}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
