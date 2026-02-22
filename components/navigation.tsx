'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'; // Import ShoppingCart here

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Terralume Living"
              width={80}
              height={40}
              className="h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navHome')}
            </Link>
            <Link href="/catalog" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navCatalog')}
            </Link>
            <Link href="/kids" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navKids')}
            </Link>
            <Link href="/catalog?collection=best-sellers" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navBestSellers')}
            </Link>
            <Link href="/about" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navAbout')}
            </Link>
            <Link href="/contact" className="text-xs font-bold text-foreground hover:text-primary transition-colors uppercase tracking-widest">
              {t('navContact')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-border/50 pl-6">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-xs transition-colors uppercase tracking-widest ${language === 'en' ? 'font-bold text-primary' : 'font-light text-foreground/70 hover:text-primary'}`}
              >
                EN
              </button>
              <span className="text-xs text-border/50">|</span>
              <button 
                onClick={() => setLanguage('de')}
                className={`text-xs transition-colors uppercase tracking-widest ${language === 'de' ? 'font-bold text-primary' : 'font-light text-foreground/70 hover:text-primary'}`}
              >
                DE
              </button>
            </div>
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
            <Link href="/" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navHome')}
            </Link>
            <Link href="/catalog" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navCatalog')}
            </Link>
            <Link href="/kids" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navKids')}
            </Link>
            <Link href="/catalog?collection=best-sellers" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navBestSellers')}
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navAbout')}
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary uppercase">
              {t('navContact')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-6 px-4 py-4 border-t border-border/50 mt-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-sm transition-colors uppercase tracking-widest ${language === 'en' ? 'font-bold text-primary' : 'font-medium text-foreground/70'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('de')}
                className={`text-sm transition-colors uppercase tracking-widest ${language === 'de' ? 'font-bold text-primary' : 'font-medium text-foreground/70'}`}
              >
                DE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
