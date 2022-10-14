import React from 'react'
import moment from 'moment'
import Currency from 'react-currency-formatter'

const Order = ({ id, amount, amountShipping, images, timestamp, items }) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 text-sm text-gray-600 bg-gray-100'>
        <div>
          <p className='font-bold'>Order Placed:</p>
          <p className='font-bold'>
            {moment.unix(timestamp).format('DD MMM YYYY')}
          </p>
        </div>
        <div>
          <p className='font-bold'>Total:</p>
          <p className='font-bold'>
            <Currency quantity={amount} currency='USD' /> - Next Day Delivery{' '}
            <Currency quantity={amountShipping} currency='USD' />
          </p>
        </div>

        <p className='flex-1 self-end text-right sm:text-xl whitespace-nowrap text-blue-500'>
          {items.length} Items
        </p>

        <p className='absolute top-2 right-2 w-40 lg:w-72 text-xs whitespace-nowrap truncate'>
          Order # {id}
        </p>
      </div>

      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map(image => (
            <img
              src={image}
              className='w-20 sm:h-32 object-contain'
              alt='item_image'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Order
