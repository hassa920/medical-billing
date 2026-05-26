'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Activity, Menu, X } from 'lucide-react'
import RequestDemoForm from '../form/RequestDemoForm'

const NAV_LINKS = [
  { label: 'Home',      href: '/'         },
  { label: 'Pricing',   href: null        },   // ← opens demo form
  { label: 'Company',   href: '/company'  },
  { label: 'Resources', href: '/resource' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [demoOpen,    setDemoOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (link, e) => {
    if (link.href === null) {
      e.preventDefault()
      setMobileOpen(false)
      setDemoOpen(true)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background          : scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.82)',
          backdropFilter      : 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom        : scrolled
            ? '1px solid rgba(0,60,130,0.10)'
            : '1px solid rgba(0,60,130,0.05)',
          boxShadow           : scrolled ? '0 2px 24px rgba(0,60,130,0.09)' : 'none',
        }}
      >
        <nav className="flex items-center justify-between px-5 md:px-8 py-3.5 max-w-7xl mx-auto">

          {/* ── Logo ── */}
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,105,217,0.08)',
              border    : '1px solid rgba(0,105,217,0.28)',
              boxShadow : '0 2px 12px rgba(0,105,217,0.15)',
            }}>
              <Activity size={17} style={{ color: '#0069d9' }} />
            </div>

            <span style={{
              fontFamily   : 'var(--font-display)',
              fontSize     : 19,
              fontWeight   : 700,
              letterSpacing: '0.12em',
              color        : 'rgba(15,30,60,0.92)',
            }}>
              MEDI
              <span style={{ color: '#0069d9' }}>CORE</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isPricing = link.href === null
              return isPricing ? (
                <button
                  key={link.label}
                  onClick={(e) => handleNavClick(link, e)}
                  style={{
                    padding       : '7px 16px',
                    borderRadius  : 8,
                    fontSize      : 13,
                    color         : 'rgba(15,30,60,0.55)',
                    background    : 'transparent',
                    border        : 'none',
                    cursor        : 'pointer',
                    fontFamily    : 'var(--font-body)',
                    fontWeight    : 500,
                    transition    : 'all 0.18s ease',
                    position      : 'relative',
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
                  {link.label}
                  {/* subtle indicator dot */}
                  <span style={{
                    display:'inline-block', width:4, height:4,
                    borderRadius:'50%', background:'#0aaa6e',
                    marginLeft:5, verticalAlign:'middle', marginTop:-2,
                  }}/>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
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
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ── CTA buttons ── */}
          <div className="hidden md:flex items-center gap-2.5">
            
            <button
              className="btn-cyber btn-cyber-primary"
              style={{ fontSize: 12 }}
              onClick={() => setDemoOpen(true)}
            >
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
            background          : 'rgba(255,255,255,0.99)',
            borderTop           : '1px solid rgba(0,60,130,0.08)',
            padding             : '8px 16px 20px',
            backdropFilter      : 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow           : '0 8px 24px rgba(0,60,130,0.08)',
          }}>
            {NAV_LINKS.map((link) => {
              const isPricing = link.href === null
              const sharedStyle = {
                display       : 'block',
                padding       : '13px 8px',
                fontSize      : 14,
                color         : 'rgba(15,30,60,0.65)',
                textDecoration: 'none',
                borderBottom  : '1px solid rgba(0,60,130,0.06)',
                fontFamily    : 'var(--font-body)',
                fontWeight    : 500,
                width         : '100%',
                textAlign     : 'left',
                background    : 'transparent',
                border        : 'none',
                borderBottom  : '1px solid rgba(0,60,130,0.06)',
                cursor        : 'pointer',
                transition    : 'color 0.15s ease',
              }

              return isPricing ? (
                <button
                  key={link.label}
                  style={sharedStyle}
                  onClick={(e) => handleNavClick(link, e)}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0069d9' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(15,30,60,0.65)' }}
                >
                  {link.label}
                  <span style={{
                    marginLeft:8, fontSize:10, fontWeight:600, letterSpacing:'0.08em',
                    padding:'2px 7px', borderRadius:100, textTransform:'uppercase',
                    background:'rgba(10,170,110,0.1)', color:'#088f5c',
                    border:'1px solid rgba(10,170,110,0.2)', verticalAlign:'middle',
                  }}>Demo</span>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={sharedStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0069d9' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(15,30,60,0.65)' }}
                >
                  {link.label}
                </Link>
              )
            })}

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
                onClick={() => { setMobileOpen(false); setDemoOpen(true) }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Demo Form Modal ── */}
      <RequestDemoForm open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}