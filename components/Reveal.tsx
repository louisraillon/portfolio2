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

    const show = () => {
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }

    // Start hidden
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'

    // Safety net: force-show after 1.5s regardless
    const fallback = setTimeout(show, 1500 + delay)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        clearTimeout(fallback)
        show()
        obs.disconnect()
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
