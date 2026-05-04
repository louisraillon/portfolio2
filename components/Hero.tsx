import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-between px-6 pb-12 pt-36 md:px-16 md:pb-16"
      style={{ minHeight: '100dvh' }}
    >
      {/* Ambient warm glow behind headline */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(196,160,90,0.07) 0%, transparent 68%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Top eyebrow */}
      <ScrollReveal>
        <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-faint-ghost">
          Fullstack Developer — Paris
        </p>
      </ScrollReveal>

      {/* Bottom block: headline + divider row */}
      <div className="relative z-10">
        <ScrollReveal delay={80}>
          <h1
            className="font-fraunces italic leading-[0.93] tracking-tight text-warm-white"
            style={{ fontSize: 'clamp(4rem, 12vw, 10.5rem)' }}
          >
            Crafting
            <br />
            digital
            <br />
            products.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="mt-10 flex items-center justify-between border-t pt-6"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="pulse h-1.5 w-1.5 rounded-full"
                style={{ background: '#C4A05A' }}
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] text-muted-ash">Open to projects</span>
            </div>
            <a
              href="#projects"
              className="font-mono text-[11px] tracking-wider text-muted-ash transition-colors duration-200 hover:text-warm-white"
            >
              View Work ↓
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
