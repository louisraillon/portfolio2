'use client'

import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          background: 'rgba(8,8,14,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="font-mono text-sm font-bold" style={{ color: '#00D084' }}>
            L.R
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {['Work', 'Contact'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-mono text-xs transition-colors duration-150"
                style={{ color: '#565870' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E2E4EE')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#565870')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="relative flex h-7 w-7 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: '#565870',
                transform: open ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: '#565870',
                transform: open ? 'rotate(-45deg) translateY(-4px)' : 'none',
                opacity: open ? 1 : 1,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
          style={{ background: '#08080E' }}
        >
          <div className="flex flex-col gap-6">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Contact', href: '#contact' },
            ].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-4xl font-bold"
                style={{
                  color: '#E2E4EE',
                  animation: `slideUp 300ms ease ${i * 60}ms both`,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <p
            className="absolute bottom-10 left-8 font-mono text-[10px]"
            style={{ color: '#2A2C3E', animation: 'slideUp 300ms ease 180ms both' }}
          >
            Louis Raillon — Fullstack Developer
          </p>
        </div>
      )}
    </>
  )
}
