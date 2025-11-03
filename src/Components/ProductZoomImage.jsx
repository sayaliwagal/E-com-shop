import { transform } from 'motion';
import React, { useState } from 'react'

const ProductZoomImage = ({ src, alt}) => {
  const [ isZoomed, setIsZoomed ] = useState(false);
  const [ backgroundPosition, setBackgroundPosition ] = useState("center");
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition({ transformOrigin: `${x}%${y}%`});
  };

  return (
    <div 
    className="relative w-[500px] h-[500px] overflow-hidden border rounded-xl shadow-md"
    onMouseEnter={() => setIsZoomed(true)}
    onMouseLeave={() => setIsZoomed(false)}
    onMouseMove={handleMouseMove}
    >
        <img 
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-transform duration-300
            ${isZoomed? "scale-125" : "scale-100"
            }`}
      />
    </div>
  );
}

export default ProductZoomImage
