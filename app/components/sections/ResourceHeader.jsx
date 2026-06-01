'use client'

export default function ResourceHeader() {
  return (
    <section
      style={{ padding: '88px 0 72px', scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ── Section header ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 56 }}>
          <div
            className="section-label"
            style={{ marginBottom: 16 }}
          >
            Resources & Learning
          </div>
          <h1
            className="display-heading"
            style={{
              fontSize: 'clamp(38px, 5vw, 62px)',
              maxWidth: 680,
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            Learn, Grow & Succeed{' '}
            <span className="text-glow-cyan">with MediCore</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--color-text-secondary)',
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Expert insights, real success stories, and comprehensive guides to help you master medical billing and healthcare management.
          </p>
        </div>
      </div>
    </section>
  )
}
