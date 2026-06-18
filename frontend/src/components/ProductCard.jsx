import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col gap-5'>
        <img src={product.image_url} className='transition-opacity duration-300 hover:opacity-0' />
        <img src={product.image_url_hover} className='absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300' />
        <p className='tracking-[2px] text-xl text-main-gray'>{product.name}</p>
        <p className='text-sm'>€{product.description}</p>
        <p className='text-main-gray text-lg'>price</p>
    </div>
  )
}

export default ProductCard
