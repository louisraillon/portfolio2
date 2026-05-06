'use client'

import { useRef, useState } from 'react'
import type { Project } from '@/lib/projects'

type Props = {
  project: Project
  index: number
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, index, onClick }: Props) {
  const num = String(index + 1).padStart(2, '0')
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <button
      ref={cardRef}
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group w-full rounded-xl"
      style={{
        background: '#0D0D1A',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: hovered
          ? 'box-shadow 0.2s, border-color 0.2s'
          : 'box-shadow 0.4s, border-color 0.4s, transform 0.5s cubic-bezier(0.23,1,0.32,1)',
        borderColor: hovered ? 'rgba(0,208,132,0.3)' : 'rgba(255,255,255,0.06)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(0,208,132,0.1), 0 20px 60px rgba(0,208,132,0.08), 0 8px 32px rgba(0,0,0,0.4)'
          : '0 4px 24px rgba(0,0,0,0.2)',
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Top-right arrow — appears on hover */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(0,0)' : 'translate(4px,-4px)',
          transition: 'opacity 0.25s, transform 0.25s',
          fontFamily: 'monospace',
          fontSize: 11,
          color: '#00D084',
        }}
      >
        ↗
      </div>

      {/* Terminal bar */}
      <div className="mb-6 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#28C840' }} />
        <span className="ml-auto font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
          #{num}
        </span>
      </div>

      {/* Content — slides up slightly on hover */}
      <div
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)',
          opacity: hovered ? 1 : 0.75,
        }}
      >
        {/* Type */}
        <p className="font-mono text-[10px] mb-3" style={{ color: '#2A2C3E', textAlign: 'center' }}>
          {'/* '}{project.type.toLowerCase().replace(/ /g, '_')}{' */'}
        </p>

        {/* Title */}
        <h3 className="font-mono text-base font-bold mb-4" style={{ color: '#E2E4EE', textAlign: 'center' }}>
          <span style={{ color: '#00D084' }}>{'> '}</span>
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="font-mono text-xs leading-relaxed mb-6"
          style={{
            color: '#565870',
            textAlign: 'center',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] rounded px-2 py-0.5"
              style={{
                background: 'rgba(0,208,132,0.07)',
                color: '#00D084',
                border: '1px solid rgba(0,208,132,0.12)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
