import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StructuredData } from './components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aamtarchitecture.com'),
  title: 'AAMT Architecture Miami | Premier Architectural Firm | 20+ Years Experience',
  description: 'Leading Miami architecture firm specializing in modern residential, commercial, and urban design. 20+ years of experience creating innovative architectural solutions in South Florida.',
  keywords: [
    'Miami architect',
    'Miami architecture firm',
    'South Florida architect',
    'Miami residential architect',
    'Miami commercial architect',
    'modern architecture Miami',
    'contemporary design Miami',
    'urban planning Miami',
    'sustainable architecture Miami',
    'architectural services Miami',
    'building design Miami',
    'construction architect Miami',
    'AAMT Architecture',
    'Miami design firm',
    'Florida architect'
  ],
  authors: [{ name: 'AAMT Architecture' }],
  creator: 'AAMT Architecture',
  publisher: 'AAMT Architecture',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aamtarchitecture.com',
    siteName: 'AAMT Architecture',
    title: 'AAMT Architecture Miami | Premier Architectural Firm',
    description: 'Leading Miami architecture firm with 20+ years of experience in modern residential, commercial, and urban design.',
    images: [
      {
        url: '/portfolio/portfolio-001.jpg',
        width: 800,
        height: 600,
        alt: 'AAMT Architecture Miami - Modern Office Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAMT Architecture Miami | Premier Architectural Firm',
    description: 'Leading Miami architecture firm with 20+ years of experience in modern design.',
    images: ['/portfolio/portfolio-001.jpg'],
  },
  alternates: {
    canonical: 'https://aamtarchitecture.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
