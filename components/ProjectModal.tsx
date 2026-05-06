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
            className="fixed bottom-0 left-0 top-0 z-40 hidden md:flex"
            style={{
              right: DRAWER_WIDTH,
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(8,8,14,0.82)',
              backdropFilter: 'blur(3px)',
              padding: '3rem',
            }}
          >
            {/* Browser/terminal frame */}
            <div
              style={{
                width: '90%',
                maxWidth: '820px',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                background: '#0E0E1A',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title bar */}
              <div style={{
                background: '#161622',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '0.65rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                {/* Dots */}
                <div style={{ display: 'flex', gap: '0.375rem', flexShrink: 0 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'block' }} />
                </div>
                {/* URL bar */}
                <div style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.3rem',
                  padding: '0.2rem 0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#00D084' }}>●</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#565870', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {project.live ?? `~/projects/${project.id}`}
                  </span>
                </div>
              </div>

              {/* Screenshot content */}
              <div style={{ aspectRatio: '16/9', background: '#080810', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {project.image && !imgError ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#2A2C3E' }}>
                    // no preview available
                  </span>
                )}
              </div>

              {/* Status bar */}
              <div style={{
                background: '#161622',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '0.4rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontFamily: 'monospace', fontSize: '9px', color: '#2A2C3E' }}>
                  <span style={{ color: '#00D084' }}>~/projects/</span>{project.id}
                </span>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ fontFamily: 'monospace', fontSize: '9px', color: '#565870', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#00D084')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
                  >
                    ouvrir ↗
                  </a>
                )}
              </div>
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
