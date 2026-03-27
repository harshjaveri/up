import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { navLinks, footerServices } from '@/lib/data'
import { ADDRESS, PHONE_NUMBER, EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(5,8,16,.98)', borderTop: '1px solid rgba(0,191,255,.1)' }}>
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Upendra Publicity" width={42} height={42} className="logo-square-sm" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-.01em' }}>
                  Upendra Publicity
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.65rem', color: 'var(--color-blue-electric)', letterSpacing: '.15em', fontWeight: 600 }}>
                  Est. 1965 · Maharashtra
                </div>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300, maxWidth: '260px' }}>
              Maharashtra&apos;s most trusted outdoor advertising agency. 
              Six decades of building iconic brands across the state.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="section-eyebrow mb-6 text-white/50" style={{ letterSpacing: '0.15em' }}>Navigation</div>
            <ul className="space-y-3.5">
              {navLinks.map(l => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}
                    className="transition-all duration-300 hover:text-[color:var(--color-blue-electric)] hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="section-eyebrow mb-6 text-white/50" style={{ letterSpacing: '0.15em' }}>Services</div>
            <ul className="space-y-3.5">
              {footerServices.map(s => (
                <li key={s} style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-eyebrow mb-6 text-white/50" style={{ letterSpacing: '0.15em' }}>Contact</div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.6, fontWeight: 300 }}>
                  {ADDRESS.split(', ').map((part, i) => (
                    <span key={i}>{part}{i === 0 && <br />}</span>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}>{PHONE_NUMBER}</span>
              </li>
              <li className="flex gap-4">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}>{PHONE_NUMBER}</span>
              </li>
              <li className="flex gap-4">
                <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}>{EMAIL}</span>
              </li>
              <li className="flex gap-4">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.5)', fontWeight: 300 }}>Mon–Sat: 9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glow-line mb-8" style={{ opacity: 0.3 }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'rgba(255,255,255,.25)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Upendra Publicity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'rgba(255,255,255,.25)', letterSpacing: '0.05em' }}>
              Built for Excellence in Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
