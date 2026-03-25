'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import LenisProvider from '@/components/LenisProvider'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  )
}
