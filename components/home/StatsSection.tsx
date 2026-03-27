'use client'
import { stats } from '@/lib/data'

export default function StatsSection() {
  return (
    <section
      style={{
        background: 'rgba(8,13,26,.55)',
        backdropFilter: 'blur(2px)',
        borderTop: '1px solid rgba(0,191,255,.07)',
        borderBottom: '1px solid rgba(0,191,255,.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(0,191,255,.08)', border: '1px solid rgba(0,191,255,.15)' }}
                >
                  <Icon size={20} style={{ color: 'var(--color-blue-electric)' }} />
                </div>
                <div className="counter-number" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                  {s.value}
                </div>
                <div
                  style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.38)', marginTop: 4, fontWeight: 300, letterSpacing: '.04em' }}
                >
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
