'use client'

import { Star, Quote, ArrowRight } from 'lucide-react'

const CUSTOMER_STORIES = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    title: 'Internal Medicine Physician',
    practice: 'Mitchell Medical Group',
    image: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.4))',
    quote:
      'MediCore has transformed how we manage our practice. We reduced billing errors by 87% and improved our cash flow significantly. The AI-powered features save us hours every week.',
    metrics: [
      { label: 'Billing Errors Reduced', value: '87%' },
      { label: 'Time Saved Weekly', value: '15+ hrs' },
    ],
  },
  {
    id: 2,
    name: 'Dr. James Rodriguez',
    title: 'Cardiology Specialist',
    practice: 'Heart Health Center',
    image: 'linear-gradient(135deg, rgba(10,170,110,0.6), rgba(10,170,110,0.2))',
    quote:
      'The specialty-focused workflows are exactly what we needed. Our billing team is 40% more productive, and our patients appreciate the faster service.',
    metrics: [
      { label: 'Productivity Increase', value: '40%' },
      { label: 'Patient Satisfaction', value: '98%' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Maria Gonzalez',
    title: 'Dermatology Practice Owner',
    practice: 'Skin Wellness Clinic',
    image: 'linear-gradient(135deg, rgba(0,169,217,0.5), rgba(0,105,217,0.3))',
    quote:
      'Outstanding platform. The integration between EHR and billing is seamless. Our reimbursement rates have improved by 34% in just three months.',
    metrics: [
      { label: 'Reimbursement Increase', value: '34%' },
      { label: 'Claims Processed', value: '2,500+/mo' },
    ],
  },
  {
    id: 4,
    name: 'Dr. Robert Chen',
    title: 'Orthopedic Surgeon',
    practice: 'Advanced Orthopedics',
    image: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.4))',
    quote:
      'MediCore provided everything we needed to scale our practice. The support team is responsive, and the platform grows with us.',
    metrics: [
      { label: 'Practices Using', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 5,
    name: 'Dr. Emily Watson',
    title: 'OB/GYN Specialist',
    practice: 'Women\'s Health Partners',
    image: 'linear-gradient(135deg, rgba(10,170,110,0.6), rgba(10,170,110,0.2))',
    quote:
      'The AI medical scribe feature has been a game-changer. Accurate documentation without the administrative burden. Truly innovative.',
    metrics: [
      { label: 'Documentation Time', value: '-60%' },
      { label: 'Note Accuracy', value: '99.2%' },
    ],
  },
  {
    id: 6,
    name: 'Dr. Michael Thompson',
    title: 'Pediatrics Practice',
    practice: 'Healthy Kids Clinic',
    image: 'linear-gradient(135deg, rgba(0,169,217,0.5), rgba(0,105,217,0.3))',
    quote:
      'Excellent reliability and user-friendly interface. Our entire team was productive within days. Best investment we made for our practice.',
    metrics: [
      { label: 'Team Training Time', value: '2 days' },
      { label: 'ROI Achievement', value: '4 months' },
    ],
  },
]

export default function CustomerStories() {
  return (
    <section id="stories" style={{ position: 'relative', padding: '80px 0', background: 'var(--color-cyber-base)' }}>
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1100px',
          height: '500px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,105,217,0.08), rgba(10,170,110,0.08))',
          filter: 'blur(120px)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '12px',
              background: 'var(--color-neon-cyan-subtle)',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-neon-cyan)',
              }}
            >
              Success Stories
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            What Providers Are Saying
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Real results from healthcare professionals who transformed their practices with MediCore.
          </p>
        </div>

        {/* Stories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '60px',
          }}
        >
          {CUSTOMER_STORIES.map((story) => (
            <div
              key={story.id}
              style={{
                borderRadius: '16px',
                background: 'var(--color-cyber-card)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,105,217,0.12)'
                e.currentTarget.style.borderColor = 'var(--color-neon-cyan-soft)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
              }}
            >
              {/* Avatar Section */}
              <div style={{ position: 'relative', padding: '24px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    background: story.image,
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {story.name[0]}
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {story.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {story.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--color-neon-cyan)',
                      fontWeight: 600,
                      marginTop: '4px',
                    }}
                  >
                    {story.practice}
                  </p>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-neon-cyan)" color="var(--color-neon-cyan)" />
                  ))}
                </div>

                {/* Quote */}
                <div
                  style={{
                    position: 'relative',
                    paddingLeft: '24px',
                    marginBottom: '20px',
                    borderLeft: '3px solid var(--color-neon-cyan)',
                  }}
                >
                  <Quote size={16} color="var(--color-neon-cyan-soft)" style={{ position: 'absolute', left: 0, top: 0 }} />
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    &quot;{story.quote}&quot;
                  </p>
                </div>

                {/* Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: 'var(--color-neon-cyan)',
                          marginBottom: '4px',
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '11px',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          {/* <button
            style={{
              padding: '12px 28px',
              borderRadius: '10px',
              fontSize: '14px',
              color: 'var(--color-cyber-base)',
              background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-cyan-strong))',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: '0 4px 14px rgba(0,105,217,0.28)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,105,217,0.36)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,105,217,0.28)'
            }}
          >
            View All Stories
          </button> */}
        </div>
      </div>
    </section>
  )
}
