'use client'

import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 1px 24px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.5s ease both',
        }}
      >
        <div style={{ margin: '0 auto', maxWidth: '64rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          <a href="/" className="font-mono text-sm font-bold" style={{ color: '#00D084' }}>
            LMR <span style={{ color: '#E2E4EE' }}>Dev</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {[{ label: 'Work', href: '#projects' }, { label: 'Contact', href: '#contact' }].map(({ label, href }) => (
              <a
                key={label}
                href={href}
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
          className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          style={{ background: '#080810' }}
        >
          <div className="flex flex-col items-center gap-6">
            {[
              { label: '// work', href: '#projects' },
              { label: '// contact', href: '#contact' },
            ].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-3xl font-bold"
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
            className="absolute bottom-10 font-mono text-[10px]"
            style={{ color: '#2A2C3E', animation: 'slideUp 300ms ease 180ms both' }}
          >
            louisraillon.dev · {new Date().getFullYear()}
          </p>
        </div>
      )}
    </>
  )
}
