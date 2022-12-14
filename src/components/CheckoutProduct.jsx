import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime
}) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    }
    dispatch(addToBasket(product))
  }
  const removeItemFromBasket = () => {
    // Remove item from redux
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5'>
      {/* grid assumes this will take up the first column */}
      <Image
        src={image}
        width={200}
        height={200}
        alt='product_image'
        objectFit='contain'
      />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='USD' />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <Image
              src='https://links.papareact.com/fdw'
              width={50}
              height={50}
              loading='lazy'
              alt='prime_logo'
            />
            <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
          </div>
        )}
      </div>
      {/* Push from top/bottom/x etc. great overall styling here for button */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button mt-auto' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button m-auto' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
