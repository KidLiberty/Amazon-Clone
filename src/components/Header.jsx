import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      <div className='flex flex-grow items-center bg-amazon_blue p-1 py-2'>
        <div className='flex flex-grow sm:flex-grow-0 items-center mt-2'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        <div className='hidden h-10 sm:flex flex-grow items-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-md'>
          <input
            className='h-full w-6 flex-grow flex-shrink p-2 px-4 rounded-l-md focus:outline-none'
            type='text'
            placeholder='Search...'
          />
          <SearchIcon className='h-12 p-4' />
        </div>

        <div className='flex items-center text-white text-xs space-x-6 mx-6'>
          <div className='link'>
            <p>Hello, Brandon Stone!</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 text-black text-center bg-yellow-400 font-bold rounded-full'>
              4
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden lg:inline-flex link'>Electronics</p>
        <p className='hidden lg:inline-flex link'>Food & Grocery</p>
        <p className='hidden lg:inline-flex link'>Prime</p>
        <p className='hidden lg:inline-flex link'>Buy Again</p>
        <p className='hidden lg:inline-flex link'>Shopper Toolkit</p>
        <p className='hidden lg:inline-flex link'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
