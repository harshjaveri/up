'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import LenisProvider from '@/components/LenisProvider'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <CustomCursor />
      <Navbar />
      <ErrorBoundary>
        <main>{children}</main>
      </ErrorBoundary>
      <Footer />
      <WhatsAppFloat />
    </LenisProvider>
  )
}
