'use client'

import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

const FAQ_CATEGORIES = [
  {
    category: 'General',
    accent: 'cyan',
    questions: [
      {
        q: 'What is Medicore and how does it work?',
        a: 'Medicore is a full-service medical billing and revenue cycle management (RCM) platform. We handle everything from patient eligibility verification and charge entry to claim submission, denial management, and payment posting — all through a HIPAA-compliant, cloud-based system supported by certified billing specialists.',
      },
      {
        q: 'Which medical specialties do you support?',
        a: 'We support 30+ specialties including primary care, internal medicine, cardiology, orthopedics, behavioral health, dermatology, urgent care, radiology, and more. Each specialty has dedicated billing teams trained in specialty-specific coding (CPT, ICD-10, HCPCS).',
      },
      {
        q: 'How long does it take to get started?',
        a: 'Most practices are fully onboarded within 5–7 business days. Our implementation team handles credential transfers, payer enrollment, EHR integration, and staff training so there is zero disruption to your cash flow during the transition.',
      },
    ],
  },
  {
    category: 'Billing & Revenue',
    accent: 'green',
    questions: [
      {
        q: 'What is your average clean claim rate?',
        a: 'Our platform consistently achieves a 98%+ clean claim rate on first submission. This is driven by AI-powered claim scrubbing, real-time eligibility verification, and payer-specific rule sets maintained by our team.',
      },
      {
        q: 'How do you handle claim denials?',
        a: 'Every denied claim is automatically flagged and routed to a specialist within 24 hours. We analyze root causes, correct coding or documentation issues, and resubmit — tracking appeal outcomes to continuously improve denial prevention rates.',
      },
      {
        q: 'What is your fee structure?',
        a: 'We operate on a percentage-of-collections model, meaning we only get paid when you get paid. There are no hidden setup fees, no long-term contracts, and no charges for denied claims. Contact us for a custom quote based on your specialty and volume.',
      },
      {
        q: 'Can I see real-time reports on my practice performance?',
        a: 'Yes. Your live RCM dashboard shows collection rates, A/R aging, denial trends, payer performance, and revenue forecasts — updated in real time. Monthly executive summaries are also delivered directly to your inbox.',
      },
    ],
  },
  {
    category: 'Technology & Integration',
    accent: 'cyan',
    questions: [
      {
        q: 'Does Medicore integrate with my existing EHR?',
        a: 'We integrate with 50+ EHR and PM systems including Epic, Athenahealth, eClinicalWorks, Kareo, DrChrono, and more via HL7 and FHIR APIs. Our technical team handles the full integration setup at no additional cost.',
      },
      {
        q: 'Is patient data secure on your platform?',
        a: 'Absolutely. We are SOC 2 Type II certified, fully HIPAA-compliant, and use 256-bit SSL encryption. All data is stored in geo-redundant US-based data centers with 99.9% uptime SLAs and continuous vulnerability monitoring.',
      },
      {
        q: 'Do you support telehealth billing?',
        a: 'Yes. We handle telehealth claim submissions including correct modifier usage (GT, 95, POS 02/10), payer-specific telehealth policies, and ensure proper reimbursement in line with CMS and commercial payer guidelines.',
      },
    ],
  },
  {
    category: 'Compliance & HIPAA',
    accent: 'green',
    questions: [
      {
        q: 'Are you HIPAA compliant?',
        a: 'Yes, Medicore maintains full HIPAA compliance across every touchpoint. We sign a Business Associate Agreement (BAA) with every client and conduct annual HIPAA training for all staff. Our systems undergo regular third-party audits.',
      },
      {
        q: 'Do you handle prior authorizations?',
        a: 'Yes. Our team manages the entire prior authorization workflow including submission, follow-up, and documentation — across all major payers. We proactively flag procedures that require auth before service is rendered to prevent retroactive denials.',
      },
    ],
  },
]

function FAQItem({ q, a, isOpen, onToggle, accent }) {
  const isCyan = accent === 'cyan'
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        border: isOpen
          ? `1px solid ${isCyan ? 'var(--border-cyan)' : 'var(--border-green)'}`
          : '1px solid var(--border-subtle)',
        background: isOpen
          ? isCyan ? 'rgba(0,105,217,0.03)' : 'rgba(10,170,110,0.03)'
          : 'var(--color-cyber-card)',
        backdropFilter: 'blur(22px)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          padding: '16px 20px', textAlign: 'left',
          background: 'transparent', border: 'none', cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600,
            color: 'var(--color-text-primary)', lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <div
          style={{
            width: 30, height: 30, borderRadius: 8, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: isOpen
              ? isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)'
              : 'rgba(0,60,130,0.06)',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronDown
            size={15}
            style={{
              color: isOpen ? '#fff' : 'var(--color-text-muted)',
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          />
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: '0 20px 20px' }}>
          <div className="cyber-divider-subtle" style={{ marginBottom: 16 }} />
          <p style={{ fontSize: 14, lineHeight: 1.78, color: 'var(--color-text-secondary)' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState({ cat: 0, q: 0 })
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const allCategories = ['All', ...FAQ_CATEGORIES.map(c => c.category)]

  const filtered = FAQ_CATEGORIES
    .filter(c => activeCategory === 'All' || c.category === activeCategory)
    .map(c => ({
      ...c,
      questions: c.questions.filter(
        item =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(c => c.questions.length > 0)

  const toggle = (catI, qI) =>
    setOpenIndex(prev => (prev.cat === catI && prev.q === qI ? {} : { cat: catI, q: qI }))

  return (
    <section
      id="faqs"
      className="w-full cyber-grid"
      style={{ padding: '88px 0 72px', scrollMarginTop: '80px' }}
    >
      <div className="max-w-4xl mx-auto px-5 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 48 }}>
          <span className="section-label section-label-green" style={{ marginBottom: 16 }}>FAQs</span>
          <h2
            className="display-heading"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)', marginBottom: 18 }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', maxWidth: 480, lineHeight: 1.7 }}>
            Everything you need to know about Medicore. Can&apos;t find your answer?{' '}
            <a href="/company#contact" style={{ color: 'var(--color-neon-cyan)', fontWeight: 600 }}>
              Talk to our team.
            </a>
          </p>
        </div>

        {/* ── Search ── */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <Search
            size={16}
            style={{
              position: 'absolute', left: 16, top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-muted)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px 12px 44px',
              borderRadius: 10, fontSize: 14,
              background: 'var(--color-cyber-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              backdropFilter: 'blur(22px)',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target.style.borderColor = 'var(--border-cyan)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border-subtle)')}
          />
        </div>

        {/* ── Category filter ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
          {allCategories.map(cat => {
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 16px', borderRadius: 100,
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'var(--font-display)', letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  background: active ? 'var(--color-neon-cyan)' : 'var(--color-cyber-card)',
                  color: active ? '#fff' : 'var(--color-text-secondary)',
                  border: active ? '1px solid var(--color-neon-cyan)' : '1px solid var(--border-subtle)',
                  backdropFilter: 'blur(22px)',
                  transition: 'all 0.18s ease',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* ── Questions ── */}
        {filtered.length === 0 ? (
          <div
            className="glass-card"
            style={{ borderRadius: 14, padding: '40px 24px', textAlign: 'center' }}
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: 15 }}>
              No questions match your search.{' '}
              <a href="/company#contact" style={{ color: 'var(--color-neon-cyan)' }}>Ask us directly.</a>
            </p>
          </div>
        ) : (
          filtered.map((cat, catI) => (
            <div key={cat.category} style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span className={`section-label${cat.accent === 'green' ? ' section-label-green' : ''}`}>
                  {cat.category}
                </span>
                <div className="cyber-divider-subtle" style={{ flex: 1 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cat.questions.map((item, qI) => (
                  <FAQItem
                    key={qI}
                    q={item.q}
                    a={item.a}
                    accent={cat.accent}
                    isOpen={openIndex.cat === catI && openIndex.q === qI}
                    onToggle={() => toggle(catI, qI)}
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {/* ── Still have questions CTA ── */}
        <div
          className="glow-cyan-strong"
          style={{
            borderRadius: 20, padding: '44px 36px', textAlign: 'center', marginTop: 48,
            background: 'linear-gradient(135deg, #0069d9 0%, #004fa3 100%)',
          }}
        >
          <h3
            className="display-heading"
            style={{ fontSize: 28, color: '#fff', marginBottom: 10 }}
          >
            Still have questions?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, marginBottom: 24 }}>
            Our billing experts are available Monday–Friday, 9am–6pm EST.
          </p>
          <a
            href="/company#contact"
            className="btn-cyber"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0069d9',
              padding: '12px 28px', borderRadius: 8,
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.22s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  )
}