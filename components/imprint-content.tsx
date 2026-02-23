'use client'

import { useLanguage } from '@/components/language-provider'

export function ImprintContent() {
  const { t } = useLanguage()
  
  return (
    <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">{t('imprintTitle')}</h1>
        <div className="space-y-8 text-foreground/80">
            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintCompanyTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintCompanyText') }} />
            </section>
            
            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintContactTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintContactText') }} />
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintRepresentedTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintRepresentedText') }} />
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintRegisterTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintRegisterText') }} />
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintVatTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintVatText') }} />
            </section>

            <section className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">{t('imprintDisputeTitle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('imprintDisputeText') }} />
            </section>
        </div>
    </main>
  )
}