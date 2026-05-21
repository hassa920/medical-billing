'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Activity, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Solutions',  href: '/' },
  { label: 'Pricing',    href: '/pricing' },
  { label: 'Company',    href: '/company' },
  { label: 'Resources',  href: '/resource' },
]

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
      <nav className="flex items-center justify-between px-5 md:px-8 py-3.5 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
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
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: '7px 16px', borderRadius: 8, fontSize: 13,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                fontFamily: 'var(--font-body)', fontWeight: 500,
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {label}
            </Link>
          ))}
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
          padding: '8px 16px 20px',
          backdropFilter: 'blur(24px)',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '13px 8px', fontSize: 14,
                color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                fontFamily: 'var(--font-body)', fontWeight: 500,
              }}
            >
              {label}
            </Link>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
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