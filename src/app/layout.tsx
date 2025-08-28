import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kolaba - Connect Brands with Turkish Content Creators',
  description: 'The premier platform connecting skincare brands with talented Turkish content creators for authentic user-generated content (UGC) campaigns.',
  keywords: ['UGC', 'content creators', 'brands', 'marketing', 'Turkey', 'skincare'],
  authors: [{ name: 'Kolaba Team' }],
  creator: 'Kolaba',
  openGraph: {
    title: 'Kolaba - Connect Brands with Turkish Content Creators',
    description: 'The premier platform connecting skincare brands with talented Turkish content creators for authentic user-generated content (UGC) campaigns.',
    url: 'https://kolaba.com',
    siteName: 'Kolaba',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kolaba - Connect Brands with Turkish Content Creators',
    description: 'The premier platform connecting skincare brands with talented Turkish content creators for authentic user-generated content (UGC) campaigns.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
