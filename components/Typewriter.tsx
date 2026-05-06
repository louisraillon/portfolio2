'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  speed?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
  triggerOnLoad?: boolean
}

export default function Typewriter({ text, speed = 38, delay = 0, className = '', style, triggerOnLoad = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [chars, setChars] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (triggerOnLoad) {
      const t = setTimeout(() => setActive(true), delay)
      return () => clearTimeout(t)
    }

    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setTimeout(() => setActive(true), delay)
        obs.disconnect()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, triggerOnLoad])

  useEffect(() => {
    if (!active || chars >= text.length) return
    const t = setTimeout(() => setChars((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [active, chars, text, speed])

  const done = chars >= text.length

  return (
    <span ref={ref} className={className} style={style}>
      {text.slice(0, chars)}
      {active && !done && (
        <span style={{ color: '#00D084', animation: 'blink 0.6s step-end infinite' }}>▋</span>
      )}
    </span>
  )
}
