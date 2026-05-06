'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

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
            {LINKS.map(({ label, href, id }) => {
              const isActive = active === id
              return (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-xs transition-colors duration-150"
                  style={{ color: isActive ? '#E2E4EE' : '#565870', position: 'relative' }}
                  onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#E2E4EE' }}
                  onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#565870' }}
                >
                  {label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: '#00D084',
                        borderRadius: 1,
                        animation: 'fadeIn 0.2s ease both',
                      }}
                    />
                  )}
                </a>
              )
            })}
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
