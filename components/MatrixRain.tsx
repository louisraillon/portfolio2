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

    const draw = () => {
      ctx.fillStyle = 'rgba(5,5,8,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const alpha = Math.random() * 0.25 + 0.03
        ctx.fillStyle = `rgba(0,208,132,${alpha})`
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i] += 0.5
      })
    }

    const interval = setInterval(draw, 60)
    return () => {
      clearInterval(interval)
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
        opacity: 0.5, pointerEvents: 'none',
      }}
    />
  )
}
