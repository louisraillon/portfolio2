'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(8,8,14,0.8)', backdropFilter: 'blur(4px)' }}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="fixed right-0 top-0 z-50 flex h-full flex-col overflow-y-auto"
            style={{
              width: 'min(480px, 92vw)',
              background: '#0E0E1A',
              borderLeft: '1px solid rgba(255,255,255,0.07)',
              padding: '2rem 1.75rem',
            }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Top bar */}
            <div className="mb-10 flex items-center justify-between">
              <span
                className="rounded px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{
                  background: 'rgba(0,208,132,0.08)',
                  border: '1px solid rgba(0,208,132,0.15)',
                  color: '#00D084',
                }}
              >
                {project.type}
              </span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded font-mono text-sm transition-colors duration-150"
                style={{ color: '#565870', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Terminal preview bar */}
            <div
              className="mb-6 rounded-lg p-4"
              style={{ background: '#161622', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px]">
                  <span style={{ color: '#00D084' }}>~/projects/</span>
                  <span style={{ color: '#E2E4EE' }}>{project.id}</span>
                </p>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#28C840' }} />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2
              className="font-mono font-bold leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#E2E4EE' }}
            >
              <span style={{ color: '#00D084' }}>{'> '}</span>{project.title}
            </h2>

            {/* Description */}
            <p className="mt-6 font-body text-sm leading-relaxed" style={{ color: '#565870', lineHeight: '1.9' }}>
              {project.description}
            </p>

            {/* Stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded px-2.5 py-1 font-mono text-xs"
                  style={{
                    background: 'rgba(0,208,132,0.08)',
                    border: '1px solid rgba(0,208,132,0.15)',
                    color: '#00D084',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded font-mono text-sm transition-colors duration-150"
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#565870',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
                >
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded font-mono text-sm transition-opacity hover:opacity-85"
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: '#00D084',
                    color: '#08080E',
                  }}
                >
                  Live ↗
                </a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
