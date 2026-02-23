// c:\code\Terralume-living-website\components\hero.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <>
      {/* Mobile Hero Layout */}
      <section className="md:hidden block w-full overflow-hidden">
        <div className="fixed top-0 left-0 z-0 h-[50vh] w-full overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Terralume Living"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="h-[50vh] w-full" />
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 bg-background relative z-10">
          <h1 className="text-3xl font-serif font-medium text-foreground tracking-tight break-words hyphens-auto mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-base text-muted-foreground font-light mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <Link href="/catalog" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md uppercase tracking-widest font-bold py-6 h-auto whitespace-normal text-sm sm:text-base">
              {t('cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Desktop Hero Layout */}
      <section className="hidden md:flex relative min-h-[80vh] w-full overflow-hidden items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Terralume Living - Premium Sustainable Home Textiles for Modern Living"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6 py-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white tracking-tight break-words hyphens-auto">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="pt-6">
              <Link href="/catalog">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 border-none text-base px-8 py-6 h-auto shadow-xl uppercase tracking-widest font-bold">
                  {t('cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
