'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Brain, Activity, Zap, Users, BarChart3 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SLIDES = [
  {
    id: 0,
    badge: 'CUSTOMER STORIES',
    headline: ['Trusted By', '50,000+ Providers'],
    sub: 'Hear how physicians, specialists, and clinical leaders have transformed their daily operations, eliminated hours of paperwork, and reclaimed time for patient care.',
    ctaPrimary: { label: 'Read Customer Stories', href: '#testimonials', actionType: 'anchor' },
    accent: 'cyan',
    icon: Brain,
    stat: { value: '99.2%', label: 'customer satisfaction rate' },
  },
  {
    id: 1,
    badge: 'Live Terminal Access',
    headline: ['Request a Custom', 'Platform Sandbox Walkthrough'],
    sub: 'Unlock private system modules. Preview our automated intake engines, AI scribe tools, and unified billing architectures configured directly for your workflow grid.',
    ctaPrimary: { label: 'Request a Live Demo', href: '#demo', actionType: 'demo' },
    accent: 'cyan',
    icon: Activity,
    stat: { value: '1-on-1', label: 'expert guided session' },
  },
{
    id: 2,
    badge: 'AI & Technology Insight',
    headline: ['AI Medical Scribe:', 'Revolutionizing Healthcare'],
    sub: 'Discover how AI-powered documentation is saving physicians hours, optimizing clinical contact configurations, and improving accuracy in medical records.',
    ctaPrimary: { label: 'Read Article', href: '/resource#blogs', actionType: 'route' },
    accent: 'green',
    icon: Zap,
    stat: { value: 'June 1', label: 'by Dr. Sarah Johnson' },
  },
  {
    id: 3,
    badge: 'Specialty EHR',
    headline: ['Built For Your', 'Specialty. Precisely.'],
    sub: '30+ specialty-specific workflows that simplify decisions, ensure compliance, and maximize every encounter.',
    ctaPrimary: { label: 'View Specialties', href: '#specialties', actionType: 'anchor' },
    accent: 'cyan',
    icon: Users,
    stat: { value: '30+', label: 'specialty-specific workflows' },
  },
 
]

function CyberOrb({ accent }) {
  const c   = accent === 'green' ? '#39ff14' : '#00f0ff'
  const rgb = accent === 'green' ? '57,255,20' : '0,240,255'
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <svg viewBox="0 0 320 320" className="absolute rotate-ring opacity-25"
        style={{ width: 'clamp(200px, 40vw, 288px)', height: 'clamp(200px, 40vw, 288px)' }}>
        <circle cx="160" cy="160" r="150" fill="none" stroke={c} strokeWidth="1" strokeDasharray="6 14" />
      </svg>
      <svg viewBox="0 0 260 260" className="absolute rotate-ring-reverse opacity-35"
        style={{ width: 'clamp(160px, 32vw, 224px)', height: 'clamp(160px, 32vw, 224px)' }}>
        <circle cx="130" cy="130" r="118" fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="3 9" />
      </svg>
      <div className="absolute rounded-full"
        style={{
          width: 'clamp(120px, 24vw, 160px)',
          height: 'clamp(120px, 24vw, 160px)',
          border: `1px solid rgba(${rgb},0.25)`,
          boxShadow: `0 0 40px rgba(${rgb},0.12), inset 0 0 40px rgba(${rgb},0.06)`
        }} />
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
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full pulse-glow"
          style={{
            background: c,
            boxShadow: `0 0 8px ${c}`,
            top: `${50 - 46 * Math.cos((deg * Math.PI) / 180)}%`,
            left: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
          }} />
      ))}
    </div>
  )
}

export default function HeroSlider({ onOpenDemo }) {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const autoPlayTimer = useRef(null)
  const router = useRouter()

  const clearTimer = useCallback(() => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current)
    }
  }, [])

  const goTo = useCallback((idx) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  const resetAutoplay = useCallback(() => {
    clearTimer()
    autoPlayTimer.current = setInterval(next, 6000)
  }, [next, clearTimer])

  useEffect(() => {
    resetAutoplay()
    return () => clearTimer()
  }, [resetAutoplay, clearTimer])

  const handleCtaClick = (e, cta) => {
    e.preventDefault()
    
    // Explicit safety checks for modal actions
    if (cta.actionType === 'demo' || cta.href === '#demo') {
      if (typeof onOpenDemo === 'function') {
        onOpenDemo()
      } else {
        console.warn("onOpenDemo function was not properly passed down to HeroSlider component")
      }
      return
    }

    if (cta.actionType === 'anchor' || cta.href.startsWith('#')) {
      const element = document.querySelector(cta.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', cta.href)
      } else {
        router.push(`/${cta.href}`)
      }
    } else {
      router.push(cta.href)
    }
  }

  const slide   = SLIDES[current]
  const isCyan  = slide.accent === 'cyan'
  const accentC = isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)'
  const rgb     = isCyan ? '0,240,255' : '57,255,20'

  return (
    <section
      className="relative flex flex-col cyber-grid scanline-effect overflow-hidden"
      style={{
        paddingTop: 'clamp(90px, 13vw, 120px)',
        minHeight: '100svh',
        background: `
          radial-gradient(ellipse 70% 60% at 65% 50%, rgba(${rgb},0.05) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 10% 80%, rgba(0,240,255,0.04) 0%, transparent 55%),
          var(--color-cyber-base)
        `,
      }}
    >
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-12 md:py-16 lg:py-20">

            <div key={animKey} className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="animate-fade-in-up">
                <span className={`section-label ${slide.accent === 'green' ? 'section-label-green' : ''}`}
                  style={{ fontSize: 'clamp(9px, 1.8vw, 11px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full pulse-glow flex-shrink-0"
                    style={{ background: accentC, boxShadow: `0 0 6px ${accentC}` }} />
                  {slide.badge}
                </span>
              </div>

              <div className="animate-fade-in-up delay-100">
                <h1 className="display-heading leading-tight" style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                }}>
                  {slide.headline[0]}
                  <br />
                  <span style={{ color: accentC }} className={isCyan ? 'text-glow-cyan' : 'text-glow-green'}>
                    {slide.headline[1]}
                  </span>
                </h1>
              </div>

              <p className="animate-fade-in-up delay-200 leading-relaxed"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  maxWidth: '38rem',
                }}>
                {slide.sub}
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
                <button
                  onClick={(e) => handleCtaClick(e, slide.ctaPrimary)}
                  className={`btn-cyber ${isCyan ? 'btn-cyber-primary' : 'btn-cyber-green'} cursor-pointer`}
                  style={{ fontSize: 'clamp(11px, 1.5vw, 13px)' }}
                >
                  {slide.ctaPrimary.label}
                  <ArrowRight size={14} />
                </button>

                {slide.ctaSecondary && (
                  <button
                    onClick={(e) => handleCtaClick(e, slide.ctaSecondary)}
                    className="btn-cyber btn-cyber-ghost cursor-pointer"
                    style={{ fontSize: 'clamp(11px, 1.5vw, 13px)' }}
                  >
                    {slide.ctaSecondary.label}
                  </button>
                )}
              </div>

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
            </div>

            <div key={`orb-${animKey}`} className="hidden sm:flex md:flex items-center justify-center relative animate-fade-in-up delay-200" style={{ height: 'clamp(240px, 35vw, 360px)' }}>
              <CyberOrb accent={slide.accent} />
            </div>
          </div>
        </div>
      </div>

      {/* Control Navigation Elements */}
      <div className="relative z-10 pb-8 sm:pb-10 md:pb-12 flex items-center justify-center gap-3 sm:gap-6 px-4">
        <button onClick={prev} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all glass-card cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--color-text-muted)' }}>
          <ChevronLeft size={15} />
        </button>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} className="transition-all duration-300 rounded-full cursor-pointer" style={{ width: i === current ? 24 : 6, height: 6, background: i === current ? accentC : 'rgba(255,255,255,0.18)' }} />
          ))}
        </div>
        <button onClick={next} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all glass-card cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'var(--color-text-muted)' }}>
          <ChevronRight size={15} />
        </button>
      </div>
    </section>
  )
}