// c:\code\teralume-living-website\components\language-provider.tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es' | 'fr' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    heroTitle: "Premium Sustainable Home Textiles",
    heroSubtitle: "Experience the perfect balance of comfort and style. Our handcrafted textiles use exclusive organic materials to bring lasting beauty and wellness to your modern home.",
    cta: "Upgrade Your Living Space",
  },
  es: {
    heroTitle: "Textiles para el Hogar Premium y Sostenibles",
    heroSubtitle: "Experimenta el equilibrio perfecto entre comodidad y estilo. Nuestros textiles artesanales utilizan materiales orgánicos exclusivos para brindar belleza y bienestar duraderos a tu hogar moderno.",
    cta: "Mejora tu Espacio Vital",
  },
  fr: {
    heroTitle: "Textiles de Maison Premium et Durables",
    heroSubtitle: "Découvrez l'équilibre parfait entre confort et style. Nos textiles artisanaux utilisent des matériaux organiques exclusifs pour apporter beauté et bien-être durables à votre maison moderne.",
    cta: "Améliorez Votre Espace de Vie",
  },
  de: {
    heroTitle: "Hochwertige nachhaltige Heimtextilien",
    heroSubtitle: "Erleben Sie die perfekte Balance aus Komfort und Stil. Unsere handgefertigten Textilien verwenden exklusive organische Materialien, um dauerhafte Schönheit und Wohlbefinden in Ihr modernes Zuhause zu bringen.",
    cta: "Werten Sie Ihren Wohnraum auf",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Detect location based on IP
    const detectLocation = async () => {
      try {
        // Using ipapi.co for demo purposes. For production, consider a paid service or Vercel Geolocation headers.
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code
        
        // Map country codes to languages
        if (['ES', 'MX', 'AR', 'CO', 'CL', 'PE'].includes(countryCode)) {
          setLanguage('es')
        } else if (['FR', 'BE', 'CH', 'SN'].includes(countryCode)) {
          setLanguage('fr')
        } else if (['DE', 'AT'].includes(countryCode)) {
          setLanguage('de')
        } else {
          setLanguage('en')
        }
      } catch (error) {
        console.error('Failed to detect location:', error)
        // Default to English if detection fails
      }
    }

    detectLocation()
  }, [])

  const t = (key: string) => {
    return translations[language][key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
