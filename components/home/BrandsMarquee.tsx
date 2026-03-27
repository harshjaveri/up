'use client'
import { brands } from '@/lib/data'

export default function BrandsMarquee() {
  return (
    <section
      style={{
        background: 'rgba(8,13,26,.55)',
        backdropFilter: 'blur(2px)',
        borderTop: '1px solid rgba(0,191,255,.07)',
        borderBottom: '1px solid rgba(0,191,255,.07)',
        padding: '60px 0',
      }}
    >
      <div className="text-center mb-10 reveal">
        <div className="section-eyebrow mb-3">Trusted By</div>
        <h2 className="section-title text-white" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
          Brands We&apos;ve <span className="gradient-text">Powered</span>
        </h2>
      </div>

      {[brands, [...brands].reverse()].map((row, ri) => (
        <div
          key={ri}
          className="overflow-hidden mt-3"
          style={{
            maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
          }}
        >
          <div className="marquee-track" style={{ animationDirection: ri === 1 ? 'reverse' : 'normal' }}>
            {[...row, ...row, ...row].map((b, i) => (
              <div
                key={i}
                style={{
                  padding: '9px 22px',
                  borderRadius: 14,
                  whiteSpace: 'nowrap',
                  background: 'rgba(0,191,255,.04)',
                  border: '1px solid rgba(0,191,255,.08)',
                  fontSize: '.77rem',
                  color: 'rgba(255,255,255,.42)',
                  fontWeight: 400,
                  flexShrink: 0,
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
