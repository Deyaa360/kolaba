'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MainHero from '@/components/MainHero'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MainHero />
      <Testimonials />
      <Footer />
    </main>
  )
}
