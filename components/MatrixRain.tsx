'use client'
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 13
    const chars = '01アイウエオカキクケコ10ﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓ'
    const cols = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -50)

    let rafId = 0
    let lastTime = 0
    const INTERVAL = 45 // ms between frames — ~22fps, enough for matrix effect

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw)
      if (now - lastTime < INTERVAL) return
      lastTime = now

      ctx.fillStyle = 'rgba(5,5,8,0.07)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        if (Math.random() > 0.85) {
          ctx.fillStyle = 'rgba(180,255,220,0.9)'
        } else {
          const alpha = Math.random() * 0.55 + 0.15
          ctx.fillStyle = `rgba(0,208,132,${alpha})`
        }
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.965) drops[i] = 0
        drops[i] += 0.65
      })
    }

    // Pause when tab hidden — saves CPU/battery
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
        rafId = 0
      } else {
        lastTime = 0
        rafId = requestAnimationFrame(draw)
      }
    }

    rafId = requestAnimationFrame(draw)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.82, pointerEvents: 'none',
      }}
    />
  )
}
