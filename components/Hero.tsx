// components/Hero.tsx
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      className="grid items-end gap-8 px-6 pb-20 pt-36 md:grid-cols-[3fr_2fr] md:px-16 md:pb-32 md:pt-44"
      style={{ minHeight: '100dvh' }}
    >
      {/* Left: headline + CTA */}
      <div>
        <ScrollReveal delay={0}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint-ghost">
            Fullstack Developer
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h1
            className="mt-5 font-fraunces italic leading-[1.05] tracking-tight text-warm-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
          >
            Crafting
            <br />
            digital
            <br />
            products.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-6 flex items-center gap-2.5">
            <span
              className="pulse h-2 w-2 rounded-full"
              style={{ background: '#C9A86C' }}
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-muted-ash">Open to projects</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <a
            href="#projects"
            className="mt-8 inline-block rounded-full px-6 py-3 font-geist text-sm font-semibold transition-transform duration-200 active:-translate-y-px"
            style={{ background: '#C9A86C', color: '#0E0E0C' }}
          >
            View Work
          </a>
        </ScrollReveal>
      </div>

      {/* Right: placeholder card */}
      <ScrollReveal delay={120} className="hidden md:block">
        <div
          className="flex h-72 items-center justify-center rounded-2xl"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span className="font-mono text-xs text-faint-ghost">[ photo ]</span>
        </div>
      </ScrollReveal>
    </section>
  )
}
