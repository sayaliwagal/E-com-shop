import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StarRating = ({rating}) => {
    const totalStars = 5;
  return (
    <div className="flex text-yellow-400">
        {[...Array(totalStars)].map((_, i) =>{
            const starValue = i + 1;
            if(rating >= starValue){
                return <FaStar key={i} />
            }else if(rating >= starValue - 0.5){
                return <FaStarHalfAlt key={i} />
            }else{
                return <FaRegStar key={i} />
            }
        })}
      
    </div>
  );
}

export default StarRating
