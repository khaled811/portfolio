'use client'

import Image from 'next/image'

interface PhoneFrameProps {
  src: string
  alt: string
  isDark?: boolean
}

export function PhoneFrame({ src, alt, isDark = false }: PhoneFrameProps) {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Phone body */}
      <div className={`relative rounded-[3rem] ${isDark ? 'bg-gray-900' : 'bg-black'} p-3 shadow-2xl`}>
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white aspect-[9/16]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 380px"
          />
        </div>

        {/* Home button area */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
      </div>

      {/* Side reflection/shadow */}
      <div className="absolute -inset-4 rounded-[3rem] border border-white/10 pointer-events-none" />
    </div>
  )
}
