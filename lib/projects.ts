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
      'Manga reading platform with authentication, catalogue and page-by-page reader. Express + SQLite backend, vanilla HTML/CSS/JS frontend.',
    stack: ['Node.js', 'Express', 'SQLite', 'HTML', 'CSS'],
    github: 'https://github.com/louisraillon/scantrad',
    live: 'https://scantrad.lmraillondev.com',
    image: '/images/scantrad.png',
    featured: true,
  },
  {
    id: 'zenith',
    title: 'Zenith Hanoi',
    type: 'Frontend',
    description:
      'Website for Zenith Hanoi, a yoga and pilates studio founded in 2007. Clean design, class listings, schedule and contact.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://zenith1.lmraillondev.com',
    github: 'https://github.com/louisraillon/zenith-hanoi',
    image: '/images/zenith.png',
    featured: false,
  },
  {
    id: 'tamcoc',
    title: 'Little Tam Coc',
    type: 'Frontend',
    description:
      'Website for Little Tam Coc, a boutique villa in Ninh Binh, Vietnam. Room showcase, photo gallery and booking.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query', 'Framer Motion'],
    live: 'https://littletamcoc.lmraillondev.com',
    github: 'https://github.com/louisraillon/little-tam-coc-resort-site',
    image: '/images/tamcoc.png',
    featured: false,
  },
]
