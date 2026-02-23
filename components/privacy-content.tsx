'use client'

import { useLanguage } from '@/components/language-provider'

export function PrivacyContent() {
  const { t } = useLanguage()
  
  return (
    <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">{t('privacyTitle')}</h1>
        <div className="prose prose-stone dark:prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">{t('privacyLastUpdated')} {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">{t('privacyIntroTitle')}</h2>
                <p>{t('privacyIntroText')}</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">{t('privacyDataTitle')}</h2>
                <p>{t('privacyDataText')}</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">{t('privacyUseTitle')}</h2>
                <p>{t('privacyUseText')}</p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">{t('privacySecurityTitle')}</h2>
                <p>{t('privacySecurityText')}</p>
            </section>
        </div>
    </main>
  )
}