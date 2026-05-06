import CodeConsole from './CodeConsole'
import Typewriter from './Typewriter'

const TECH = [
  'Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Express',
  'Docker', 'Redis', 'Prisma', 'GraphQL', 'MongoDB', 'Python',
  'Tailwind CSS', 'Git', 'AWS', 'Vercel', 'REST API', 'Supabase',
]

const anim = (delay: number) => ({
  animation: `fadeSlideUp 0.7s ease ${delay}ms both`,
})

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      style={{
        minHeight: '100dvh',
        padding: '7rem 1.5rem 6rem',
        textAlign: 'center',
        backgroundColor: '#050508',
        backgroundImage: `
          linear-gradient(45deg, rgba(0,208,132,0.2) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(0,208,132,0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Vignette overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, #050508 100%)',
      }} />
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
        <Typewriter text="LMRaillon " speed={80} delay={300} triggerOnLoad style={{ color: '#E2E4EE' }} />
        <Typewriter text="Dev.com" speed={80} delay={980} triggerOnLoad style={{ color: '#00D084' }} />
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

      {/* Tech strip — marquee */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', padding: '0.9rem 0', animation: 'fadeIn 1s ease 800ms both' }}
      >
        <div className="marquee-track">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm font-bold"
              style={{ color: '#E2E4EE', padding: '0 2rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              <span style={{ color: '#00D084', marginRight: '0.5rem' }}>›</span>{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
