'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ParallaxProductProps {
  product: Product
  index: number
}

export function ParallaxProduct({ product, index }: ParallaxProductProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovered && !isMobile) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePos({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isHovered, isMobile])

  const parallaxX = isMobile ? 0 : (mousePos.x - 0.5) * 20
  const parallaxY = isMobile ? 0 : (mousePos.y - 0.5) * 20

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-72 sm:h-80 md:h-96 shadow-lg hover:shadow-2xl transition-shadow duration-500"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
        }}
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:brightness-125 transition-all duration-700"
        />
      </div>

      {/* Overlay gradient - darker for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/10 transition-all duration-700" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
        {/* Top accent */}
        <div className="w-10 h-1 bg-white/30 rounded-full group-hover:w-16 group-hover:bg-white transition-all duration-500" />

        {/* Bottom content */}
        <div className="space-y-2 md:space-y-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-1">
          <div className="overflow-hidden">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight group-hover:translate-y-0 transition-transform duration-500">
              {product.name}
            </h3>
          </div>
          <div className="overflow-hidden max-h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-xs sm:text-sm text-white/90 font-light line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 transform -skew-x-12" />
      </div>
    </div>
  )
}
