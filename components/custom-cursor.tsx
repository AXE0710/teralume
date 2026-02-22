'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsVisible(e.matches)
    }
    
    handleMediaChange(mediaQuery)
    mediaQuery.addEventListener('change', handleMediaChange)

    const updateCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
      
      const target = e.target as HTMLElement
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
        
      setIsPointer(isClickable)
    }

    window.addEventListener('mousemove', updateCursor)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div className={`relative transition-transform duration-200 ease-out ${isPointer ? 'scale-125' : 'scale-100'}`}>
        <Image
          src="/cursor.png"
          alt="Cursor"
          width={48}
          height={48}
          className="object-contain drop-shadow-md"
          priority
        />
      </div>
    </div>
  )
}