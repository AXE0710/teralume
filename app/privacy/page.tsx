// c:\code\teralume-living-website\app\privacy\page.tsx
import React from "react"
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TerraLume Living.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">Privacy Policy</h1>
        <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">1. Introduction</h2>
                <p>Welcome to TerraLume Living. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, and Marketing and Communications Data.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. Where we need to comply with a legal or regulatory obligation.</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
