import React from 'react'

import { Product } from './index.js'

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }, i) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {/* Take full width of column */}
      <img
        className='md:col-span-full'
        src='https://links.papareact.com/dyz'
        alt=''
      />

      {/* Small span 1, after small span 2 */}
      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }, i) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
        .slice(5, 13)
        .map(({ id, title, price, description, category, image }, i) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <div className='md:col-span-2'>
        {products
          .slice(13, 14)
          .map(({ id, title, price, description, category, image }, i) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
        .slice(14, products.length)
        .map(({ id, title, price, description, category, image }, i) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  )
}

export default ProductFeed
