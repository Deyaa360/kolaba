'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Portfolio />
      <Footer />
    </main>
  )
}
