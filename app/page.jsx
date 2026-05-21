
import Navbar          from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSlider from './components/sections/HeroSlider'
import StatsBar from './components/sections/StatsBar'
import SolutionsGrid from './components/sections/SolutionsGrid'
import AIFeatures from './components/sections/AIFeature'
import SpecialtySection from './components/sections/SpecialtySection'
import Testimonials from './components/sections/Testimonials'
import AwardsBadges from './components/sections/AwardsBadges'
import CTASection      from './components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
         {/* 1 · Full-viewport hero with rotating slides */}
        <HeroSlider />
        {/* 2 · Key metrics row */}
        <StatsBar />
        {/* 3 · Core product tiles */}
        <SolutionsGrid />

        {/* 4 · AI-powered features highlight */}
        <AIFeatures />

        {/* 5 · Specialty workflows */}
        <SpecialtySection />

        {/* 6 · Social proof */}
        <Testimonials />

        {/* 7 · Industry awards */}
        <AwardsBadges />

        {/* 8 · Demo CTA banner */}
        <CTASection /> 
      </main>

      <Footer />
    </>
  )
}