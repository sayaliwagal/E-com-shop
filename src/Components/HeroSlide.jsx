import React from "react";
import { useSpring, animated } from "@react-spring/web";

import { scale, transform } from "motion";

const HeroSlide = ({ title, tag, image, subtitle,cta, onCtaClick }) => {

    const textAnimation= useSpring({
      from: { opacity: 0, transform: "translateY(40px)"},
      to: { opacity: 1, transform: "translateY(0px)"},
      delay: 200,

    });
    
     const buttonAnimation = useSpring({
      from: { opacity: 0, transform: "scale(0.8)"},
      to: { opacity: 1, transform: "scale(1)"},
      delay: 500,
     });

  return (
     <section className="w-full h-[450px] md:h-[600px]">
        <div className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage:`url(${image})`}}>
          {/* overlay */}
          <div className="h-full w-full bg-black/50 flex items-center">
          <div className="px-6 md:px-20 text-white max-w-xl space-y-4">
            {tag && (
              <animated.span
               style={textAnimation}
              className="border border-white px-4 py-1 inline-block text-sm">
              {tag}
            </animated.span>
            )}
            <animated.h1 
            style={textAnimation}
            className="text-4xl md:text-6xl font-bold leading-tight">
              {title}
            </animated.h1>
            {subtitle &&(

              <animated.p
              style={textAnimation}
              className="text-lg opacity-90">
              {subtitle}
            </animated.p>
            )}
            {cta && (

              <animated.button 
              style={buttonAnimation}
              className="bg-yellow-600 text-black px-6 py-3 rounded font-semibold"
                       onClick={onCtaClick}
              >
              {cta}
            </animated.button>
            )}
          </div>
          </div>


        </div>
      </section>
    
  );
};

export default HeroSlide;
