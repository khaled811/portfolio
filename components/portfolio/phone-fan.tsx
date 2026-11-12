'use client'

import Image from 'next/image'

interface Shot {
  url: string
  title: string
}

interface PhoneFanProps {
  screenshots: Shot[]
  icon?: string
  name: string
  /** Called with the screenshot index when a phone is clicked. */
  onSelect: (index: number) => void
  /** Accent gradient classes for the glow behind the phones. */
  glow?: string
}

function Phone({
  shot,
  priority,
  className,
  onClick,
}: {
  shot: Shot
  priority?: boolean
  className: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={shot.title}
      className={`absolute block aspect-[0.48] rounded-[9%/4.5%] bg-neutral-950 p-[2.2%] shadow-2xl ring-1 ring-white/10 transition-transform duration-500 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <span className="relative block h-full w-full overflow-hidden rounded-[8%/4%] bg-white">
        <img
          src={shot.url}
          alt={shot.title}
          width={480}
          height={1021}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover object-top"
        />
      </span>
      {/* camera notch */}
      <span className="pointer-events-none absolute left-1/2 top-[1.6%] h-[1.1%] w-[22%] -translate-x-1/2 rounded-full bg-neutral-950" />
    </button>
  )
}

/**
 * Three overlapping phones showing the first screens of a project.
 * Pure CSS transforms (no continuous animation) so it stays light.
 */
export function PhoneFan({ screenshots, icon, name, onSelect, glow = 'from-primary to-chart-2' }: PhoneFanProps) {
  const n = screenshots.length
  if (n === 0) return null

  // centre = the 2nd screen when there is one (usually the richest), sides = the rest
  const centre = n > 1 ? 1 : 0
  const left = 0 === centre ? Math.min(1, n - 1) : 0
  const right = Math.min(2, n - 1) === centre ? (centre + 1) % n : Math.min(2, n - 1)

  return (
    <div
      dir="ltr"
      className="group relative mx-auto aspect-[1/1.02] w-full max-w-[440px] select-none"
    >
      {/* soft glow behind the phones */}
      <div
        aria-hidden
        className={`absolute inset-x-[8%] top-[8%] bottom-[6%] -z-0 rounded-full bg-gradient-to-br ${glow} opacity-20 blur-3xl`}
      />

      <Phone
        shot={screenshots[left]}
        className="bottom-[5%] left-[5%] z-0 w-[35%] sm:left-[1%] sm:w-[39%] origin-bottom -rotate-[7deg] opacity-95 group-hover:-translate-x-[6%] group-hover:-rotate-[10deg]"
        onClick={() => onSelect(left)}
      />
      <Phone
        shot={screenshots[right]}
        className="bottom-[5%] right-[5%] z-0 w-[35%] sm:right-[1%] sm:w-[39%] origin-bottom rotate-[7deg] opacity-95 group-hover:translate-x-[6%] group-hover:rotate-[10deg]"
        onClick={() => onSelect(right)}
      />
      <Phone
        priority
        shot={screenshots[centre]}
        className="left-1/2 top-0 z-10 w-[45%] -translate-x-1/2 group-hover:-translate-y-[2%]"
        onClick={() => onSelect(centre)}
      />

      {icon && (
        <div className="absolute bottom-0 left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 sm:h-16 sm:w-16">
          <Image src={icon} alt={name} width={64} height={64} className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
        </div>
      )}
    </div>
  )
}
