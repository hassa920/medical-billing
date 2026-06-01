'use client'

const STATS = [
  { value: '25+', label: 'Years of Excellence', sub: 'Since 1997' },
  { value: '50K+', label: 'Providers Nationwide', sub: 'Active practices' },
  { value: '99.2%', label: 'Platform Uptime', sub: 'SLA guaranteed' },
  { value: '96%', label: 'First-Pass Claim Rate', sub: 'Industry avg: 74%' },
  { value: '2.4hr', label: 'Documentation Saved Daily', sub: 'Per physician' },
]

export default function StatsBar() {
  return (
    <section className="relative py-5 lg:py-5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] rounded-full blur-[140px] opacity-[0.05]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,105,217,0.5) 0%, transparent 70%)',
          }}
        />
      </div>


      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="section-label mb-5">
            Performance Metrics
          </span>

          <h2
            className="display-heading mb-5"
            style={{
              fontSize: 'clamp(2.75rem, 5vw, 4.75rem)',
              lineHeight: '1',
            }}
          >
            Trusted By{' '}
            <span
              className="text-glow-cyan"
              style={{
                color: 'var(--color-neon-cyan)',
              }}
            >
              Healthcare Leaders
            </span>
          </h2>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: 'clamp(1rem,1.2vw,1.1rem)',
              lineHeight: '1.9',
            }}
          >
            Delivering measurable outcomes for providers, practices, and
            healthcare systems nationwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="glass-card card-hover rounded-2xl p-7 lg:p-8 flex flex-col items-center text-center"
              style={{
                border: '1px solid rgba(0,60,130,0.08)',
                minHeight: '190px',
                justifyContent: 'center',
              }}
            >
              <div
                className="stat-number mb-3"
                style={{
                  fontSize: 'clamp(2.25rem,4vw,3.5rem)',
                  lineHeight: '1',
                }}
              >
                {stat.value}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.03em',
                  lineHeight: '1.4',
                  marginBottom: '0.5rem',
                }}
              >
                {stat.label}
              </h3>

              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

           <div className="cyber-divider mt-10 mb-8 lg:mt-14 lg:mb-12" />

    </section>
  )
}