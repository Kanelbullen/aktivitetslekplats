import React from 'react'
import { FaStar,FaRegStar } from "react-icons/fa6";



interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating}) => {
    const renderStar = (index: number) => {
        const isFilled = index < rating;

  return (
    <span
    key={index}
  >
    {isFilled ? <FaStar size={20}/> : <FaRegStar size={20} />}
  </span>
  )
}
return (
    <div className='flex flex-row gap-2'>
        {[...Array(5).keys()].map(renderStar)}
    </div>
)
}

export default StarRating