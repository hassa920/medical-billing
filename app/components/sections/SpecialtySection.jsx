'use client'

import { ArrowRight } from 'lucide-react'

const SPECIALTIES = [
  'Cardiology',
  'Dermatology',
  'Endocrinology',
  'Family Medicine',
  'Gastroenterology',
  'Internal Medicine',
  'Neurology',
  'Obstetrics & Gynecology',
  'Oncology',
  'Ophthalmology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Pulmonology',
  'Rheumatology',
  'Urology',
  'Urgent Care',
  'Physical Therapy',
  'Chiropractic',
  'Podiatry',
]

const FEATURES = [
  {
    title: 'Specialty Templates',
    description: 'Pre-built for specialty-specific clinical workflows.',
  },
  {
    title: 'Adaptive AI Coding',
    description: 'Context-aware ICD-10 and CPT suggestions.',
  },
  {
    title: 'Compliance Built-In',
    description: 'Designed for HIPAA, MIPS, and payer-specific requirements.',
  },
]

export default function SpecialtySection() {
  return (
    <section className="relative py-5 lg:py-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,105,217,0.7) 0%, transparent 70%)',
          }}
        />
      </div>


      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <span className="section-label w-fit mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'var(--color-neon-cyan)',
                  boxShadow: '0 0 8px var(--color-neon-cyan)',
                }}
              />
              Specialty EHR
            </span>

            <h2
              className="display-heading mb-6"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                lineHeight: '0.98',
              }}
            >
              Built For{' '}
              <span
                className="text-glow-cyan"
                style={{ color: 'var(--color-neon-cyan)' }}
              >
                Your Specialty.
              </span>
              <br />
              Precisely.
            </h2>

            <p
              className="mb-8"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: '1.9',
                maxWidth: '42rem',
              }}
            >
              Workflow editor, specialty-specific templates, and curated
              content to accelerate documentation, ensure compliance, and
              elevate care quality — purpose-built for 30+ specialties.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {FEATURES.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{
                      background: 'var(--color-neon-cyan)',
                      boxShadow: '0 0 8px var(--color-neon-cyan)',
                    }}
                  />

                  <div>
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9rem',
                        lineHeight: '1.7',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#specialties"
              className="btn-cyber btn-cyber-primary w-fit"
            >
              See All Specialties
              <ArrowRight size={15} />
            </a>
          </div>

          {/* RIGHT GRID */}
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
              style={{
                background: `
                  linear-gradient(to right,
                  var(--color-cyber-base) 0%,
                  transparent 8%,
                  transparent 92%,
                  var(--color-cyber-base) 100%),

                  linear-gradient(to bottom,
                  var(--color-cyber-base) 0%,
                  transparent 8%,
                  transparent 92%,
                  var(--color-cyber-base) 100%)
                `,
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SPECIALTIES.map((spec, index) => (
                <a
                  key={index}
                  href={`/specialty/${spec
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[&]/g, 'and')}`}
                  className="glass-card card-hover rounded-xl p-4 lg:p-5 flex items-center justify-center text-center group"
                  style={{
                    border: '1px solid rgba(255,255,255,0.05)',
                    minHeight: '82px',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    className="transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.35',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {spec}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

           <div className="cyber-divider mt-10 mb-8 lg:mt-14 lg:mb-12" />

    </section>
  )
}