import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

const HeroSlide = ({ title, image, subtitle,cta }) => {
  return (
     <section className="w-full h-[450px] md:h-[600px]">
        <div className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:`url(${image})`
        }}
        >
          <div className="h-full w-full bg-black/50 flex items-center">
          <div className="px-6 md:px-20 text-white max-w-xl space-y-4">
            <span className="border border-white px-4 py-1 inline-block text-sm">
              Trending Now
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">
              {title}
            </h1>
            <p className="text-lg opacity-90">
              {subtitle}
            </p>
            <button className="bg-yellow-600 text-black px-6 py-3 rounded font-semibold">
              {cta}
            </button>
          </div>
          </div>


        </div>
      </section>
    
  );
};

export default HeroSlide;
