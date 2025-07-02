import React from 'react'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import ServicesSection from '@/components/organisms/ServicesSection'
import PortfolioSection from '@/components/organisms/PortfolioSection'
import TestimonialsSection from '@/components/organisms/TestimonialsSection'
import AboutSection from '@/components/organisms/AboutSection'
import PricingSection from '@/components/organisms/PricingSection'
import Footer from '@/components/organisms/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default HomePage