import type { Metadata } from 'next'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'Upendra Publicity – Maharashtra\'s Premier Outdoor Advertising Agency',
  description:
    'From Chhatrapati Sambhajinagar to every corner of Maharashtra. 60+ years of outdoor advertising excellence — hoardings, railway ads, mall ads, highway & airport advertising.',
  icons: { icon: '/logo.png' },
  metadataBase: new URL('https://upendrapublicity.com'),
  openGraph: {
    title: 'Upendra Publicity – Maharashtra\'s Premier Outdoor Advertising Agency',
    description:
      '60+ years of outdoor advertising excellence across Maharashtra. Hoardings, railway, mall, airport & highway advertising.',
    siteName: 'Upendra Publicity',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
