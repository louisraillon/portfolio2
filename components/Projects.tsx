'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  const featured = projects.find((p) => p.featured)!
  const secondary = projects.filter((p) => !p.featured)

  return (
    <>
      <section
        id="projects"
        className="px-6 py-24 md:px-12 md:py-36"
        style={{ borderTop: '1px solid rgba(26,25,22,0.07)' }}
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-3">
                  Selected Work
                </p>
                <h2
                  className="font-display font-extrabold leading-tight tracking-tight text-ink"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
                >
                  Things I&apos;ve built
                </h2>
              </div>
              <span className="hidden font-mono text-[10px] text-ink-3 md:block">
                {projects.length} projects
              </span>
            </div>
          </ScrollReveal>

          {/* Bento grid: featured (2×2) + secondary stack */}
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <div className="md:col-span-2 md:row-span-2" style={{ height: '100%' }}>
            <ScrollReveal className="h-full">
              <ProjectCard project={featured} featured onClick={setSelected} />
            </ScrollReveal>
            </div>

            {secondary.map((project, i) => (
              <ScrollReveal key={project.id} delay={(i + 1) * 80}>
                <ProjectCard project={project} onClick={setSelected} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
