'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader } from 'lucide-react'

const CONTACT_CARDS = [
  {
    icon: Phone, accent: 'cyan',
    label: 'Call Us',
    value: '+1 (800) 555-0192',
    sub: 'Mon–Fri, 9am–6pm EST',
    href: 'tel:+18005550192',
  },
  {
    icon: Mail, accent: 'green',
    label: 'Email Us',
    value: 'billing@medicore.com',
    sub: 'Response within 2 business hours',
    href: 'mailto:billing@medicore.com',
  },
  {
    icon: MapPin, accent: 'cyan',
    label: 'Head Office',
    value: '350 Fifth Avenue, Suite 4100',
    sub: 'New York, NY 10118',
    href: '#',
  },
  {
    icon: Clock, accent: 'green',
    label: 'Business Hours',
    value: 'Monday – Friday',
    sub: '9:00 AM – 6:00 PM EST',
    href: null,
  },
]

const INQUIRY_TYPES = [
  'General Inquiry', 'Request a Demo', 'Billing & Pricing',
  'Technical Support', 'Partnership', 'Other',
]

const INITIAL_FORM = {
  firstName: '', lastName: '', email: '', phone: '',
  practice: '', specialty: '', inquiryType: '', message: '',
}

const inputBase = {
  width: '100%', padding: '11px 14px', borderRadius: 9,
  fontSize: 14, fontFamily: 'var(--font-body)',
  background: 'rgba(255,255,255,0.7)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--color-text-primary)',
  outline: 'none', transition: 'border-color 0.2s',
}

const inputError = { borderColor: '#e53e3e' }

function Field({ label, error, children }) {
  return (
    <div>
      <label
        style={{
          display: 'block', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.07em', textTransform: 'uppercase',
          color: 'var(--color-text-secondary)', marginBottom: 6,
          fontFamily: 'var(--font-display)',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: 12, color: '#e53e3e', marginTop: 4 }}>{error}</p>
      )}
    </div>
  )
}

export default function ContactUs() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim())  e.lastName  = 'Required'
    if (!form.email.trim())     e.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.inquiryType)      e.inquiryType = 'Please select a type'
    if (!form.message.trim())   e.message   = 'Required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const focusStyle = (e) => (e.target.style.borderColor = 'var(--border-cyan)')
  const blurStyle  = (e) => (e.target.style.borderColor = 'var(--border-subtle)')

  return (
    <section
      id="contact"
      className="w-full cyber-grid"
      style={{ padding: '88px 0 72px', scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16 }}>Contact Us</span>
          <h2
            className="display-heading"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)', maxWidth: 640, marginBottom: 18 }}
          >
            Let&apos;s Start the{' '}
            <span className="text-glow-cyan">Conversation.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--color-text-secondary)', maxWidth: 500, lineHeight: 1.7 }}>
            Whether you&apos;re ready to switch billing providers or just exploring your options,
            our team is ready to help.
          </p>
        </div>

        {/* ── Contact info cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: 56 }}>
          {CONTACT_CARDS.map(({ icon: Icon, accent, label, value, sub, href }) => {
            const isCyan = accent === 'cyan'
            const card = (
              <div
                className="glass-card card-hover"
                style={{
                  borderRadius: 14, padding: '22px 18px',
                  borderTop: `3px solid ${isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)'}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12, height: '100%',
                }}
              >
                <div
                  style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: isCyan ? 'rgba(0,105,217,0.09)' : 'rgba(10,170,110,0.09)',
                    border: `1px solid ${isCyan ? 'var(--border-cyan)' : 'var(--border-green)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Icon size={18} style={{ color: isCyan ? 'var(--color-neon-cyan)' : 'var(--color-neon-green)' }} />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 4 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                    {value}
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 3 }}>{sub}</p>
                </div>
              </div>
            )
            return href && href !== '#' ? (
              <a key={label} href={href} style={{ textDecoration: 'none', display: 'block' }}>{card}</a>
            ) : (
              <div key={label}>{card}</div>
            )
          })}
        </div>

        {/* ── Form + side panel ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left side panel ── */}
          <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* What happens next */}
            <div
              style={{
                borderRadius: 18, padding: '28px 24px',
                background: 'linear-gradient(135deg, #0a1628 0%, #0d2040 100%)',
                border: '1px solid rgba(0,105,217,0.18)',
              }}
            >
              <h3
                className="display-heading"
                style={{ fontSize: 20, color: '#fff', marginBottom: 24 }}
              >
                What happens next?
              </h3>
              {[
                { n: '01', t: 'We review your inquiry',  d: 'Within 2 business hours, a specialist reviews your message and prepares a personalized response.' },
                { n: '02', t: 'Discovery call',          d: "We schedule a 30-minute call to understand your practice's current billing challenges and goals." },
                { n: '03', t: 'Custom proposal',         d: 'We deliver a tailored RCM proposal with pricing, timeline, and expected performance benchmarks.' },
              ].map(({ n, t, d }) => (
                <div key={n} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <div
                    style={{
                      flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,105,217,0.2)', border: '1px solid rgba(0,105,217,0.35)',
                      fontSize: 11, fontWeight: 800, color: 'var(--color-neon-cyan)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {n}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t}</p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.52)', lineHeight: 1.65 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Commitment card */}
            <div
              className="glass-card"
              style={{ borderRadius: 14, padding: '22px 20px' }}
            >
              <p
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.09em',
                  textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 14,
                  fontFamily: 'var(--font-display)',
                }}
              >
                Our Commitment
              </p>
              {[
                'No pushy sales calls — just honest conversations',
                'Your data is never shared with third parties',
                'No long-term contracts required',
                'Free practice analysis with every demo',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                  <CheckCircle size={14} style={{ color: 'var(--color-neon-green)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="glass-card"
                style={{
                  borderRadius: 18, padding: '64px 32px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(10,170,110,0.1)',
                    border: '2px solid var(--border-green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24,
                  }}
                >
                  <CheckCircle size={32} style={{ color: 'var(--color-neon-green)' }} />
                </div>
                <h3
                  className="display-heading"
                  style={{ fontSize: 28, marginBottom: 12 }}
                >
                  Message received!
                </h3>
                <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', maxWidth: 340, lineHeight: 1.7 }}>
                  Thank you for reaching out. A Medicore specialist will be in touch within 2 business hours.
                </p>
                <button
                  className="btn-cyber btn-cyber-ghost"
                  style={{ marginTop: 28 }}
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div
                className="glass-card"
                style={{ borderRadius: 18, padding: '36px 32px' }}
              >
                <h3
                  className="display-heading"
                  style={{ fontSize: 24, marginBottom: 4 }}
                >
                  Send us a message
                </h3>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 28 }}>
                  All fields marked * are required.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }} noValidate>

                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First Name *" error={errors.firstName}>
                      <input
                        name="firstName" value={form.firstName} onChange={handleChange}
                        placeholder="Jane"
                        style={{ ...inputBase, ...(errors.firstName ? inputError : {}) }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Last Name *" error={errors.lastName}>
                      <input
                        name="lastName" value={form.lastName} onChange={handleChange}
                        placeholder="Smith"
                        style={{ ...inputBase, ...(errors.lastName ? inputError : {}) }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email *" error={errors.email}>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="jane@practice.com"
                        style={{ ...inputBase, ...(errors.email ? inputError : {}) }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        style={inputBase}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                  </div>

                  {/* Practice + Specialty */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Practice Name">
                      <input
                        name="practice" value={form.practice} onChange={handleChange}
                        placeholder="Smith Family Medicine"
                        style={inputBase}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                    <Field label="Specialty">
                      <input
                        name="specialty" value={form.specialty} onChange={handleChange}
                        placeholder="e.g. Cardiology"
                        style={inputBase}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </Field>
                  </div>

                  {/* Inquiry type */}
                  <Field label="Inquiry Type *" error={errors.inquiryType}>
                    <select
                      name="inquiryType" value={form.inquiryType} onChange={handleChange}
                      style={{
                        ...inputBase,
                        ...(errors.inquiryType ? inputError : {}),
                        color: form.inquiryType ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                      }}
                      onFocus={focusStyle} onBlur={blurStyle}
                    >
                      <option value="" disabled>Select an inquiry type</option>
                      {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Message *" error={errors.message}>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={4} placeholder="Tell us about your practice and how we can help..."
                      style={{ ...inputBase, ...(errors.message ? inputError : {}), resize: 'vertical', minHeight: 110 }}
                      onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </Field>

                  {/* Privacy note */}
                  <p style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                    By submitting this form you agree to our{' '}
                    <a href="/privacy" style={{ color: 'var(--color-neon-cyan)', fontWeight: 600 }}>Privacy Policy</a>.
                    {' '}We never share your information.
                  </p>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-cyber btn-cyber-primary"
                      style={{ minWidth: 180, opacity: loading ? 0.8 : 1 }}
                    >
                      {loading ? (
                        <>
                          <Loader size={15} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}