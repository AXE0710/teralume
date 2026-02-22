'use client'

import { Instagram } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function InstagramButton() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-black px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {t('instagramTooltip')}
      </span>
      <a
        href="https://www.instagram.com/Terralumeliving/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:bg-gray-800"
        aria-label={t('instagramTooltip')}
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  )
}
