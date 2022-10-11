import React from 'react'

import { Product } from './index.js'

const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }, i) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )
      })}
    </div>
  )
}

export default ProductFeed
