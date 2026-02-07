'use client'

import React, { Suspense, useState, useEffect } from "react"
import { useSearchParams, useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ITEMS_PER_PAGE = 12

function CatalogContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get('category') || 'all'
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'cushions', label: 'Cushions' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'table-linen', label: 'Table Linen' },
  ]

  const filteredProducts = currentCategory === 'all'
    ? products
    : products.filter(p => p.category === currentCategory)

  const visibleProducts = filteredProducts.slice(0, visibleCount)

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE)
  }, [currentCategory])

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === 'all') {
      params.delete('category')
    } else {
      params.set('category', categoryId)
    }
    router.push(`/catalog?${params.toString()}`)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">Catalog</h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Explore our collection of sustainable home textiles, handcrafted with care and designed for modern living.
          </p>

          {/* Filters */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-muted-foreground">Categories</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={currentCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "rounded-full capitalize",
                    currentCategory === category.id ? "" : "hover:bg-muted"
                  )}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="mt-12 flex justify-center">
            <Button onClick={handleLoadMore} variant="outline" size="lg" className="min-w-[200px]">
              Load More
            </Button>
          </div>
        )}
      </main>
  )
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center min-h-[50vh]">Loading catalog...</div>}>
        <CatalogContent />
      </Suspense>
      <Footer />
    </div>
  )
}