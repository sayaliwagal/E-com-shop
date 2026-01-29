import React from 'react'

const PrevArrow = ({className, style, onClick}) => {
  return (
    <button
         className={`${className} 
        !left-6 !z-20 
        bg-black/50 hover:bg-black/80 
        text-white w-18 h-18 rounded-full 
        flex items-center justify-center
        transition-all`}
      style={{ ...style }}
      onClick={onClick}
      type="button">
           &lt;
        </button>
  )
}

export default PrevArrow
