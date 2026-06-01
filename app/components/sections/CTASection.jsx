'use client'

import { ArrowRight, CalendarDays, Phone } from 'lucide-react'

export default function CTASection({ onOpenDemo }) {
  return (
    <section className="relative py-5 lg:py- overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] rounded-full blur-[180px] opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,105,217,0.55) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div
          className="glass-card rounded-[32px] overflow-hidden relative"
          style={{
            border: '1px solid rgba(0,105,217,0.12)',
            boxShadow:
              '0 10px 50px rgba(0,105,217,0.08), 0 2px 12px rgba(0,105,217,0.05)',
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-40 h-40"
              style={{
                background:
                  'radial-gradient(circle at top left, rgba(0,105,217,0.08), transparent 70%)',
              }}
            />

            <div
              className="absolute bottom-0 right-0 w-52 h-52"
              style={{
                background:
                  'radial-gradient(circle at bottom right, rgba(10,170,110,0.08), transparent 70%)',
              }}
            />

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,105,217,0.35), transparent)',
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(10,170,110,0.35), transparent)',
              }}
            />
          </div>

          <div className="relative z-10 px-8 md:px-14 lg:px-20 py-20 lg:py-24 text-center flex flex-col items-center">
            {/* Label */}
            <span className="section-label mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full pulse-glow"
                style={{
                  background: 'var(--color-neon-cyan)',
                }}
              />
              Ready To Transform Your Practice?
            </span>

            {/* Heading */}
            <h2
              className="display-heading mb-6"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.75rem)',
                lineHeight: '1',
                maxWidth: '1000px',
              }}
            >
              Start Your Journey To{' '}
              <span
                className="text-glow-cyan"
                style={{
                  color: 'var(--color-neon-cyan)',
                }}
              >
                Smarter Healthcare
              </span>{' '}
              Today
            </h2>

            {/* Description */}
            <p
              style={{
                color: 'var(--color-text-secondary)',
                maxWidth: '760px',
                fontSize: 'clamp(1rem,1.3vw,1.15rem)',
                lineHeight: '1.9',
              }}
            >
              Join more than 50,000 healthcare providers who have streamlined
              operations, enhanced patient experiences, and accelerated revenue
              growth with MediCore&apos;s intelligent platform.
            </p>

            {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
  <button
    className="btn-cyber btn-cyber-primary"
    onClick={onOpenDemo}
  >
    <CalendarDays size={16} />
    Book A Free Demo
    <ArrowRight size={15} />
  </button>

  <a
    href="tel:+16466638030"
    className="btn-cyber btn-cyber-ghost"
  >
    <Phone size={15} />
    Call +1 646 663 8030
  </a>
</div>

            {/* Trust Line */}
            <p
              className="mt-6"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.85rem',
              }}
            >
              No credit card required · HIPAA compliant · Enterprise-grade
              security
            </p>

            {/* Metrics */}
            <div
              className="flex flex-wrap justify-center gap-10 lg:gap-14 mt-10 pt-8 w-full max-w-3xl"
              style={{
                borderTop: '1px solid rgba(0,60,130,0.08)',
              }}
            >
              {[
                {
                  value: '25+',
                  label: 'Years Trusted',
                },
                {
                  value: '50K+',
                  label: 'Active Providers',
                },
                {
                  value: '<30 Min',
                  label: 'Demo Duration',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                >
                  <div
                    className="stat-number"
                    style={{
                      fontSize: '2rem',
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.85rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}