'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { timeline, values } from '@/lib/data'

export default function AboutPage() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .stagger-children')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed')
      }),
      { threshold: 0.1 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--color-base)' }}>
      {/* ── Hero ── */}
      <section
        className="relative pt-40 pb-24 px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #0A1628 0%, var(--color-base) 100%)',
        }}
      >
        {/* BG glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.12) 0%, transparent 60%)',
        }} />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal">
            <div className="section-eyebrow mb-5">About Us</div>
            <h1
              className="section-title text-white mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Six Decades of{' '}
              <span className="gradient-text">Outdoor Mastery</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', maxWidth: '560px' }}>
              Since 1965, Upendra Publicity has been shaping the outdoor advertising landscape 
              of Maharashtra — from a single hoarding in Aurangabad to a 500+ display network 
              spanning every corner of the state.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="section-eyebrow mb-4">Who We Are</div>
            <h2 className="section-title text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Maharashtra&apos;s Most{' '}
              <span className="gradient-text">Trusted Name</span>{' '}
              in Outdoor Advertising
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
              Upendra Publicity is a full-service outdoor advertising company headquartered 
              in Chhatrapati Sambhajinagar, Maharashtra. We specialise in end-to-end campaign 
              delivery — from site selection and creative production to installation, 
              monitoring, and reporting.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
              Our proprietary network of premium outdoor locations covers highways, 
              city centres, transit hubs, malls, and airports across all 18 revenue 
              districts of Maharashtra — giving your brand unmatched geographic reach.
            </p>
          </div>

          {/* Vision Quote Box */}
          <div
            className="rounded-3xl p-10 reveal"
            style={{
              background: 'linear-gradient(135deg, rgba(0,80,160,0.2) 0%, rgba(0,191,255,0.05) 100%)',
              border: '1px solid rgba(0,191,255,0.2)',
              boxShadow: '0 0 60px rgba(0,191,255,0.08)',
            }}
          >
            <div
              className="text-5xl mb-6 font-bold"
              style={{ color: 'rgba(0,191,255,0.3)', fontFamily: 'var(--font-display)' }}
            >
              &quot;
            </div>
            <p
              className="text-xl leading-relaxed mb-6 text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              Our vision is to make every outdoor advertising investment in Maharashtra 
              a measurable, premium experience — from the first impression to 
              the final conversion.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                <Image src="/logo.png" alt="Upendra Publicity" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Upendra Publicity</div>
                <div className="text-xs" style={{ color: 'var(--color-blue-electric)', fontFamily: 'var(--font-mono)' }}>Leadership Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        className="py-24 px-6 lg:px-8"
        style={{ background: 'var(--color-navy-900)', borderTop: '1px solid rgba(0,191,255,0.08)', borderBottom: '1px solid rgba(0,191,255,0.08)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="section-eyebrow mb-4">Our Journey</div>
            <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              60 Years in{' '}
              <span className="gradient-text">Six Moments</span>
            </h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Center line — desktop */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
              style={{ background: 'linear-gradient(to bottom, rgba(0,191,255,0.6), rgba(0,191,255,0.05))' }}
            />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`reveal md:grid md:grid-cols-2 md:gap-12 mb-12 relative ${i % 2 === 0 ? 'md:text-right' : ''}`}
              >
                {/* Left side (even items) */}
                {i % 2 === 0 ? (
                  <>
                    <div className={`md:pr-12 ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                      <div
                        className="inline-block px-4 py-1.5 rounded-full mb-3"
                        style={{
                          background: 'rgba(0,191,255,0.1)',
                          border: '1px solid rgba(0,191,255,0.25)',
                        }}
                      >
                        <span className="gradient-text font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                        {item.desc}
                      </p>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="md:pl-12">
                      <div
                        className="inline-block px-4 py-1.5 rounded-full mb-3"
                        style={{
                          background: 'rgba(0,191,255,0.1)',
                          border: '1px solid rgba(0,191,255,0.25)',
                        }}
                      >
                        <span className="gradient-text font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </>
                )}

                {/* Center Dot */}
                <div
                  className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{
                    background: 'var(--color-blue-electric)',
                    boxShadow: '0 0 14px var(--color-blue-electric), 0 0 28px rgba(0,191,255,0.4)',
                    border: '3px solid var(--color-navy-900)',
                  }}
                />

                {/* Mobile Dot */}
                <div
                  className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full -translate-x-6"
                  style={{ background: 'var(--color-blue-electric)', boxShadow: '0 0 10px var(--color-blue-electric)' }}
                />
                {/* Mobile line */}
                <div
                  className="md:hidden absolute left-0 top-5 bottom-0 w-[1px] -translate-x-5"
                  style={{ background: 'rgba(0,191,255,0.2)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="section-eyebrow mb-4">Core Values</div>
          <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What Drives <span className="gradient-text">Everything We Do</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {values.map(v => (
            <div key={v.title} className="glass-card p-8 text-center">
              <div className="text-4xl mb-5">{v.icon}</div>
              <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{v.desc}</p>
            </div>
          ))}
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
            Partner With <span className="gradient-text">Maharashtra&apos;s Best</span>
          </h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            Join 200+ brands who trust Upendra Publicity with their outdoor presence.
          </p>
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2 mx-auto">
              <span>Start a Conversation</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
