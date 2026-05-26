'use client'

import { useState, useEffect, useRef } from 'react'
import {
  X, User, Mail, Phone, Building2, Stethoscope,
  Users, CalendarCheck, ChevronRight, CheckCircle2,
  Loader2, ArrowLeft, Sparkles,
} from 'lucide-react'

/* ── Specialty options ── */
const SPECIALTIES = [
  'Internal Medicine', 'Family Medicine', 'Pediatrics',
  'Cardiology', 'Dermatology', 'Orthopedics',
  'Obstetrics & Gynecology', 'Oncology', 'Psychiatry',
  'Neurology', 'Urology', 'Other',
]

/* ── Practice sizes ── */
const SIZES = [
  'Solo Practice (1)',
  'Small (2–5 providers)',
  'Medium (6–20 providers)',
  'Large (21–50 providers)',
  'Enterprise (50+ providers)',
]

/* ── Products of interest ── */
const PRODUCTS = [
  { id: 'ehr',      label: 'Electronic Health Records' },
  { id: 'billing',  label: 'Medical Billing / RCM' },
  { id: 'pm',       label: 'Practice Management' },
  { id: 'scribe',   label: 'AI Medical Scribe' },
  { id: 'portal',   label: 'Patient Portal' },
  { id: 'tele',     label: 'Telemedicine' },
]

/* ════════════════════════════════════════ */
export default function RequestDemoForm({ open, onClose }) {
  const [step, setStep]       = useState(1)   // 1 | 2 | 3 (success)
  const [submitting, setSub]  = useState(false)
  const overlayRef            = useRef(null)

  const [form, setForm] = useState({
    firstName : '', lastName  : '', email    : '',
    phone     : '', practice  : '', specialty: '',
    size      : '', products  : [],
    timeframe : '', message   : '',
  })
  const [errors, setErrors] = useState({})

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  /* reset on close */
  useEffect(() => {
    if (!open) {
      setTimeout(() => { setStep(1); setForm({
        firstName:'',lastName:'',email:'',phone:'',
        practice:'',specialty:'',size:'',products:[],
        timeframe:'',message:'',
      }); setErrors({}) }, 300)
    }
  }, [open])

  /* close on overlay click */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const set = (field, val) =>
    setForm(f => ({ ...f, [field]: val }))

  const toggleProduct = (id) =>
    setForm(f => ({
      ...f,
      products: f.products.includes(id)
        ? f.products.filter(p => p !== id)
        : [...f.products, id],
    }))

  /* ── Validation ── */
  const validate1 = () => {
    const e = {}
    if (!form.firstName.trim())  e.firstName = 'Required'
    if (!form.lastName.trim())   e.lastName  = 'Required'
    if (!form.email.trim())      e.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim())      e.phone     = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validate2 = () => {
    const e = {}
    if (!form.practice.trim())  e.practice  = 'Required'
    if (!form.specialty)        e.specialty  = 'Required'
    if (!form.size)             e.size       = 'Required'
    if (form.products.length === 0) e.products = 'Select at least one'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const nextStep = () => {
    if (step === 1 && !validate1()) return
    setErrors({})
    setStep(s => s + 1)
  }

  const handleSubmit = async () => {
    if (!validate2()) return
    setSub(true)
    await new Promise(r => setTimeout(r, 1600))
    setSub(false)
    setStep(3)
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position       : 'fixed',
        inset          : 0,
        zIndex         : 1000,
        background     : 'rgba(8,20,48,0.55)',
        backdropFilter : 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display        : 'flex',
        alignItems     : 'center',
        justifyContent : 'center',
        padding        : '16px',
        animation      : 'overlayIn 0.22s ease both',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Exo+2:wght@400;500;600&display=swap');

        @keyframes overlayIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes modalSlide { from { opacity:0; transform:translateY(24px) scale(0.97) } to { opacity:1; transform:translateY(0) scale(1) } }
        @keyframes checkPop   { 0%{transform:scale(0) rotate(-15deg)} 70%{transform:scale(1.15)} 100%{transform:scale(1)} }
        @keyframes spinLoader { to { transform:rotate(360deg) } }

        .demo-modal      { animation: modalSlide 0.3s cubic-bezier(.22,1,.36,1) both; }
        .demo-input      {
          width:100%; padding:10px 14px; border-radius:8px;
          border:1px solid rgba(0,60,130,0.15);
          background:rgba(240,244,248,0.7);
          font-family:'Exo 2',sans-serif; font-size:13.5px;
          color:rgba(15,30,60,0.92); outline:none;
          transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .demo-input:focus {
          border-color:rgba(0,105,217,0.55);
          box-shadow:0 0 0 3px rgba(0,105,217,0.1);
          background:#fff;
        }
        .demo-input.error { border-color:rgba(220,38,38,0.55); }
        .demo-select      { appearance:none; cursor:pointer; }
        .demo-label       {
          display:block; margin-bottom:5px;
          font-family:'Exo 2',sans-serif; font-size:12px;
          font-weight:600; color:rgba(15,30,60,0.55);
          letter-spacing:0.04em; text-transform:uppercase;
        }
        .demo-err         { font-size:11px; color:#dc2626; margin-top:3px; font-family:'Exo 2',sans-serif; }

        .product-chip {
          display:inline-flex; align-items:center; gap:6px;
          padding:7px 13px; border-radius:100px; cursor:pointer;
          font-family:'Exo 2',sans-serif; font-size:12.5px; font-weight:500;
          border:1px solid rgba(0,60,130,0.15);
          background:rgba(240,244,248,0.7);
          color:rgba(15,30,60,0.6);
          transition:all .18s ease; user-select:none;
        }
        .product-chip:hover   { border-color:rgba(0,105,217,0.35); color:#0069d9; background:rgba(0,105,217,0.06); }
        .product-chip.selected{ border-color:#0069d9; background:rgba(0,105,217,0.1); color:#0058b8; font-weight:600; }

        .step-dot {
          width:8px; height:8px; border-radius:50%;
          transition: all .3s ease;
        }

        .btn-submit {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          padding:12px 28px; border-radius:8px; cursor:pointer; border:none;
          font-family:'Rajdhani',sans-serif; font-weight:700; font-size:14px;
          letter-spacing:0.09em; text-transform:uppercase;
          background:#0069d9; color:#fff;
          box-shadow:0 4px 20px rgba(0,105,217,0.28);
          transition:all .22s ease; width:100%;
        }
        .btn-submit:hover:not(:disabled) {
          background:#0058b8;
          box-shadow:0 6px 28px rgba(0,105,217,0.38);
          transform:translateY(-2px);
        }
        .btn-submit:disabled { opacity:0.7; cursor:not-allowed; transform:none; }

        .btn-back {
          display:inline-flex; align-items:center; gap:6px;
          padding:10px 18px; border-radius:8px; cursor:pointer;
          font-family:'Rajdhani',sans-serif; font-weight:600; font-size:13px;
          letter-spacing:0.07em; text-transform:uppercase;
          border:1px solid rgba(0,60,130,0.18); background:transparent;
          color:rgba(15,30,60,0.55); transition:all .18s ease;
        }
        .btn-back:hover { border-color:rgba(0,105,217,0.35); color:#0069d9; background:rgba(0,105,217,0.05); }

        .check-anim { animation: checkPop 0.5s cubic-bezier(.34,1.56,.64,1) 0.3s both; }
        .spin       { animation: spinLoader 0.9s linear infinite; }

        .grid-two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        @media(max-width:520px) { .grid-two { grid-template-columns:1fr; } }
      `}</style>

      {/* ── Modal Shell ── */}
      <div
        className="demo-modal"
        style={{
          width         : '100%',
          maxWidth      : 560,
          maxHeight     : '92vh',
          overflowY     : 'auto',
          borderRadius  : 16,
          background    : 'rgba(255,255,255,0.99)',
          boxShadow     : '0 24px 80px rgba(0,40,120,0.2), 0 4px 24px rgba(0,40,120,0.12)',
          border        : '1px solid rgba(0,60,130,0.08)',
          position      : 'relative',
        }}
      >

        {/* ── Header band ── */}
        <div style={{
          background   : 'linear-gradient(135deg, #0069d9 0%, #0047a8 100%)',
          padding      : '24px 28px 20px',
          borderRadius : '16px 16px 0 0',
          position     : 'relative',
          overflow     : 'hidden',
        }}>
          {/* decorative rings */}
          <div style={{
            position:'absolute', top:-30, right:-30,
            width:120, height:120, borderRadius:'50%',
            border:'1px solid rgba(255,255,255,0.12)',
            pointerEvents:'none',
          }}/>
          <div style={{
            position:'absolute', top:-60, right:-60,
            width:180, height:180, borderRadius:'50%',
            border:'1px solid rgba(255,255,255,0.07)',
            pointerEvents:'none',
          }}/>

          {/* close */}
          <button
            onClick={onClose}
            style={{
              position:'absolute', top:16, right:16,
              background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.25)',
              borderRadius:8, padding:'5px 6px', cursor:'pointer', color:'#fff',
              display:'flex', alignItems:'center', lineHeight:1,
              transition:'background .18s',
            }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}
          >
            <X size={16} />
          </button>

          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
            <div style={{
              background:'rgba(255,255,255,0.15)', borderRadius:8,
              padding:8, display:'flex', border:'1px solid rgba(255,255,255,0.2)',
            }}>
              <CalendarCheck size={18} color="#fff" />
            </div>
            <span style={{
              fontFamily:'Rajdhani,sans-serif', color:'rgba(255,255,255,0.75)',
              fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase',
            }}>
              MediCore Platform
            </span>
          </div>

          <h2 style={{
            fontFamily:'Rajdhani,sans-serif', fontSize:22, fontWeight:700,
            color:'#fff', margin:0, letterSpacing:'-0.01em',
          }}>
            Request a Free Demo
          </h2>
          <p style={{
            fontFamily:"'Exo 2',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)',
            margin:'4px 0 0',
          }}>
            See how MediCore transforms your clinical workflow.
          </p>

          {/* Step indicator */}
          {step < 3 && (
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:18 }}>
              {[1,2].map(n => (
                <div key={n} style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{
                    width:24, height:24, borderRadius:'50%',
                    background: step >= n ? '#fff' : 'rgba(255,255,255,0.25)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'Rajdhani,sans-serif', fontWeight:700, fontSize:12,
                    color: step >= n ? '#0069d9' : 'rgba(255,255,255,0.6)',
                    transition:'all .3s',
                  }}>{n}</div>
                  <span style={{
                    fontFamily:"'Exo 2',sans-serif", fontSize:12,
                    color: step === n ? '#fff' : 'rgba(255,255,255,0.55)',
                    fontWeight: step === n ? 600 : 400,
                    transition:'all .3s',
                  }}>
                    {n === 1 ? 'Your Details' : 'Practice Info'}
                  </span>
                  {n < 2 && (
                    <ChevronRight size={13} style={{ color:'rgba(255,255,255,0.35)' }} />
                  )}
                </div>
              ))}
              {/* progress bar */}
              <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:4 }}>
                {[1,2].map(n => (
                  <div key={n} className="step-dot" style={{
                    background: step >= n ? '#fff' : 'rgba(255,255,255,0.3)',
                    width: step === n ? 20 : 8,
                    borderRadius: 4,
                  }}/>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div style={{ padding:'26px 28px 28px' }}>

          {/* ─── STEP 1: Personal Details ─── */}
          {step === 1 && (
            <div key="step1">
              <div className="grid-two" style={{ marginBottom:14 }}>
                <div>
                  <label className="demo-label">First Name</label>
                  <input
                    className={`demo-input${errors.firstName ? ' error' : ''}`}
                    placeholder="John"
                    value={form.firstName}
                    onChange={e => set('firstName', e.target.value)}
                  />
                  {errors.firstName && <p className="demo-err">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="demo-label">Last Name</label>
                  <input
                    className={`demo-input${errors.lastName ? ' error' : ''}`}
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={e => set('lastName', e.target.value)}
                  />
                  {errors.lastName && <p className="demo-err">{errors.lastName}</p>}
                </div>
              </div>

              <div style={{ marginBottom:14 }}>
                <label className="demo-label">Work Email</label>
                <div style={{ position:'relative' }}>
                  <Mail size={14} style={{
                    position:'absolute', left:12, top:'50%', transform:'translateY(-50%)',
                    color:'rgba(15,30,60,0.35)', pointerEvents:'none',
                  }}/>
                  <input
                    className={`demo-input${errors.email ? ' error' : ''}`}
                    style={{ paddingLeft:32 }}
                    placeholder="john@yourpractice.com"
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                  />
                </div>
                {errors.email && <p className="demo-err">{errors.email}</p>}
              </div>

              <div style={{ marginBottom:14 }}>
                <label className="demo-label">Phone Number</label>
                <div style={{ position:'relative' }}>
                  <Phone size={14} style={{
                    position:'absolute', left:12, top:'50%', transform:'translateY(-50%)',
                    color:'rgba(15,30,60,0.35)', pointerEvents:'none',
                  }}/>
                  <input
                    className={`demo-input${errors.phone ? ' error' : ''}`}
                    style={{ paddingLeft:32 }}
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                  />
                </div>
                {errors.phone && <p className="demo-err">{errors.phone}</p>}
              </div>

              <div style={{ marginBottom:22 }}>
                <label className="demo-label">Preferred Demo Time</label>
                <select
                  className="demo-input demo-select"
                  value={form.timeframe}
                  onChange={e => set('timeframe', e.target.value)}
                >
                  <option value="">Select a timeframe</option>
                  <option>As soon as possible</option>
                  <option>Within 1 week</option>
                  <option>Within 2 weeks</option>
                  <option>Next month</option>
                  <option>Just exploring</option>
                </select>
              </div>

              {/* notice */}
              <div style={{
                padding:'10px 14px', borderRadius:8, marginBottom:20,
                background:'rgba(10,170,110,0.06)', border:'1px solid rgba(10,170,110,0.2)',
                display:'flex', gap:10, alignItems:'flex-start',
              }}>
                <Sparkles size={14} style={{ color:'#0aaa6e', marginTop:1, flexShrink:0 }} />
                <p style={{
                  fontFamily:"'Exo 2',sans-serif", fontSize:12,
                  color:'rgba(15,30,60,0.6)', margin:0, lineHeight:1.5,
                }}>
                  We never share your information with third parties.
                  Your privacy is protected under our{' '}
                  <a href="#" style={{ color:'#0aaa6e', fontWeight:600 }}>Privacy Policy</a>.
                </p>
              </div>

              <button className="btn-submit" onClick={nextStep}>
                Continue
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* ─── STEP 2: Practice Info ─── */}
          {step === 2 && (
            <div key="step2">
              <div style={{ marginBottom:14 }}>
                <label className="demo-label">Practice / Organization Name</label>
                <div style={{ position:'relative' }}>
                  <Building2 size={14} style={{
                    position:'absolute', left:12, top:'50%', transform:'translateY(-50%)',
                    color:'rgba(15,30,60,0.35)', pointerEvents:'none',
                  }}/>
                  <input
                    className={`demo-input${errors.practice ? ' error' : ''}`}
                    style={{ paddingLeft:32 }}
                    placeholder="City Medical Group"
                    value={form.practice}
                    onChange={e => set('practice', e.target.value)}
                  />
                </div>
                {errors.practice && <p className="demo-err">{errors.practice}</p>}
              </div>

              <div className="grid-two" style={{ marginBottom:14 }}>
                <div>
                  <label className="demo-label">Specialty</label>
                  <div style={{ position:'relative' }}>
                    <Stethoscope size={13} style={{
                      position:'absolute', left:11, top:'50%', transform:'translateY(-50%)',
                      color:'rgba(15,30,60,0.35)', pointerEvents:'none',
                    }}/>
                    <select
                      className={`demo-input demo-select${errors.specialty ? ' error' : ''}`}
                      style={{ paddingLeft:30 }}
                      value={form.specialty}
                      onChange={e => set('specialty', e.target.value)}
                    >
                      <option value="">Select…</option>
                      {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  {errors.specialty && <p className="demo-err">{errors.specialty}</p>}
                </div>
                <div>
                  <label className="demo-label">Practice Size</label>
                  <div style={{ position:'relative' }}>
                    <Users size={13} style={{
                      position:'absolute', left:11, top:'50%', transform:'translateY(-50%)',
                      color:'rgba(15,30,60,0.35)', pointerEvents:'none',
                    }}/>
                    <select
                      className={`demo-input demo-select${errors.size ? ' error' : ''}`}
                      style={{ paddingLeft:30 }}
                      value={form.size}
                      onChange={e => set('size', e.target.value)}
                    >
                      <option value="">Select…</option>
                      {SIZES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  {errors.size && <p className="demo-err">{errors.size}</p>}
                </div>
              </div>

              <div style={{ marginBottom:14 }}>
                <label className="demo-label">
                  Products of Interest
                  {errors.products && (
                    <span style={{ color:'#dc2626', fontWeight:400, marginLeft:8, textTransform:'none', fontSize:11 }}>
                      — {errors.products}
                    </span>
                  )}
                </label>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:2 }}>
                  {PRODUCTS.map(p => (
                    <button
                      key={p.id}
                      className={`product-chip${form.products.includes(p.id) ? ' selected' : ''}`}
                      onClick={() => toggleProduct(p.id)}
                      type="button"
                    >
                      {form.products.includes(p.id) && <CheckCircle2 size={12} />}
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom:22 }}>
                <label className="demo-label">Additional Notes <span style={{ fontWeight:400, textTransform:'none', fontSize:11 }}>(optional)</span></label>
                <textarea
                  className="demo-input"
                  rows={3}
                  placeholder="Tell us about your specific needs or questions…"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  style={{ resize:'vertical', minHeight:80 }}
                />
              </div>

              <div style={{ display:'flex', gap:10 }}>
                <button className="btn-back" onClick={() => { setErrors({}); setStep(1) }}>
                  <ArrowLeft size={14} />
                  Back
                </button>
                <button
                  className="btn-submit"
                  style={{ flex:1 }}
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting
                    ? <><Loader2 size={16} className="spin" /> Submitting…</>
                    : <><CalendarCheck size={15} /> Schedule Demo</>
                  }
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 3: Success ─── */}
          {step === 3 && (
            <div key="success" style={{ textAlign:'center', padding:'16px 0 8px' }}>
              <div className="check-anim" style={{
                width:72, height:72, borderRadius:'50%',
                background:'rgba(10,170,110,0.1)', border:'2px solid rgba(10,170,110,0.3)',
                display:'flex', alignItems:'center', justifyContent:'center',
                margin:'0 auto 20px',
              }}>
                <CheckCircle2 size={34} color="#0aaa6e" />
              </div>

              <h3 style={{
                fontFamily:'Rajdhani,sans-serif', fontSize:24, fontWeight:700,
                color:'rgba(15,30,60,0.92)', margin:'0 0 8px',
              }}>
                Request Submitted!
              </h3>
              <p style={{
                fontFamily:"'Exo 2',sans-serif", fontSize:14, color:'rgba(15,30,60,0.55)',
                lineHeight:1.6, margin:'0 0 24px',
              }}>
                Thank you, <strong style={{ color:'rgba(15,30,60,0.8)' }}>{form.firstName}</strong>!
                Our team will reach out to{' '}
                <strong style={{ color:'#0069d9' }}>{form.email}</strong>{' '}
                within one business day to schedule your personalized demo.
              </p>

              <div style={{
                padding:'14px 18px', borderRadius:10,
                background:'rgba(0,105,217,0.05)', border:'1px solid rgba(0,105,217,0.15)',
                marginBottom:24, textAlign:'left',
              }}>
                <p style={{
                  fontFamily:"'Exo 2',sans-serif", fontSize:12, fontWeight:600,
                  color:'rgba(15,30,60,0.45)', letterSpacing:'0.06em',
                  textTransform:'uppercase', margin:'0 0 8px',
                }}>What to expect</p>
                {[
                  'A dedicated specialist contacts you',
                  '45-minute personalised platform walkthrough',
                  'Custom pricing tailored to your practice',
                ].map((t, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:i < 2 ? 7 : 0 }}>
                    <div style={{
                      width:20, height:20, borderRadius:'50%',
                      background:'rgba(0,105,217,0.1)', flexShrink:0,
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <span style={{ fontFamily:'Rajdhani,sans-serif', fontSize:11, fontWeight:700, color:'#0069d9' }}>{i+1}</span>
                    </div>
                    <span style={{ fontFamily:"'Exo 2',sans-serif", fontSize:13, color:'rgba(15,30,60,0.65)' }}>{t}</span>
                  </div>
                ))}
              </div>

              <button className="btn-submit" onClick={onClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}