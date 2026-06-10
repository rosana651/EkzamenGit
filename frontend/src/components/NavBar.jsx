import React, { useState, useRef, useEffect } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { PiHandbagThin } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"
import logo from '../assets/logo.png'

const currencies = [
  { code: 'EUR', symbol: '€', region: 'Europe €' },
  { code: 'SAR', symbol: '﷼', region: 'GCC' },
  { code: 'CAD', symbol: '$', region: 'Canada' },
  { code: 'GBP', symbol: '£', region: 'United Kingdom' },
  { code: 'USD', symbol: '$', region: 'United States' },
]

const NavBar = () => {
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
    <div className='w-full h-24 flex items-center justify-between px-4 text-gray-700'>

      <div className='flex items-center gap-2 cursor-pointer'>
        <HiOutlineMenuAlt4 size={22} />
        <span className='text-sm font-medium tracking-widest'>MENU</span>
      </div>

      <div>
        <img src={logo} alt="logo" className='h-20 w-20' />
      </div>

      <div className='flex items-center gap-4'>

        {/* Relative и absolut для позиционирования dropdown меню относительно кнопки (top-full - сразу под кнопкой, right-0 - справа сверху) */}
        <div className='relative' ref={ref}>
            <button onClick={() => setOpen(!open)} className='flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:underline'>
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
  )
}

export default NavBar