'use client'

import Link from "next/link"
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Hero } from '@/components/hero'
import { ArrowRight, Globe, Leaf, ShieldCheck, Users } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function HomeContent() {
  const { t } = useLanguage()
  const featuredProducts = products.filter(p => p.featured).slice(0, 4)
  const bestSellers = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <section className="py-12 bg-secondary/20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Leaf className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground uppercase tracking-wider">{t('trustOrganic')}</span>
                <span className="text-xs text-muted-foreground">{t('trustOrganicDesc')}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground uppercase tracking-wider">{t('trustEthical')}</span>
                <span className="text-xs text-muted-foreground">{t('trustEthicalDesc')}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground uppercase tracking-wider">{t('trustQuality')}</span>
                <span className="text-xs text-muted-foreground">{t('trustQualityDesc')}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Globe className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground uppercase tracking-wider">{t('trustShipping')}</span>
                <span className="text-xs text-muted-foreground">{t('trustShippingDesc')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">{t('featuredTitle')}</h2>
            <p className="text-muted-foreground">{t('featuredSubtitle')}</p>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group uppercase tracking-widest">
            {t('exploreDesigns')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              badge={index === 0 ? t('badgeNew') : t('badgeBestSeller')}
              benefit={t('benefitSoftWoven')}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/catalog">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase tracking-widest font-bold">
              {t('exploreDesigns')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Craft / Quality */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
               <Image 
                 src="/products/kitchen-2.jpg" 
                 alt="Sustainable Organic Cotton Kitchen Textiles" 
                 fill 
                 className="object-cover"
               />
             </div>
             <div className="space-y-6">
               <h2 className="text-3xl md:text-4xl font-serif text-foreground">{t('craftTitle')}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 {t('craftDesc')}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 pt-2">
                 <Link href="/about">
                   <Button variant="outline" size="lg" className="w-full sm:w-auto uppercase tracking-widest font-bold">{t('ourStoryBtn')}</Button>
                 </Link>
                 <Link href="/catalog">
                   <Button size="lg" className="w-full sm:w-auto shadow-md hover:scale-105 transition-all duration-300 uppercase tracking-widest font-bold">{t('shopSustainableBtn')}</Button>
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">{t('storyTitle')}</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {t('storyDesc1')}
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            {t('storyDesc2')}
          </p>
          <div className="pt-4">
            <Link href="/about">
              <Button variant="outline" size="lg" className="uppercase tracking-widest font-bold">{t('readStoryBtn')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border/40">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">{t('bestSellersTitle')}</h2>
            <p className="text-muted-foreground">{t('bestSellersSubtitle')}</p>
          </div>
          <Link href="/catalog?collection=best-sellers" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group uppercase tracking-widest">
            {t('viewAll')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter / Community */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif">{t('newsletterTitle')}</h2>
          <p className="text-lg text-primary-foreground/80 font-light max-w-2xl mx-auto">
            {t('newsletterDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')}
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            />
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 uppercase tracking-widest font-bold">
              {t('joinNowBtn')}
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 font-light">
            {t('newsletterNote')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
