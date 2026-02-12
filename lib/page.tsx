import React from "react"
import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Truck, RefreshCw, ShieldCheck, Ruler, Sparkles, Droplets, Sofa } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.id === params.id)
  if (!product) return { title: 'Product Not Found' }
  
  return {
    title: `${product.name} | TerraLume Living`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link href="/catalog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-[3/4] lg:aspect-square w-full rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-8 border-b border-border/40 pb-8">
                <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{product.name}</h1>
                <p className="text-2xl font-light text-primary mb-6">${product.price}</p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                  {product.longDescription || product.description}
                </p>
                
                <div className="flex gap-4">
                  <Button size="lg" className="w-full md:w-auto px-8">
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Required Content Sections */}
              <div className="space-y-8">
                
                {/* Material & Composition */}
                <div className="grid grid-cols-[24px_1fr] gap-4">
                  <Sparkles className="w-6 h-6 text-primary/70" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Material & Composition</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {product.material || "100% Organic Cotton. Ethically sourced and woven."}
                    </p>
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-[24px_1fr] gap-4">
                  <Ruler className="w-6 h-6 text-primary/70" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Dimensions</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {product.size || "Standard sizing. Please check our size guide for details."}
                    </p>
                  </div>
                </div>

                {/* Care Instructions */}
                <div className="grid grid-cols-[24px_1fr] gap-4">
                  <Droplets className="w-6 h-6 text-primary/70" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Care Instructions</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {product.care || "Machine wash cold on gentle cycle. Tumble dry low. Do not bleach."}
                    </p>
                  </div>
                </div>

                {/* Usage Suggestions */}
                <div className="grid grid-cols-[24px_1fr] gap-4">
                  <Sofa className="w-6 h-6 text-primary/70" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Usage Suggestions</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {product.usage || "Perfect for adding a layer of warmth to your sofa, bed, or favorite reading chair. Designed to blend seamlessly with modern interiors."}
                    </p>
                  </div>
                </div>

                {/* Shipping & Returns (Transparency) */}
                <div className="mt-8 p-6 bg-secondary/20 rounded-lg space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-foreground/70 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Free Shipping & Returns</h4>
                      <p className="text-xs text-muted-foreground mt-1">On all orders over $150. We ship worldwide with tracked delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-foreground/70 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground">30-Day Guarantee</h4>
                      <p className="text-xs text-muted-foreground mt-1">Not completely in love? Return it within 30 days for a full refund.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}