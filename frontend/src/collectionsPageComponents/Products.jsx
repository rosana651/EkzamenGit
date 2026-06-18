import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import video from '../assets/videos/collections_page_video.mp4'


const Products = () => {
  
  const [open, setOpen] = useState(false)
  const [sortType, setSortType] = useState("asc");
  const [seaProducts, setSeaProducts] = useState([])
  const [landProducts, setLandProducts] = useState([])
  const [giftsAndOthersProducts, setGiftsAndOthersProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)

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

   const handler = (e) => {
      // Провенряем, что клик был вне нашего рефа(div), и если да, то закрываем меню
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }


  return (
    <div className='h-screen '> 
      {/* Видео */}
      <div className='relative '>
          <video src={video} autoPlay loop muted className='w-full h-180 object-cover'/>
          <h2 className='absolute inset-0 flex items-center tracking-[2px] justify-center text-white text-7xl font-playfair'>Our Shop</h2>
      </div>  

      {/* Сортировка и фильтры */}
      <div className='flex  justify-between p-15 ' ref={ref}>
          <CiSliderHorizontal size={25}/>

         <div className="relative inline-block">
            <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm font-medium px-2 py-1 cursor-pointer">
              <p className='hover:underline '>SORT BY</p>
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>∨</span>
            </button>

            {open && (
              <div className="absolute mt-2 right-0 bg-white border shadow w-40">
                <div
                  onClick={() => {
                    setSortType("asc");
                    setOpen(false);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer">
                  Price Ascending
                </div>

                <div
                  onClick={() => {
                    setSortType("desc");
                    setOpen(false);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer">
                  Price Descending
                </div>
              </div>
            )}
          </div>    
      </div>

      

       
    </div>
  )
}

export default Products
