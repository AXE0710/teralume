import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { products } from '@/lib/products'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const dynamicParams = false

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  return {
    title: product ? `${product.name} | Teralume Living` : 'Product Not Found',
    description: product?.description || 'Discover premium home textiles at Teralume Living',
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Breadcrumb */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-muted rounded-lg p-8 min-h-96">
            <div className="relative w-full h-96">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Category Badge */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                {product.category.replace('-', ' ')}
              </span>
            </div>

            {/* Title and Price */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-3xl text-primary font-semibold">${product.price}</p>
            </div>

            {/* Short Description */}
            <p className="text-lg text-foreground/80">
              {product.description}
            </p>

            {/* Long Description */}
            {product.longDescription && (
              <p className="text-base text-foreground/70 leading-relaxed">
                {product.longDescription}
              </p>
            )}

            {/* Product Details */}
            <div className="space-y-4 pt-4 border-t border-border">
              {product.material && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Material</h3>
                  <p className="text-foreground/70">{product.material}</p>
                </div>
              )}

              {product.size && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Size</h3>
                  <p className="text-foreground/70">{product.size}</p>
                </div>
              )}

              {product.care && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Care Instructions</h3>
                  <p className="text-foreground/70">{product.care}</p>
                </div>
              )}
            </div>

            {/* Available Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground">Available Colors</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Note */}
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mt-8">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-primary">For inquiries:</span> Contact us for pricing, availability, and custom options.
              </p>
            </div>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/products/${relProduct.id}`}
                  className="group"
                >
                  <div className="bg-muted rounded-lg overflow-hidden mb-4 h-48 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={relProduct.image || "/placeholder.svg"}
                        alt={relProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {relProduct.name}
                  </h3>
                  <p className="text-primary font-semibold mt-1">${relProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
