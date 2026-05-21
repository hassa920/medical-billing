import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Dr. Olga Leonardi',
    title: 'Manhattan Endocrinologist',
    practice: 'Manhattan Endocrinology PLLC',
    initials: 'OL',
    rating: 5,
    quote: 'MediCore has completely transformed how I manage my practice. The AI scribe alone saves me nearly 2 hours a day — time I now spend with patients instead of a keyboard.',
  },
  {
    name: 'Dr. Lilly-Rose Chen',
    title: 'Dermatologist',
    practice: 'Rose Dermatology P.C.',
    initials: 'LC',
    rating: 5,
    quote: 'The specialty workflows are spot-on for dermatology. Templates are intuitive, billing flows are seamless, and support has been phenomenal from day one.',
  },
  {
    name: 'Dr. Steven Sherwin',
    title: 'Obstetrician & Gynecologist',
    practice: 'Garden City OB/GYN',
    initials: 'SS',
    rating: 5,
    quote: 'Switching to MediCore was the best business decision we made. Revenue is up 22% and our team spends far less time on administrative work. Remarkable platform.',
  },
  {
    name: 'Dr. Marcus Webb',
    title: 'Internal Medicine',
    practice: 'Westside Medical Group',
    initials: 'MW',
    rating: 5,
    quote: 'The patient portal and AI contact center have dramatically reduced our no-show rate. Patients love the automated reminders and easy online scheduling.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full blur-[120px] opacity-6"
          style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.4) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <span className="section-label">
            <Quote size={11} />
            Customer Stories
          </span>
          <h2 className="display-heading text-4xl md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
            Trusted by{' '}
            <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
              50,000+ Providers
            </span>
          </h2>
          <p className="text-base max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
            Hear from the physicians who have transformed their practice with MediCore.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              className="flex flex-col gap-5 p-6 rounded-2xl glass-card card-hover"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#00f0ff" style={{ color: 'var(--color-neon-cyan)' }} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote size={20} className="absolute -top-1 -left-1 opacity-20"
                  style={{ color: 'var(--color-neon-cyan)' }} />
                <p className="text-sm leading-relaxed pl-3" style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(0,240,255,0.1)',
                    border: '1px solid rgba(0,240,255,0.25)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-neon-cyan)',
                  }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', letterSpacing: '0.02em' }}>
                    {t.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more */}
        <div className="flex justify-center mt-10">
          <a href="/testimonials"
            className="text-sm flex items-center gap-1.5 transition-all"
            style={{ color: 'var(--color-neon-cyan)', fontFamily: 'var(--font-display)', letterSpacing: '0.07em' }}>
            READ ALL CUSTOMER STORIES →
          </a>
        </div>
      </div>
    </section>
  )
}