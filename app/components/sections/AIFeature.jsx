'use client'

import { Brain, Zap, Bot, ArrowRight, CheckCircle } from 'lucide-react'

const AI_FEATURES = [
  {
    icon: Brain,
    title: 'AI Medical Scribe',
    tagline: 'Document in seconds, not minutes.',
    desc: 'Our ambient AI listens to your patient encounters and generates complete, accurate clinical notes — including diagnoses, medications, and care plans — in real time.',
    points: [
      'Ambient listening — no dictation required',
      'Accurate ICD-10 & CPT code suggestions',
      'Instant SOAP notes & care plan drafts',
      'Integrates with any EHR workflow',
    ],
    cta: 'Explore AI Scribe',
    href: '/ai-scribe',
  },
  {
    icon: Zap,
    title: 'AI Contact Center',
    tagline: 'Your practice never sleeps.',
    desc: 'Automate appointment booking, patient intake forms, prescription refill requests, and common patient queries with a conversational AI agent that works 24/7.',
    points: [
      '24 / 7 appointment scheduling automation',
      'Intelligent triage and intake forms',
      'Prescription refill request handling',
      'Natural language patient Q&A',
    ],
    cta: 'Explore AI Center',
    href: '/ai-contact',
  },
]

export default function AIFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Green ambient bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.2), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.2), transparent)' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.6) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="section-label section-label-green">
            <Bot size={12} />
            Artificial Intelligence
          </span>
          <h2 className="display-heading text-4xl md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
            AI That Works{' '}
            <span className="text-glow-green" style={{ color: 'var(--color-neon-green)' }}>
              While You Care
            </span>
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            Pioneering AI tools that handle administrative burden so your team
            can focus on what matters most — patient outcomes.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {AI_FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i}
                className="relative flex flex-col gap-6 p-8 rounded-2xl glass-card group card-hover card-hover-green transition-all duration-300"
                style={{ border: '1px solid rgba(57,255,20,0.1)' }}>

                {/* Top */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(57,255,20,0.08)',
                      border: '1px solid rgba(57,255,20,0.25)',
                      boxShadow: '0 0 20px rgba(57,255,20,0.1)',
                    }}>
                    <Icon size={26} style={{ color: 'var(--color-neon-green)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', letterSpacing: '0.04em' }}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-glow-green" style={{ color: 'var(--color-neon-green)', fontStyle: 'italic' }}>
                      {f.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {f.desc}
                </p>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2.5">
                  {f.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <CheckCircle size={15} style={{ color: 'var(--color-neon-green)', flexShrink: 0 }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={f.href}
                  className="inline-flex items-center gap-2 text-sm mt-2 transition-all"
                  style={{ color: 'var(--color-neon-green)', fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                  {f.cta.toUpperCase()}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(57,255,20,0.06) 0%, transparent 70%)',
                    borderRadius: '0 16px 0 0',
                  }} />
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-8" style={{ color: 'var(--color-text-muted)' }}>
          All AI features are{' '}
          <span style={{ color: 'var(--color-neon-green)' }}>HIPAA compliant</span>
          {' '}and trained exclusively on de-identified clinical data.
        </p>
      </div>
    </section>
  )
}