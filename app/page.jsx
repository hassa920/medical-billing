"use client"
import HeroSlider from './components/sections/HeroSlider'
import StatsBar from './components/sections/StatsBar'
import SpecialtySection from './components/sections/SpecialtySection'
import Testimonials from './components/sections/Testimonials'
import AwardsBadges from './components/sections/AwardsBadges'
import CTASection from './components/sections/CTASection'

export default function HomePage() {
  const openDemo = () => window.dispatchEvent(new CustomEvent('openDemo'))

  return (
    <>
      <section id="homepage">
        <HeroSlider onOpenDemo={openDemo} />
      </section>

      <StatsBar />

      <section id="specialties">
        <SpecialtySection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <AwardsBadges />

      <section id="request-demo">
        <CTASection onOpenDemo={openDemo} />
      </section>
    </>
  )
}