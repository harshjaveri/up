'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/media',    label: 'Media' },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Single fixed navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[900] h-[68px] flex items-center px-10 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5,8,16,.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,191,255,.08)' : 'none',
        }}
      >
        {/* Left Section: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="Upendra Publicity"
              width={40}
              height={40}
              className="logo-square"
            />
            <div>
              <div
                className="leading-tight"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.95rem', color: '#fff', letterSpacing: '-.01em' }}
              >
                Upendra Publicity
              </div>
              <div
                style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--color-blue-electric)', letterSpacing: '.14em', opacity: .8 }}
              >
                Est. 1965 · Maharashtra
              </div>
            </div>
          </Link>
        </div>

        {/* Center Section: Main Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm transition-all duration-250"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: pathname === link.href ? 600 : 400,
                fontSize: '.82rem',
                letterSpacing: '.02em',
                color: pathname === link.href ? '#fff' : 'rgba(255,255,255,.55)',
                background: pathname === link.href ? 'rgba(255,255,255,.06)' : 'transparent',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget as HTMLAnchorElement
                if (pathname !== link.href) { t.style.color = 'rgba(255,255,255,.9)'; t.style.background = 'rgba(255,255,255,.05)' }
              }}
              onMouseLeave={e => {
                const t = e.currentTarget as HTMLAnchorElement
                if (pathname !== link.href) { t.style.color = 'rgba(255,255,255,.55)'; t.style.background = 'transparent' }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Get a Quote & Mobile Burger */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="/contact" className="hidden lg:block">
            <button className="btn-primary" style={{ padding: '11px 24px', fontSize: '.82rem' }}>
              Get a Quote
            </button>
          </Link>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-300"
            style={{ background: 'rgba(0,191,255,.1)', border: '1px solid rgba(0,191,255,.2)', color: 'var(--color-blue-electric)' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-[800] lg:hidden transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          background: 'rgba(5,8,16,.98)',
          backdropFilter: 'blur(24px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: '-.03em',
                color: pathname === link.href ? 'var(--color-blue-electric)' : '#fff',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="btn-primary mt-4">Get a Quote</button>
          </Link>
        </div>
      </div>
    </>
  )
}
