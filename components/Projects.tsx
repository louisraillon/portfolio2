// components/Projects.tsx
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
        className="px-6 py-24 md:px-16 md:py-36"
      >
        <ScrollReveal>
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-faint-ghost">
            Selected Work
          </p>
        </ScrollReveal>

        <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
          {/* Featured card — spans 2 rows on desktop */}
          <ScrollReveal delay={0} className="md:row-span-2">
            <div className="h-full">
              <ProjectCard project={featured} featured onClick={setSelected} />
            </div>
          </ScrollReveal>

          {/* Secondary cards */}
          {secondary.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i + 1) * 80}>
              <ProjectCard project={project} onClick={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
