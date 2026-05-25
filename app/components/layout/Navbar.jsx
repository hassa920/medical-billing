'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Activity, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',      href: '/'         },
  { label: 'Pricing',   href: '/pricing'  },
  { label: 'Company',   href: '/company'  },
  { label: 'Resources', href: '/resource' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background   : scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom : scrolled
          ? '1px solid rgba(0,60,130,0.10)'
          : '1px solid rgba(0,60,130,0.05)',
        boxShadow    : scrolled
          ? '0 2px 24px rgba(0,60,130,0.09)'
          : 'none',
      }}
    >
      <nav className="flex items-center justify-between px-5 md:px-8 py-3.5 max-w-7xl mx-auto">

        {/* ── Logo ── */}
        <Link
          href="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          {/* Icon box */}
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background  : 'rgba(0,105,217,0.08)',
            border      : '1px solid rgba(0,105,217,0.28)',
            boxShadow   : '0 2px 12px rgba(0,105,217,0.15)',
          }}>
            <Activity size={17} style={{ color: '#0069d9' }} />
          </div>

          {/* Wordmark */}
          <span style={{
            fontFamily   : 'var(--font-display)',
            fontSize     : 19,
            fontWeight   : 700,
            letterSpacing: '0.12em',
            color        : 'rgba(15,30,60,0.92)',
          }}>
            MEDI
            <span style={{
              color     : '#0069d9',
              textShadow: 'none',
            }}>
              CORE
            </span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding       : '7px 16px',
                borderRadius  : 8,
                fontSize      : 13,
                color         : 'rgba(15,30,60,0.55)',
                textDecoration: 'none',
                fontFamily    : 'var(--font-body)',
                fontWeight    : 500,
                transition    : 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color      = '#0069d9'
                e.currentTarget.style.background = 'rgba(0,105,217,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color      = 'rgba(15,30,60,0.55)'
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
            color     : 'rgba(15,30,60,0.75)',
            background: mobileOpen ? 'rgba(0,105,217,0.07)' : 'transparent',
            border    : `1px solid ${mobileOpen ? 'rgba(0,105,217,0.22)' : 'transparent'}`,
            transition: 'all 0.18s ease',
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
          background  : 'rgba(255,255,255,0.99)',
          borderTop   : '1px solid rgba(0,60,130,0.08)',
          padding     : '8px 16px 20px',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow   : '0 8px 24px rgba(0,60,130,0.08)',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display       : 'block',
                padding       : '13px 8px',
                fontSize      : 14,
                color         : 'rgba(15,30,60,0.65)',
                textDecoration: 'none',
                borderBottom  : '1px solid rgba(0,60,130,0.06)',
                fontFamily    : 'var(--font-body)',
                fontWeight    : 500,
                transition    : 'color 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#0069d9' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(15,30,60,0.65)' }}
            >
              {label}
            </Link>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
            <button
              className="btn-cyber btn-cyber-ghost"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Watch Demo
            </button>
            <button
              className="btn-cyber btn-cyber-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}