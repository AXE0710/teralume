'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'; // Import ShoppingCart here

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="TerraLume Living"
              width={80}
              height={40}
              className="h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Home
            </Link>
            <Link href="/catalog" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Catalogue
            </Link>
            <Link href="/kids" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              KIDS
            </Link>
            <Link href="/catalog?collection=best-sellers" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              BEST SELLERS
            </Link>
            <Link href="/about" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              ABOUT
            </Link>
            <Link href="/contact" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/catalog" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              Catalogue
            </Link>
            <Link href="/kids" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              KIDS
            </Link>
            <Link href="/catalog?collection=best-sellers" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              BEST SELLERS
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              ABOUT
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
