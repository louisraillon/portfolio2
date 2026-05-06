'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  suffix?: string
  duration?: number
}

export default function Counter({ to, suffix = '', duration = 1400 }: Props) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setVal(Math.round(eased * to))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  return <span ref={ref}>{val}{suffix}</span>
}
