'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import Typewriter from './Typewriter'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-center px-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '7rem 1.5rem' }}
      >
        <div style={{ width: '100%', maxWidth: '56rem', textAlign: 'center' }}>

          <Reveal>
            <p className="mb-4 font-mono text-xs" style={{ color: '#2A2C3E', textAlign: 'center' }}>
              <Typewriter text="// selected_work" speed={55} />
            </p>
            <h2
              className="font-mono font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E2E4EE', textAlign: 'center' }}
            >
              <Typewriter text="Things I've built" speed={42} delay={300} />
            </h2>
            <p className="font-mono text-sm" style={{ color: '#565870', maxWidth: '32rem', textAlign: 'center', margin: '1.25rem auto 2.5rem' }}>
              A selection of projects — full-stack apps, APIs, and tools.
            </p>
          </Reveal>

          {/* Featured */}
          <Reveal delay={100}>
            <div style={{ marginTop: '1rem' }}>
              <ProjectCard project={featured} index={0} onClick={setSelected} />
            </div>
          </Reveal>

          {/* Rest */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i + 1} onClick={setSelected} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
