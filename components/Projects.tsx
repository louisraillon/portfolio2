'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <section
        id="projects"
        className="px-6 py-24 md:py-32"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="mx-auto w-full max-w-4xl text-center">

          {/* Label */}
          <p className="mb-3 font-mono text-xs" style={{ color: '#2A2C3E', textAlign: 'center' }}>
            {'// selected_work'}
          </p>

          {/* Heading */}
          <h2
            className="font-mono font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E2E4EE', textAlign: 'center' }}
          >
            Things I&apos;ve built
          </h2>

          <p className="mx-auto mt-4 font-mono text-sm" style={{ color: '#565870', maxWidth: '32rem', textAlign: 'center' }}>
            A selection of projects — full-stack apps, APIs, and tools.
          </p>

          {/* Featured */}
          <div className="mt-12">
            <ProjectCard project={featured} index={0} onClick={setSelected} />
          </div>

          {/* Rest */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} onClick={setSelected} />
            ))}
          </div>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
