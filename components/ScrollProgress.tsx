'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 200,
        background: 'rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: pct + '%',
          background: 'linear-gradient(90deg, #00D084, #00ffaa)',
          transition: 'width 0.08s linear',
          boxShadow: '0 0 6px rgba(0,208,132,0.6)',
        }}
      />
    </div>
  )
}
