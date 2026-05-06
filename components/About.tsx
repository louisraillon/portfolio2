import Reveal from './Reveal'

export default function About() {
  return (
    <section
      className="flex flex-col items-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '7rem 1.5rem' }}
    >
      <div style={{ width: '100%', maxWidth: '56rem' }}>
        <Reveal>
          <p className="font-mono text-xs mb-4" style={{ color: '#2A2C3E' }}>// about_me</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — text */}
            <div>
              <h2
                className="font-mono font-bold leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#E2E4EE', marginBottom: '1.5rem' }}
              >
                <span style={{ color: '#00D084' }}>{'> '}</span>Who I am
              </h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#565870', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                I&apos;m a fullstack developer based in Paris. I design and ship complete products — from database schema to deployed UI.
              </p>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#565870', lineHeight: '1.9' }}>
                I work with startups and businesses that need things built right and fast. Currently open to freelance projects.
              </p>
            </div>

            {/* Right — stats/facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Focus', value: 'Full-stack web development' },
                { label: 'Stack', value: 'Node.js · React · TypeScript · SQL' },
                { label: 'Location', value: 'Paris, France' },
                { label: 'Status', value: 'Open to freelance' },
              ].map(({ label, value }) => (
                <div key={label} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: '#2A2C3E' }}>{label}</p>
                  <p className="font-mono text-sm" style={{ color: '#E2E4EE' }}>{value}</p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
