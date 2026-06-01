'use client'

import { CheckCircle, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react'

const STATS = [
  { value: '98%',    label: 'Clean Claim Rate',    icon: TrendingUp },
  { value: '15+',    label: 'Years of Excellence', icon: Clock      },
  { value: '5,000+', label: 'Providers Served',    icon: Users      },
  { value: '99.9%',  label: 'Uptime Guaranteed',   icon: Shield     },
]

const VALUES = [
  {
    icon: Shield,
    title: 'HIPAA-First Security',
    description: 'Every process, workflow and data point is architected around full HIPAA compliance and enterprise-grade encryption.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'We eliminate revenue leakage through AI-assisted claim scrubbing, denial prevention, and real-time eligibility checks.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'A named billing specialist is assigned to every practice — not a ticket queue, a real person who knows your workflow.',
  },
  {
    icon: Award,
    title: 'Award-Winning Platform',
    description: 'Recognized by Black Book Rankings, KLAS, and the American Medical Billing Association year after year.',
  },
]

const TIMELINE = [
  { year: '2009', event: 'Medicore founded with a mission to simplify medical billing for independent practices.' },
  { year: '2013', event: 'Launched AI-powered claims scrubbing — reducing denials by 42% on average.' },
  { year: '2017', event: 'Expanded to serve 1,000+ providers across 30 specialties.' },
  { year: '2020', event: 'Introduced real-time RCM dashboard and telehealth billing integration.' },
  { year: '2024', event: 'Crossed 5,000 providers; recognized as Top RCM Vendor by Black Book.' },
]

export default function AboutMedicore() {
  return (
    <section
      id="about"
      className="w-full cyber-grid"
      style={{ padding: '88px 0 72px', scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16 }}>About Medicore</span>
          <h2
            className="display-heading"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)', maxWidth: 680, marginBottom: 18 }}
          >
            Built by Billers.{' '}
            <span className="text-glow-cyan">Trusted by Providers.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', maxWidth: 540, lineHeight: 1.7 }}>
            Medicore is a technology-driven medical billing company helping practices of all sizes
            maximize revenue, reduce administrative burden, and stay fully compliant — since 2009.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginBottom: 72 }}>
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="glass-card card-hover"
              style={{
                borderTop: '3px solid var(--color-neon-cyan)',
                borderRadius: 14,
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'rgba(0,105,217,0.09)',
                  border: '1px solid var(--border-cyan)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                <Icon size={20} style={{ color: 'var(--color-neon-cyan)' }} />
              </div>
              <div className="stat-number" style={{ fontSize: 40, lineHeight: 1 }}>{value}</div>
              <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 6, fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── Mission + Values ── */}
        <div className="grid md:grid-cols-2 gap-10 items-start" style={{ marginBottom: 72 }}>

          {/* Mission block */}
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: 'inline-flex' }}>Our Mission</span>
            <h3
              className="display-heading"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginBottom: 18, lineHeight: 1.2 }}
            >
              Giving providers back their time — and their revenue.
            </h3>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: 24 }}>
              We exist to take the complexity out of medical billing so clinicians can focus entirely
              on patient care. Our platform combines automation, expert oversight, and transparent
              reporting to deliver results you can measure from day one.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'End-to-end RCM — from eligibility to payment posting',
                'Specialty-specific coding by certified billers',
                'Real-time denial management and appeals',
                'Transparent monthly performance reports',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle size={17} style={{ color: 'var(--color-neon-green)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: 'var(--color-text-primary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HIPAA compliance card */}
          <div
            className="glass-card-strong scanline-effect"
            style={{
              borderRadius: 18,
              border: '1px solid var(--border-cyan)',
              minHeight: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(0,105,217,0.06) 0%, rgba(10,170,110,0.06) 100%)',
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, padding: '40px 36px', textAlign: 'center' }}>
              <div
                className="glow-cyan"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', width: 72, height: 72,
                  background: 'var(--color-neon-cyan)',
                  marginBottom: 24,
                }}
              >
                <Shield size={32} style={{ color: '#fff' }} />
              </div>
              <p
                className="display-heading"
                style={{ fontSize: 24, marginBottom: 10, color: 'var(--color-text-primary)' }}
              >
                HIPAA Compliant
              </p>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 280, margin: '0 auto', lineHeight: 1.7 }}>
                Every workflow, communication, and data interaction is secured to the highest federal standards.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 24 }}>
                {['SOC 2 Type II', 'HIPAA', '256-bit SSL'].map(tag => (
                  <span
                    key={tag}
                    className="section-label"
                    style={{ fontSize: 10 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Core values ── */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 12, display: 'inline-flex' }}>Our Values</span>
            <h3
              className="display-heading"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
            >
              What we stand for
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card card-hover"
                style={{
                  borderRadius: 14,
                  borderTop: '3px solid var(--color-neon-cyan)',
                  padding: '24px 20px',
                }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'rgba(0,105,217,0.09)',
                    border: '1px solid var(--border-cyan)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon size={20} style={{ color: 'var(--color-neon-cyan)' }} />
                </div>
                <h4
                  className="display-heading"
                  style={{ fontSize: 15, marginBottom: 8, color: 'var(--color-text-primary)' }}
                >
                  {title}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 12, display: 'inline-flex' }}>Our Journey</span>
            <h3
              className="display-heading"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
            >
              Milestones that define us
            </h3>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute', left: 16, top: 0, bottom: 0, width: 1,
                background: 'linear-gradient(180deg, var(--color-neon-cyan), var(--color-neon-green))',
              }}
              className="md:left-1/2"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {TIMELINE.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`pl-10 md:pl-0 md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div
                      className="glass-card card-hover"
                      style={{ borderRadius: 12, padding: '18px 20px', display: 'inline-block', width: '100%' }}
                    >
                      <span className="section-label" style={{ fontSize: 10, marginBottom: 8, display: 'inline-flex' }}>{year}</span>
                      <p style={{ fontSize: 14, color: 'var(--color-text-primary)', fontWeight: 500, lineHeight: 1.6 }}>{event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute', left: 16, width: 18, height: 18,
                      background: 'var(--color-neon-cyan)',
                      border: '3px solid white',
                      borderRadius: '50%',
                      boxShadow: 'var(--shadow-glow-cyan)',
                      transform: 'translate(-50%, 18px)',
                    }}
                    className="md:left-1/2"
                  />
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}