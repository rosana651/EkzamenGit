import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import video from '../assets/videos/gourmethouse.mp4'

const FirstSection = () => {
  const lineRef = useRef(null)

  useEffect(() => {

    //Таймлайн нужен для последовательного и бесконечного повторения анимации. repeat: -1 - бесконечное повторение, repeatDelay: 0.5 - задержка между повторениями
    const res = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

    // Линия вытягивается вниз из надписи(transformOrigin: 'top center' - точка которая стоит на месте во время анимации, scaleY: 0 - линия не видна, scaleY: 1 - линия полностью вытянута)
    res.fromTo(lineRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, transformOrigin: 'top center', duration: 1, ease: 'power2.out' }
    )

    // Линия схлопывается сверху вниз(transformOrigin: 'bottom center' - точка которая стоит на месте во время анимации, scaleY: 1 - линия полностью вытянута, scaleY: 0 - линия не видна)
    res.to(lineRef.current,
      { scaleY: 0, transformOrigin: 'bottom center', duration: 1, ease: 'power2.in' }
    )

    // Сброс перед следующим повторением(set - возвращает элемент к изначальному состоянию, чтобы анимация могла повториться)
    res.set(lineRef.current, { transformOrigin: 'top center', scaleY: 0 })
  }, [])

  return (
    <div style={{ height: 'calc(100vh - 0px)' }} className='w-full relative'>
      <video src={video} autoPlay loop muted className='w-full h-full object-cover' />

      <div className='absolute bottom-0 w-full h-1/6 flex flex-col items-center justify-center gap-3 tracking-widest'>
        <p>DISCOVER</p>
        <div ref={lineRef} className='w-[0.7px] h-16 bg-black' style={{ boxShadow: '0 0 6px 0.5px rgba(255,255,255,0.2)' }}/>
      </div>

    </div>
  )
}

export default FirstSection