// ✅ ProductZoomImage.jsx
import React, { useRef, useState } from "react";

const ProductZoomImage = ({ src, alt, setZoomVisible }) => {
  const [backgroundPos, setBackgroundPos] = useState("center");
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

  return (
    <div
      ref={imgRef}
      className="relative w-[400px] h-[400px] border rounded-md overflow-hidden cursor-crosshair"
      onMouseEnter={() => setZoomVisible(true)}
      onMouseLeave={() => setZoomVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
};

export default ProductZoomImage;
