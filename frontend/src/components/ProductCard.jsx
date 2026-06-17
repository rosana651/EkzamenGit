import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
        <img src={product.image_url} alt={product.name} />
        <p>{product.name}</p>
    </div>
  )
}

export default ProductCard
