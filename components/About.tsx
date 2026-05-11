import Counter from './Counter'
import Reveal from './Reveal'

const STATS = [
  { to: 3, suffix: '+', label: 'years building' },
  { to: 10, suffix: '+', label: 'projects shipped' },
  { to: 8, suffix: '+', label: 'happy clients' },
]

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center"
      style={{
        padding: '7rem 1.5rem',
        backgroundColor: '#0D0D1A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '56rem' }}>
        <Reveal>
          <p className="font-mono text-xs mb-4" style={{ color: '#454766' }}>// about_me</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — text */}
            <div>
              <h2
                className="font-mono font-bold leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#E2E4EE', marginBottom: '1.5rem' }}
              >
                <span style={{ color: '#00D084' }}>{'> '}</span>Who I am
              </h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#8B8EA8', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                I&apos;m a fullstack developer based in Hanoi, Vietnam. I design and ship complete products — from database schema to deployed UI.
              </p>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#8B8EA8', lineHeight: '1.9' }}>
                I work with startups and businesses that need things built right and fast. Currently open to freelance projects.
              </p>
            </div>

            {/* Right — stats/facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Focus', value: 'Full-stack web development' },
                { label: 'Stack', value: 'Node.js · React · TypeScript · SQL' },
                { label: 'Location', value: 'Hanoi, Vietnam' },
                { label: 'Status', value: 'Open to freelance' },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: '#454766' }}>{label}</p>
                  <p className="font-mono text-sm" style={{ color: '#C8CAD8' }}>{value}</p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

        {/* Animated counters */}
        <Reveal delay={150}>
          <div
            style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              background: 'rgba(0,208,132,0.03)',
              border: '1px solid rgba(0,208,132,0.1)',
            }}
          >
            {STATS.map(({ to, suffix, label }, i) => (
              <div
                key={label}
                style={{
                  padding: '2rem 1.5rem',
                  borderLeft: i > 0 ? '1px solid rgba(0,208,132,0.1)' : 'none',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-mono font-bold"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#00D084', lineHeight: 1 }}
                >
                  <Counter to={to} suffix={suffix} />
                </p>
                <p className="font-mono text-xs mt-2" style={{ color: '#8B8EA8' }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
