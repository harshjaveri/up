'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: '🏗️',
    title: 'Hoarding Advertising',
    tag: 'Most Popular',
    desc: 'Our flagship offering — massive 40×20 ft to 60×30 ft unipole and structure hoardings at Maharashtra\'s highest-footfall locations. Illuminated and non-illuminated options available.',
    features: ['Premium backlit vinyl printing', 'Structural fabrication & installation', 'Monthly site verification photos', 'Footfall certification available'],
    locations: '180+ prime hoarding locations',
  },
  {
    icon: '🚂',
    title: 'Railway Advertising',
    desc: 'Capture commuters where they dwell — platforms, waiting areas, concourses, and foot-over bridges. Exclusive contracts across 14 Maharashtra railway stations.',
    features: ['Platform banners & display boards', 'Foot-over bridge hoardings', 'Waiting room display panels', 'Train wrap advertising'],
    locations: '14 railway stations covered',
  },
  {
    icon: '🏬',
    title: 'Mall Advertising',
    desc: 'Indoor advertising at Maharashtra\'s premium shopping destinations. Atrium banners, escalator branding, food court displays, and mall entrance arches.',
    features: ['Atrium & skylight banners', 'Digital screen placements', 'Pillar wraps & floor graphics', 'Entrance arch branding'],
    locations: '8 malls across Maharashtra',
  },
  {
    icon: '✈️',
    title: 'Airport Advertising',
    desc: 'Reach high-value business and leisure travellers at Maharashtra\'s airports. From check-in counters to baggage belts — total coverage for maximum brand recall.',
    features: ['Arrival & departure hall panels', 'Baggage belt advertising', 'Check-in counter branding', 'Boarding gate displays'],
    locations: '4 Maharashtra airports',
  },
  {
    icon: '🛤️',
    title: 'Highway Advertising',
    desc: 'Unigaze hoardings on National Highway and State Highway corridors. Minimum 3-second visibility window guaranteed. Ideal for auto, travel, and lifestyle brands.',
    features: ['NH & SH corridor locations', 'Minimum 3-sec visibility', 'GPS-tagged site data', 'Traffic count reports'],
    locations: '300+ highway km covered',
  },
  {
    icon: '🏙️',
    title: 'City Advertising',
    desc: 'Urban brand touchpoints across city centres, bus shelters, kiosks, and pedestrian-heavy zones. Perfect for retail, FMCG, and service sector campaigns.',
    features: ['Bus shelter back panels', 'City kiosk advertising', 'Junction corner hoardings', 'Pedestrian zone banners'],
    locations: '8 cities across Maharashtra',
  },
  {
    icon: '🚉',
    title: 'Railway Station Ads',
    desc: 'Comprehensive advertising across station premises — from platform edges to enquiry counters. High repeat exposure for commuter-targeted campaigns.',
    features: ['Platform edge boards', 'Enquiry & booking counter boards', 'Station entrance archways', 'Retiring room display panels'],
    locations: '14 stations, 28 formats',
  },
  {
    icon: '🖨️',
    title: 'Hoarding Printing Services',
    tag: 'In-House',
    desc: 'Full in-house large-format printing facility. Vinyl, flex, digital, and canvas options with colour-accurate proofing. 72-hour print-to-install turnaround.',
    features: ['Large-format digital UV printing', 'Backlit vinyl & frontlit flex', 'Solvent & eco-solvent inks', '72-hr turnaround guarantee'],
    locations: 'In-house production unit, Aurangabad',
  },
]

const process = [
  { step: '01', title: 'Site Selection', desc: 'We identify locations based on your target audience, geography, and campaign objectives.' },
  { step: '02', title: 'Creative Production', desc: 'Our in-house print facility produces campaign materials with colour-accurate proofing.' },
  { step: '03', title: 'Installation', desc: 'Professional installation team deploys your campaign within the committed timeline.' },
  { step: '04', title: 'Monitoring', desc: 'Regular photo reports and footfall data delivered to your dashboard throughout the campaign.' },
]

export default function ServicesPage() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .stagger-children')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--color-base)' }}>
      {/* ── Hero ── */}
      <section
        className="pt-40 pb-24 px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0A1628 0%, var(--color-base) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.12) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal">
            <div className="section-eyebrow mb-5">What We Offer</div>
            <h1
              className="section-title text-white mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', maxWidth: '560px' }}>
              End-to-end outdoor advertising services — from concept and printing to 
              installation and campaign analytics. One partner for all your outdoor needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-children">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="glass-card p-8 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div
                    className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(0,191,255,0.08)', border: '1px solid rgba(0,191,255,0.15)' }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white group-hover:text-[color:var(--color-blue-electric)] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="text-xs mt-1"
                      style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
                    >
                      {svc.locations}
                    </p>
                  </div>
                </div>
                {svc.tag && (
                  <span
                    className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: 'rgba(0,191,255,0.12)',
                      border: '1px solid rgba(0,191,255,0.25)',
                      color: 'var(--color-blue-electric)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {svc.tag}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                {svc.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2.5">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,191,255,0.12)', border: '1px solid rgba(0,191,255,0.25)' }}
                    >
                      <Check size={10} style={{ color: 'var(--color-blue-electric)' }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section
        className="py-24 px-6 lg:px-8"
        style={{ background: 'var(--color-navy-900)', borderTop: '1px solid rgba(0,191,255,0.08)', borderBottom: '1px solid rgba(0,191,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="section-eyebrow mb-4">How We Work</div>
            <h2
              className="section-title text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Campaign <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {process.map((p, i) => (
              <div key={p.step} className="glass-card p-8 relative">
                {/* Step Number */}
                <div
                  className="text-5xl font-black mb-6 leading-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(135deg, rgba(0,191,255,0.5), rgba(0,255,255,0.2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {p.step}
                </div>
                <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{p.desc}</p>

                {/* Arrow connector */}
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                    style={{ color: 'rgba(0,191,255,0.4)' }}
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-12 text-center reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(0,80,160,0.25), rgba(0,30,80,0.4))',
            border: '1px solid rgba(0,191,255,0.2)',
          }}
        >
          <h2 className="section-title text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Ready to Launch Your <span className="gradient-text">Campaign?</span>
          </h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            Get a customised proposal with site recommendations, footfall data, and transparent pricing in 24 hours.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              <span>Request a Proposal</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
