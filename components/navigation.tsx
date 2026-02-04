'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'; // Import ShoppingCart here

import Link from 'next/link'
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
            <span className="text-xl md:text-2xl font-light text-foreground tracking-[0.1em] group-hover:text-primary transition-colors">
              TERALUME
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Home
            </Link>
            <Link href="/catalog" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Catalog
            </Link>
            <Link href="/contact" className="text-xs font-light text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Contact
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
              Catalog
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
