import { Trophy } from 'lucide-react'

const AWARDS = [
  { rank: '#1',  title: 'Ambulatory EMR / PM',         source: 'KLAS Research',       year: '2024' },
  { rank: 'TOP', title: 'Specialty EHR',                source: 'Black Book Rankings', year: '2024' },
  { rank: '#1',  title: 'Medical Billing Software',     source: 'Capterra',            year: '2024' },
  { rank: 'TOP', title: 'Revenue Cycle Management',     source: 'KLAS Research',       year: '2023' },
  { rank: '5★',  title: 'White Coat of Quality',        source: 'Surescripts',         year: '2024' },
  { rank: 'TOP', title: 'Patient Experience Platform',  source: 'Medical Economics',   year: '2024' },
]

export default function AwardsBadges() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="cyber-divider mb-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 gap-3">
          <span className="section-label">
            <Trophy size={11} />
            Awards & Recognition
          </span>
          <h2 className="display-heading text-3xl md:text-4xl" style={{ color: 'var(--color-text-primary)' }}>
            Award-Winning Technology.{' '}
            <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
              Proven Results.
            </span>
          </h2>
          <p className="text-sm max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
            Recognized by KLAS, Black Book, Surescripts, Capterra, and Medical Economics —
            the industry's most trusted validation bodies.
          </p>
        </div>

        {/* Award badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {AWARDS.map((award, i) => (
            <div key={i}
              className="relative flex flex-col items-center text-center gap-2.5 p-5 rounded-xl glass-card card-hover"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}>

              {/* Rank badge */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(0,240,255,0.08)',
                  border: '1px solid rgba(0,240,255,0.25)',
                  boxShadow: 'var(--shadow-glow-cyan)',
                }}>
                <span className="text-sm font-bold text-glow-cyan"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-neon-cyan)' }}>
                  {award.rank}
                </span>
              </div>

              {/* Title */}
              <div className="text-xs font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', letterSpacing: '0.03em' }}>
                {award.title}
              </div>

              {/* Source */}
              <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{award.source}</div>

              {/* Year chip */}
              <div className="px-2 py-0.5 rounded text-[10px]"
                style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.12)', color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
                {award.year}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a href="/awards"
            className="text-sm flex items-center gap-1.5"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.07em' }}>
            VIEW ALL AWARDS →
          </a>
        </div>
      </div>

      <div className="cyber-divider mt-20" />
    </section>
  )
}