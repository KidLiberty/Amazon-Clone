import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 4
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING * MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='relative flex flex-col bg-white m-5 p-10 z-30'>
      <p className='absolute top-2 right-2 italic text-gray-400 my-3'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <h4>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price} currency='USD' />
      </div>

      {hasPrime && (
        <div className='items-center space-x-2 -mt-5'>
          <img
            className='w-12'
            src='https://links.papareact.com/fdw'
            alt='prime_logo'
          />
          <p className='text-xs text-gray-500 pb-2'>FREE Next-Day Delivery</p>
        </div>
      )}

      <button className='button mt-auto'>Add to Basket</button>
    </div>
  )
}

export default Product
