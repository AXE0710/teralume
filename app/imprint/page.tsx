// c:\code\teralume-living-website\app\imprint\page.tsx
import React from "react"
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Legal Notice (Imprint)',
  description: 'Legal Notice and Imprint for TerraLume Living.',
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Legal Notice (Imprint)</h1>
        <div className="space-y-8 text-foreground/80">
            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">Company Information</h2>
                <p>TerraLume Living GmbH<br />
                123 Design Street<br />
                Creative City, CC 12345<br />
                Country</p>
            </section>
            
            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">Contact</h2>
                <p>Phone: +1 (555) 123-4567<br />
                Email: hello@teralume.com</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">Represented by</h2>
                <p>Jane Doe, CEO</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">Register Entry</h2>
                <p>Entry in the Commercial Register.<br />
                Registering Court: Local Court of Creative City<br />
                Registration Number: HRB 12345</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">VAT ID</h2>
                <p>Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                DE 123 456 789</p>
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">Dispute Resolution</h2>
                <p>The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr.<br />
                Please find our email in the impressum/legal notice.<br />
                We do not take part in online dispute resolutions at consumer arbitration boards.</p>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
