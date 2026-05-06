import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

// Below-fold — code-split, still SSR'd for SEO, JS loads lazily
const About    = dynamic(() => import('@/components/About'))
const Projects = dynamic(() => import('@/components/Projects'))
const Contact  = dynamic(() => import('@/components/Contact'))
const Footer   = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
