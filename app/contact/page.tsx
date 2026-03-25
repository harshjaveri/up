'use client'
import { useEffect, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { serviceOptions } from '@/lib/data'
import { WHATSAPP_URL, PHONE_NUMBER, PHONE_HREF, EMAIL, ADDRESS, MAPS_EMBED_URL } from '@/lib/constants'
import { validateContactForm, sanitizeContactForm } from '@/lib/validation'
import type { ContactFormData, ContactFormErrors } from '@/types'

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '', company: '', phone: '', email: '', service: '', message: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .stagger-children')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) { setSubmitted(true); return }

    const { valid, errors: validationErrors } = validateContactForm(form)
    setErrors(validationErrors)
    if (!valid || loading) return

    setLoading(true)
    setSubmitError('')

    try {
      const sanitized = sanitizeContactForm(form)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      })
      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else if (data.errors) {
        setErrors(data.errors)
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: 'var(--color-base)' }}>
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0A1628 0%, var(--color-base) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.12) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal">
            <div className="section-eyebrow mb-5">Get In Touch</div>
            <h1 className="section-title text-white mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Let&apos;s Build Your <span className="gradient-text">Campaign</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', maxWidth: '520px' }}>
              Share your brief and we&apos;ll respond with a tailored outdoor advertising proposal — including site recommendations and transparent pricing — within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="py-12 pb-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ── Left: Form ── */}
          <div className="lg:col-span-3 reveal">
            {submitted ? (
              <div className="rounded-3xl p-14 text-center h-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(0,80,160,0.2), rgba(0,191,255,0.05))', border: '1px solid rgba(0,191,255,0.2)', minHeight: '480px' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{ background: 'rgba(0,191,255,0.12)', border: '1px solid rgba(0,191,255,0.3)' }}>
                  <CheckCircle size={36} style={{ color: 'var(--color-blue-electric)' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>Message Received!</h3>
                <p className="text-base max-w-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>Thank you for reaching out. Our team will get back to you with a tailored proposal within 24 hours.</p>
                <button className="btn-outline mt-8 text-sm" onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' }); setErrors({}); setSubmitError('') }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-3xl p-8 md:p-10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,191,255,0.03) 100%)', border: '1px solid rgba(0,191,255,0.12)' }}>
                <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>Request a Free Proposal</h2>

                {submitError && (
                  <div className="mb-6 p-4 rounded-2xl text-sm" style={{ background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.25)', color: '#ff6b6b' }}>{submitError}</div>
                )}

                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>FULL NAME *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="form-input" maxLength={100} required aria-invalid={!!errors.name} />
                    {errors.name && <p className="text-xs mt-1.5" style={{ color: '#ff6b6b' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>COMPANY</label>
                    <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" className="form-input" maxLength={100} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>PHONE NUMBER *</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" maxLength={15} required aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="text-xs mt-1.5" style={{ color: '#ff6b6b' }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>EMAIL ADDRESS *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className="form-input" maxLength={200} required aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-xs mt-1.5" style={{ color: '#ff6b6b' }}>{errors.email}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="service" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>SERVICE TYPE</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className="form-input" style={{ appearance: 'none', cursor: 'pointer' }}>
                    <option value="" style={{ background: '#0D1526' }}>Select a service...</option>
                    {serviceOptions.map(s => (<option key={s} value={s} style={{ background: '#0D1526' }}>{s}</option>))}
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>MESSAGE / BRIEF</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your campaign — geography, duration, target audience, budget range..." rows={5} className="form-input resize-none" maxLength={2000} aria-invalid={!!errors.message} />
                  {errors.message && <p className="text-xs mt-1.5" style={{ color: '#ff6b6b' }}>{errors.message}</p>}
                  <p className="text-xs mt-1 text-right" style={{ color: 'rgba(255,255,255,0.2)' }}>{form.message.length}/2000</p>
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-3 text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (<><div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" /><span>Sending...</span></>) : (<><span>Send Message</span><Send size={16} /></>)}
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Info ── */}
          <div className="lg:col-span-2 space-y-6 reveal">
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(0,191,255,0.12)' }}>
              <h3 className="text-base font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}><MapPin size={16} style={{ color: 'var(--color-blue-electric)' }} /></div>
                  <div><div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>ADDRESS</div><p className="text-sm leading-relaxed text-white" style={{ fontFamily: 'var(--font-body)' }}>{ADDRESS.split(', ').map((part, i) => (<span key={i}>{part}{i === 0 && <br />}</span>))}</p></div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}><Phone size={16} style={{ color: 'var(--color-blue-electric)' }} /></div>
                  <div><div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>PHONE</div><a href={PHONE_HREF} className="text-sm text-white hover:text-[color:var(--color-blue-electric)] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>{PHONE_NUMBER}</a></div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}><Mail size={16} style={{ color: 'var(--color-blue-electric)' }} /></div>
                  <div><div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>EMAIL</div><a href={`mailto:${EMAIL}`} className="text-sm text-white hover:text-[color:var(--color-blue-electric)] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>{EMAIL}</a></div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,191,255,0.1)', border: '1px solid rgba(0,191,255,0.2)' }}><Clock size={16} style={{ color: 'var(--color-blue-electric)' }} /></div>
                  <div><div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>OFFICE HOURS</div><p className="text-sm text-white" style={{ fontFamily: 'var(--font-body)' }}>Mon–Sat: 9:30 AM – 6:30 PM<br /><span style={{ color: 'rgba(255,255,255,0.4)' }}>Sunday: Closed</span></p></div>
                </li>
              </ul>
            </div>

            {WHATSAPP_URL && (
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block rounded-3xl p-7 transition-all duration-300 hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(18,140,126,0.1) 100%)', border: '1px solid rgba(37,211,102,0.25)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1" style={{ color: '#25D366', fontFamily: 'var(--font-display)' }}>Chat on WhatsApp</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>Instant response during business hours</div>
                  </div>
                </div>
              </a>
            )}

            <div className="rounded-3xl overflow-hidden relative" style={{ height: '200px', border: '1px solid rgba(0,191,255,0.12)' }}>
              <iframe src={MAPS_EMBED_URL} width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.4)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Upendra Publicity Office Location" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
