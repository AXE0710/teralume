import React from "react"
import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScreenshotPrevention } from '@/components/screenshot-prevention'
import { InstagramButton } from '@/components/instagram-button'
import { LanguageProvider } from '@/components/language-provider'
import { CustomCursor } from '@/components/custom-cursor'

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
    template: '%s | Terralume Living',
    default: 'Terralume Living - Premium Sustainable Home Textiles',
  },
  description: 'Discover Terralume Living\'s collection of handcrafted, organic home textiles. Elevate your space with sustainable luxury, designed for comfort and modern living.',
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
        <CustomCursor />
        <ScreenshotPrevention />
        <InstagramButton />
        <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
