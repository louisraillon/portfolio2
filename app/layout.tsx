import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Louis Raillon — Fullstack Developer',
  description: 'Fullstack developer based in Paris. I build fast, clean, deployed products.',
  openGraph: {
    title: 'Louis Raillon — Fullstack Developer',
    description: 'Fullstack developer based in Paris. I build fast, clean, deployed products.',
    url: 'https://lmraillondev.com',
    siteName: 'LMRaillon Dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louis Raillon — Fullstack Developer',
    description: 'Fullstack developer based in Paris. I build fast, clean, deployed products.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} style={{ colorScheme: 'dark' }}>
      <body style={{ color: '#E2E4EE', fontFamily: 'var(--font-mono), monospace', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
