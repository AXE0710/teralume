'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="TerraLume Living - Premium Home Textiles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              TerraLume Living
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              Sustainable luxury for the modern home. Handcrafted textiles designed to bring comfort and beauty to your space.
            </p>
            <div className="pt-4">
              <Link href="/catalog">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none text-md px-8 py-6 h-auto">
                  Shop Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-light text-foreground mb-2">Featured Collection</h2>
            <p className="text-muted-foreground">Curated pieces for your home</p>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/catalog">
            <Button variant="outline">View all products</Button>
          </Link>
        </div>
      </section>

      {/* Categories / Banner */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative h-96 rounded-lg overflow-hidden">
               <Image 
                 src="/products/kitchen-2.jpg" 
                 alt="Sustainable Kitchen" 
                 fill 
                 className="object-cover"
               />
             </div>
             <div className="space-y-6">
               <h2 className="text-3xl md:text-4xl font-light text-foreground">Sustainable by Nature</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 Our commitment to the planet is woven into every thread. We use 100% organic materials and eco-friendly dyes to ensure that your home is safe, healthy, and beautiful.
               </p>
               <Link href="/about">
                 <Button variant="outline" className="mt-4">Our Story</Button>
               </Link>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}