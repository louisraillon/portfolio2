'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.style.cssText = 'position:absolute;top:80px;height:1px;width:1px;pointer-events:none;'
    document.body.prepend(sentinel)
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(sentinel)
    return () => { obs.disconnect(); sentinel.remove() }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(245,242,236,0.95)' : 'rgba(245,242,236,0.5)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(26,25,22,0.09)' : 'transparent'}`,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <a href="/" className="font-display text-sm font-extrabold tracking-tight text-ink">
            L.R
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-4 py-2 font-body text-sm font-medium text-white transition-opacity hover:opacity-85 active:-translate-y-px"
              style={{ background: '#1B4332' }}
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer' : 'Menu'}
          >
            <span
              className="absolute block h-px w-5 bg-ink transition-all duration-300"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-5px)' }}
            />
            <span
              className="absolute block h-px w-5 bg-ink transition-all duration-300"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(5px)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
          style={{ background: 'rgba(245,242,236,0.99)', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col gap-5">
            {[...links, { label: 'Hire me', href: '#contact' }].map((l, i) => (
              <a
                key={l.href + i}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-extrabold"
                style={{
                  color: l.label === 'Hire me' ? '#1B4332' : '#1A1916',
                  animation: `slideUp 350ms cubic-bezier(0.32,0.72,0,1) ${i * 70}ms both`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p
            className="absolute bottom-12 left-8 font-mono text-[10px] text-ink-3"
            style={{ animation: 'slideUp 350ms cubic-bezier(0.32,0.72,0,1) 250ms both' }}
          >
            Louis Raillon — Fullstack Developer
          </p>
        </div>
      )}
    </>
  )
}
