import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-16 md:py-36"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <ScrollReveal>
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-faint-ghost">
          Contact
        </p>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <h2
          className="font-fraunces italic leading-[0.95] tracking-tight text-warm-white"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          Let&apos;s build
          <br />
          something.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <a
          href="mailto:louisraillon61@gmail.com"
          className="email-link mt-10 inline-block font-mono text-sm transition-colors duration-200"
        >
          louisraillon61@gmail.com ↗
        </a>
      </ScrollReveal>

      <ScrollReveal delay={220}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-geist text-sm text-warm-white transition-opacity hover:opacity-70"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.625rem 1.25rem',
            }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-geist text-sm text-warm-white transition-opacity hover:opacity-70"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '0.625rem 1.25rem',
            }}
          >
            LinkedIn ↗
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <p className="mt-20 font-mono text-[10px] text-faint-ghost">
          © {new Date().getFullYear()} Louis Raillon
        </p>
      </ScrollReveal>
    </section>
  )
}
