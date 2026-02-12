// c:\code\teralume-living-website\app\kids\page.tsx
import React from "react"
import type { Metadata } from 'next'
import Image from "next/image"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: 'TerraLume Mini | Sustainable Kids Textiles',
  description: 'Organic, gentle, and playful textiles for the little ones.',
}

const kidsProducts = [
    
]

export default function KidsPage() {
  // Add some random products from the main catalog
  const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4)
  const allProducts = [ ...randomProducts]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="TerraLume Mini"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white tracking-tight">
              TerraLume Mini
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              Gentle on skin, kind to the planet. Organic textiles for your little ones.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">Kids Collection</h2>
            <p className="text-muted-foreground">Thoughtfully designed for comfort and play.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map(product => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
