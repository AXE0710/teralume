import React from "react"
import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Instagram } from 'lucide-react'
import './globals.css'
import { ScreenshotPrevention } from '@/components/screenshot-prevention'
import { LanguageProvider } from '@/components/language-provider'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    template: '%s | TerraLume Living',
    default: 'TerraLume Living - Premium Sustainable Home Textiles',
  },
  description: 'Discover TerraLume Living\'s collection of handcrafted, organic home textiles. Elevate your space with sustainable luxury, designed for comfort and modern living.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
        {children}
        <ScreenshotPrevention />
        <div className="fixed bottom-6 right-6 z-50 group">
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-black px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Message on Instagram
          </span>
          <a
            href="https://www.instagram.com/terralumeliving/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:bg-gray-800"
            aria-label="Message us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
