'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-0 md:py-32"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* Label */}
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#2A2C3E' }}>
          Contact
        </p>

        {/* Headline */}
        <h2
          className="font-mono font-bold leading-[1] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#E2E4EE' }}
        >
          Get in touch.
        </h2>

        {/* Sub */}
        <p className="mt-6 max-w-md font-body text-base leading-relaxed" style={{ color: '#565870' }}>
          Have a project in mind or want to collaborate? Send me an email and I&apos;ll get back to you within 24 hours.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:louisraillon61@gmail.com"
            className="rounded font-mono text-sm font-medium transition-opacity hover:opacity-85 active:scale-[0.98]"
            style={{
              background: '#00D084',
              color: '#08080E',
              padding: '0.625rem 1.375rem',
            }}
          >
            louisraillon61@gmail.com
          </a>
          <a
            href="https://github.com/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded font-mono text-sm transition-colors duration-150"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#565870',
              padding: '0.625rem 1.375rem',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/louisraillon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded font-mono text-sm transition-colors duration-150"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#565870',
              padding: '0.625rem 1.375rem',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Footer */}
        <div
          className="mt-20 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}
        >
          <p className="font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
            © {new Date().getFullYear()} Louis Raillon
          </p>
          <p className="font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
            Paris, France
          </p>
        </div>
      </div>
    </section>
  )
}
