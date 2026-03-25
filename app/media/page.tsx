'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const categories = [
  {
    id: 'hoardings',
    icon: '🏗️',
    title: 'Hoardings',
    count: 48,
    photos: [
      { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=800', location: 'Jalna Road, Chhatrapati Sambhajinagar' },
      { src: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?w=800', location: 'Beed Bypass Road, Aurangabad' },
      { src: 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?w=800', location: 'MIDC Waluj, Aurangabad' },
      { src: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=800', location: 'Cantonment Area, Aurangabad' },
    ],
  },
  {
    id: 'railway',
    icon: '🚂',
    title: 'Railway Advertising',
    count: 32,
    photos: [
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Aurangabad Railway Station, Platform 1' },
      { src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=800', location: 'Manmad Junction Bridge Banner' },
      { src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800', location: 'Nanded Station Concourse' },
    ],
  },
  {
    id: 'mall',
    icon: '🏬',
    title: 'Mall Advertising',
    count: 24,
    photos: [
      { src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?w=800', location: 'Prozone Mall, Aurangabad – Atrium' },
      { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800', location: 'City Centre, Nashik – Level 2' },
    ],
  },
  {
    id: 'airport',
    icon: '✈️',
    title: 'Airport Advertising',
    count: 18,
    photos: [
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Aurangabad Airport – Arrival Hall' },
      { src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=800', location: 'Nanded Airport – Check-in Lobby' },
    ],
  },
  {
    id: 'highway',
    icon: '🛤️',
    title: 'Highway Advertising',
    count: 56,
    photos: [
      { src: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?w=800', location: 'NH-52 Pune–Aurangabad Corridor, KM 89' },
      { src: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?w=800', location: 'SH-27 Aurangabad–Jalna, KM 12' },
      { src: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?w=800', location: 'NH-161 Solapur–Aurangabad, KM 34' },
    ],
  },
  {
    id: 'city',
    icon: '🏙️',
    title: 'City Advertising',
    count: 120,
    photos: [
      { src: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=800', location: 'Kranti Chowk Bus Shelter, Aurangabad' },
      { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=800', location: 'City Chowk Kiosk, Aurangabad' },
    ],
  },
  {
    id: 'station',
    icon: '🚉',
    title: 'Railway Station Ads',
    count: 28,
    photos: [
      { src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800', location: 'Aurangabad Rly Station – Platform Boards' },
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Latur Station – FOB Banner' },
    ],
  },
]

type Photo = { src: string; location: string }

export default function MediaPage() {
  const [selected, setSelected] = useState<typeof categories[0] | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .stagger-children')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightboxIdx === null || !selected) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') setLightboxIdx(i => Math.min((i ?? 0) + 1, selected.photos.length - 1))
      if (e.key === 'ArrowLeft') setLightboxIdx(i => Math.max((i ?? 0) - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx, selected])

  return (
    <div style={{ background: 'var(--color-base)' }}>
      {/* ── Hero ── */}
      <section
        className="pt-40 pb-20 px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0A1628 0%, var(--color-base) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.12) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto reveal">
          <div className="section-eyebrow mb-4">Portfolio</div>
          <h1
            className="section-title text-white mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            Browse real campaign photos by category. Each location listed with its exact address.
          </p>
        </div>
      </section>

      {/* ── Category Grid ── */}
      {!selected && (
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat)}
                className="glass-card p-8 text-left group"
              >
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">{cat.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-1 group-hover:text-[color:var(--color-blue-electric)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
                  {cat.count} locations
                </p>
                <div
                  className="text-xs font-semibold px-3 py-1.5 rounded-full w-fit transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'rgba(0,191,255,0.1)',
                    border: '1px solid rgba(0,191,255,0.3)',
                    color: 'var(--color-blue-electric)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  View Gallery →
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Photo Gallery ── */}
      {selected && (
        <section className="py-10 px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-2 mb-10 text-sm transition-all duration-300 hover:text-[color:var(--color-blue-electric)]"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
          >
            ← Back to Categories
          </button>

          <div className="mb-10">
            <div className="section-eyebrow mb-2">{selected.count} Locations</div>
            <h2
              className="section-title text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {selected.icon} {selected.title}
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {selected.photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl relative"
                onClick={() => setLightboxIdx(i)}
                style={{ border: '1px solid rgba(0,191,255,0.1)' }}
              >
                <div className="relative" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/3' }}>
                  <Image
                    src={photo.src}
                    alt={photo.location}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(5,8,16,0.8) 0%, transparent 60%)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                      <span className="text-xs text-white leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                        {photo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && selected && (
        <div
          className="lightbox-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxIdx(null) }}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          {lightboxIdx > 0 && (
            <button
              onClick={() => setLightboxIdx(i => (i ?? 1) - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Next */}
          {lightboxIdx < selected.photos.length - 1 && (
            <button
              onClick={() => setLightboxIdx(i => (i ?? 0) + 1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Image */}
          <div className="max-w-4xl w-full px-20">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <Image
                src={selected.photos[lightboxIdx].src}
                alt={selected.photos[lightboxIdx].location}
                fill
                className="object-cover"
                sizes="80vw"
              />
            </div>
            <div className="flex items-center gap-2 mt-4 justify-center">
              <MapPin size={14} style={{ color: 'var(--color-blue-electric)' }} />
              <span className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                {selected.photos[lightboxIdx].location}
              </span>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {selected.photos.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIdx(i)}
                  className="w-2 h-2 rounded-full cursor-pointer transition-all duration-300"
                  style={{
                    background: i === lightboxIdx ? 'var(--color-blue-electric)' : 'rgba(255,255,255,0.2)',
                    boxShadow: i === lightboxIdx ? '0 0 8px var(--color-blue-electric)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
