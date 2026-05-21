'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Activity, ChevronDown, Menu, X, Zap, BarChart3,
  Smartphone, Users, Brain, Shield, ArrowRight,
} from 'lucide-react'

const NAV_SOLUTIONS = [
  { icon: Activity,   title: 'Electronic Health Records', desc: 'Clinical documentation that thinks ahead.',   href: '/ehr' },
  { icon: BarChart3,  title: 'Practice Management',       desc: 'Streamlined operations, optimized outcomes.', href: '/practice' },
  { icon: Zap,        title: 'Revenue Cycle Management',  desc: 'Capture every dollar, eliminate leakage.',    href: '/rcm' },
  { icon: Brain,      title: 'AI Medical Scribe',         desc: 'Document, code and order automatically.',     href: '/ai-scribe' },
  { icon: Users,      title: 'Patient Portal',            desc: 'AI-powered patient engagement, 24 / 7.',      href: '/portal' },
  { icon: Smartphone, title: 'Mobile EHR',                desc: 'Full clinical power, anywhere you practice.', href: '/mobile' },
  { icon: Shield,     title: 'Credentialing Services',    desc: 'Faster contracts. Maximized reimbursement.',  href: '/credentialing' },
]

const NAV_COMPANY = [
  { title: 'About MediCore',     href: '/about' },
  { title: 'Awards & Recognition', href: '/awards' },
  { title: 'Partner Program',    href: '/partners' },
  { title: 'Newsroom',           href: '/news' },
  { title: 'Careers',            href: '/careers' },
  { title: 'Contact Us',         href: '/contact' },
]

const NAV_RESOURCES = [
  { title: 'Resource Center',      href: '/resources' },
  { title: 'Case Studies',         href: '/case-studies' },
  { title: 'Webinars',             href: '/webinars' },
  { title: 'Blog',                 href: '/blog' },
  { title: 'Whitepapers',          href: '/whitepapers' },
  { title: 'MIPS & Quality Reporting', href: '/mips' },
]

/* ── Single solution card inside mega-menu ── */
function SolutionCard({ icon: Icon, title, desc, href }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 10,
        background: hovered ? 'rgba(0,240,255,0.06)' : 'transparent',
        border: `1px solid ${hovered ? 'rgba(0,240,255,0.15)' : 'transparent'}`,
        transition: 'all 0.18s ease',
        textDecoration: 'none',
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? 'rgba(0,240,255,0.12)' : 'rgba(0,240,255,0.07)',
        border: `1px solid ${hovered ? 'rgba(0,240,255,0.3)' : 'rgba(0,240,255,0.12)'}`,
        transition: 'all 0.18s ease',
      }}>
        <Icon size={15} style={{ color: '#00f0ff' }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.03em',
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
          marginBottom: 2,
          transition: 'color 0.18s ease',
        }}>
          {title}
        </div>
        <div style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.38)',
          lineHeight: 1.45,
          whiteSpace: 'normal',
        }}>
          {desc}
        </div>
      </div>
    </Link>
  )
}

/* ── Simple list link (Company / Resources) ── */
function SimpleLink({ title, href }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '9px 12px',
        borderRadius: 8,
        fontSize: 13,
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.6)',
        background: hovered ? 'rgba(0,240,255,0.05)' : 'transparent',
        border: `1px solid ${hovered ? 'rgba(0,240,255,0.1)' : 'transparent'}`,
        transition: 'all 0.18s ease',
        textDecoration: 'none',
        fontFamily: 'var(--font-body)',
      }}
    >
      {title}
      {hovered && <ArrowRight size={12} style={{ color: '#00f0ff', flexShrink: 0 }} />}
    </Link>
  )
}

/* ── Dropdown wrapper ── */
function NavDropdown({ label, children, wide = false, alignRight = false }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)

  const show = () => { clearTimeout(timerRef.current); setOpen(true) }
  const hide = () => { timerRef.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '7px 14px', borderRadius: 8,
          fontSize: 13, fontWeight: 500, cursor: 'pointer',
          color: open ? '#00f0ff' : 'rgba(255,255,255,0.6)',
          background: open ? 'rgba(0,240,255,0.06)' : 'transparent',
          border: `1px solid ${open ? 'rgba(0,240,255,0.15)' : 'transparent'}`,
          transition: 'all 0.18s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        {label}
        <ChevronDown
          size={13}
          style={{
            color: open ? '#00f0ff' : 'rgba(255,255,255,0.4)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            ...(alignRight ? { right: 0 } : wide ? { left: '50%', transform: 'translateX(-50%)' } : { left: 0 }),
            width: wide ? 580 : 220,
            background: 'rgba(10,15,26,0.97)',
            border: '1px solid rgba(0,240,255,0.12)',
            borderRadius: 14,
            padding: wide ? '14px' : '8px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,240,255,0.05), 0 0 30px rgba(0,240,255,0.06)',
            backdropFilter: 'blur(24px)',
            zIndex: 100,
          }}
        >
          {/* Cyan top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.4), transparent)',
            borderRadius: 1,
          }} />
          {children}
        </div>
      )}
    </div>
  )
}

/* ── Mobile accordion item ── */
function MobileAccordion({ label, links }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '13px 4px', fontSize: 14, fontWeight: 500,
          color: open ? '#00f0ff' : 'rgba(255,255,255,0.7)',
          background: 'transparent', border: 'none', cursor: 'pointer',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {label}
        <ChevronDown size={14} style={{
          color: open ? '#00f0ff' : 'rgba(255,255,255,0.35)',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform 0.2s ease',
        }} />
      </button>
      {open && (
        <div style={{ padding: '6px 0 10px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '7px 8px',
              borderRadius: 7, textDecoration: 'none', display: 'block',
              fontFamily: 'var(--font-body)',
            }}>
              {'title' in l ? l.title : l.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,10,18,0.94)' : 'rgba(7,10,18,0.5)',
        backdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid rgba(0,240,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
      }}
    >
     

      {/* ── Main nav ── */}
      <nav className="flex items-center justify-between px-5 md:px-8 py-3.5 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,240,255,0.08)',
            border: '1px solid rgba(0,240,255,0.28)',
            boxShadow: '0 0 18px rgba(0,240,255,0.18)',
          }}>
            <Activity size={17} style={{ color: '#00f0ff' }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 19,
            fontWeight: 700, letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.92)',
          }}>
            MEDI<span style={{ color: '#00f0ff', textShadow: '0 0 18px rgba(0,240,255,0.6)' }}>CORE</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-1">

          {/* Solutions mega-menu */}
          <NavDropdown label="Solutions" wide>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {NAV_SOLUTIONS.map(item => (
                <SolutionCard key={item.href} {...item} />
              ))}
            </div>
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Link href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 11, color: '#00f0ff', textDecoration: 'none',
                fontFamily: 'var(--font-display)', letterSpacing: '0.1em',
                padding: '6px 10px', borderRadius: 6,
              }}>
                VIEW ALL SOLUTIONS <ArrowRight size={12} />
              </Link>
            </div>
          </NavDropdown>

          {/* Pricing — plain link */}
          <Link href="/pricing" style={{
            padding: '7px 14px', borderRadius: 8, fontSize: 13,
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
            fontFamily: 'var(--font-body)', fontWeight: 500,
            transition: 'color 0.18s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            Pricing
          </Link>

          {/* Company */}
          <NavDropdown label="Company">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV_COMPANY.map(item => <SimpleLink key={item.href} {...item} />)}
            </div>
          </NavDropdown>

          {/* Resources */}
          <NavDropdown label="Resources" alignRight>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV_RESOURCES.map(item => <SimpleLink key={item.href} {...item} />)}
            </div>
          </NavDropdown>
        </div>

        {/* ── CTA buttons ── */}
        <div className="hidden md:flex items-center gap-2.5">
          <button className="btn-cyber btn-cyber-ghost" style={{ fontSize: 12 }}>
            Watch Demo
          </button>
          <button className="btn-cyber btn-cyber-primary" style={{ fontSize: 12 }}>
            Request Demo
          </button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{
            color: 'rgba(255,255,255,0.85)',
            background: mobileOpen ? 'rgba(0,240,255,0.08)' : 'transparent',
            border: `1px solid ${mobileOpen ? 'rgba(0,240,255,0.2)' : 'transparent'}`,
          }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(8,12,22,0.98)',
          borderTop: '1px solid rgba(0,240,255,0.08)',
          padding: '12px 20px 20px',
          backdropFilter: 'blur(24px)',
        }}>
          <MobileAccordion label="Solutions" links={NAV_SOLUTIONS} />
          <Link href="/pricing" style={{
            display: 'block', padding: '13px 4px', fontSize: 14,
            color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            fontFamily: 'var(--font-body)',
          }}>Pricing</Link>
          <MobileAccordion label="Company"   links={NAV_COMPANY} />
          <MobileAccordion label="Resources" links={NAV_RESOURCES} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
            <button className="btn-cyber btn-cyber-ghost" style={{ width: '100%', justifyContent: 'center' }}>
              Watch Demo
            </button>
            <button className="btn-cyber btn-cyber-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}