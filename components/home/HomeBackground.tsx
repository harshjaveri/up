'use client'
import { useRef } from 'react'

export default function HomeBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Fallback gradient */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 0,
          background:
            'radial-gradient(ellipse at 25% 45%, rgba(0,80,160,.22) 0%, transparent 55%), radial-gradient(ellipse at 70% 25%, rgba(0,191,255,.1) 0%, transparent 45%), linear-gradient(170deg,#060c1e 0%,#040a16 55%,#030810 100%)',
        }}
      />

      {/* City grid perspective effect */}
      <div className="city-grid" style={{ zIndex: 1 }} />

      {/* Looping background video */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            try {
              e.currentTarget.play()
            } catch (error) {
              console.warn('[Video] Playback failed:', error)
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Glow orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          zIndex: 3,
          width: 480,
          height: 480,
          top: '5%',
          left: '15%',
          opacity: 0.08,
          background: 'radial-gradient(circle,rgba(0,191,255,1),transparent 70%)',
          animation: 'orbPulse 7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          zIndex: 3,
          width: 280,
          height: 280,
          bottom: '10%',
          right: '15%',
          opacity: 0.06,
          background: 'radial-gradient(circle,rgba(0,255,255,1),transparent 70%)',
          animation: 'orbPulse 9s ease-in-out infinite reverse',
        }}
      />
      <style>{`@keyframes orbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.25)}}`}</style>
    </div>
  )
}
