'use client'
import Link from 'next/link'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section className="py-24 px-10 max-w-7xl mx-auto" style={{ background: 'transparent' }}>
      <div className="text-center mb-14 reveal">
        <div className="section-eyebrow mb-3">Our Expertise</div>
        <h2 className="section-title text-white" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
          What We <span className="gradient-text">Do</span>
        </h2>
        <p
          style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.38)', maxWidth: 380, margin: '12px auto 0', fontWeight: 300, lineHeight: 1.8 }}
        >
          Seven powerful formats spanning Maharashtra&apos;s outdoor landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((svc, i) => (
          <Link key={svc.title} href="/services">
            <div
              className="glass-card p-6 h-full group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(0,191,255,.06)', border: '1px solid rgba(0,191,255,.12)' }}
              >
                {svc.icon}
              </div>
              <h3
                className="mb-2 transition-colors duration-300 group-hover:text-[color:var(--color-blue-electric)]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '.88rem', letterSpacing: '-.01em', color: '#fff' }}
              >
                {svc.title}
              </h3>
              <p style={{ fontSize: '.77rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.65, fontWeight: 300 }}>
                {svc.desc}
              </p>
              <div
                className="mt-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--color-blue-electric)' }}
              >
                Explore →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
