'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/projects'
import ProjectModal from './ProjectModal'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      <section id="projects" className="px-6 py-24 md:px-16 md:py-36">
        <ScrollReveal>
          <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.25em] text-faint-ghost">
            Selected Work
          </p>
        </ScrollReveal>

        <div>
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <button
                onClick={() => setSelected(project)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full text-left"
                aria-label={`Voir le projet ${project.title}`}
              >
                <div
                  className="flex items-center justify-between py-7 transition-colors duration-300"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    background:
                      hoveredId === project.id ? 'rgba(255,255,255,0.015)' : 'transparent',
                    paddingLeft: hoveredId === project.id ? '8px' : '0px',
                    transition: 'background 300ms ease, padding-left 300ms cubic-bezier(0.32,0.72,0,1)',
                  }}
                >
                  {/* Left: number + title + type */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className="shrink-0 font-mono text-xs tabular-nums transition-colors duration-300"
                      style={{
                        color:
                          hoveredId === project.id
                            ? '#C4A05A'
                            : 'rgba(255,255,255,0.15)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p
                        className="font-fraunces italic transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                          color: hoveredId === project.id ? '#F0EDE8' : '#B8B5B0',
                        }}
                      >
                        {project.title}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-muted-ash">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  {/* Right: stack tags + arrow */}
                  <div className="flex shrink-0 items-center gap-4">
                    <div className="hidden gap-1.5 md:flex">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] text-muted-ash"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '9999px',
                            padding: '2px 8px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span
                      className="font-mono text-base"
                      style={{
                        color: '#C4A05A',
                        transform: hoveredId === project.id ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 300ms cubic-bezier(0.32,0.72,0,1)',
                        display: 'inline-block',
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom border on last item */}
                {i === projects.length - 1 && (
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
                )}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
