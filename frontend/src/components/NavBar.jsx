import React, { useState, useRef, useEffect } from 'react'
import { Link ,NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { PiHandbagThin } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi";
import logo from '../assets/images/logo.png'
import menu_bg from '../assets/images/menu_bg.png'

const currencies = [
  { code: 'EUR', symbol: '€', region: 'Europe €' },
  { code: 'SAR', symbol: '﷼', region: 'GCC' },
  { code: 'CAD', symbol: '$', region: 'Canada' },
  { code: 'GBP', symbol: '£', region: 'United Kingdom' },
  { code: 'USD', symbol: '$', region: 'United States' },
]

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(currencies[0])
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      // Провенряем, что клик был вне нашего рефа(div), и если да, то закрываем меню
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    //Вызывает функцию handler при каждом клике мыши на документе
    document.addEventListener('mousedown', handler)
    //Убирает обработчик, когда компонента нет(используется в retun так как там выполняется блок кода при удалении компонента)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
    <div className='w-full fixed top-0 left-0 z-50 bg-white h-24 flex items-center n justify-between px-6 text-gray-700 '>

      <div onClick={() => setOpenMenu(!openMenu)} className='flex items-center gap-2  w-1/3'>
        <HiOutlineMenuAlt4 size={22} className={`cursor-pointer ${openMenu ? "hidden": "block"}`}/>
        <TfiClose size={22} className={`cursor-pointer ${openMenu ? "block": "hidden"}`}/>
        <span className='text-sm font-medium tracking-widest cursor-pointer'>MENU</span>
      </div>

      {/* w-1/3 + justify-center логотип строго по центру */}
      <div className='flex justify-center w-1/3'>
        <Link to="/"><img src={logo} alt="logo" className='h-20 w-auto transition-opacity duration-300 hover:opacity-50' /></Link>
      </div>

      {/* w-1/3 + justify-end иконки прижаты вправо */}
      <div className='flex items-center justify-end gap-4 w-1/3'>

        {/* Relative и absolut для позиционирования dropdown меню относительно кнопки (top-full - сразу под кнопкой, right-0 - справа сверху) */}
        <div className='relative' ref={ref}>
            <button onClick={() => setOpen(!open)} className='flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:underline cursor-pointer'>
            {selected.symbol} {selected.code}
            <span className={`transition-transform duration-200 inline-block ${open ? 'rotate-180' : ''}`}>∧</span>
          </button>

          {open && (
            <ul className='absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-md min-w-[170px] py-2 z-50'>
              {currencies.map((c) => (
                <li
                  key={c.code}
                  onClick={() => { setSelected(c); setOpen(false) }}
                  className={`flex items-center gap-3 px-5 py-2.5 cursor-pointer text-sm hover:bg-gray-50 ${
                  selected.code === c.code ? 'text-gray-400' : 'text-gray-900'}`}>

                  <span className='w-4 text-center text-gray-500'>{c.symbol}</span>
                  {c.region}
                </li>
              ))}
            </ul>
          )}
        </div>

        <PiHandbagThin size={22} className='cursor-pointer' />
        <CiSearch size={22} className='cursor-pointer' />

      </div>

    </div>

    {/* Menu */}
   <div className={`fixed top-0 flex flex-col gap-40 items-center justify-center left-0 w-full bg-white z-40 transition-all duration-500 ${openMenu ? 'h-full' : 'h-0 overflow-hidden '}`}>
       <img src={menu_bg} alt="menu_bg" className='absolute right-0 h-full object-cover pointer-events-none'/>
       <div className='flex flex-col gap-8 items-center group text-4xl tracking-[1px] font-playfair'>
          <NavLink to="/" className={({ isActive }) => `hover:text-black  group-hover:text-[#cbc8c6] transition-all duration-400 ${isActive ? 'text-main-gold' : ''}`}>Home</NavLink>
          <NavLink to="/about"className={({ isActive }) => `hover:text-black  group-hover:text-[#cbc8c6] transition-all duration-400 ${isActive ? 'text-main-gold' : ''}`}>Our Story</NavLink>
          <NavLink to="/collections"className={({ isActive }) => `hover:text-black  group-hover:text-[#cbc8c6] transition-all duration-400 ${isActive ? 'text-main-gold' : ''}`}>Our Shop</NavLink>
          <NavLink to="/contact"className={({ isActive }) => `hover:text-black  group-hover:text-[#cbc8c6] transition-all duration-400 ${isActive ? 'text-main-gold' : ''}`}>Contact Us</NavLink>
       </div>

       <div className='flex items-center gap-6 text-gray-800 tracking-[2px]'>
           <a href="https://www.instagram.com/" target='_blank' className='relative group pb-1'>
                INSTAGRAM
                <div className='absolute bottom-0 left-0 h-px bg-gray-800 w-0 transition-all duration-400 group-hover:w-full' />
            </a>
            <a href="https://www.facebook.com/home.php" target='_blank' className='relative group pb-1'>
                FACEBOOK
                <div className='absolute bottom-0 left-0 h-px bg-gray-800 w-0 transition-all duration-400 group-hover:w-full' />
            </a>
       </div>

    </div>
    </>
  )
}

export default NavBar