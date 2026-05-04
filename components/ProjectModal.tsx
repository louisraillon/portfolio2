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
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(26,25,22,0.4)', backdropFilter: 'blur(4px)' }}
            aria-hidden="true"
          />

          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="fixed right-0 top-0 z-50 flex h-full flex-col overflow-y-auto"
            style={{
              width: 'min(500px, 92vw)',
              background: '#FFFFFF',
              borderLeft: '1px solid rgba(26,25,22,0.09)',
              padding: '2rem 1.75rem',
            }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <span
                className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{
                  background: 'rgba(27,67,50,0.09)',
                  border: '1px solid rgba(27,67,50,0.15)',
                  color: '#1B4332',
                }}
              >
                {project.type}
              </span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Preview */}
            <div
              className="mb-6 flex items-end rounded-2xl p-5"
              style={{
                background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%)',
                height: '140px',
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-200/60">
                Preview
              </p>
            </div>

            {/* Title */}
            <h2
              className="font-display font-extrabold leading-tight tracking-tight text-ink"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-2">
              {project.description}
            </p>

            {/* Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 font-mono text-xs text-ink-2"
                  style={{
                    background: 'rgba(26,25,22,0.06)',
                    border: '1px solid rgba(26,25,22,0.09)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-5 py-2.5 font-body text-sm text-ink transition-colors hover:border-ink"
                  style={{ border: '1px solid rgba(26,25,22,0.15)' }}
                >
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-5 py-2.5 font-body text-sm font-medium text-white transition-opacity hover:opacity-88"
                  style={{ background: '#1B4332' }}
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
