'use client'

import { Navigation } from '@/components/navigation'
import { ParallaxProduct } from '@/components/parallax-product'
import { products } from '@/lib/products'
import { Footer } from '@/components/footer'
import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products

    const query = searchQuery.toLowerCase()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section with Search */}
      <section className="relative py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/8 via-primary/3 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium">Discover</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Our Complete Collection
              </h1>
              <p className="text-sm sm:text-base text-foreground/70 font-light">
                Explore our curated selection of premium home textiles
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-10 sm:pr-4 py-2.5 sm:py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Results count */}
            {searchQuery && (
              <p className="text-xs sm:text-sm text-muted-foreground">
                Found <span className="font-semibold text-foreground">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ParallaxProduct 
                  key={product.id} 
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 sm:py-20 text-center space-y-4">
              <p className="text-lg sm:text-xl text-foreground/70 font-light">
                No products found
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search terms
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-block mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
