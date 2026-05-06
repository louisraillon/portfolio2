import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p className="font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
          © {new Date().getFullYear()} Louis Raillon
        </p>
        <p className="font-mono text-[10px]" style={{ color: '#2A2C3E' }}>
          Paris, France
        </p>
      </footer>
    </>
  )
}
