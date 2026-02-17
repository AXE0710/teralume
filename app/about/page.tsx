import React from "react"
import type { Metadata } from 'next'
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapPin, Users, Package, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story & Philosophy | TerraLume Living',
  description: 'Learn about TerraLume Living\'s commitment to sustainable craftsmanship. We blend natural materials with timeless design to create eco-friendly home textiles.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section with Big Logo */}
      <section className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center bg-secondary/20 overflow-hidden">
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
              alt="TerraLume Living Brand Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight">Who We Are</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Dedicated to bringing sustainable comfort and artisanal craft into your home.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Meaning Section */}
      <section className="py-12 md:py-16 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground"> Terra</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Latin for Earth &rarr; Represents naturalness, authenticity, craftsmanship, materials sourced from nature, down-to-earthness, and warmth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground"> Lume</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Derived from Lumen (Latin: Light) &rarr; Symbolizes brightness, warmth, tranquility, elegance, atmosphere, and the feeling of being at home.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground"> Living</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Refers to living spaces, interior design, and lifestyle—focusing not just on products, but on a way of life.
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto bg-secondary/20 p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl font-serif text-foreground mb-4"> Core Meaning</h3>
            <p className="text-lg md:text-xl text-foreground/80 font-light italic">
              &quot;A lifestyle and way of living that connects natural earthiness with warm light, tranquility, and timeless elegance.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              TerraLume Living began with a simple idea: that the objects we surround ourselves with should bring peace, comfort, and beauty without compromising the health of our planet. Founded by a group of designers and textile enthusiasts, we set out to curate a collection of home goods that bridge the gap between modern aesthetics and traditional craftsmanship.
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
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">Craftsmanship First</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe in the power of the human hand. Many of our textiles are hand-woven, hand-dyed, or hand-embroidered by skilled artisans who have honed their craft over generations. This attention to detail ensures that every piece is unique and built to last, carrying the story of its maker into your home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:pr-8 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">Sustainable by Design</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Sustainability isn't just a buzzword for us; it's the foundation of everything we do. From organic cottons and linens to natural dyes and plastic-free packaging, we are committed to reducing our environmental footprint while maximizing the quality of your home environment. We believe luxury and responsibility can coexist beautifully.
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Our Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Mindful Living", desc: "Creating spaces that encourage rest, reflection, and connection through thoughtful design." },
              { title: "Ethical Sourcing", desc: "Partnering directly with makers who are paid fair wages and work in safe, dignified conditions." },
              { title: "Timeless Design", desc: "Products designed to transcend fleeting trends and remain beautiful and functional for years." }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-border/50 text-center hover:shadow-lg transition-all duration-300 group">
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2 flex flex-col items-center">
              <Users className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground">Ethically Manufactured</h4>
              <p className="text-xs text-muted-foreground font-light">Fair wages and safe working conditions.</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <Package className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground">Free Shipping</h4>
              <p className="text-xs text-muted-foreground font-light">On all orders over $150. Easy returns.</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-primary/60 mb-2" />
              <h4 className="font-medium text-foreground">Secure Payment</h4>
              <p className="text-xs text-muted-foreground font-light">100% secure encrypted checkout.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}