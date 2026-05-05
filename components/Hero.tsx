export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{ minHeight: '100dvh', paddingTop: '5rem', paddingBottom: '3rem' }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-6 text-center">

        {/* Status */}
        <div className="mb-8 flex items-center justify-center gap-2.5">
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
          className="font-bold leading-[1.05] tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          <span style={{ color: '#E2E4EE' }}>Louis </span>
          <span style={{ color: '#00D084' }}>Raillon.</span>
        </h1>

        {/* Role */}
        <p className="mt-6 font-mono text-sm" style={{ color: '#565870' }}>
          Fullstack Developer — Paris, France
        </p>

        {/* Description */}
        <p
          className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed"
          style={{ color: '#565870' }}
        >
          I build products end-to-end — APIs, databases, interfaces.
          Fast, clean, and shipped.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

        {/* Tech strip */}
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {['Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL'].map((t) => (
            <span key={t} className="font-mono text-[11px]" style={{ color: '#565870' }}>
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
