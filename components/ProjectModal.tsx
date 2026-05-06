'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

type Props = {
  project: Project | null
  onClose: () => void
}

const DRAWER_WIDTH = 'min(480px, 92vw)'

export default function ProjectModal({ project, onClose }: Props) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => { setImgError(false) }, [project?.id])

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
          {/* Backdrop — click closes */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(8,8,14,0.75)', backdropFilter: 'blur(2px)' }}
            aria-hidden="true"
          />

          {/* Left preview panel */}
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            onClick={onClose}
            className="fixed bottom-0 left-0 top-0 z-40 hidden md:block"
            style={{ right: DRAWER_WIDTH, overflow: 'hidden', cursor: 'pointer' }}
          >
            {/* Screenshot */}
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: 0.55,
                }}
                onError={() => setImgError(true)}
              />
            ) : null}

            {/* Gradient overlays */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(8,8,14,0.6) 0%, rgba(8,8,14,0.1) 60%, rgba(8,8,14,0.5) 100%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,14,0.85) 0%, transparent 45%)',
            }} />

            {/* Bottom label */}
            <div style={{
              position: 'absolute', bottom: '2.5rem', left: '2.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00D084', letterSpacing: '0.1em' }}>
                ~/projects/{project.id}
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 700, color: '#E2E4EE' }}>
                {project.title}
              </span>
              {!project.image || imgError ? (
                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#2A2C3E' }}>
                  // no preview available
                </span>
              ) : null}
            </div>
          </motion.div>

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="fixed right-0 top-0 z-50 flex h-full flex-col overflow-y-auto"
            style={{
              width: DRAWER_WIDTH,
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

            {/* Terminal bar */}
            <div
              className="mb-10 rounded-lg p-4"
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

            {/* Divider */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} />

            {/* Description */}
            <p
              className="font-body text-sm"
              style={{ color: '#565870', lineHeight: '2', marginTop: '2rem' }}
            >
              {project.description}
            </p>

            {/* Divider */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} />

            {/* Stack */}
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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

            {/* Divider */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} />

            {/* Links */}
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
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
