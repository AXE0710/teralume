'use client'

import { Button } from "@/components/ui/button"

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background lg:bg-background/95 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Terralume Living"
              width={80}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
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
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-8 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto flex flex-col items-center gap-6">
            <Link href="/" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navHome')}
            </Link>
            <Link href="/catalog" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navCatalog')}
            </Link>
            <Link href="/kids" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navKids')}
            </Link>
            <Link href="/catalog?collection=best-sellers" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navBestSellers')}
            </Link>
            <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navAbout')}
            </Link>
            <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {t('navContact')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-8 pt-6 border-t border-border/50 w-1/2 justify-center mt-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`text-base transition-colors uppercase tracking-widest ${language === 'en' ? 'font-bold text-primary' : 'font-medium text-foreground/70'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('de')}
                className={`text-base transition-colors uppercase tracking-widest ${language === 'de' ? 'font-bold text-primary' : 'font-medium text-foreground/70'}`}
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
