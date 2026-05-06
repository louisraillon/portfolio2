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
    type: 'Site vitrine',
    description:
      'Site web pour Zenith Hanoi, studio de yoga et pilates fondé en 2007. Design épuré, présentation des cours, planning et contact.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://zenith1.lmraillondev.com',
    image: '/images/zenith.png',
    featured: true,
  },
  {
    id: 'tamcoc',
    title: 'Little Tam Coc',
    type: 'Site vitrine',
    description:
      'Site web pour Little Tam Coc, une villa boutique située à Ninh Bình, Vietnam. Présentation des chambres, galerie photo et réservation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://littletamcoc.lmraillondev.com',
    image: '/images/tamcoc.png',
    featured: true,
  },
]
