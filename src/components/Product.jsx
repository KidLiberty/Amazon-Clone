import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

const MAX_RATING = 4
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING * MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div>
      <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <h4>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5' />
          ))}
      </div>

      <p>{description}</p>

      <div></div>
    </div>
  )
}

export default Product
