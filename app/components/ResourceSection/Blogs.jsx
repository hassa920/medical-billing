'use client'

import { Calendar, User, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'AI Medical Scribe: Revolutionizing Healthcare Documentation',
    excerpt: 'Discover how AI-powered documentation is saving physicians hours and improving accuracy in medical records.',
    author: 'Dr. Sarah Johnson',
    date: 'June 1, 2024',
    category: 'AI & Technology',
    image: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.4))',
    slug: 'ai-medical-scribe',
  },
  {
    id: 2,
    title: 'Medical Billing 2024: Best Practices for Revenue Optimization',
    excerpt: 'Learn the latest strategies for maximizing revenue cycle management and reducing claim denials.',
    author: 'John Mitchell',
    date: 'May 28, 2024',
    category: 'Revenue Cycle',
    image: 'linear-gradient(135deg, rgba(10,170,110,0.6), rgba(10,170,110,0.2))',
    slug: 'medical-billing-2024',
  },
  {
    id: 3,
    title: 'EHR Implementation: A Complete Guide for Practice Managers',
    excerpt: 'Step-by-step guide to successfully implementing an Electronic Health Record system in your practice.',
    author: 'Emily Roberts',
    date: 'May 25, 2024',
    category: 'Implementation',
    image: 'linear-gradient(135deg, rgba(0,169,217,0.5), rgba(0,105,217,0.3))',
    slug: 'ehr-implementation-guide',
  },
  {
    id: 4,
    title: 'Telemedicine Integration: Expanding Your Patient Reach',
    excerpt: 'How to seamlessly integrate telemedicine into your practice workflow and patient experience.',
    author: 'Dr. Michael Chen',
    date: 'May 22, 2024',
    category: 'Telemedicine',
    image: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.4))',
    slug: 'telemedicine-integration',
  },
  {
    id: 5,
    title: 'HIPAA Compliance: Protecting Patient Data in 2024',
    excerpt: 'Essential compliance requirements and best practices for maintaining HIPAA standards.',
    author: 'Legal Team',
    date: 'May 20, 2024',
    category: 'Compliance',
    image: 'linear-gradient(135deg, rgba(10,170,110,0.6), rgba(10,170,110,0.2))',
    slug: 'hipaa-compliance-2024',
  },
  {
    id: 6,
    title: 'Practice Management Software: Feature Comparison Guide',
    excerpt: 'Comprehensive comparison of top practice management solutions for modern healthcare facilities.',
    author: 'Sarah Williams',
    date: 'May 18, 2024',
    category: 'Practice Management',
    image: 'linear-gradient(135deg, rgba(0,169,217,0.5), rgba(0,105,217,0.3))',
    slug: 'pm-software-comparison',
  },
]

export default function Blogs() {
  return (
    <section id="blogs" style={{ position: 'relative', padding: '80px 0', background: 'var(--color-cyber-base)' }}>
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
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
              Latest Resources
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
            Insights & Best Practices
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
            Stay updated with expert insights on healthcare technology, medical billing, and practice management.
          </p>
        </div>

        {/* Blog Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px',
          }}
        >
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              style={{
                borderRadius: '16px',
                background: 'var(--color-cyber-card)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
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
              {/* Image */}
              <div
                style={{
                  height: '200px',
                  background: post.image,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--color-neon-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                    minHeight: '48px',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '12px',
                    color: 'var(--color-text-muted)',
                    marginBottom: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} />
                    {post.author}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>

                {/* Read More */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-neon-cyan)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  Read Article
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
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
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
