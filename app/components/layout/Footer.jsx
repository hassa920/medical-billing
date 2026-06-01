"use client"
import Link from 'next/link'
import { Activity, Mail, Phone, ArrowUpRight } from 'lucide-react'

const FOOTER_LINKS = {
  Home: [
    {   label: 'Homepage',
      href: '#homepage', },
    {  label: 'Specialties',
      href: '#specialties', },
    { label: 'Testimonials',
      href: '#testimonials', },
    { label: 'Request Demo',
      href: '#request-demo', },
  ],
  Company: [
    { label: 'About MediCore',       href: '/company#about' },
    { label: 'Awards & Recognition', href: '/company#awards' },
    { label: 'FAQs',      href: '/company#faqs' },
    { label: 'Contact Us',             href: '/company#contact' },
  
  ],
  Resources: [
    { label: 'Blogs & Articles',     href: '/resource#blogs' },
    { label: 'Customer Stories',     href: '/resource#stories' },

  ],
}

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
  { icon: XIcon,        href: '#', label: 'Twitter'  },
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
]

const BOTTOM_LINKS = ['Privacy Policy', 'Terms of Use', 'HIPAA Notice', 'Sitemap']

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-cyber-base)',
        borderTop: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
      }}
    >
   
      

      {/* ── Main footer body ── */}
      <div style={{ maxWidth: 'calc(1120px + 2rem)', margin: '0 auto', padding: '52px 32px 0', position:'relative' }}>
        <div style={{
          display            : 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap                : '36px 28px',
        }}>

          {/* ── Brand column ── */}
          <div style={{ gridColumn: 'span 2', display:'flex', flexDirection:'column', gap:18 }}>

            {/* Logo */}
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{
                width          : 38,
                height         : 38,
                borderRadius   : 10,
                display        : 'flex',
                alignItems     : 'center',
                justifyContent : 'center',
                background     : 'var(--color-neon-cyan-soft)',
                border         : '1px solid var(--color-neon-cyan-border)',
                boxShadow      : '0 2px 12px var(--color-neon-cyan-shadow)',
              }}>
                <Activity size={18} style={{ color: 'var(--color-neon-cyan)' }} />
              </div>
              <span style={{
                fontFamily   : 'var(--font-display)',
                fontSize     : 20,
                fontWeight   : 700,
                letterSpacing: '0.12em',
                color        : 'var(--color-text-primary)',
              }}>
                MEDI<span style={{ color: 'var(--color-neon-cyan)' }}>CORE</span>
              </span>
            </div>

            <p style={{
              fontSize  : 13,
              lineHeight: 1.7,
              color     : 'var(--color-text-secondary)',
              maxWidth  : 260,
              margin    : 0,
            }}>
              AI-powered EHR, Billing, and Practice Management for modern medical practices.
              25+ years of healthcare technology excellence.
            </p>

            {/* Contact info */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[
                { icon: Phone, text: '+1 646 663 8030', href: 'tel:+16466638030' },
                { icon: Mail,  text: 'sales@medicore.io', href: 'mailto:sales@medicore.io' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display       : 'flex',
                    alignItems    : 'center',
                    gap           : 9,
                    fontSize      : 13,
                    color         : 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition    : 'color .18s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-neon-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  <div style={{
                    width         : 28,
                    height        : 28,
                    borderRadius  : 7,
                    background    : 'var(--color-neon-cyan-muted)',
                    border        : '1px solid var(--color-neon-cyan-border-muted)',
                    display       : 'flex',
                    alignItems    : 'center',
                    justifyContent: 'center',
                    flexShrink    : 0,
                  }}>
                    <Icon size={12} style={{ color: 'var(--color-neon-cyan)' }} />
                  </div>
                  {text}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display:'flex', gap:8, marginTop:4 }}>
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width         : 36,
                    height        : 36,
                    borderRadius  : 9,
                    display       : 'flex',
                    alignItems    : 'center',
                    justifyContent: 'center',
                    background    : 'var(--color-cyber-surface-soft)',
                    border        : '1px solid var(--border-subtle)',
                    color         : 'var(--color-text-soft)',
                    transition    : 'all .20s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background   = 'var(--color-neon-cyan-soft)'
                    e.currentTarget.style.borderColor  = 'var(--color-neon-cyan-emphasis)'
                    e.currentTarget.style.color        = 'var(--color-neon-cyan)'
                    e.currentTarget.style.boxShadow    = '0 4px 14px rgba(0,105,217,0.18)'
                    e.currentTarget.style.transform    = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background   = 'var(--color-cyber-surface-soft)'
                    e.currentTarget.style.borderColor  = 'var(--border-subtle)'
                    e.currentTarget.style.color        = 'var(--color-text-soft)'
                    e.currentTarget.style.boxShadow    = 'none'
                    e.currentTarget.style.transform    = 'none'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} style={{ display:'flex', flexDirection:'column', gap:14 }}>

              {/* Column heading */}
              <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                <div style={{
                  width    : 3,
                  height   : 14,
                  borderRadius: 2,
                  background: heading === 'Resources' ? 'var(--color-neon-green)' : 'var(--color-neon-cyan)',
                  flexShrink: 0,
                }} />
                <h4 style={{
                  fontFamily  : "var(--font-display, 'Rajdhani', sans-serif)",
                  fontSize    : 11,
                  fontWeight  : 700,
                  letterSpacing:'0.14em',
                  textTransform:'uppercase',
                  color       : heading === 'Resources' ? 'var(--color-neon-green)' : 'var(--color-neon-cyan)',
                  margin      : 0,
                }}>
                  {heading}
                </h4>
              </div>

              {/* Divider */}
              <div style={{
                height    : 1,
                background: heading === 'Resources'
                  ? 'linear-gradient(90deg, rgba(10,170,110,0.3), transparent)'
                  : 'linear-gradient(90deg, rgba(0,105,217,0.2), transparent)',
                marginTop : -6,
              }} />

              <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:9 }}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize      : 13,
                        color         : 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        transition    : 'color .16s ease',
                        display       : 'inline-flex',
                        alignItems    : 'center',
                        gap           : 5,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-neon-cyan)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display        : 'flex',
          flexWrap       : 'wrap',
          alignItems     : 'center',
          justifyContent : 'space-between',
          gap            : 14,
          marginTop      : 44,
          padding        : '18px 0 24px',
          borderTop      : '1px solid var(--border-subtle)',
        }}>
          <p style={{ fontSize:12, color:'var(--color-text-muted)', margin:0 }}>
            © 1997–{new Date().getFullYear()} MediCore Healthcare Technologies, Inc. All rights reserved.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px 18px' }}>
            {BOTTOM_LINKS.map(item => (
              <Link
                key={item}
                href="#"
                style={{
                  fontSize      : 12,
                  color         : 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition    : 'color .16s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-neon-cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}