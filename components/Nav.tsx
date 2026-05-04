'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
        <div
          className="flex w-full max-w-xs items-center justify-between rounded-full px-5 py-2.5 md:w-auto"
          style={{
            background: 'rgba(12,12,10,0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span className="font-mono text-xs tracking-widest text-warm-white">L·R</span>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 font-mono text-[11px] tracking-wider text-muted-ash transition-colors duration-200 hover:text-warm-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className="absolute block h-px w-4 bg-warm-white transition-all duration-300"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-4px)' }}
            />
            <span
              className="absolute block h-px w-4 bg-warm-white transition-all duration-300"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(4px)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
          style={{ background: 'rgba(12,12,10,0.97)', backdropFilter: 'blur(24px)' }}
        >
          <div className="flex flex-col gap-4">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-fraunces italic text-5xl text-warm-white"
                style={{ animation: `slideUp 380ms cubic-bezier(0.32,0.72,0,1) ${i * 80}ms both` }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p
            className="absolute bottom-12 left-8 font-mono text-[10px] text-faint-ghost"
            style={{ animation: 'slideUp 380ms cubic-bezier(0.32,0.72,0,1) 200ms both' }}
          >
            Louis Raillon — Fullstack Developer
          </p>
        </div>
      )}
    </>
  )
}
