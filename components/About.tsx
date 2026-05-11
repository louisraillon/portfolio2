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
        backgroundColor: '#d9d7d7',
        borderTop: '1px solid #D0D0D0',
        borderBottom: '1px solid #D0D0D0',
      }}
    >
      <div style={{ width: '100%', maxWidth: '56rem' }}>
        <Reveal>
          <p className="font-mono text-xs mb-4" style={{ color: '#7A7870' }}>// about_me</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — text */}
            <div>
              <h2
                className="font-mono font-bold leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#1A1A18', marginBottom: '1.5rem' }}
              >
                <span style={{ color: '#00A86B' }}>{'> '}</span>Who I am
              </h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#3E3D38', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                I&apos;m a fullstack developer based in Hanoi, Vietnam. I design and ship complete products — from database schema to deployed UI.
              </p>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#3E3D38', lineHeight: '1.9' }}>
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
                <div key={label} style={{ borderTop: '1px solid #D0D0D0', paddingTop: '1.25rem' }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: '#7A7870' }}>{label}</p>
                  <p className="font-mono text-sm" style={{ color: '#1A1A18' }}>{value}</p>
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
              borderRadius: '0.75rem',
              overflow: 'hidden',
              background: '#EFEFEF',
              border: '1px solid #D0D0D0',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            }}
          >
            {STATS.map(({ to, suffix, label }, i) => (
              <div
                key={label}
                style={{
                  padding: '2rem 1.5rem',
                  borderLeft: i > 0 ? '1px solid #D0D0D0' : 'none',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-mono font-bold"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#00A86B', lineHeight: 1 }}
                >
                  <Counter to={to} suffix={suffix} />
                </p>
                <p className="font-mono text-xs mt-2" style={{ color: '#7A7870' }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
