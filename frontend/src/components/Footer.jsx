import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='w-full h-70 bg-[#191919] flex items-center justify-between px-10'>

        {/* Первая секция(лотип и копирайт) */}
        <div className='flex justify-start flex-col gap-30 '>
            <Link to="/"><img src={logo} alt="logo" className='h-25 w-25 transition-opacity duration-300 hover:opacity-50' /></Link>
            <Link to="/"><p className='text-[#808080] text-sm'>© 2026 Gourmet House</p></Link>
        </div>

        {/* Вторая секция(ссылки) */}
        <div className='flex justify-between gap-40 p-6'>
            {/* Explore */}
            <div className='flex flex-col gap-3 '>
                <h6 className='mb-4 text-main-gold text-base tracking-[2px]'>EXPLORE</h6>
                <ul className='text-white flex flex-col gap-2 text-sm'>
                    <li>
                        <Link to="/" className='relative group pb-1'>
                        Home
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className='relative group pb-1'>
                        Our Story
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections" className='relative group pb-1'>
                        Our Shop
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className='relative group pb-1'>
                        Contact Us
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Shop */}
            <div className='flex flex-col gap-3'>
                <h6 className='mb-4 text-main-gold text-base tracking-[2px]'>SHOP</h6>
                <ul className='text-white flex flex-col gap-2 text-sm'>
                    <li>
                        <Link to="/collections" className='relative group pb-1'>
                        From the Sea
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections" className='relative group pb-1'>
                        From the Land
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections" className='relative group pb-1'>
                        Gifts and Others
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/collections" className='relative group pb-1'>
                        Health Products
                        <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Concierge */}
            <div className='flex flex-col gap-3'>
                <h6 className='mb-4 text-main-gold text-base tracking-[2px]'>CONCIERGE</h6>
                <ul className='text-white flex flex-col gap-2 text-sm'>
                <li>
                    <Link to="" className='relative group pb-1'>
                    Cart
                    <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                    </Link>
                </li>
                <li>
                    <Link to="" className='relative group pb-1'>
                    My Account
                    <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                    </Link>
                </li>
                <li>
                    <Link to="" className='relative group pb-1'>
                    Privacy Policy
                    <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                    </Link>
                </li>
                </ul>
            </div>

             {/* Socials */}
            <div className='flex flex-col gap-3'>
                <h6 className='mb-4 text-main-gold text-base tracking-[2px]'>SOCIALS</h6>
                <ul className='text-white flex flex-col gap-2 text-sm'>
                <li>
                    <a href="https://www.instagram.com/" target='_blank' className='relative group pb-1'>
                    Instagram
                    <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/home.php" target='_blank' className='relative group pb-1'>
                    Facebook
                    <div className='absolute bottom-0 left-0 h-px bg-white w-0 transition-all duration-400 group-hover:w-full' />
                    </a>
                </li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Footer
