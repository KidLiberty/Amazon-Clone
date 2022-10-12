import React from 'react'
import Head from 'next/head'

import { Banner, Header, ProductFeed } from '../components'

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />

      {/* Screen max size even on zoom out */}
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export const getServerSideProps = async context => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}

export default Home
