import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Haven Brunch - Un brunch raffiné pour sublimer vos moments précieux',
  description: 'Découvrez Haven Brunch, l\'expérience brunch chic et gourmande à Paris. Réservez votre table pour un moment d\'élégance accessible et de saveurs raffinées.',
  keywords: 'brunch, Paris, restaurant, élégant, raffiné, réservation, gastronomie',
  authors: [{ name: 'Haven Brunch' }],
  openGraph: {
    title: 'Haven Brunch - Un brunch raffiné pour sublimer vos moments précieux',
    description: 'Découvrez Haven Brunch, l\'expérience brunch chic et gourmande à Paris.',
    url: 'https://havenbrunch.fr',
    siteName: 'Haven Brunch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haven Brunch',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven Brunch - Un brunch raffiné pour sublimer vos moments précieux',
    description: 'Découvrez Haven Brunch, l\'expérience brunch chic et gourmande à Paris.',
    images: ['/og-image.jpg'],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
