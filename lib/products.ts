import productsData from './products.json'

export interface Product {
  id: string
  name: string
  category: 'cushions' | 'kitchen' | 'living-room' | 'table-linen'
  price: number
  image: string
  description: string
  longDescription?: string
  colors?: string[]
  featured?: boolean
  size?: string
  material?: string
  care?: string
}

export const products: Product[] = productsData as Product[]
