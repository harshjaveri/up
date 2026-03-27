'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const whyPoints = [
  'Exclusive premium locations across Maharashtra',
  'End-to-end campaign management & printing',
  'Verified footfall data for every location',
  'Real-time campaign monitoring & reporting',
]

const galleryImages = [
  { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=400', ratio: '4/5', mt: 0 },
  { src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=400', ratio: '1',   mt: 24 },
  { src: 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?w=400', ratio: '1',   mt: 0 },
  { src: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=400', ratio: '1',   mt: -24 },
]

export default function WhySection() {
  return (
    <section className="py-24 px-10 max-w-7xl mx-auto" style={{ background: 'transparent' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div className="reveal">
          <div className="section-eyebrow mb-3">Why Upendra</div>
          <h2
            className="section-title text-white mb-5"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}
          >
            60 Years of Making <span className="gradient-text">Brands Visible</span>
          </h2>
          <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.42)', lineHeight: 1.8, fontWeight: 300 }}>
            We started in 1965 with a single hoarding. Today we command premium locations across all 18
            districts of Maharashtra.
          </p>
          <ul className="mt-6 mb-8 space-y-3">
            {whyPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3">
                <div
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(0,191,255,.1)', border: '1px solid rgba(0,191,255,.25)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-blue-electric)' }} />
                </div>
                <span style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.65, fontWeight: 300 }}>
                  {pt}
                </span>
              </li>
            ))}
          </ul>
          <Link href="/about">
            <button className="btn-outline flex items-center gap-2">
              Our Story <ArrowRight size={15} />
            </button>
          </Link>
        </div>

        {/* Image grid column */}
        <div className="grid grid-cols-2 gap-3 reveal">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden group"
              style={{ borderRadius: 18, aspectRatio: img.ratio, marginTop: img.mt, position: 'relative' }}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="25vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(0,191,255,.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
