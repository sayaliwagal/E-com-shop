import { button } from 'motion/react-client'
import React from 'react'

const NextArrow = ({ className, style, onClick}) => {
  return (
    <button
    onClick={onClick}
    className={`${className}  !right-6 !z-20 bg-black/50 hover:bg-black/80 text-white w-18 h-18  rounded-full flex items-center justify-center transition-all`}
    style={{...style}}
    type='button'>
       &gt;
    </button>
  )
}

export default NextArrow
