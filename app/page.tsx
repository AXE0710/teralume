import React from "react"
import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Hero } from '@/components/hero'
import { ArrowRight, MapPin, Sparkles, Users, Globe, Leaf, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium Sustainable Home Textiles | TerraLume Living',
  description: 'Shop our exclusive collection of organic cotton and linen home textiles. Handcrafted for comfort, style, and sustainability. Free shipping on orders over $150.',
}

export default function Home() {
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
                <span className="text-sm font-medium text-foreground">100% Organic</span>
                <span className="text-xs text-muted-foreground">Certified sustainable materials</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Ethically Crafted</span>
                <span className="text-xs text-muted-foreground">Fair wages & safe conditions</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Quality Guarantee</span>
                <span className="text-xs text-muted-foreground">30-day return policy</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Globe className="w-6 h-6 text-primary/70" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Worldwide Shipping</span>
                <span className="text-xs text-muted-foreground">Free on orders over $150</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">Curated for Effortless Living</h2>
            <p className="text-muted-foreground">Thoughtfully designed pieces that blend seamlessly into modern interiors.</p>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
            Explore All Designs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              badge={index === 0 ? "New" : "Best Seller"}
              benefit="Soft woven texture with a refined, natural feel"
            />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/catalog">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Explore All Designs
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
               <h2 className="text-3xl md:text-4xl font-serif text-foreground">Crafted with Intention</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 Every TerraLume piece is created with a focus on material quality, tactile comfort, and timeless design. 
                 We believe true luxury is felt — in the texture, the weight, and the way a space comes together.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 pt-2">
                 <Link href="/about">
                   <Button variant="outline" size="lg" className="w-full sm:w-auto">Our Story</Button>
                 </Link>
                 <Link href="/catalog">
                   <Button size="lg" className="w-full sm:w-auto shadow-md hover:scale-105 transition-all duration-300">Shop Sustainable</Button>
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Designed to Elevate Everyday Living</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            TerraLume was founded with a simple idea: to create home textiles that feel calm, refined, and enduring.
            Inspired by natural tones and modern interiors, our collections are designed to bring balance and warmth into everyday spaces.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We focus on quality materials, thoughtful craftsmanship, and designs that remain relevant beyond seasons and trends.
          </p>
          <div className="pt-4">
            <Link href="/about">
              <Button variant="outline" size="lg">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border/40">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">Best Sellers</h2>
            <p className="text-muted-foreground">Our most loved pieces, chosen by you.</p>
          </div>
          <Link href="/catalog?collection=best-sellers" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <h2 className="text-3xl md:text-4xl font-serif">Join the Terralume Circle</h2>
          <p className="text-lg text-primary-foreground/80 font-light max-w-2xl mx-auto">
            Receive early access to new collections, exclusive pieces, and quiet moments of inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            />
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Join Now
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 font-light">
            Sign up and get 10% off your first order.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}