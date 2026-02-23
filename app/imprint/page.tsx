// c:\code\Terralume-living-website\app\imprint\page.tsx
import React from "react"
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ImprintContent } from '@/components/imprint-content'

export const metadata: Metadata = {
  title: 'Legal Notice (Imprint)',
  description: 'Legal Notice and Imprint for Terralume Living.',
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <ImprintContent />
      <Footer />
    </div>
  )
}
