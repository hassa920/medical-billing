import HeroSlider             from '../components/sections/HeroSlider'
import AboutMedicore          from '../components/CompanySections/AboutMedicore'
import FAQs                  from '../components/CompanySections/FAQS'
import AwardsAndRecognition  from '../components/CompanySections/AwardsAndRecognition'
import ContactUs             from '../components/CompanySections/ContactUs'

export const metadata = {
  title      : 'Company | Medicore Medical Billing',
  description: 'Learn about Medicore — our mission, awards, FAQs, and how to contact our team.',
}

export default function Company() {
  return (
    <main>
      {/* Hero banner with nav pills to each section */}
      <HeroSlider />

      {/* Divider */}
      <div className="divider-gradient" />

      {/* 1 — About Medicore */}
      <AboutMedicore />

      <div className="divider-gradient" />

      {/* 2 — FAQs */}
      <FAQs />

      <div className="divider-gradient" />

      {/* 3 — Awards & Recognition */}
      <AwardsAndRecognition />

      <div className="divider-gradient" />

      {/* 4 — Contact Us */}
      <ContactUs />
    </main>
  )
}