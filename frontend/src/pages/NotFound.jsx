import React from 'react'
import { Link } from 'react-router-dom'

//Страницу попросил сделать ии
const NotFound = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-6 text-gray-700'>

      <p className='text-8xl font-thin tracking-widest'>404</p>

      <div className='w-px h-12 bg-gray-300' />

      <p className='text-xs tracking-[0.3em]'>PAGE NOT FOUND</p>

      <Link to='/' className='mt-4 text-xs tracking-widest relative group pb-1'>
        RETURN HOME
        <div className='absolute bottom-0 right-0 h-px bg-gray-700 w-full transition-all duration-500 group-hover:w-0' />
        <div className='absolute bottom-0 left-0 h-px bg-gray-700 w-0 transition-all duration-500 group-hover:w-full' />
      </Link>

    </div>
  )
}

export default NotFound