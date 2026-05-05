'use client'

import type { Project } from '@/lib/projects'

type Props = {
  project: Project
  index: number
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, index, onClick }: Props) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <button
      onClick={() => onClick(project)}
      className="group w-full text-left rounded-xl transition-all duration-200"
      style={{
        background: '#0E0E1A',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '1.75rem',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(0,208,132,0.35)'
        el.style.background = '#111120'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(255,255,255,0.07)'
        el.style.background = '#0E0E1A'
      }}
      aria-label={`Voir ${project.title}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[11px]" style={{ color: '#2A2C3E' }}>
          {num}
        </span>
        <span
          className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: '#00D084' }}
        >
          ↗
        </span>
      </div>

      {/* Type */}
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: '#2A2C3E' }}>
        {project.type}
      </p>

      {/* Title */}
      <h3 className="font-mono text-base font-bold mb-3 leading-snug" style={{ color: '#E2E4EE' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#565870' }}>
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] rounded px-2 py-0.5"
            style={{
              background: 'rgba(0,208,132,0.08)',
              color: '#00D084',
              border: '1px solid rgba(0,208,132,0.15)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </button>
  )
}
