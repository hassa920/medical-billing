const STATS = [
  { value: '25+',   label: 'Years of Excellence',       sub: 'Since 1997' },
  { value: '50K+',  label: 'Providers Nationwide',      sub: 'Active practices' },
  { value: '99.2%', label: 'Platform Uptime',           sub: 'SLA guaranteed' },
  { value: '96%',   label: 'First-Pass Claim Rate',     sub: 'Industry avg: 74%' },
  { value: '2.4hr', label: 'Documentation Saved Daily', sub: 'Per physician' },
]

export default function StatsBar() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Top divider */}
      <div className="cyber-divider mb-16" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {STATS.map((s, i) => (
            <div key={i}
              className="flex flex-col items-center text-center p-5 rounded-xl glass-card card-hover"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="stat-number text-4xl md:text-3xl xl:text-4xl mb-1">{s.value}</div>
              <div className="text-sm font-medium mb-1"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', letterSpacing: '0.03em' }}>
                {s.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="cyber-divider mt-16" />
    </section>
  )
}