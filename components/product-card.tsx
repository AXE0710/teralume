import { Product } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Product Image */}
        <div className="relative w-full h-64 bg-muted overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {product.description}
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

          {/* Price */}
          <div className="mt-auto">
            <span className="text-lg font-bold text-primary">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
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
