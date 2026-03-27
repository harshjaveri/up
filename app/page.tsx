'use client'
import { useEffect } from 'react'
import HomeBackground from '@/components/home/HomeBackground'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import ServicesSection from '@/components/home/ServicesSection'
import BrandsMarquee from '@/components/home/BrandsMarquee'
import WhySection from '@/components/home/WhySection'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  /* Scroll reveal — observe all .reveal elements on mount */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HomeBackground />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BrandsMarquee />
      <WhySection />
      <CtaBanner />
    </>
  )
}
