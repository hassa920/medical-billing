import { ArrowRight, CalendarDays, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-2xl overflow-hidden cyber-grid"
          style={{
            background: 'rgba(10,15,28,0.7)',
            border: '1px solid rgba(0,240,255,0.15)',
            boxShadow: '0 0 60px rgba(0,240,255,0.08), inset 0 0 80px rgba(0,240,255,0.03)',
          }}>

          {/* Glow blobs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[80px] opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.8) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[80px] opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.7) 0%, transparent 70%)' }} />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20"
              style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, transparent 60%)', borderRadius: '16px 0 0 0' }} />
            <div className="absolute bottom-0 right-0 w-20 h-20"
              style={{ background: 'linear-gradient(315deg, rgba(57,255,20,0.06) 0%, transparent 60%)', borderRadius: '0 0 16px 0' }} />
            {/* Top/bottom border glow lines */}
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.5), rgba(57,255,20,0.3), transparent)' }} />
            <div className="absolute bottom-0 inset-x-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.3), rgba(0,240,255,0.5), transparent)' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8 py-20">
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-neon-cyan)' }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 6px var(--color-neon-cyan)' }} />
              <span className="section-label">Ready to Transform Your Practice?</span>
            </div>

            <h2 className="display-heading text-4xl md:text-5xl xl:text-6xl max-w-3xl"
              style={{ color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              Start Your Journey to{' '}
              <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
                Smarter Healthcare
              </span>{' '}
              Today
            </h2>

            <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Join 50,000+ providers who have streamlined operations, boosted revenue,
              and elevated patient care with MediCore. Your personalized demo takes under 30 minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <button className="btn-cyber btn-cyber-primary text-sm gap-2">
                <CalendarDays size={16} />
                Book a Free Demo
                <ArrowRight size={15} />
              </button>
              <a href="tel:+16466638030" className="btn-cyber btn-cyber-ghost text-sm gap-2">
                <Phone size={15} />
                Call +1 646 663 8030
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
              No credit card required &nbsp;·&nbsp; HIPAA compliant &nbsp;·&nbsp; Cancel anytime
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mt-6 pt-6 w-full max-w-lg"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                { v: '25+', l: 'Years trusted' },
                { v: '50K+', l: 'Active providers' },
                { v: '<30min', l: 'Demo duration' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="stat-number text-2xl">{s.v}</span>
                  <span className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}