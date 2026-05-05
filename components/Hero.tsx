export default function Hero() {
  return (
    <section
      className="flex flex-col px-6 pb-16 pt-36 md:px-0 md:pt-48 md:pb-32"
      style={{ minHeight: '100dvh' }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col flex-1">

        {/* Status */}
        <div className="mb-10 flex items-center gap-2.5">
          <span
            className="pulse h-2 w-2 rounded-full"
            style={{ background: '#00D084' }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs" style={{ color: '#00D084' }}>
            available for freelance
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-bold leading-[1] tracking-tight"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            color: '#E2E4EE',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          Louis Raillon.
        </h1>

        {/* Role */}
        <p className="mt-5 font-mono text-base" style={{ color: '#565870' }}>
          Fullstack Developer — Paris, France
        </p>

        {/* Description */}
        <p
          className="mt-6 max-w-lg font-body text-base leading-relaxed"
          style={{ color: '#565870' }}
        >
          I build products end-to-end — APIs, databases, interfaces.
          Fast, clean, and shipped.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded font-mono text-sm font-medium transition-opacity hover:opacity-85 active:scale-[0.98]"
            style={{
              background: '#00D084',
              color: '#08080E',
              padding: '0.625rem 1.375rem',
            }}
          >
            See my work →
          </a>
          <a
            href="#contact"
            className="hero-ghost rounded font-mono text-sm transition-colors duration-150"
            style={{
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#565870',
              padding: '0.625rem 1.375rem',
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Tech strip — pushed to bottom */}
        <div className="mt-auto pt-16">
          <div
            className="flex flex-wrap items-center justify-between gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {['Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL'].map((t) => (
                <span key={t} className="font-mono text-[11px]" style={{ color: '#565870' }}>
                  {t}
                </span>
              ))}
            </div>
            <span className="font-mono text-[11px]" style={{ color: '#565870' }}>
              Paris · {new Date().getFullYear()}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
