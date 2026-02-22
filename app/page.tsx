import React from "react"
import type { Metadata } from 'next'
import { HomeContent } from '@/components/home-content'

export const metadata: Metadata = {
  title: 'Premium Sustainable Home Textiles | Terralume Living',
  description: 'Shop our exclusive collection of organic cotton and linen home textiles. Handcrafted for comfort, style, and sustainability. Free shipping on orders over $150.',
}

export default function Home() {
  return <HomeContent />
}