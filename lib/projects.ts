// lib/projects.ts
export type Project = {
  id: string
  title: string
  type: string
  description: string
  stack: string[]
  github?: string
  live?: string
  image?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'scantrad',
    title: 'Scantrad Reader',
    type: 'Full-stack web app',
    description:
      'Plateforme de lecture de mangas avec authentification, catalogue et lecteur page par page. Backend Express + SQLite, frontend HTML/CSS/JS vanilla.',
    stack: ['Node.js', 'Express', 'SQLite', 'HTML', 'CSS'],
    github: 'https://github.com/louisraillon/scantrad',
    image: '/images/scantrad.png',
    featured: true,
  },
  {
    id: 'project-beta',
    title: 'Project Beta',
    type: 'API / Backend',
    description: 'À compléter — décris ton projet ici.',
    stack: ['Node.js', 'TypeScript'],
    image: '/images/project-beta.png',
    featured: false,
  },
  {
    id: 'project-gamma',
    title: 'Project Gamma',
    type: 'Frontend',
    description: 'À compléter — décris ton projet ici.',
    stack: ['React', 'Tailwind'],
    image: '/images/project-gamma.png',
    featured: false,
  },
]
