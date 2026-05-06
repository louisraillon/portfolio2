'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 1,
        width: 480,
        height: 480,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(0,208,132,0.055) 0%, transparent 68%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  )
}
