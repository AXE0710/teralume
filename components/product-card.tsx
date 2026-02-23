'use client'

import { Product } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

interface ProductCardProps {
  product: Product
  badge?: string
  benefit?: string
}

export function ProductCard({ product, badge, benefit }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <div className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative w-full aspect-[3/4] bg-muted overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - Sustainable Home Textile`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground shadow-sm">
              {badge}
            </div>
          )}
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {(product as any).category === 'kids'
              ? (t(`kid_name_${product.id}`) || product.name)
              : (t(`prod_name_${product.id}`) || product.name)}
          </h3>
        </Link>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
          {benefit || ((product as any).category === 'kids'
            ? (t(`kid_desc_${product.id}`) || product.description)
            : (t(`prod_desc_${product.id}`) || product.description))}
        </p>

        {/* Colors */}
        {product.colors && (
          <div className="flex gap-2 mb-3">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-border"
                title={color}
                style={{
                  backgroundColor: getColorValue(color),
                }}
              />
            ))}
          </div>
        )}

        {/* Price and Action */}
        <div className="mt-auto flex items-center justify-between pt-2 flex-wrap gap-2">
          <span className="text-lg font-bold text-primary globalseo-exclude">
            ${product.price}
          </span>
          <Link href={`/contact?product=${encodeURIComponent(product.name)}&intent=buy`}>
            <Button size="sm" className="h-8 px-3 text-xs gap-1.5 hover:scale-105 transition-transform uppercase tracking-wider font-bold">
              <ShoppingBag className="w-3.5 h-3.5" />
              {t('buyBtn')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function getColorValue(colorName: string): string {
  const colorMap: Record<string, string> = {
    'Charcoal': '#36454F',
    'Sage': '#87AE73',
    'Terracotta': '#CC6655',
    'Beige': '#D4B896',
    'Navy': '#1A3A52',
    'Clay': '#B89968',
    'Natural': '#E8DCC8',
    'Slate': '#6B7280',
    'Cream': '#FFF8F0',
    'Rust': '#B7410E',
    'Camel': '#C4A86C',
    'Gray': '#9CA3AF',
    'Gold': '#D4AF37',
    'Silver': '#C0C0C0',
    'Bronze': '#CD7F32',
    'Flax': '#F5DEB3',
    'Dove': '#D3D3D3',
    'White': '#FFFFFF',
    'Rose': '#F08080',
    'Indigo': '#4B0082',
    'Ivory': '#FFFFF0',
    'Taupe': '#B38B6D',
    'Blue': '#4A90E2',
  }
  return colorMap[colorName] || '#999999'
}
