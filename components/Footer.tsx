'use client'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p className="font-mono text-[10px]" style={{ color: '#565870' }}>
        © {new Date().getFullYear()} Louis Minh Raillon
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a
          href="https://www.malt.fr/profile/louisraillon"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] transition-colors duration-150"
          style={{ color: '#565870', textDecoration: 'none' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
        >
          Malt ↗
        </a>
        <a
          href="https://linkedin.com/in/louisraillon"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] transition-colors duration-150"
          style={{ color: '#565870', textDecoration: 'none' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#E2E4EE')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#565870')}
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
