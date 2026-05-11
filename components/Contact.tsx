'use client'

import Reveal from './Reveal'
import Typewriter from './Typewriter'

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-6"
      style={{
        padding: '7rem 1.5rem',
        backgroundColor: '#F5F4F2',
        borderTop: '1px solid #D6D4D0',
      }}
    >
      <div style={{ width: '100%', maxWidth: '56rem', textAlign: 'center' }}>

        <Reveal>
          <p className="mb-5 font-mono text-xs" style={{ color: '#7A7870', textAlign: 'center' }}>
            <Typewriter text="// contact" speed={55} />
          </p>
          <h2
            className="font-mono font-bold leading-[1] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#1A1A18', textAlign: 'center' }}
          >
            <Typewriter text="Get in touch." speed={60} delay={250} />
          </h2>
          <p
            className="font-mono text-sm leading-relaxed"
            style={{ color: '#3E3D38', maxWidth: '34rem', textAlign: 'center', margin: '2rem auto 2.5rem' }}
          >
            Have a project in mind? Send me an email and I&apos;ll get back within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="font-mono"
            style={{
              marginBottom: '2.5rem',
              textAlign: 'center',
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              color: '#00A86B',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ color: '#7A7870' }}>{'→ '}</span>
            <Typewriter text="louisraillon1234@gmail.com" speed={28} />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="mailto:louisraillon1234@gmail.com"
              className="rounded font-mono text-sm font-bold transition-opacity hover:opacity-85 active:scale-[0.98]"
              style={{ background: '#00A86B', color: '#FFFFFF', padding: '0.75rem 1.75rem' }}
            >
              {'>'} Send me an email
            </a>
            <a
              href="https://www.malt.fr/profile/louisraillon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-mono text-sm transition-colors duration-150"
              style={{ border: '1px solid #C8C6C2', color: '#3E3D38', padding: '0.75rem 1.5rem' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#1A1A18'; (e.currentTarget as HTMLElement).style.borderColor = '#1A1A18' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#3E3D38'; (e.currentTarget as HTMLElement).style.borderColor = '#C8C6C2' }}
            >
              Malt ↗
            </a>
            <a
              href="https://linkedin.com/in/louisraillon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-mono text-sm transition-colors duration-150"
              style={{ border: '1px solid #C8C6C2', color: '#3E3D38', padding: '0.75rem 1.5rem' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#1A1A18'; (e.currentTarget as HTMLElement).style.borderColor = '#1A1A18' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#3E3D38'; (e.currentTarget as HTMLElement).style.borderColor = '#C8C6C2' }}
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
