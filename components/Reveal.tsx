'use client'

import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.clipPath = 'inset(0 0 100% 0)'
    el.style.transform = 'translateY(12px)'

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.transition = `opacity 0.55s ease ${delay}ms, clip-path 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
        el.style.opacity = '1'
        el.style.clipPath = 'inset(0 0 0% 0)'
        el.style.transform = 'translateY(0)'
        obs.disconnect()
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
