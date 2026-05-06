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
      ctx.fillStyle = 'rgba(5,5,8,0.07)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        // bright head char
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

    const interval = setInterval(draw, 45)
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
        opacity: 0.82, pointerEvents: 'none',
      }}
    />
  )
}
