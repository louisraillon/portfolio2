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
        background: '#0D0D1A',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(0,208,132,0.3)'
        el.style.background = '#101020'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(255,255,255,0.06)'
        el.style.background = '#0D0D1A'
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Terminal bar */}
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="ml-auto font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
          #{num}
        </span>
      </div>

      {/* Type as comment */}
      <p className="font-mono text-[10px] mb-2" style={{ color: '#2A2C3E' }}>
        {'/* '}{project.type.toLowerCase().replace(/ /g, '_')}{' */'}
      </p>

      {/* Title */}
      <h3 className="font-mono text-base font-bold mb-3" style={{ color: '#E2E4EE' }}>
        <span style={{ color: '#00D084' }}>{'> '}</span>
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-xs leading-relaxed mb-4" style={{ color: '#565870' }}>
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
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

      {/* Arrow */}
      <div className="mt-4 flex justify-end">
        <span
          className="font-mono text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: '#00D084' }}
        >
          ↗
        </span>
      </div>
    </button>
  )
}
