'use client'
import { ArrowRight } from 'lucide-react'

const SPECIALTIES = [
  'Cardiology', 'Dermatology', 'Endocrinology', 'Family Medicine',
  'Gastroenterology', 'Internal Medicine', 'Neurology', 'Obstetrics & Gynecology',
  'Oncology', 'Ophthalmology', 'Orthopedics', 'Pediatrics',
  'Psychiatry', 'Pulmonology', 'Rheumatology', 'Urology',
  'Urgent Care', 'Physical Therapy', 'Chiropractic', 'Podiatry',
]

export default function SpecialtySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="cyber-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6">
            <span className="section-label w-fit">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 6px var(--color-neon-cyan)' }} />
              Specialty EHR
            </span>
            <h2 className="display-heading text-4xl md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
              Built For{' '}
              <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
                Your Specialty.
              </span>
              <br /> Precisely.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Workflow editor, specialty-specific templates, and a curated knowledge
              base to accelerate documentation speed, ensure compliance, and elevate
              service quality — purpose-built for 30+ specialties.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                ['Specialty templates', 'Pre-built for your exact clinical workflows'],
                ['Adaptive AI coding', 'Context-aware ICD-10 & CPT suggestions'],
                ['Compliance built-in', 'HIPAA, MIPS, and payer-specific rules'],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 6px var(--color-neon-cyan)' }} />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}>
                      {title}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="/specialty" className="btn-cyber btn-cyber-primary w-fit mt-2">
              See All Specialties
              <ArrowRight size={15} />
            </a>
          </div>

          {/* ── Right: Specialty grid ── */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
              style={{
                background: `
                  linear-gradient(to right, var(--color-cyber-base) 0%, transparent 8%, transparent 92%, var(--color-cyber-base) 100%),
                  linear-gradient(to bottom, var(--color-cyber-base) 0%, transparent 8%, transparent 92%, var(--color-cyber-base) 100%)
                `,
              }} />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SPECIALTIES.map((spec, i) => (
                <a key={i} href={`/specialty/${spec.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`}
                  className="relative flex items-center justify-center text-center p-3 rounded-lg glass-card transition-all duration-250 cursor-pointer group"
                  style={{
                    border: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,240,255,0.22)'
                    e.currentTarget.style.background = 'rgba(0,240,255,0.05)'
                    e.currentTarget.style.transform = 'scale(1.03)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow-cyan)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.background = 'var(--color-cyber-card)'
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                  <span className="text-xs font-medium leading-tight transition-colors"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-secondary)', letterSpacing: '0.02em' }}>
                    {spec}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cyber-divider mt-24" />
    </section>
  )
}