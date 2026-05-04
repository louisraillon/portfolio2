// components/Nav.tsx
'use client'

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
      <div
        className="flex items-center justify-between gap-8 rounded-full px-5 py-2.5"
        style={{
          background: 'rgba(14,14,12,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <span className="font-mono text-xs tracking-widest text-warm-white">L·R</span>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="font-geist text-xs text-muted-ash transition-colors duration-200 hover:text-warm-white py-3 inline-block"
          >
            Work
          </a>
          <a
            href="#contact"
            className="font-geist text-xs text-muted-ash transition-colors duration-200 hover:text-warm-white py-3 inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
