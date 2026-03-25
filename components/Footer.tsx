import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = ['Hoardings', 'Railway Advertising', 'Mall Advertising', 'Airport Ads', 'Highway Advertising', 'City Advertising']
const links    = ['Home', 'About', 'Media', 'Services', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(5,8,16,.97)', borderTop: '1px solid rgba(0,191,255,.08)' }}>
      <div className="max-w-7xl mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Square logo */}
              <Image src="/logo.png" alt="Upendra Publicity" width={34} height={34} className="logo-square-sm" />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '.88rem', color: '#fff', letterSpacing: '-.01em' }}>
                  Upendra Publicity
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--color-blue-electric)', letterSpacing: '.12em' }}>
                  Est. 1965
                </div>
              </div>
            </div>
            <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.3)', lineHeight: 1.75, fontWeight: 300, maxWidth: '220px' }}>
              Maharashtra's most trusted outdoor advertising agency. 60+ years building brands.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="section-eyebrow mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l}>
                  <Link
                    href={`/${l === 'Home' ? '' : l.toLowerCase()}`}
                    style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', fontWeight: 300 }}
                    className="transition-colors duration-200 hover:text-[color:var(--color-blue-electric)]"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="section-eyebrow mb-4">Services</div>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s} style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', fontWeight: 300 }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-eyebrow mb-4">Contact</div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.6, fontWeight: 300 }}>
                  Chhatrapati Sambhajinagar,<br />Maharashtra – 431001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', fontWeight: 300 }}>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', fontWeight: 300 }}>info@upendrapublicity.com</span>
              </li>
              <li className="flex gap-3">
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-blue-electric)' }} />
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.35)', fontWeight: 300 }}>Mon–Sat: 9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glow-line mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', color: 'rgba(255,255,255,.22)' }}>
            © {new Date().getFullYear()} Upendra Publicity. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', color: 'rgba(255,255,255,.22)' }}>
            Maharashtra's Outdoor Advertising Leader
          </p>
        </div>
      </div>
    </footer>
  )
}
