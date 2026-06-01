"use client"
import { useEffect, useRef } from 'react'
import HeroSlider from './components/sections/HeroSlider'
import StatsBar from './components/sections/StatsBar'
import SpecialtySection from './components/sections/SpecialtySection'
import Testimonials from './components/sections/Testimonials'
import AwardsBadges from './components/sections/AwardsBadges'
import CTASection from './components/sections/CTASection'

export default function HomePage() {
  const requestDemoRef = useRef(null)

  useEffect(() => {
    // Auto-scroll and open demo when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Dispatch custom event to notify layout to open demo
            window.dispatchEvent(new CustomEvent('openDemo'))
          }
        })
      },
      { threshold: 0.3 }
    )

    const currentRef = requestDemoRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      {/* Homepage */}
      <section id="homepage">
        {/* FIXED: Hooking up the custom openDemo event listener function to the slider */}
        <HeroSlider onOpenDemo={() => window.dispatchEvent(new CustomEvent('openDemo'))} />
      </section>

      <StatsBar />

      {/* Specialties */}
      <section id="specialties">
        <SpecialtySection />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      <AwardsBadges />

      {/* Request Demo */}
      <section id="request-demo" ref={requestDemoRef}>
         <CTASection onOpenDemo={() => window.dispatchEvent(new CustomEvent('openDemo'))} />
      </section>
    </>
  )
}