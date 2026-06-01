'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Activity, Menu, X, ChevronDown, Info, HelpCircle, Award, Phone, ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../../lib/scrollToSection'
import { useDemoContext } from './RootLayoutClient'

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
    submenu: [
      { label: 'Homepage',     href: '/#homepage',     icon: Activity,   description: 'Overview of the MediCore platform.' },
      { label: 'Specialties',  href: '/#specialties',  icon: Award,      description: 'Purpose-built workflows for every specialty.' },
      { label: 'Testimonials', href: '/#testimonials', icon: HelpCircle, description: 'See what providers say about MediCore.' },
      { label: 'Request Demo', href: '/#demo',         icon: Phone,      description: 'Book a personalized product walkthrough.' },
    ],
  },
  { label: 'Pricing', href: null },
  {
    label: 'Company',
    href: '/company',
    submenu: [
      { label: 'About Medicore',       href: '/company#about',   icon: Info,       description: '15+ years transforming medical billing.' },
      { label: 'FAQs',                 href: '/company#faqs',    icon: HelpCircle, description: 'Quick answers to common questions.' },
      { label: 'Awards & Recognition', href: '/company#awards',  icon: Award,      description: 'Industry validation. Proven excellence.' },
      { label: 'Contact Us',           href: '/company#contact', icon: Phone,      description: "Let's start the conversation." },
    ],
  },
  {
    label: 'Resources',
    href: '/resource',
    submenu: [
      { label: 'Blogs & Articles',     href: '/resource#blogs',    icon: Activity,   description: 'Expert insights on healthcare technology.' },
      { label: 'Customer Stories',     href: '/resource#stories',  icon: Award,      description: 'Success stories from MediCore users.' },
     
    ],
  },
]

export default function Navbar() {
  const { setDemoOpen } = useDemoContext()
  const [scrolled,          setScrolled]          = useState(false)
  const [mobileOpen,        setMobileOpen]        = useState(false)
  const [companyOpen,       setCompanyOpen]       = useState(false)
  const [homeOpen,          setHomeOpen]          = useState(false)
  const [resourceOpen,      setResourceOpen]      = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const [mobileHomeOpen,    setMobileHomeOpen]    = useState(false)
  const [mobileResourceOpen, setMobileResourceOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCompanyOpen(false)
        setHomeOpen(false)
        setResourceOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (link, e) => {
    if (link.href === null) {
      e.preventDefault()
      setMobileOpen(false)
      setDemoOpen(true)
    } else {
      setMobileOpen(false)
    }
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileCompanyOpen(false)
    setMobileHomeOpen(false)
    setMobileResourceOpen(false)
  }

  return (
    <>
    <header className="navbar">
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(25,55,2,0.75)',
          backdropFilter: 'saturate(180%) blur(14px)',
          WebkitBackdropFilter: 'saturate(180%) blur(14px)',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: 'calc(1120px + 2rem)',
            margin: '0 auto',
            padding: '0 24px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.88))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Activity size={18} color="var(--color-cyber-base)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 17,
                color: 'var(--color-text-primary)',
                letterSpacing: '0.04em',
              }}
            >
              MEDICORE
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div
            ref={dropdownRef}
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 4 }}
          >
            {NAV_LINKS.map((link) => {
              /* Dropdown menus (Home + Company + Resources) */
              if (link.submenu) {
                const isHomeMenu = link.label === 'Home'
                const isCompanyMenu = link.label === 'Company'
                const isResourceMenu = link.label === 'Resources'
                const isOpen = isHomeMenu ? homeOpen : isCompanyMenu ? companyOpen : resourceOpen

                return (
                  <div key={link.label} style={{ position: 'relative' }}>
                    <button
                      onClick={() => {
                        if (isHomeMenu) {
                          setHomeOpen(o => !o)
                          setCompanyOpen(false)
                          setResourceOpen(false)
                        } else if (isCompanyMenu) {
                          setCompanyOpen(o => !o)
                          setHomeOpen(false)
                          setResourceOpen(false)
                        } else if (isResourceMenu) {
                          setResourceOpen(o => !o)
                          setHomeOpen(false)
                          setCompanyOpen(false)
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '7px 14px',
                        borderRadius: 8,
                        fontSize: 13.5,
                        color: isOpen ? 'var(--color-neon-cyan)' : 'rgba(15,30,60,0.6)',
                        background: isOpen ? 'rgba(0,105,217,0.07)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        transition: 'all 0.18s ease',
                        letterSpacing: '0.01em',
                      }}
                      onMouseEnter={e => {
                        if (!isOpen) {
                          e.currentTarget.style.color = 'var(--color-neon-cyan)'
                          e.currentTarget.style.background = 'var(--color-neon-cyan-faint)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isOpen) {
                          e.currentTarget.style.color = 'rgba(15,30,60,0.6)'
                          e.currentTarget.style.background = 'transparent'
                        }
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        style={{
                          transition: 'transform 0.2s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 10px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: 320,
                          background: 'var(--color-cyber-base)',
                          borderRadius: 14,
                          border: '1px solid var(--border-subtle)',
                          boxShadow: '0 12px 40px rgba(15,30,60,0.12)',
                          padding: 14,
                          animation: 'dropdownIn 0.18s ease',
                          zIndex: 60,
                        }}
                      >
                        <style>{`
                          @keyframes dropdownIn {
                            from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
                            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                          }
                        `}</style>

                        <div style={{ padding: '4px 10px 10px', borderBottom: '1px solid rgba(15,30,60,0.06)', marginBottom: 8 }}>
                          <div
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: 12,
                              textTransform: 'uppercase',
                              letterSpacing: '0.08em',
                              color: 'var(--color-neon-cyan)',
                            }}
                          >
                            {link.label}
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {link.submenu.map(item => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => {
                                  setHomeOpen(false)
                                  setCompanyOpen(false)
                                  setResourceOpen(false)
                                  // Handle hash navigation for scrolling
                                  const hash = item.href.split('#')[1]
                                  if (hash === 'demo') {
                                    scrollToSection('request-demo')
                                    setDemoOpen(true)
                                  } else if (hash === 'blogs' || hash === 'stories') {
                                    scrollToSection(hash)
                                  }
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 11,
                                  padding: '9px 10px',
                                  borderRadius: 10,
                                  textDecoration: 'none',
                                  transition: 'background 0.14s ease',
                                  cursor: 'pointer',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,105,217,0.055)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <div
                                  style={{
                                    flexShrink: 0,
                                    width: 34,
                                    height: 34,
                                    borderRadius: 9,
                                    background: 'var(--color-neon-cyan-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Icon size={16} color="var(--color-neon-cyan)" />
                                </div>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div
                                    style={{
                                      fontFamily: 'var(--font-body)',
                                      fontWeight: 600,
                                      fontSize: 13.5,
                                      color: 'var(--color-text-primary)',
                                      marginBottom: 2,
                                    }}
                                  >
                                    {item.label}
                                  </div>
                                  <div
                                    style={{
                                      fontFamily: 'var(--font-body)',
                                      fontSize: 12,
                                      color: 'var(--color-text-secondary)',
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    {item.description}
                                  </div>
                                </div>

                                <ArrowRight size={14} color="var(--color-text-faint)" style={{ marginTop: 10, flexShrink: 0 }} />
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              /* Pricing (opens demo) */
              const isPricing = link.href === null
              if (isPricing) {
                return (
                  <button
                    key={link.label}
                    onClick={e => handleNavClick(link, e)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: 8,
                      fontSize: 13.5,
                      color: 'var(--color-text-secondary)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      transition: 'all 0.18s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      letterSpacing: '0.01em',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-neon-cyan)'; e.currentTarget.style.background = 'var(--color-neon-cyan-faint)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    {link.label}
                  </button>
                )
              }

              /* Regular link */
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 8,
                    fontSize: 13.5,
                    color: 'var(--color-text-secondary)',
                    background: 'transparent',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    transition: 'all 0.18s ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-neon-cyan)'; e.currentTarget.style.background = 'rgba(0,105,217,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 10 }}>
            <button
              onClick={() => setDemoOpen(true)}
              style={{
                padding: '9px 18px',
                borderRadius: 9,
                fontSize: 13.5,
                color: 'var(--color-cyber-base)',
                background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.88))',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                letterSpacing: '0.01em',
                boxShadow: '0 4px 14px rgba(0,105,217,0.28)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,105,217,0.36)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';     e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,105,217,0.28)' }}
            >
              Request Demo
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            className="flex md:hidden"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 9,
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={20} color="var(--color-text-primary)" /> : <Menu size={20} color="var(--color-text-primary)" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer overlay ── */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,30,60,0.5)',
            zIndex: 55,
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* ── Mobile drawer ── */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(85vw, 360px)',
          background: 'var(--color-cyber-base)',
          zIndex: 56,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-12px 0 40px rgba(15,30,60,0.15)',
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 20px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <Link href="/" onClick={closeMobile} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.88))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Activity size={17} color="var(--color-cyber-base)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 16,
                color: 'var(--color-text-primary)',
                letterSpacing: '0.04em',
              }}
            >
              MEDICORE
            </span>
          </Link>
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} color="var(--color-text-primary)" />
          </button>
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px' }}>
          {NAV_LINKS.map((link) => {
            /* Accordion (Home + Company + Resources) */
            if (link.submenu) {
              const isHomeMenu = link.label === 'Home'
              const isCompanyMenu = link.label === 'Company'
              const isResourceMenu = link.label === 'Resources'
              const isOpen = isHomeMenu ? mobileHomeOpen : isCompanyMenu ? mobileCompanyOpen : mobileResourceOpen
              const toggle = () => {
                if (isHomeMenu) {
                  setMobileHomeOpen(o => !o)
                  setMobileCompanyOpen(false)
                  setMobileResourceOpen(false)
                } else if (isCompanyMenu) {
                  setMobileCompanyOpen(o => !o)
                  setMobileHomeOpen(false)
                  setMobileResourceOpen(false)
                } else if (isResourceMenu) {
                  setMobileResourceOpen(o => !o)
                  setMobileHomeOpen(false)
                  setMobileCompanyOpen(false)
                }
              }

              return (
                <div key={link.label}>
                  <button
                    onClick={toggle}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 10,
                      fontSize: 14,
                      color: isOpen ? 'var(--color-neon-cyan)' : 'var(--color-text-secondary)',
                      background: isOpen ? 'var(--color-neon-cyan-faint)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      transition: 'all 0.15s ease',
                      marginBottom: 2,
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.2s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  {/* Submenu */}
                  {isOpen && (
                    <div style={{ padding: '4px 6px 10px 6px' }}>
                      {link.submenu.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              closeMobile()
                              // Handle hash navigation for scrolling
                              const hash = item.href.split('#')[1]
                              if (hash === 'demo') {
                                scrollToSection('request-demo')
                                setDemoOpen(true)
                              } else if (hash === 'blogs' || hash === 'stories') {
                                scrollToSection(hash)
                              }
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 11,
                              padding: '10px 10px',
                              borderRadius: 9,
                              textDecoration: 'none',
                              transition: 'background 0.14s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-neon-cyan-faint)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            <div
                              style={{
                                flexShrink: 0,
                                width: 32,
                                height: 32,
                                borderRadius: 9,
                                background: 'rgba(0,105,217,0.09)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon size={15} color="var(--color-neon-cyan)" />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontWeight: 600,
                                  fontSize: 13.5,
                                  color: 'var(--color-text-primary)',
                                  marginBottom: 2,
                                }}
                              >
                                {item.label}
                              </div>
                              <div
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: 12,
                                  color: 'var(--color-text-secondary)',
                                  lineHeight: 1.4,
                                }}
                              >
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            /* Pricing */
            const isPricing = link.href === null
            if (isPricing) {
              return (
                <button
                  key={link.label}
                  onClick={e => handleNavClick(link, e)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    fontSize: 14,
                    color: 'var(--color-text-strong)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                    marginBottom: 2,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-neon-cyan)'; e.currentTarget.style.background = 'rgba(0,105,217,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent' }}
                >
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: '3px 8px',
                      borderRadius: 6,
                      background: 'var(--color-neon-cyan-accent)',
                      color: 'var(--color-neon-cyan)',
                      fontWeight: 600,
                    }}
                  >
                    Demo
                  </span>
                </button>
              )
            }

            /* Regular link */
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                style={{
                  display: 'block',
                  padding: '12px 14px',
                  borderRadius: 10,
                  fontSize: 14,
                  color: 'var(--color-text-secondary)',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  transition: 'all 0.15s ease',
                  marginBottom: 2,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-neon-cyan)'; e.currentTarget.style.background = 'rgba(0,105,217,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Drawer footer CTA */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-subtle)' }}>
          {/* Status pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--color-neon-green)',
                boxShadow: '0 0 0 3px rgba(10,170,110,0.18)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: 'var(--color-text-secondary)',
              }}
            >
              Available Mon–Fri · 9am–6pm EST
            </span>
          </div>

          {/* Only Request Demo CTA */}
          <button
            onClick={() => { closeMobile(); setDemoOpen(true) }}
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: 10,
              fontSize: 14,
              color: 'var(--color-cyber-base)',
              background: 'linear-gradient(135deg, var(--color-neon-cyan), rgba(0,105,217,0.88))',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: '0 4px 14px rgba(0,105,217,0.28)',
            }}
          >
            Request Demo
          </button>
        </div>
      </aside>
      </header>
    </>
  )
}
