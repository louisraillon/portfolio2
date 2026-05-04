// components/ProjectModal.tsx
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="fixed right-0 top-0 z-50 flex h-full flex-col"
            style={{
              width: 'min(480px, 90vw)',
              background: 'var(--color-surface)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              padding: '2rem 1.75rem',
              overflowY: 'auto',
            }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint-ghost">
                {project.type}
              </p>
              <button
                onClick={onClose}
                className="font-mono text-lg text-muted-ash transition-colors hover:text-warm-white"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Title */}
            <h2
              className="font-fraunces italic text-warm-white"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-5 font-geist text-sm leading-relaxed text-muted-ash">
              {project.description}
            </p>

            {/* Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-muted-ash"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
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
                  className="rounded-full font-geist text-sm text-warm-white transition-colors hover:text-amber"
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '0.5rem 1.25rem',
                  }}
                >
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-geist text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: '#C9A86C',
                    color: '#0E0E0C',
                    padding: '0.5rem 1.25rem',
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
