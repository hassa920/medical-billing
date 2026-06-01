'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Brain, Activity, Zap, Users, BarChart3 } from 'lucide-react'

const SLIDES = [
  {
    id: 0,
    badge: 'NEW — AI Medical Scribe',
    headline: ['Documentation That', 'Thinks Ahead'],
    sub: 'AI that listens, codes, and orders automatically. Save 2+ hours of documentation per physician every day.',
    ctaPrimary: { label: 'See AI Scribe', href: '/ai-scribe' },
    ctaSecondary: { label: 'Watch 2-min Demo', href: '/demo' },
    accent: 'cyan',
    icon: Brain,
    stat: { value: '2.4hrs', label: 'saved daily per physician' },
  },
  {
    id: 1,
    badge: 'All-in-One Platform',
    headline: ['From Check-In to', 'Check-Out — Automated'],
    sub: 'EHR, billing, and patient engagement unified in one intelligent platform. Less complexity, more care.',
    ctaPrimary: { label: 'Explore Platform', href: '/platform' },
    ctaSecondary: { label: 'Request a Demo', href: '/demo' },
    accent: 'cyan',
    icon: Activity,
    stat: { value: '99.2%', label: 'uptime guaranteed' },
  },
  {
    id: 2,
    badge: 'AI Contact Center',
    headline: ['Smarter Care.', 'Lower Costs. 24 / 7.'],
    sub: 'Automate appointment booking, patient intake, and inquiries with AI — so your staff can focus on care.',
    ctaPrimary: { label: 'Explore AI Center', href: '/ai-contact' },
    ctaSecondary: { label: 'See How It Works', href: '/how-it-works' },
    accent: 'green',
    icon: Zap,
    stat: { value: '67%', label: 'reduction in no-shows' },
  },
  {
    id: 3,
    badge: 'Specialty EHR',
    headline: ['Built For Your', 'Specialty. Precisely.'],
    sub: '30+ specialty-specific workflows that simplify decisions, ensure compliance, and maximize every encounter.',
    ctaPrimary: { label: 'View Specialties', href: '/specialty' },
    ctaSecondary: { label: 'Book a Walkthrough', href: '/demo' },
    accent: 'cyan',
    icon: Users,
    stat: { value: '30+', label: 'specialty-specific workflows' },
  },
  {
    id: 4,
    badge: 'Revenue Cycle Management',
    headline: ['Capture Every Dollar.', 'Eliminate Leakage.'],
    sub: 'End-to-end RCM with AI-driven coding, automated denials management, and real-time revenue analytics.',
    ctaPrimary: { label: 'Explore RCM', href: '/rcm' },
    ctaSecondary: { label: 'Calculate Your ROI', href: '/roi' },
    accent: 'green',
    icon: BarChart3,
    stat: { value: '96%', label: 'first-pass claim rate' },
  },
]

/* ── Animated ring decoration ── */
function CyberOrb({ accent }) {
  const c   = accent === 'green' ? '#39ff14' : '#00f0ff'
  const rgb = accent === 'green' ? '57,255,20' : '0,240,255'
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Outer ring */}
      <svg viewBox="0 0 320 320" className="absolute rotate-ring opacity-25"
        style={{ width: 'clamp(200px, 40vw, 288px)', height: 'clamp(200px, 40vw, 288px)' }}>
        <circle cx="160" cy="160" r="150" fill="none" stroke={c} strokeWidth="1" strokeDasharray="6 14" />
      </svg>
      {/* Middle ring */}
      <svg viewBox="0 0 260 260" className="absolute rotate-ring-reverse opacity-35"
        style={{ width: 'clamp(160px, 32vw, 224px)', height: 'clamp(160px, 32vw, 224px)' }}>
        <circle cx="130" cy="130" r="118" fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="3 9" />
      </svg>
      {/* Inner solid ring */}
      <div className="absolute rounded-full"
        style={{
          width: 'clamp(120px, 24vw, 160px)',
          height: 'clamp(120px, 24vw, 160px)',
          border: `1px solid rgba(${rgb},0.25)`,
          boxShadow: `0 0 40px rgba(${rgb},0.12), inset 0 0 40px rgba(${rgb},0.06)`
        }} />
      {/* Core */}
      <div className="relative z-10 rounded-full flex items-center justify-center animate-float"
        style={{
          width: 'clamp(80px, 16vw, 96px)',
          height: 'clamp(80px, 16vw, 96px)',
          background: `rgba(${rgb},0.08)`,
          border: `1px solid rgba(${rgb},0.4)`,
          boxShadow: `0 0 50px rgba(${rgb},0.3), 0 0 20px rgba(${rgb},0.15), inset 0 0 20px rgba(${rgb},0.05)`,
        }}>
        <div style={{ color: accent === 'green' ? '#39ff14' : '#00f0ff' }}>
          <svg width="44" height="26" viewBox="0 0 52 30" fill="none">
            <polyline
              points="0,15 8,15 12,4 16,26 20,10 24,20 28,15 36,15 40,8 44,22 48,15 52,15"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Dots on ring */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full pulse-glow"
          style={{
            background: c,
            boxShadow: `0 0 8px ${c}`,
            top: `${50 - 46 * Math.cos((deg * Math.PI) / 180)}%`,
            left: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
          }} />
      ))}
      {/* Data cards floating — hidden on small screens */}
      <div className="absolute -top-6 right-0 lg:right-4 glass-card rounded-lg px-2.5 py-1.5 text-xs hidden sm:block"
        style={{ border: `1px solid rgba(${rgb},0.15)` }}>
        <div style={{ color: `rgba(${rgb},1)`, fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: '0.08em' }}>
          LIVE MONITORING
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: 10 }} className="mt-0.5">
          12 patients active
        </div>
      </div>
      <div className="absolute bottom-2 -left-2 lg:-left-6 glass-card rounded-lg px-2.5 py-1.5 text-xs hidden sm:block"
        style={{ border: `1px solid rgba(${rgb},0.15)` }}>
        <div style={{ color: `rgba(${rgb},1)`, fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700 }}>
          98.6°F
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: 10 }} className="mt-0.5">
          avg. vitals normal
        </div>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((idx) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide   = SLIDES[current]
  const isCyan  = slide.accent === 'cyan'
  const accentC = isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)'
  const rgb     = isCyan ? '0,240,255' : '57,255,20'
  const Icon    = slide.icon

  return (
    <section
      className="relative flex flex-col cyber-grid scanline-effect overflow-hidden"
      style={{
        /* Navbar offset: contact bar (~32px) + main nav (~72px) = 104px */
        paddingTop: 'clamp(90px, 13vw, 120px)',
        minHeight: '100svh',
        background: `
          radial-gradient(ellipse 70% 60% at 65% 50%, rgba(${rgb},0.05) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 10% 80%, rgba(0,240,255,0.04) 0%, transparent 55%),
          var(--color-cyber-base)
        `,
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 -top-20 -left-20"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.6) 0%, transparent 70%)' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-[0.08] bottom-10 right-10"
          style={{ background: `radial-gradient(circle, rgba(${rgb},0.5) 0%, transparent 70%)`, transition: 'background 0.6s ease' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">

          {/*
            Layout:
            Mobile  (< sm)  : single column, text only, orb hidden
            Tablet  (sm–md) : single column, orb shown below text as small visual
            Desktop (md+)   : two-column side by side
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-12 md:py-16 lg:py-20">

            {/* ── Left: Text ── */}
            <div key={animKey} className="flex flex-col gap-4 sm:gap-5 lg:gap-6">

              {/* Badge */}
              <div className="animate-fade-in-up">
                <span className={`section-label ${slide.accent === 'green' ? 'section-label-green' : ''}`}
                  style={{ fontSize: 'clamp(9px, 1.8vw, 11px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full pulse-glow flex-shrink-0"
                    style={{ background: accentC, boxShadow: `0 0 6px ${accentC}` }} />
                  {slide.badge}
                </span>
              </div>

              {/* Headline */}
              <div className="animate-fade-in-up delay-100">
                <h1 className="display-heading leading-tight" style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                }}>
                  {slide.headline[0]}
                  <br />
                  <span style={{ color: accentC }}
                    className={isCyan ? 'text-glow-cyan' : 'text-glow-green'}>
                    {slide.headline[1]}
                  </span>
                </h1>
              </div>

              {/* Sub */}
              <p className="animate-fade-in-up delay-200 leading-relaxed"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  maxWidth: '38rem',
                }}>
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
                <a href={slide.ctaPrimary.href}
                  className={`btn-cyber ${isCyan ? 'btn-cyber-primary' : 'btn-cyber-green'}`}
                  style={{ fontSize: 'clamp(11px, 1.5vw, 13px)' }}>
                  {slide.ctaPrimary.label}
                  <ArrowRight size={14} />
                </a>
                <a href={slide.ctaSecondary.href} className="btn-cyber btn-cyber-ghost"
                  style={{ fontSize: 'clamp(11px, 1.5vw, 13px)' }}>
                  {slide.ctaSecondary.label}
                </a>
              </div>

              {/* Stat chip */}
              <div className="animate-fade-in-up delay-400 flex items-center gap-3">
                <div className="h-px flex-shrink-0 w-10 sm:w-14"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.3))` }} />
                <div className="glass-card rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3"
                  style={{ border: `1px solid rgba(${rgb},0.15)` }}>
                  <span className="stat-number" style={{ color: accentC, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
                    {slide.stat.value}
                  </span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'clamp(10px, 1.5vw, 12px)' }}>
                    {slide.stat.label}
                  </span>
                </div>
              </div>

              {/* Mobile orb — shown only on sm, hidden on md+ (where right col shows it) */}
              <div key={`mob-orb-${animKey}`}
                className="flex sm:hidden items-center justify-center mt-2 animate-fade-in-up delay-500"
                style={{ height: 180 }}>
                <CyberOrb accent={slide.accent} />
              </div>
            </div>

            {/* ── Right: Orb visual — tablet (sm) + desktop (md+) ── */}
            <div key={`orb-${animKey}`}
              className="hidden sm:flex md:flex items-center justify-center relative animate-fade-in-up delay-200"
              style={{ height: 'clamp(240px, 35vw, 360px)' }}>
              <CyberOrb accent={slide.accent} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide controls ── */}
      <div className="relative z-10 pb-8 sm:pb-10 md:pb-12 flex items-center justify-center gap-3 sm:gap-6 px-4">

        {/* Prev */}
        <button onClick={prev} aria-label="Previous slide"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all glass-card"
          style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--color-text-muted)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)'; e.currentTarget.style.color = '#00f0ff' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--color-text-muted)' }}>
          <ChevronLeft size={15} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                background: i === current ? accentC : 'rgba(255,255,255,0.18)',
                boxShadow: i === current ? `0 0 8px ${accentC}` : 'none',
              }} />
          ))}
        </div>

        {/* Next */}
        <button onClick={next} aria-label="Next slide"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all glass-card"
          style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--color-text-muted)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)'; e.currentTarget.style.color = '#00f0ff' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--color-text-muted)' }}>
          <ChevronRight size={15} />
        </button>

        {/* Slide counter */}
        <div className="text-xs ml-1 sm:ml-2" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
          <span style={{ color: accentC }}>{String(current + 1).padStart(2, '0')}</span>
          {' / '}
          {String(SLIDES.length).padStart(2, '0')}
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-cyber-base), transparent)' }} />
    </section>
  )
}