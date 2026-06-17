import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {

  const [seaProducts, setSeaProducts] = useState([])
  const [landProducts, setLandProducts] = useState([])
  const [giftsAndOthersProducts, setGiftsAndOthersProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost/api/products')
      .then(res => res.json())
      .then(data => {
        const sea = data.filter(p => p.category === 'sea')
        const land = data.filter(p => p.category === 'land')
        const giftsOthers =  data.filter(p => p.category === 'gifts-others')
        setSeaProducts(sea.slice(0, 6))
        setLandProducts(land.slice(0, 6))
        setGiftsAndOthersProducts(giftsOthers.slice(0,6))
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, [])


  return (
    <div>
       <h2 className='font-playfair '>FROM THE SEA</h2>
    </div>
  )
}

export default Products
