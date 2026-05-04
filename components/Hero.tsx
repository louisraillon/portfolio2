import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center px-6 pb-16 pt-28 md:px-12 md:pb-24 md:pt-36"
      style={{ minHeight: '100dvh' }}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">

        {/* Left: headline block */}
        <div>
          <ScrollReveal>
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                background: 'rgba(27,67,50,0.09)',
                border: '1px solid rgba(27,67,50,0.18)',
              }}
            >
              <span
                className="pulse h-1.5 w-1.5 rounded-full"
                style={{ background: '#1B4332' }}
                aria-hidden="true"
              />
              <span
                className="font-mono text-[10px] font-medium uppercase tracking-[0.2em]"
                style={{ color: '#1B4332' }}
              >
                Open to projects
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1
              className="font-display font-extrabold leading-[0.93] tracking-tight text-ink"
              style={{ fontSize: 'clamp(3.25rem, 8vw, 7rem)' }}
            >
              Building
              <br />
              products
              <br />
              <span style={{ color: '#1B4332' }}>people love.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-7 max-w-sm font-body text-base leading-relaxed text-ink-2">
              Fullstack developer based in Paris. I craft fast, accessible, and
              beautifully designed digital products — from idea to deployment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full px-6 py-3 font-body text-sm font-medium text-white transition-opacity hover:opacity-88 active:-translate-y-px"
                style={{ background: '#1B4332' }}
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-2"
                style={{ border: '1px solid rgba(26,25,22,0.15)' }}
              >
                Get in touch
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: floating mini-bento */}
        <ScrollReveal delay={120} className="hidden md:block">
          <div className="flex flex-col gap-3">

            {/* Availability card — forest green */}
            <div
              className="rounded-[1.5rem] p-[3px]"
              style={{
                background: 'rgba(27,67,50,0.12)',
                border: '1px solid rgba(27,67,50,0.2)',
              }}
            >
              <div
                className="flex flex-col gap-4 rounded-[calc(1.5rem-3px)] p-6"
                style={{ background: '#1B4332' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="pulse h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-200">
                      Available now
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-300/70">Paris, FR</span>
                </div>
                <p className="font-display text-xl font-bold leading-snug text-white">
                  Open to freelance
                  <br />
                  <span className="text-emerald-200">& collaborations.</span>
                </p>
              </div>
            </div>

            {/* Stack card — white */}
            <div
              className="rounded-[1.5rem] p-[3px]"
              style={{
                background: 'rgba(26,25,22,0.04)',
                border: '1px solid rgba(26,25,22,0.09)',
              }}
            >
              <div
                className="rounded-[calc(1.5rem-3px)] p-5"
                style={{
                  background: '#FFFFFF',
                  boxShadow: 'inset 0 1px 1px rgba(26,25,22,0.04)',
                }}
              >
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-3">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Tailwind'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] text-ink-2"
                      style={{
                        background: 'rgba(26,25,22,0.05)',
                        border: '1px solid rgba(26,25,22,0.09)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
