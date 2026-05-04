// app/layout.tsx
import type { Metadata } from 'next'
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Louis Raillon — Fullstack Developer',
  description: 'Portfolio de Louis Raillon, développeur fullstack basé à Paris.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body style={{ background: '#0E0E0C', color: '#F2F0EB' }}>{children}</body>
    </html>
  )
}
