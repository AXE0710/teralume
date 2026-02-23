// c:\code\Terralume-living-website\app\privacy\page.tsx
import React from "react"
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PrivacyContent } from '@/components/privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Terralume Living.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <PrivacyContent />
      <Footer />
    </div>
  )
}
