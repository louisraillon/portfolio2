import CodeConsole from './CodeConsole'
import MatrixRain from './MatrixRain'
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
          linear-gradient(rgba(0,208,132,0.04) 8px, transparent 8px),
          linear-gradient(90deg, rgba(0,208,132,0.04) 8px, transparent 8px),
          linear-gradient(rgba(0,208,132,0.1) 3px, transparent 3px),
          linear-gradient(90deg, rgba(0,208,132,0.1) 3px, transparent 3px),
          linear-gradient(rgba(0,208,132,0.45) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,208,132,0.45) 1px, transparent 1px)
        `,
        backgroundSize: '150px 150px',
      }}
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Vignette overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 45% at 50% 50%, transparent 0%, #050508 100%)',
      }} />

      {/* Status badge */}
      <div style={{ ...anim(100), marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span className="pulse h-2 w-2 rounded-full" style={{ background: '#00D084' }} aria-hidden="true" />
        <span className="cursor font-mono text-xs" style={{ color: '#00D084' }}>
          available for freelance
        </span>
      </div>

      {/* Name — secondary, above role */}
      <p
        className="font-mono text-sm"
        style={{ ...anim(150), color: '#565870', marginBottom: '1rem', letterSpacing: '0.1em' }}
      >
        <span style={{ color: '#2A2C3E' }}>{'// '}</span>Louis Minh Raillon · Hanoi, Vietnam
      </p>

      {/* Headline — role first, clear */}
      <h1
        className="font-bold leading-[1] tracking-tight"
        style={{
          ...anim(200),
          fontSize: 'clamp(3rem, 9vw, 8rem)',
          fontFamily: 'var(--font-mono), monospace',
          textAlign: 'center',
        }}
      >
        <Typewriter text="Fullstack " speed={70} delay={300} triggerOnLoad style={{ color: '#E2E4EE' }} />
        <span className="glitch">
          <Typewriter text="Developer" speed={70} delay={1000} triggerOnLoad style={{ color: '#00D084' }} />
        </span>
      </h1>

      {/* Description */}
      <p
        className="font-mono text-sm leading-relaxed"
        style={{ ...anim(400), color: '#565870', maxWidth: '36rem', marginTop: '1.75rem', textAlign: 'center' }}
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

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          animation: 'fadeIn 1s ease 1200ms both',
        }}
      >
        <span className="font-mono" style={{ fontSize: '9px', color: '#2A2C3E', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{ position: 'relative', width: 1, height: 40, background: 'rgba(255,255,255,0.06)' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            background: '#00D084',
            animation: 'scrollLine 1.8s ease-in-out infinite',
          }} />
        </div>
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
