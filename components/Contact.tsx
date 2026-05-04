import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-16 md:py-36"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <ScrollReveal>
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint-ghost">
          Contact
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <h2
          className="font-fraunces italic text-warm-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}
        >
          Let's build
          <br />
          something.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:louisraillon61@gmail.com"
            className="rounded-full font-geist text-sm font-semibold transition-opacity hover:opacity-85"
            style={{
              background: '#C9A86C',
              color: '#0E0E0C',
              padding: '0.75rem 1.375rem',
            }}
          >
            Email
          </a>
          <a
            href="https://github.com/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-geist text-sm text-warm-white"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.75rem 1.375rem',
            }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-geist text-sm text-warm-white"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.75rem 1.375rem',
            }}
          >
            LinkedIn ↗
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <p className="mt-16 font-mono text-[10px] text-faint-ghost">
          © {new Date().getFullYear()} Louis Raillon
        </p>
      </ScrollReveal>
    </section>
  )
}
