import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  title: 'Louis Minh Raillon — Fullstack Developer',
  description: 'Fullstack developer based in Hanoi, Vietnam. I build fast, clean, deployed products.',
  openGraph: {
    title: 'Louis Minh Raillon — Fullstack Developer',
    description: 'Fullstack developer based in Hanoi, Vietnam. I build fast, clean, deployed products.',
    url: 'https://lmraillondev.com',
    siteName: 'LMRaillon Dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louis Minh Raillon — Fullstack Developer',
    description: 'Fullstack developer based in Hanoi, Vietnam. I build fast, clean, deployed products.',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // nonce set by middleware — Next.js App Router applies it automatically to inline hydration scripts
  const nonce = (await headers()).get('x-nonce') ?? ''

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} style={{ colorScheme: 'dark' }}>
      <body
        nonce={nonce}
        style={{ color: '#E2E4EE', fontFamily: 'var(--font-mono), monospace', overflowX: 'hidden' }}
      >
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
