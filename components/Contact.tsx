import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: '#1B4332' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-36">
        <ScrollReveal>
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300/60">
            Contact
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2
            className="font-display font-extrabold leading-[0.93] tracking-tight text-white"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: '#86efac' }}>something.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-8 max-w-md font-body text-base leading-relaxed text-emerald-100/70">
            Have a project in mind or want to collaborate? Send me an email and
            I&apos;ll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:louisraillon61@gmail.com"
              className="rounded-full px-7 py-3.5 font-body text-sm font-semibold text-forest transition-opacity hover:opacity-90 active:-translate-y-px"
              style={{ background: '#FFFFFF' }}
            >
              louisraillon61@gmail.com
            </a>
            <a
              href="https://github.com/louisraillon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3.5 font-body text-sm text-white transition-opacity hover:opacity-70"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/louisraillon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3.5 font-body text-sm text-white transition-opacity hover:opacity-70"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              LinkedIn ↗
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div
            className="mt-20 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}
          >
            <p className="font-mono text-[10px] text-emerald-300/50">
              © {new Date().getFullYear()} Louis Raillon
            </p>
            <p className="font-mono text-[10px] text-emerald-300/50">
              Paris, France
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
