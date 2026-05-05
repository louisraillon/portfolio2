'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <section
        id="projects"
        className="px-6 py-24 md:px-0 md:py-32"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="mx-auto w-full max-w-5xl px-6">
          {/* Section header */}
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#2A2C3E' }}>
                Selected Work
              </p>
              <h2
                className="font-mono font-bold leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#E2E4EE' }}
              >
                Things I&apos;ve built
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] md:block" style={{ color: '#2A2C3E' }}>
              {projects.length} projects
            </span>
          </div>

          {/* Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
