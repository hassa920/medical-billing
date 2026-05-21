import { Activity, BarChart3, Smartphone, Users, Brain, Shield, ArrowRight } from 'lucide-react'

const SOLUTIONS = [
  {
    icon: Activity,
    title: 'Electronic Health Records',
    desc: 'User-friendly, customizable EHR with integrated PM for optimized quality, performance and patient experience.',
    href: '/ehr',
    accent: 'cyan',
  },
  {
    icon: BarChart3,
    title: 'Practice Management',
    desc: 'Boost productivity with enterprise scheduling, eligibility verification, intelligent billing, and reporting.',
    href: '/practice',
    accent: 'cyan',
  },
  {
    icon: Shield,
    title: 'Medical Billing Service',
    desc: 'An effective, easier, and more affordable way to increase cash flows and get paid faster.',
    href: '/billing',
    accent: 'cyan',
  },
  {
    icon: Brain,
    title: 'AI Medical Scribe',
    desc: 'Document, code, and order automatically. Saving physicians hours with effortless AI-generated notes.',
    href: '/ai-scribe',
    accent: 'green',
    badge: 'AI-Powered',
  },
  {
    icon: Smartphone,
    title: 'Mobile EHR',
    desc: 'Cutting-edge user-experience for a revolutionary new approach to practicing medicine, on any device.',
    href: '/mobile',
    accent: 'cyan',
  },
  {
    icon: Users,
    title: 'Patient Portal',
    desc: 'Securely register, request appointments, view charts, statements, messages and reminders.',
    href: '/portal',
    accent: 'cyan',
  },
]

export default function SolutionsGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-5"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.8) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 6px var(--color-neon-cyan)' }} />
            Platform Solutions
          </span>
          <h2 className="display-heading text-4xl md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
            Easy. Integrated.{' '}
            <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
              Specialty-Focused.
            </span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            One intelligent platform covering every aspect of your practice —
            from clinical workflows to revenue and patient engagement.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s, i) => {
            const Icon    = s.icon
            const isCyan  = s.accent === 'cyan'
            const accentC = isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)'
            const rgb     = isCyan ? '0,240,255' : '57,255,20'

            return (
              <a key={i} href={s.href}
                className="group relative flex flex-col gap-4 p-6 rounded-xl glass-card card-hover"
                style={{ border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}>

                {/* AI badge */}
                {s.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="section-label section-label-green text-[10px] px-2 py-1">{s.badge}</span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${rgb},0.08)`,
                    border: `1px solid rgba(${rgb},0.2)`,
                    boxShadow: `0 0 16px rgba(${rgb},0.1)`,
                  }}>
                  <Icon size={22} style={{ color: accentC }} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-semibold mb-2 transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text-primary)',
                      letterSpacing: '0.03em',
                    }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {s.desc}
                  </p>
                </div>

                {/* Learn more */}
                <div className="flex items-center gap-1.5 text-xs mt-auto transition-all duration-200"
                  style={{ color: accentC, fontFamily: 'var(--font-display)', letterSpacing: '0.07em' }}>
                  LEARN MORE
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-px rounded-b-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.5), transparent)` }} />
              </a>
            )
          })}
        </div>

        {/* See all CTA */}
        <div className="flex justify-center mt-10">
          <a href="/solutions" className="btn-cyber btn-cyber-ghost">
            View All Solutions
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}