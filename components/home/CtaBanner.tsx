'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PHONE_HREF } from '@/lib/constants'

export default function CtaBanner() {
  return (
    <section className="pb-24 px-10">
      <div
        className="max-w-5xl mx-auto rounded-3xl text-center reveal relative overflow-hidden"
        style={{
          padding: '64px 80px',
          background: 'linear-gradient(135deg,rgba(0,60,130,.25),rgba(0,20,70,.45))',
          border: '1px solid rgba(0,191,255,.18)',
        }}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 300, height: 300, top: '-70px', right: '-50px', opacity: 0.12, background: 'radial-gradient(circle,var(--color-blue-electric),transparent 70%)' }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 200, height: 200, bottom: '-50px', left: '-30px', opacity: 0.08, background: 'radial-gradient(circle,var(--color-blue-cyan),transparent 70%)' }}
        />

        <div className="relative z-10">
          <div className="section-eyebrow mb-3">Ready to Amplify?</div>
          <h2
            className="section-title text-white mb-3"
            style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}
          >
            Let&apos;s Put Your Brand <span className="gradient-text">On the Map</span>
          </h2>
          <p
            style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.42)', maxWidth: 420, margin: '0 auto', fontWeight: 300, lineHeight: 1.8 }}
          >
            Customised proposal with verified locations, footfall data, and transparent pricing — in 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/contact">
              <button className="btn-primary flex items-center gap-2" id="cta-get-quote">
                Get a Free Quote <ArrowRight size={16} />
              </button>
            </Link>
            <a href={PHONE_HREF}>
              <button className="btn-outline" id="cta-call-now">Call Us Now</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
