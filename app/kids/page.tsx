// c:\code\Terralume-living-website\app\kids\page.tsx
'use client'

import React from "react"
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import kidsProducts from "@/lib/kids.json"
import { useLanguage } from '@/components/language-provider'

export default function KidsPage() {
  const allProducts = [...kidsProducts]
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Terralume Mini"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 py-12 md:py-24">
          <div className="max-w-4xl space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight break-words hyphens-auto">
              {t('kidsHeroTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              {t('kidsHeroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">{t('kidsCollectionTitle')}</h2>
            <p className="text-muted-foreground">{t('kidsCollectionSubtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
