'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { services, stats, brands } from '@/lib/data'
import { PHONE_HREF } from '@/lib/constants'

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full-screen transparent bg
          The fixed city-grid bg bleeds through
      ═══════════════════════════════════════ */}

      {/* Fixed animated background — only on home */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      >
        {/* Fallback gradient (bottom layer) */}
        <div className="absolute inset-0" style={{
          zIndex: 0,
          background: 'radial-gradient(ellipse at 25% 45%, rgba(0,80,160,.22) 0%, transparent 55%), radial-gradient(ellipse at 70% 25%, rgba(0,191,255,.1) 0%, transparent 45%), linear-gradient(170deg,#060c1e 0%,#040a16 55%,#030810 100%)',
        }} />
        {/* Grid perspective effect */}
        <div className="city-grid" style={{ zIndex: 1 }} />
        {/* Video — on top of gradient and grid */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <video
            ref={videoRef}
            autoPlay loop muted playsInline preload="auto"
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
        {/* Glow orbs — on top of video */}
        <div className="absolute rounded-full pointer-events-none" style={{ zIndex: 3, width:480,height:480,top:'5%',left:'15%',opacity:.08,background:'radial-gradient(circle,rgba(0,191,255,1),transparent 70%)',animation:'orbPulse 7s ease-in-out infinite' }} />
        <div className="absolute rounded-full pointer-events-none" style={{ zIndex: 3, width:280,height:280,bottom:'10%',right:'15%',opacity:.06,background:'radial-gradient(circle,rgba(0,255,255,1),transparent 70%)',animation:'orbPulse 9s ease-in-out infinite reverse' }} />
        <style>{`@keyframes orbPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.25)}}`}</style>
      </div>

      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '100vh', minHeight: 640 }}>
        <div className="video-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">
          {/* Minimalist gen-z headline — split weight */}
          <h1 className="section-title mb-5" style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)', textShadow: '0 0 70px rgba(0,191,255,.2)' }}>
            <span style={{ color: '#fff', fontWeight: 200 }}>Dominate</span><br />
            <span className="gradient-text">Every</span><br />
            <span style={{ color: '#fff' }}>Billboard.</span>
          </h1>

          <p className="mb-9 mx-auto" style={{ fontFamily:'var(--font-body)', fontSize:'clamp(.9rem,1.8vw,1.1rem)', color:'rgba(255,255,255,.5)', lineHeight:1.8, fontWeight:300, maxWidth:480 }}>
            From Chhatrapati Sambhajinagar to every corner of Maharashtra —{' '}
            we place your brand where it can&apos;t be ignored.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"><button className="btn-primary flex items-center gap-2">Get a Free Quote <ArrowRight size={16} /></button></Link>
            <Link href="/media"><button className="btn-outline flex items-center gap-2">▶ View Our Work</button></Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar — semi-transparent so bg shows through ── */}
      <section style={{ background:'rgba(8,13,26,.55)', backdropFilter:'blur(2px)', borderTop:'1px solid rgba(0,191,255,.07)', borderBottom:'1px solid rgba(0,191,255,.07)' }}>
        <div className="max-w-7xl mx-auto px-10 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background:'rgba(0,191,255,.08)', border:'1px solid rgba(0,191,255,.15)' }}>
                    <Icon size={20} style={{ color: 'var(--color-blue-electric)' }} />
                  </div>
                  <div className="counter-number" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>{s.value}</div>
                  <div style={{ fontSize: '.75rem', color:'rgba(255,255,255,.38)', marginTop:4, fontWeight:300, letterSpacing:'.04em' }}>{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 px-10 max-w-7xl mx-auto" style={{ background:'transparent' }}>
        <div className="text-center mb-14 reveal">
          <div className="section-eyebrow mb-3">Our Expertise</div>
          <h2 className="section-title text-white" style={{ fontSize:'clamp(2rem,4vw,3.2rem)' }}>
            What We <span className="gradient-text">Do</span>
          </h2>
          <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.38)', maxWidth:380, margin:'12px auto 0', fontWeight:300, lineHeight:1.8 }}>
            Seven powerful formats spanning Maharashtra&apos;s outdoor landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <Link key={svc.title} href="/services">
              <div className="glass-card p-6 h-full group cursor-pointer reveal" style={{ transitionDelay:`${i*0.07}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-2xl transition-transform duration-300 group-hover:scale-110" style={{ background:'rgba(0,191,255,.06)', border:'1px solid rgba(0,191,255,.12)' }}>
                  {svc.icon}
                </div>
                <h3 className="mb-2 transition-colors duration-300 group-hover:text-[color:var(--color-blue-electric)]" style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'.88rem', letterSpacing:'-.01em', color:'#fff' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize:'.77rem', color:'rgba(255,255,255,.38)', lineHeight:1.65, fontWeight:300 }}>{svc.desc}</p>
                <div className="mt-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" style={{ fontFamily:'var(--font-mono)', fontSize:'.66rem', color:'var(--color-blue-electric)' }}>
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brands marquee ── */}
      <section style={{ background:'rgba(8,13,26,.55)', backdropFilter:'blur(2px)', borderTop:'1px solid rgba(0,191,255,.07)', borderBottom:'1px solid rgba(0,191,255,.07)', padding:'60px 0' }}>
        <div className="text-center mb-10 reveal">
          <div className="section-eyebrow mb-3">Trusted By</div>
          <h2 className="section-title text-white" style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)' }}>
            Brands We&apos;ve <span className="gradient-text">Powered</span>
          </h2>
        </div>
        {[brands, [...brands].reverse()].map((row, ri) => (
          <div key={ri} className="overflow-hidden mt-3" style={{ maskImage:'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage:'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
            <div className="marquee-track" style={{ animationDirection: ri === 1 ? 'reverse' : 'normal' }}>
              {[...row,...row,...row].map((b, i) => (
                <div key={i} style={{ padding:'9px 22px', borderRadius:14, whiteSpace:'nowrap', background:'rgba(0,191,255,.04)', border:'1px solid rgba(0,191,255,.08)', fontSize:'.77rem', color:'rgba(255,255,255,.42)', fontWeight:400, flexShrink:0 }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Why section ── */}
      <section className="py-24 px-10 max-w-7xl mx-auto" style={{ background:'transparent' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="section-eyebrow mb-3">Why Upendra</div>
            <h2 className="section-title text-white mb-5" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
              60 Years of Making <span className="gradient-text">Brands Visible</span>
            </h2>
            <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.42)', lineHeight:1.8, fontWeight:300 }}>
              We started in 1965 with a single hoarding. Today we command premium locations across all 18 districts of Maharashtra.
            </p>
            <ul className="mt-6 mb-8 space-y-3">
              {['Exclusive premium locations across Maharashtra','End-to-end campaign management & printing','Verified footfall data for every location','Real-time campaign monitoring & reporting'].map(pt => (
                <li key={pt} className="flex items-start gap-3">
                  <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:'rgba(0,191,255,.1)', border:'1px solid rgba(0,191,255,.25)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--color-blue-electric)' }} />
                  </div>
                  <span style={{ fontSize:'.82rem', color:'rgba(255,255,255,.5)', lineHeight:1.65, fontWeight:300 }}>{pt}</span>
                </li>
              ))}
            </ul>
            <Link href="/about"><button className="btn-outline flex items-center gap-2">Our Story <ArrowRight size={15} /></button></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 reveal">
            {[
              { src:'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=400', ratio:'4/5', mt:0 },
              { src:'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=400', ratio:'1', mt:24 },
              { src:'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?w=400', ratio:'1', mt:0 },
              { src:'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=400', ratio:'1', mt:-24 },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden group" style={{ borderRadius:18, aspectRatio:img.ratio, marginTop:img.mt, position:'relative' }}>
                <Image src={img.src} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background:'rgba(0,191,255,.1)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="pb-24 px-10">
        <div
          className="max-w-5xl mx-auto rounded-3xl text-center reveal relative overflow-hidden"
          style={{ padding:'64px 80px', background:'linear-gradient(135deg,rgba(0,60,130,.25),rgba(0,20,70,.45))', border:'1px solid rgba(0,191,255,.18)' }}
        >
          <div className="absolute rounded-full pointer-events-none" style={{ width:300,height:300,top:'-70px',right:'-50px',opacity:.12,background:'radial-gradient(circle,var(--color-blue-electric),transparent 70%)' }} />
          <div className="absolute rounded-full pointer-events-none" style={{ width:200,height:200,bottom:'-50px',left:'-30px',opacity:.08,background:'radial-gradient(circle,var(--color-blue-cyan),transparent 70%)' }} />
          <div className="relative z-10">
            <div className="section-eyebrow mb-3">Ready to Amplify?</div>
            <h2 className="section-title text-white mb-3" style={{ fontSize:'clamp(1.8rem,4vw,3rem)' }}>
              Let&apos;s Put Your Brand <span className="gradient-text">On the Map</span>
            </h2>
            <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.42)', maxWidth:420, margin:'0 auto', fontWeight:300, lineHeight:1.8 }}>
              Customised proposal with verified locations, footfall data, and transparent pricing — in 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/contact"><button className="btn-primary flex items-center gap-2">Get a Free Quote <ArrowRight size={16} /></button></Link>
              <a href={PHONE_HREF}><button className="btn-outline">Call Us Now</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
