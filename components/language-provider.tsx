// c:\code\Terralume-living-website\components\language-provider.tsx

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
// We import the generated files. 
// Note: These files must exist. Run 'node bulk-translate.mjs' first.
import enMessages from '../messages/en.json'
import deMessages from '../messages/de.json'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: enMessages,
  de: deMessages
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Optional: Auto-detect language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
      setLanguage(savedLang)
      console.log(`[Terralume] Loaded saved language preference: ${savedLang}`)
    } else {
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'de') {
        setLanguage('de')
        console.log('[Terralume] Auto-detected German language from browser')
      } else {
        console.log(`[Terralume] Auto-detected language: ${browserLang} (Defaulting to English)`)
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string) => {
    // Fallback to English if translation is missing, then to the key itself
    return translations[language][key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
