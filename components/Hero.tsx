export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: '100dvh', padding: '6rem 1.5rem 5rem' }}
    >
      {/* Status badge */}
      <div className="mb-10 flex items-center justify-center gap-2">
        <span className="pulse h-2 w-2 rounded-full" style={{ background: '#00D084' }} aria-hidden="true" />
        <span className="cursor font-mono text-xs" style={{ color: '#00D084' }}>
          available for freelance
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-bold leading-[1] tracking-tight"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          fontFamily: 'var(--font-mono), monospace',
        }}
      >
        <span style={{ color: '#E2E4EE' }}>Louis </span>
        <span style={{ color: '#00D084' }}>Raillon.</span>
      </h1>

      {/* Role — code comment style */}
      <p className="mt-6 font-mono text-sm" style={{ color: '#565870' }}>
        <span style={{ color: '#2A2C3E' }}>{'// '}</span>
        fullstack_developer · paris · france
      </p>

      {/* Description */}
      <p
        className="mx-auto mt-6 font-mono text-sm leading-relaxed"
        style={{ color: '#565870', maxWidth: '38rem' }}
      >
        I build products end-to-end — APIs, databases, interfaces.
        Fast, clean, and shipped.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="rounded font-mono text-sm font-bold transition-opacity hover:opacity-85 active:scale-[0.98]"
          style={{ background: '#00D084', color: '#080810', padding: '0.75rem 1.75rem' }}
        >
          {'>'} See my work
        </a>
        <a
          href="#contact"
          className="ghost-btn rounded font-mono text-sm transition-colors duration-150"
          style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#565870', padding: '0.75rem 1.75rem' }}
        >
          Get in touch
        </a>
      </div>

      {/* Tech strip */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        {['Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Express'].map((t) => (
          <span key={t} className="font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
