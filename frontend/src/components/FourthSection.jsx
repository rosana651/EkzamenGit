import React from 'react'
import { Link } from 'react-router-dom'
import la_perle_bg from '../assets/images/la_perle_bg.png'

const FourthSection = () => {
  return (
   <div className='w-full min-h-screen flex items-center relative '>

      <img src={la_perle_bg} alt="Background" className='absolute w-full h-full object-cover'/>

      <div className='relative flex justify-start flex-col gap-6 items-start tracking-[3px] max-w-2xl px-6 ml-38'>
        <h6 className='text-sm font-semibold text-main-gold'>LA PERLE</h6>
        <h4 className='text-[3.3rem] font-playfair font-extralight'>
            Pearls before wine.
        </h4>
        <p className='text-md tracking-normal text-gray-700 font-semilight'>
            La Perle, served in a pearl. Excessive? Of course not, it fits in a spoon. 
            A mother-of-pearl spoon—you're not an animal.
        </p>

        <Link to="/collections" className='text-sm pb-1 relative group mt-10'>
         ENJOY APRÈS-ANYTHING &gt;
          <div className='absolute bottom-0 right-0 h-px bg-main-gold w-full transition-all duration-500 group-hover:w-0' />
        </Link>
      </div>

  </div>
  )
}

export default FourthSection
