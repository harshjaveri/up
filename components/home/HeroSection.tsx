'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', minHeight: 640 }}
    >
      <div className="video-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">
        <h1
          className="section-title mb-5"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)', textShadow: '0 0 70px rgba(0,191,255,.2)' }}
        >
          <span style={{ color: '#fff', fontWeight: 200 }}>Dominate</span>
          <br />
          <span className="gradient-text">Every</span>
          <br />
          <span style={{ color: '#fff' }}>Billboard.</span>
        </h1>

        <p
          className="mb-9 mx-auto"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(.9rem,1.8vw,1.1rem)',
            color: 'rgba(255,255,255,.5)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: 480,
          }}
        >
          From Chhatrapati Sambhajinagar to every corner of Maharashtra —{' '}
          we place your brand where it can&apos;t be ignored.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact">
            <button className="btn-primary flex items-center gap-2" id="hero-cta-quote">
              Get a Free Quote <ArrowRight size={16} />
            </button>
          </Link>
          <Link href="/media">
            <button className="btn-outline flex items-center gap-2" id="hero-cta-work">
              ▶ View Our Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
