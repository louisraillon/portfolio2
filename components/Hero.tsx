import CodeConsole from './CodeConsole'

const anim = (delay: number) => ({
  animation: `fadeSlideUp 0.7s ease ${delay}ms both`,
})

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{ minHeight: '100dvh', padding: '7rem 1.5rem 6rem', textAlign: 'center' }}
    >
      {/* Status badge */}
      <div style={{ ...anim(100), marginBottom: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span className="pulse h-2 w-2 rounded-full" style={{ background: '#00D084' }} aria-hidden="true" />
        <span className="cursor font-mono text-xs" style={{ color: '#00D084' }}>
          available for freelance
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-bold leading-[1] tracking-tight"
        style={{
          ...anim(200),
          fontSize: 'clamp(3.5rem, 10vw, 9rem)',
          fontFamily: 'var(--font-mono), monospace',
          textAlign: 'center',
        }}
      >
        <span style={{ color: '#E2E4EE' }}>LMRaillon </span>
        <span style={{ color: '#00D084' }}>Dev.com</span>
      </h1>

      {/* Role */}
      <p className="font-mono text-sm" style={{ ...anim(300), color: '#565870', marginTop: '2rem', textAlign: 'center' }}>
        <span style={{ color: '#2A2C3E' }}>{'// '}</span>
        fullstack_developer · paris · france
      </p>

      {/* Description */}
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ ...anim(400), color: '#565870', maxWidth: '36rem', marginTop: '1.25rem', textAlign: 'center' }}
      >
        I build products end-to-end — APIs, databases, interfaces.
        Fast, clean, and shipped.
      </p>

      {/* CTAs */}
      <div style={{ ...anim(500), marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <a
          href="#projects"
          className="rounded font-mono text-sm font-bold transition-opacity hover:opacity-85 active:scale-[0.98]"
          style={{ background: '#00D084', color: '#080810', padding: '0.8rem 2rem' }}
        >
          {'>'} See my work
        </a>
        <a
          href="#contact"
          className="ghost-btn rounded font-mono text-sm transition-colors duration-150"
          style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#565870', padding: '0.8rem 2rem' }}
        >
          Get in touch
        </a>
      </div>

      {/* Code console */}
      <div style={{ ...anim(650), marginTop: '4rem', width: '100%', maxWidth: '40rem' }}>
        <CodeConsole />
      </div>

      {/* Tech strip */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0 2rem', padding: '1.25rem 1.5rem', animation: 'fadeIn 1s ease 800ms both' }}
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
