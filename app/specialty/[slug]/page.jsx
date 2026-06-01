'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Zap, Calendar, Heart, Layers, Cpu, ArrowRight } from 'lucide-react'

export default function SpecialtyDynamicPage() {
  const params = useParams()
  const router = useRouter()
  
  // Format the visual name from the URL slug (e.g., "family-medicine" -> "Family Medicine")
  const rawSlug = params?.slug || 'specialty'
  const specialtyName = rawSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('And', '&')

  return (
    <main 
      className="relative min-h-screen cyber-grid scanline-effect overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 15%, rgba(0, 240, 255, 0.05) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 85% 80%, rgba(57, 255, 20, 0.03) 0%, transparent 60%),
          var(--color-cyber-base)
        `,
        paddingTop: 'clamp(90px, 12vw, 130px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)'
      }}
    >
      {/* Decorative Cyber Grid Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: 'linear-gradient(180deg, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.02) 50%, transparent 100%)' }} />
        <div className="absolute top-0 right-1/4 w-px h-full" style={{ background: 'linear-gradient(180deg, rgba(0,240,255,0.08) 0%, rgba(0,240,255,0.02) 50%, transparent 100%)' }} />
        <div className="absolute top-[35%] left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.04) 50%, transparent 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Navigation Action */}
        <div className="animate-fade-in-up mb-6 sm:mb-8">
          <button
            onClick={() => router.push('/')}
            className="btn-cyber btn-cyber-ghost gap-2 cursor-pointer inline-flex items-center"
            style={{ 
              padding: '8px 16px', 
              fontSize: 'clamp(11px, 1.5vw, 13px)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--color-text-muted)'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,240,255,0.25)'; e.currentTarget.style.color = 'var(--color-neon-cyan)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--color-text-muted)' }}
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Home Platform
          </button>
        </div>

        {/* Dynamic Context Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Main Hero Card Container */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 animate-fade-in-up delay-100">
            <div>
              <span className="section-label inline-flex items-center gap-1.5" style={{ fontSize: 'clamp(9px, 1.8vw, 11px)' }}>
                <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 6px var(--color-neon-cyan)' }} />
                Clinical Architecture
              </span>
            </div>

            <h1 className="display-heading leading-tight" style={{
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            }}>
              Tailored Workflows For <br />
              <span className="text-glow-cyan" style={{ color: 'var(--color-neon-cyan)' }}>
                {specialtyName} Practices
              </span>
            </h1>

            <p className="leading-relaxed"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                maxWidth: '38rem',
              }}>
              Experience 100% compliant documentation structures built alongside practicing clinicians. Automate time-consuming evaluation matrices, optimize macro shortcuts, and maximize daily revenue cycles with layouts built explicitly for your environment.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={() => alert('Demo booking engine requested.')} 
                className="btn-cyber btn-cyber-primary cursor-pointer"
                style={{ fontSize: 'clamp(11px, 1.5vw, 13px)' }}
              >
                <Calendar size={14} />
                Book Custom {specialtyName} Walkthrough
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Live Metrics Sidebar Graphic */}
          <div className="lg:col-span-5 animate-fade-in-up delay-200">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden" 
                 style={{ border: '1px solid rgba(0,240,255,0.12)', boxShadow: '0 8px 32px rgba(0,240,255,0.03)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-20"
                   style={{ background: 'var(--color-neon-cyan)' }} />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-neon-cyan)] animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-display" style={{ color: 'var(--color-text-muted)' }}>Engine Module Status</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/5">ACTIVE</span>
              </div>

              <div className="flex flex-col gap-3.5">
                {[
                  { label: "Target Efficiency Delta", val: "+24.8%", icon: Cpu, color: 'var(--color-neon-cyan)' },
                  { label: "Clinical Accuracy SLA", val: "99.98%", icon: Layers, color: 'var(--color-neon-cyan)' },
                  { label: "First-Pass Billing Match", val: "96.4%", icon: Heart, color: 'var(--color-neon-green)' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.03]" style={{ color: item.color }}>
                        <item.icon size={15} />
                      </div>
                      <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>{item.label}</span>
                    </div>
                    <span className="font-display font-bold text-sm tracking-wide" style={{ color: item.color }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Section Divider */}
        <div className="cyber-divider mb-12 sm:mb-16 animate-fade-in-up delay-300" />

        {/* Functional Feature Matrix Grid */}
        <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in-up delay-400">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
              Integrated Module Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Adaptive Coding Matrix",
                desc: "Predictive engine updates CPT validation rules matching specialized diagnostic guidelines instantly.",
                accent: "cyan"
              },
              {
                icon: CheckCircle2,
                title: "Pre-Configured Encounters",
                desc: "Ready-to-use template charts designed alongside practicing physicians for localized administrative care.",
                accent: "cyan"
              },
              {
                icon: ShieldAlert,
                title: "Compliance Shielding",
                desc: "Active documentation checks cross-reference state and payer rules to eliminate first-pass claim denials.",
                accent: "green"
              }
            ].map((feat, idx) => {
              const useGreen = feat.accent === 'green';
              const borderC = useGreen ? 'rgba(57,255,20,0.1)' : 'rgba(0,240,255,0.1)';
              const glowC = useGreen ? 'var(--color-neon-green)' : 'var(--color-neon-cyan)';
              
              return (
                <div 
                  key={idx} 
                  className="glass-card card-hover rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all duration-200"
                  style={{ 
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'var(--color-cyber-card)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = borderC}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300"
                    style={{ 
                      bg: 'rgba(255,255,255,0.03)', 
                      border: `1px solid rgba(255,255,255,0.08)`,
                      color: glowC
                    }}
                  >
                    <feat.icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)', letterSpacing: '0.01em' }}>
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    {feat.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </main>
  )
}