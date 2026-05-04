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
      className="w-full cursor-pointer text-left"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '1.5rem',
        padding: '4px',
        transition: 'border-color 350ms cubic-bezier(0.32,0.72,0,1)',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
      }}
      aria-label={`Voir le projet ${project.title}`}
    >
      {/* Inner core */}
      <div
        className="flex h-full flex-col p-5"
        ref={(el) => {
          if (!el) return
          const btn = el.closest('button')
          if (!btn) return
          btn.addEventListener('mouseenter', () => {
            el.style.transform = 'translateY(-3px)'
          })
          btn.addEventListener('mouseleave', () => {
            el.style.transform = 'translateY(0)'
          })
        }}
        style={{
          background: 'var(--color-surface)',
          borderRadius: 'calc(1.5rem - 4px)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
          transition: 'transform 350ms cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        {featured && (
          <div
            className="mb-4 flex items-center justify-center rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.04)',
              height: '120px',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <span className="font-mono text-xs text-faint-ghost">preview</span>
          </div>
        )}

        <p className="font-geist text-sm font-semibold text-warm-white">{project.title}</p>
        <p className="mt-1 font-mono text-xs text-muted-ash">{project.type}</p>

        {featured && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-muted-ash"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '9999px',
                  padding: '2px 8px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p
          className="mt-auto pt-4 font-mono text-xs"
          style={{ color: '#C9A86C' }}
        >
          {featured ? 'View details →' : '→'}
        </p>
      </div>
    </button>
  )
}
