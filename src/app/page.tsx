'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MainHero from '@/components/MainHero'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MainHero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  )
}
