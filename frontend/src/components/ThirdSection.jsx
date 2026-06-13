import React from 'react'
import { Link } from 'react-router-dom'
import third_bg_image from '../assets/images/third_bg_image.png'

const ThirdSection = () => {
  return (
   <div className='w-full min-h-screen flex items-center justify-center relative '>

      <img src={third_bg_image} alt="Background" className='absolute w-full h-full object-cover'/>

      <div className='relative flex flex-col items-center tracking-[4px] text-center gap-4 max-w-2xl px-6'>
        <h6 className='text-sm font-semibold text-main-gold'>CAVIAR</h6>
        <h4 className='text-[3.3rem] text-white font-playfair font-extralight'>
          Never apologize for wanting more.
        </h4>

        <Link to="/collections" className='text-sm pb-1 text-white relative group'>
          INDULGE A LITTLE &gt;
          <div className='absolute bottom-0 right-0 h-px bg-main-gold w-full transition-all duration-500 group-hover:w-0' />
        </Link>
      </div>

  </div>
  )
}

export default ThirdSection
