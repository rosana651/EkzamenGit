import React from 'react'
import { gsap } from 'gsap'
import bg_image from '../assets/images/bg_image.png'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const SecondSection = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center mt-10 relative'>

        <img src={bg_image} alt="Background" className='absolute w-200 h-200 object-contain'/>

        <div className='relative flex flex-col items-center tracking-[4px] text-center gap-4 max-w-392 px-6'>
            <h6 className='text-sm font-semibold text-[#a88f60]'>ALWAYS TASTEFUL. NEVER MODEST.</h6>
            <h4 className='text-[3.3rem] font-playfair font-extralight'>
            The only guest allowed to be late to dinner. Heritage
            sourcing in the Persian tradition. This caviar is not for
            everyone—but then, neither are you.
            </h4>

            {/* group и group-hover - для создания эффекта при наведении на родительский элемент и изменения стилей дочернего элемента при этом
            right-0 - линия зафиксированна справа и при наведении сжимается слева направо */}
            <Link to="/about" className='text-sm pb-1 relative group'>
                SINCE 1965 &gt;
                <div className='absolute bottom-0 right-0 h-px bg-[#a88f60] w-full transition-all duration-500 group-hover:w-0' />               
            </Link>
        </div>

    </div>
  )
}

export default SecondSection
