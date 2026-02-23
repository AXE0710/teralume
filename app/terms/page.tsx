import React from "react"
import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import TermsContent from '@/components/terms-content'

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'Terms of Service for Terralume Living.',
}

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Navigation />
			<TermsContent />
			<Footer />
		</div>
	)
}

