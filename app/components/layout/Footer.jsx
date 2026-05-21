"use client"
import Link from 'next/link'
import { Activity, Mail, Phone } from 'lucide-react'

const FOOTER_LINKS = {
  Solutions: [
    { label: 'Electronic Health Records', href: '/ehr' },
    { label: 'Practice Management', href: '/practice' },
    { label: 'Revenue Cycle Management', href: '/rcm' },
    { label: 'AI Medical Scribe', href: '/ai-scribe' },
    { label: 'Patient Portal', href: '/portal' },
    { label: 'Mobile EHR', href: '/mobile' },
    { label: 'Credentialing Services', href: '/credentialing' },
  ],
  Company: [
    { label: 'About MediCore', href: '/about' },
    { label: 'Awards & Recognition', href: '/awards' },
    { label: 'Partner Program', href: '/partners' },
    { label: 'Newsroom', href: '/news' },
    { label: 'Careers', href: '/careers' },
    { label: 'Support & Services', href: '/support' },
    { label: '25+ Years of Excellence', href: '/history' },
  ],
  Resources: [
    { label: 'Resource Center', href: '/resources' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'Blog', href: '/blog' },
    { label: 'Whitepapers', href: '/whitepapers' },
    { label: 'MIPS & Quality Reporting', href: '/mips' },
    { label: 'Customer Stories', href: '/testimonials' },
  ],
}

// Inline SVGs for brand icons — no dependency on lucide-react brand exports
const XIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

const LinkedInIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FacebookIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const SOCIAL_LINKS = [
  { icon: XIcon, href: '#', label: 'Twitter' },
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(0,240,255,0.08)' }}>

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.25)', boxShadow: 'var(--shadow-glow-cyan)' }}>
                <Activity size={18} style={{ color: 'var(--color-neon-cyan)' }} />
              </div>
              <span className="text-xl font-bold tracking-widest"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>
                MEDI<span style={{ color: 'var(--color-neon-cyan)' }}>CORE</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
              AI-powered EHR, Billing, and Practice Management for modern medical practices.
              25+ years of healthcare technology excellence.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+16466638030" className="flex items-center gap-2.5 transition-colors hover:text-cyan-400"
                style={{ color: 'var(--color-text-secondary)' }}>
                <Phone size={13} style={{ color: 'var(--color-neon-cyan)' }} />
                +1 646 663 8030
              </a>
              <a href="mailto:sales@medicore.io" className="flex items-center gap-2.5 transition-colors hover:text-cyan-400"
                style={{ color: 'var(--color-text-secondary)' }}>
                <Mail size={13} style={{ color: 'var(--color-neon-cyan)' }} />
                sales@medicore.io
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all glass-card"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)'; e.currentTarget.style.color = '#00f0ff'; e.currentTarget.style.boxShadow = 'var(--shadow-glow-cyan)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.boxShadow = 'none' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-[0.12em] uppercase"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-neon-cyan)', letterSpacing: '0.12em' }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-14 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © 1997 – {new Date().getFullYear()} MediCore Healthcare. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {['Privacy Policy', 'Terms of Use', 'HIPAA Notice', 'Sitemap'].map(item => (
              <Link key={item} href="#"
                className="transition-colors hover:text-cyan-400"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}