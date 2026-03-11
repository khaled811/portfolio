"use client"

import React from "react"

import { useEffect, useRef } from "react"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function PhoneMockup({ children, className = "", animate = true }: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return
      const rect = phoneRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 20
      const rotateX = ((centerY - e.clientY) / window.innerHeight) * 20
      
      phoneRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    }

    const handleMouseLeave = () => {
      if (!phoneRef.current) return
      phoneRef.current.style.transform = 'rotateY(-15deg) rotateX(5deg)'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [animate])

  return (
    <div className={`perspective-1000 ${className}`}>
      <div
        ref={phoneRef}
        className="preserve-3d transition-transform duration-300 ease-out"
        style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}
      >
        {/* Phone frame */}
        <div className="relative w-[280px] h-[580px] rounded-[50px] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[14px] shadow-2xl">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-[50px] animate-glow opacity-50" />
          
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-zinc-700 rounded-l-sm" />
          <div className="absolute -left-[3px] top-44 w-[3px] h-16 bg-zinc-700 rounded-l-sm" />
          <div className="absolute -left-[3px] top-64 w-[3px] h-16 bg-zinc-700 rounded-l-sm" />
          <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-zinc-700 rounded-r-sm" />
          
          {/* Inner bezel */}
          <div className="relative w-full h-full rounded-[38px] bg-black overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            
            {/* Screen content */}
            <div className="w-full h-full">
              {children}
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
