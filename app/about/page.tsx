'use client'

import React from "react"
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapPin, Users, Package, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Big Logo */}
      <section className="relative w-full pt-24 pb-16 md:py-32 flex flex-col items-center justify-center bg-secondary/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <Image
                src="/hero.png"
                alt="Subtle earthy texture background pattern"
                fill
                className="object-cover"
            />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
          <div className="relative w-48 h-48 md:w-80 md:h-80">
            <Image
              src="/logo.png"
              alt="Terralume Living Brand Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-foreground tracking-tight break-words hyphens-auto">{t('aboutTitle')}</h1>
            <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {t('aboutSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Meaning Section */}
      <section className="py-12 md:py-16 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-foreground"> {t('aboutTerraTitle')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('aboutTerraDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-foreground"> {t('aboutLumeTitle')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('aboutLumeDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-foreground"> {t('aboutLivingTitle')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('aboutLivingDesc')}
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto bg-secondary/20 p-6 md:p-8 rounded-2xl">
            <h3 className="text-lg md:text-xl font-serif text-foreground mb-4"> {t('aboutCoreMeaningTitle')}</h3>
            <p className="text-base md:text-xl text-foreground/80 font-light italic">
              {t('aboutCoreMeaningDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-6 break-words hyphens-auto">{t('aboutStoryTitle')}</h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto mb-8 rounded-full" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              {t('aboutStoryDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl">
              <Image
                src="/products/blanket-1.jpg"
                alt="Artisan weaving textile by hand"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6 md:pl-8">
              <h3 className="text-xl md:text-3xl font-serif text-foreground">{t('aboutCraftedTitle')}</h3>
              <div className="text-muted-foreground font-light leading-relaxed space-y-4 text-base">
                <p>
                  {t('aboutCraftedDesc1')}
                </p>
                <p>
                  {t('aboutCraftedDesc2')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:pr-8 order-2 md:order-1">
              <h3 className="text-xl md:text-3xl font-serif text-foreground">{t('aboutSustainableTitle')}</h3>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {t('aboutSustainableDesc')}
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-muted shadow-xl order-1 md:order-2">
              <Image
                src="/products/kitchen-1.jpg"
                alt="Organic cotton kitchen towels in natural light"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="py-12 md:py-20 bg-secondary/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-serif text-foreground break-words hyphens-auto">{t('aboutPhilosophyTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('aboutPhilMindful'), desc: t('aboutPhilMindfulDesc') },
              { title: t('aboutPhilEthical'), desc: t('aboutPhilEthicalDesc') },
              { title: t('aboutPhilTimeless'), desc: t('aboutPhilTimelessDesc') }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-border/50 text-center hover:shadow-lg transition-all duration-300 group">
                <h3 className="text-lg md:text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2 flex flex-col items-center px-2">
              <Users className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground text-sm md:text-base">{t('aboutTrustEthical')}</h4>
              <p className="text-xs text-muted-foreground font-light">{t('aboutTrustEthicalDesc')}</p>
            </div>
            <div className="space-y-2 flex flex-col items-center px-2">
              <Package className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground text-sm md:text-base">{t('aboutTrustShipping')}</h4>
              <p className="text-xs text-muted-foreground font-light">{t('aboutTrustShippingDesc')}</p>
            </div>
            <div className="space-y-2 flex flex-col items-center px-2">
              <ShieldCheck className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground text-sm md:text-base">{t('aboutTrustSecure')}</h4>
              <p className="text-xs text-muted-foreground font-light">{t('aboutTrustSecureDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}