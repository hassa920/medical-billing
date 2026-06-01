'use client'

import { Trophy } from 'lucide-react'

const AWARDS = [
  { rank: '#1', title: 'Ambulatory EMR / PM', source: 'KLAS Research', year: '2024' },
  { rank: 'TOP', title: 'Specialty EHR', source: 'Black Book Rankings', year: '2024' },
  { rank: '#1', title: 'Medical Billing Software', source: 'Capterra', year: '2024' },
  { rank: 'TOP', title: 'Revenue Cycle Management', source: 'KLAS Research', year: '2023' },
  { rank: '5★', title: 'White Coat of Quality', source: 'Surescripts', year: '2024' },
  { rank: 'TOP', title: 'Patient Experience Platform', source: 'Medical Economics', year: '2024' },
]

export default function AwardsBadges() {
  return (
    <section className="relative py-5 lg:py-5 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] rounded-full blur-[160px] opacity-[0.05]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,105,217,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

  

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="section-label mb-5">
            <Trophy size={12} />
            Awards & Recognition
          </span>

          <h2
            className="display-heading mb-5"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.25rem)',
              lineHeight: '1',
            }}
          >
            Award-Winning Technology.{' '}
            <span
              className="text-glow-cyan"
              style={{
                color: 'var(--color-neon-cyan)',
              }}
            >
              Proven Results.
            </span>
          </h2>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '720px',
              fontSize: 'clamp(1rem,1.3vw,1.125rem)',
              lineHeight: '1.9',
            }}
          >
            Recognized by KLAS Research, Black Book, Surescripts,
            Capterra, and Medical Economics — the healthcare industry&apos;s
            most respected performance authorities.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-6">
          {AWARDS.map((award, index) => (
            <div
              key={index}
              className="glass-card card-hover rounded-2xl p-6 lg:p-7 flex flex-col items-center text-center"
              style={{
                border: '1px solid rgba(0,60,130,0.08)',
                minHeight: '240px',
                justifyContent: 'center',
              }}
            >
              {/* Rank Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(0,105,217,0.08)',
                  border: '1px solid rgba(0,105,217,0.20)',
                  boxShadow: 'var(--shadow-glow-cyan)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--color-neon-cyan)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {award.rank}
                </span>
              </div>

              {/* Award Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  lineHeight: '1.4',
                  letterSpacing: '0.03em',
                  marginBottom: '0.75rem',
                }}
              >
                {award.title}
              </h3>

              {/* Source */}
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                }}
              >
                {award.source}
              </p>

              {/* Year */}
              <div
                style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  background: 'rgba(0,105,217,0.06)',
                  border: '1px solid rgba(0,105,217,0.12)',
                  color: 'var(--color-neon-cyan)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {award.year}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14 lg:mt-16">
          <a
            href="/awards"
            className="btn-cyber btn-cyber-ghost"
            style={{
              fontWeight: 700,
            }}
          >
            View All Awards
          </a>
        </div>
      </div>

    </section>
  )
}