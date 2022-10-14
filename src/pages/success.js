import React from 'react'
import { useRouter } from 'next/router'
import { CheckCircleIcon } from '@heroicons/react/solid'

import { Header } from '../components'

const Success = () => {
  const router = useRouter()

  return (
    <div className='h-screen bg-gray-100 '>
      <Header />

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white mt-10'>
          <div className='flex justify-center items-center space-x-2 mb-5'>
            <CheckCircleIcon className='text-green-500 h-12' />
            <h1 className='text-3xl'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us, we will send a confirmation once
            your item has shipped. If you would like to check the status of your
            orders, please press the link below.
          </p>
          <button
            className='button mt-8'
            onClick={() => {
              router.push('/orders')
            }}
          >
            Go to My Orders
          </button>
        </div>
      </main>
    </div>
  )
}

export default Success
