'use client'

import { Quote, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Dr. Olga Leonardi',
    title: 'Manhattan Endocrinologist',
    practice: 'Manhattan Endocrinology PLLC',
    initials: 'OL',
    rating: 5,
    quote:
      'MediCore has transformed how I manage my practice. The AI scribe saves me nearly two hours a day — time I now spend with patients instead of on paperwork.',
  },
  {
    name: 'Dr. Lilly-Rose Chen',
    title: 'Dermatologist',
    practice: 'Rose Dermatology P.C.',
    initials: 'LC',
    rating: 5,
    quote:
      'The specialty workflows are ideal for dermatology. Templates are intuitive, billing is seamless, and support has been exceptional from day one.',
  },
  {
    name: 'Dr. Steven Sherwin',
    title: 'Obstetrician & Gynecologist',
    practice: 'Garden City OB/GYN',
    initials: 'SS',
    rating: 5,
    quote:
      'Switching to MediCore was the best business decision we made. Revenue is up 22% and our team spends far less time on administration.',
  },
  {
    name: 'Dr. Marcus Webb',
    title: 'Internal Medicine',
    practice: 'Westside Medical Group',
    initials: 'MW',
    rating: 5,
    quote:
      'The patient portal and AI contact center have dramatically reduced our no-show rate. Patients appreciate the automated reminders and easy online scheduling.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-5 lg:py-5 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] rounded-full blur-[160px] opacity-[0.06]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,105,217,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

     

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="section-label mb-5">
            <Quote size={12} />
            Customer Stories
          </span>

          <h2
            className="display-heading mb-5"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: '1',
            }}
          >
            Trusted by{' '}
            <span
              className="text-glow-cyan"
              style={{ color: 'var(--color-neon-cyan)' }}
            >
              50,000+ Providers
            </span>
          </h2>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'clamp(1rem,1.3vw,1.125rem)',
              maxWidth: '700px',
              lineHeight: '1.9',
            }}
          >
            Hear from physicians, specialists, and healthcare leaders who have
            transformed operations, increased efficiency, and elevated patient
            care with MediCore.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card card-hover rounded-2xl p-8 lg:p-9 flex flex-col h-full"
              style={{
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="var(--color-neon-cyan)"
                    style={{
                      color: 'var(--color-neon-cyan)',
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-8 flex-1">
                <Quote
                  size={28}
                  className="absolute -top-2 -left-2 opacity-15"
                  style={{
                    color: 'var(--color-neon-cyan)',
                  }}
                />

                <p
                  className="pl-5"
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.98rem',
                    lineHeight: '1.95',
                    fontStyle: 'italic',
                  }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-5"
                style={{
                  borderTop: '1px solid rgba(0,60,130,0.08)',
                }}
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(0,105,217,0.08)',
                    border: '1px solid rgba(0,105,217,0.18)',
                    color: 'var(--color-neon-cyan)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  {testimonial.initials}
                </div>

                {/* Info */}
                <div>
                  <div
                    style={{
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {testimonial.name}
                  </div>

                  <div
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.8rem',
                      marginTop: '2px',
                    }}
                  >
                    {testimonial.title}
                  </div>

                  <div
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.8rem',
                      marginTop: '3px',
                    }}
                  >
                    {testimonial.practice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="flex justify-center mt-14 lg:mt-16">
          <a
            href="/testimonials"
            className="btn-cyber btn-cyber-ghost"
            style={{
              fontWeight: 700,
            }}
          >
            Read All Customer Stories
          </a>
        </div> */}
      </div>

          <div className="cyber-divider mt-10 mb-8 lg:mt-14 lg:mb-12" />

    </section>
  )
}