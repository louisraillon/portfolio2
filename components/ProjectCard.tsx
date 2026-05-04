'use client'

import type { Project } from '@/lib/projects'

type Props = {
  project: Project
  featured?: boolean
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, featured = false, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(project)}
      className="group w-full cursor-pointer text-left"
      style={{
        background: 'rgba(26,25,22,0.04)',
        border: '1px solid rgba(26,25,22,0.09)',
        borderRadius: '1.5rem',
        padding: '3px',
        transition: 'border-color 300ms cubic-bezier(0.32,0.72,0,1)',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,67,50,0.3)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,25,22,0.09)'
      }}
      aria-label={`Voir ${project.title}`}
    >
      <div
        ref={(el) => {
          if (!el) return
          const btn = el.closest('button')
          if (!btn) return
          btn.addEventListener('mouseenter', () => { el.style.transform = 'translateY(-2px)' })
          btn.addEventListener('mouseleave', () => { el.style.transform = 'translateY(0)' })
        }}
        className="flex h-full flex-col"
        style={{
          background: '#FFFFFF',
          borderRadius: 'calc(1.5rem - 3px)',
          boxShadow: 'inset 0 1px 1px rgba(26,25,22,0.03), 0 2px 8px rgba(26,25,22,0.06)',
          transition: 'transform 300ms cubic-bezier(0.32,0.72,0,1)',
          padding: featured ? '0' : '1.25rem',
          overflow: 'hidden',
        }}
      >
        {/* Featured: preview area */}
        {featured && (
          <div
            className="flex items-end justify-between p-5"
            style={{
              background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',
              height: '160px',
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-200/70">
              Featured
            </span>
            <span className="font-mono text-2xl text-white/20">01</span>
          </div>
        )}

        <div className={featured ? 'flex flex-1 flex-col p-5' : 'flex flex-1 flex-col'}>
          {!featured && (
            <span
              className="mb-3 block font-mono text-xs font-medium"
              style={{ color: '#1B4332' }}
            >
              {String(featured ? '01' : '')}
            </span>
          )}

          <p className="font-display text-base font-bold leading-tight text-ink">
            {project.title}
          </p>
          <p className="mt-1 font-mono text-[10px] text-ink-3">{project.type}</p>

          {featured && (
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-2">
              {project.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.slice(0, featured ? 5 : 2).map((tech) => (
              <span
                key={tech}
                className="rounded-full px-2 py-0.5 font-mono text-[9px] text-ink-2"
                style={{
                  background: 'rgba(26,25,22,0.06)',
                  border: '1px solid rgba(26,25,22,0.09)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4">
            <span
              className="font-mono text-[10px] font-medium uppercase tracking-wider transition-colors duration-200"
              style={{ color: '#1B4332' }}
            >
              {featured ? 'View project' : 'Details'}
            </span>
            <span
              className="font-mono text-sm transition-transform duration-300"
              style={{
                color: '#1B4332',
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}
