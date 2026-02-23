"use client"

import React from 'react'
import { useLanguage } from './language-provider'

export function TermsContent() {
  const { t } = useLanguage()

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold mb-4">{t('termsTitle')}</h1>
      <p className="text-sm text-muted-foreground mb-6">{t('termsLastUpdated')} {new Date().getFullYear()}</p>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">{t('termsIntroTitle')}</h2>
        <p className="text-base leading-relaxed">{t('termsIntroText')}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">{t('termsUseTitle')}</h2>
        <p className="text-base leading-relaxed">{t('termsUseText')}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">{t('termsDisclaimerTitle')}</h2>
        <p className="text-base leading-relaxed">{t('termsDisclaimerText')}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">{t('termsLimitationsTitle')}</h2>
        <p className="text-base leading-relaxed">{t('termsLimitationsText')}</p>
      </section>
    </main>
  )
}

export default TermsContent
