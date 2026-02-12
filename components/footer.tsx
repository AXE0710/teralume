import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ShieldCheck, Lock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-serif font-semibold text-foreground">Teralume</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Premium home textiles crafted with care and sustainable practices.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1 text-foreground/60" title="Secure Payment">
                <Lock className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 text-foreground/60" title="Quality Guarantee">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 text-foreground/60" title="Secure Shopping">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Shop
                </Link>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-foreground/70">Cushions</span>
              </li>
              <li>
                <span className="text-sm text-foreground/70">Kitchen Cloths</span>
              </li>
              <li>
                <span className="text-sm text-foreground/70">Living Room</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                />
                <Button size="md" className="bg-white text-black hover:bg-white/90 border-none text-sm px-4 h-auto">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-xs text-foreground/60">
                © {currentYear} Teralume Living. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                 <Link href="/terms" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/imprint" className="text-xs text-foreground/60 hover:text-primary transition-colors">
                  Legal Notice
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
