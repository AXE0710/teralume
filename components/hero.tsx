// c:\code\Terralume-living-website\components\hero.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Terralume Living - Premium Sustainable Home Textiles for Modern Living"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="pt-4">
            <Link href="/catalog">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 border-none text-md px-8 py-6 h-auto shadow-xl uppercase tracking-widest">
                {t('cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
