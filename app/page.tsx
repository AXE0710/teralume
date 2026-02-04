import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import Image from 'next/image'

const allProducts = products

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section - Full Screen Lifestyle Image */}
      <section className="relative w-full h-screen md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/products/blanket-1.jpg"
          alt="Teralume Living - Premium Home Textiles"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

        {/* Hero Content - Left Aligned */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-2xl">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight text-balance">
                  Where Calm <br className="hidden sm:block" /> Meets Craft
                </h1>
              </div>
              <p className="text-base sm:text-lg text-white/90 font-light max-w-xl">
                Premium textiles crafted from sustainable materials for the modern home
              </p>
              <a href="/catalog">
                <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 border border-white text-white font-light uppercase text-xs sm:text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  Explore Collection
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Metrics Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">500+</p>
              <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-widest font-light mt-2 md:mt-3">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">100%</p>
              <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-widest font-light mt-2 md:mt-3">Sustainable</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">12+</p>
              <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-widest font-light mt-2 md:mt-3">Collections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Discover Our Collection
            </h2>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {allProducts.slice(0, 9).map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                </div>
                <div className="pt-4 md:pt-6">
                  <h3 className="text-base md:text-lg font-light text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/60 font-light mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12 md:mt-16">
            <a href="/catalog">
              <button className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 border border-foreground text-foreground font-light uppercase text-xs sm:text-sm tracking-widest hover:bg-foreground hover:text-background transition-all duration-300">
                View All Products
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About/Values Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 md:mb-6 text-balance">
              Crafted With Purpose
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 font-light leading-relaxed">
              Every textile in our collection is thoughtfully designed and carefully sourced from sustainable materials that honor both your home and our planet.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3 md:space-y-4 text-center">
              <div className="text-4xl md:text-5xl font-light text-primary">✓</div>
              <h3 className="text-lg md:text-xl font-light text-foreground">Sustainable</h3>
              <p className="text-sm md:text-base text-foreground/60 font-light">Eco-friendly materials and ethical production practices</p>
            </div>
            <div className="space-y-3 md:space-y-4 text-center">
              <div className="text-4xl md:text-5xl font-light text-primary">★</div>
              <h3 className="text-lg md:text-xl font-light text-foreground">Premium Quality</h3>
              <p className="text-sm md:text-base text-foreground/60 font-light">Handpicked for durability, comfort, and beauty</p>
            </div>
            <div className="space-y-3 md:space-y-4 text-center">
              <div className="text-4xl md:text-5xl font-light text-primary">◆</div>
              <h3 className="text-lg md:text-xl font-light text-foreground">Design-Driven</h3>
              <p className="text-sm md:text-base text-foreground/60 font-light">Thoughtfully curated to complement any interior</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg font-light text-background/80 mb-8 md:mb-10">
            Browse our complete collection and discover textiles that bring beauty and comfort to every room.
          </p>
          <a href="/catalog">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-background text-foreground font-light uppercase text-xs sm:text-sm tracking-widest hover:bg-background/90 transition-all duration-300">
              Shop Collection
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
