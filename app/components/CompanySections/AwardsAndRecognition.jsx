'use client'

import { Award, Star, Trophy, BadgeCheck, TrendingUp, Shield } from 'lucide-react'

const AWARDS = [
  {
    year: '2024',
    title: 'Top RCM Vendor',
    body: 'Black Book Rankings',
    icon: Trophy,
    accent: 'cyan',
    description: 'Ranked #1 in revenue cycle management for independent practices with fewer than 25 providers.',
    badge: 'Best in Class',
  },
  {
    year: '2023',
    title: 'Best Medical Billing Software',
    body: 'Software Advice',
    icon: Star,
    accent: 'green',
    description: 'Selected by Software Advice FrontRunners based on real user ratings for usability and customer satisfaction.',
    badge: 'FrontRunner',
  },
  {
    year: '2023',
    title: 'HIPAA Compliance Leader',
    body: 'AMBA — American Medical Billing Association',
    icon: Shield,
    accent: 'cyan',
    description: 'Awarded for maintaining zero HIPAA violations across 5,000+ providers over a 12-month period.',
    badge: 'Compliance Excellence',
  },
  {
    year: '2022',
    title: 'Healthcare Technology Pioneer',
    body: 'CIO Review Magazine',
    icon: TrendingUp,
    accent: 'green',
    description: 'Named among the 20 Most Promising Healthcare Technology Solution Providers for AI-driven billing automation.',
    badge: 'Top 20 Solutions',
  },
  {
    year: '2022',
    title: 'Best in KLAS — Billing Services',
    body: 'KLAS Research',
    icon: Award,
    accent: 'cyan',
    description: 'KLAS performance score of 92/100, placing Medicore in the top tier of medical billing service vendors nationally.',
    badge: 'KLAS Score 92/100',
  },
  {
    year: '2021',
    title: 'Customer Service Excellence',
    body: 'GetApp Category Leaders',
    icon: BadgeCheck,
    accent: 'green',
    description: 'Achieved Category Leader status based on ease of use, value for money, and dedicated support ratings.',
    badge: 'Category Leader',
  },
]

const STATS = [
  { value: '12+',  label: 'Industry Awards'     },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '4.9★', label: 'Average Rating'      },
  { value: '6',    label: 'Years Recognized'    },
]

const CERTIFICATIONS = [
  { name: 'HIPAA Compliant', icon: Shield     },
  { name: 'SOC 2 Type II',   icon: BadgeCheck },
  { name: 'AMBA Certified',  icon: Award      },
  { name: 'KLAS Recognized', icon: Star       },
]

const accentStyles = {
  cyan: {
    border: 'var(--color-neon-cyan)',
    iconBg: 'rgba(0,105,217,0.09)',
    iconBorder: 'var(--border-cyan)',
    iconColor: 'var(--color-neon-cyan)',
    badgeBg: 'rgba(0,105,217,0.09)',
    badgeColor: '#0058b8',
    labelClass: 'section-label',
    bodyColor: 'var(--color-neon-cyan)',
    decoBg: 'rgba(0,105,217,0.05)',
  },
  green: {
    border: 'var(--color-neon-green)',
    iconBg: 'rgba(10,170,110,0.09)',
    iconBorder: 'var(--border-green)',
    iconColor: 'var(--color-neon-green)',
    badgeBg: 'rgba(10,170,110,0.09)',
    badgeColor: '#088f5c',
    labelClass: 'section-label section-label-green',
    bodyColor: 'var(--color-neon-green)',
    decoBg: 'rgba(10,170,110,0.05)',
  },
}

export default function AwardsAndRecognition() {
  return (
    <section
      id="awards"
      className="w-full cyber-grid"
      style={{ padding: '88px 0 72px', scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16 }}>Awards &amp; Recognition</span>
          <h2
            className="display-heading"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)', maxWidth: 680, marginBottom: 18 }}
          >
            Industry Validation.{' '}
            <span className="text-glow-cyan">Proven Excellence.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', maxWidth: 520, lineHeight: 1.7 }}>
            Medicore has been consistently recognized by the most trusted voices in healthcare
            technology for performance, compliance, and client satisfaction.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginBottom: 64 }}>
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="glass-card"
              style={{
                borderRadius: 14,
                padding: '28px 20px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(0,105,217,0.06) 0%, rgba(10,170,110,0.06) 100%)',
                border: '1px solid var(--border-cyan)',
              }}
            >
              <div className="stat-number" style={{ fontSize: 42, lineHeight: 1 }}>{value}</div>
              <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 6, fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── Awards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginBottom: 64 }}>
          {AWARDS.map(({ year, title, body, icon: Icon, accent, description, badge }) => {
            const s = accentStyles[accent]
            return (
              <div
                key={title}
                className="glass-card card-hover"
                style={{
                  borderRadius: 16,
                  borderTop: `3px solid ${s.border}`,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Deco blob */}
                <div
                  style={{
                    position: 'absolute', top: 0, right: 0,
                    width: 96, height: 96, borderRadius: '50%',
                    background: s.decoBg,
                    transform: 'translate(30%, -30%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Year + badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span className={s.labelClass} style={{ fontSize: 10 }}>{year}</span>
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '4px 10px', borderRadius: 100,
                      fontSize: 10, fontWeight: 700,
                      fontFamily: 'var(--font-display)', letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: s.badgeBg,
                      color: s.badgeColor,
                      border: `1px solid ${s.iconBorder}`,
                    }}
                  >
                    {badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: s.iconBg,
                    border: `1px solid ${s.iconBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon size={22} style={{ color: s.iconColor }} />
                </div>

                {/* Text */}
                <h3
                  className="display-heading"
                  style={{ fontSize: 17, marginBottom: 4, color: 'var(--color-text-primary)' }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 12, fontWeight: 700, color: s.bodyColor, marginBottom: 12 }}>{body}</p>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65, flexGrow: 1 }}>{description}</p>
              </div>
            )
          })}
        </div>

        {/* ── Certifications strip ── */}
        <div
          className="glow-cyan-strong"
          style={{
            borderRadius: 20,
            padding: '44px 40px',
            background: 'linear-gradient(135deg, #0a1628 0%, #0e2040 100%)',
            border: '1px solid rgba(0,105,217,0.18)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <p
              style={{
                fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', marginBottom: 10,
              }}
            >
              Certifications &amp; Standards
            </p>
            <h3
              className="display-heading"
              style={{ fontSize: 28, color: '#fff' }}
            >
              Trusted at every level
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTIFICATIONS.map(({ name, icon: Icon }) => (
              <div
                key={name}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 12,
                  padding: '20px 16px', borderRadius: 12, textAlign: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,105,217,0.18)',
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,105,217,0.18)',
                    border: '1px solid rgba(0,105,217,0.3)',
                  }}
                >
                  <Icon size={20} style={{ color: 'var(--color-neon-cyan)' }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{name}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center', marginTop: 32, paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
              All certifications are renewed annually and available for review upon request.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}