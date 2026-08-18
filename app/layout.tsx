import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-instrument-serif' })

export const metadata: Metadata = {
  title: 'Ellipsonic — Product Catalogue',
  description: 'A focused suite of thoughtful digital products for meaningful work.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f3ef',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
