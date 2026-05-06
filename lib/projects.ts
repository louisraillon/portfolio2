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
    live: 'https://scantrad.lmraillondev.com',
    image: '/images/scantrad.png',
    featured: true,
  },
  {
    id: 'zenith',
    title: 'Zenith Hanoi',
    type: 'Frontend',
    description:
      'Site web pour Zenith Hanoi, studio de yoga et pilates fondé en 2007. Design épuré, présentation des cours, planning et contact.',
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
      'Site web pour Little Tam Coc, une villa boutique située à Ninh Bình, Vietnam. Présentation des chambres, galerie photo et réservation.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query', 'Framer Motion'],
    live: 'https://littletamcoc.lmraillondev.com',
    github: 'https://github.com/louisraillon/little-tam-coc-resort-site',
    image: '/images/tamcoc.png',
    featured: false,
  },
]
