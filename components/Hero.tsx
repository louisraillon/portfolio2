export default function Hero() {
  return (
    <section
      className="relative"
      style={{ minHeight: '100dvh', paddingTop: 'clamp(6rem, 18vh, 10rem)', paddingBottom: '5rem' }}
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

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-5xl px-6">

        {/* Status */}
        <div className="mb-8 flex items-center gap-2.5">
          <span
            className="pulse h-2 w-2 rounded-full"
            style={{ background: '#00D084' }}
            aria-hidden="true"
          />
          <span className="font-mono text-xs" style={{ color: '#00D084' }}>
            available for freelance
          </span>
        </div>

        {/* Headline — larger to fill more vertical space */}
        <h1
          className="font-bold leading-[1] tracking-tight"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 10rem)',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          <span style={{ color: '#E2E4EE' }}>Louis </span>
          <span style={{ color: '#00D084' }}>Raillon.</span>
        </h1>

        {/* Role */}
        <p className="mt-6 font-mono text-base" style={{ color: '#565870' }}>
          Fullstack Developer — Paris, France
        </p>

        {/* Description */}
        <p
          className="mt-5 max-w-lg font-body text-base leading-relaxed"
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
      </div>

      {/* Tech strip — absolutely pinned to bottom of section */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
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

    </section>
  )
}
