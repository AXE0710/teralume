'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export function ScreenshotPrevention() {
  const [show, setShow] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleViolation = (e?: Event) => {
      if (e) e.preventDefault()
      setShow(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setShow(false), 2000)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === 'PrintScreen') {
        handleViolation()
        // Attempt to clear clipboard to prevent pasting the screenshot
        try {
          navigator.clipboard.writeText('')
        } catch (err) {
          // Ignore clipboard errors
        }
      }
      
      // Mac shortcuts: Cmd+Shift+3 (Full screen), Cmd+Shift+4 (Selection)
      // Note: OS-level shortcuts are often intercepted before the browser sees them,
      // but this catches some cases or if the browser has focus.
      if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4')) {
        handleViolation(e)
      }
    }

    // Prevent right-click context menu (often used to save images)
    const handleContextMenu = (e: MouseEvent) => {
      handleViolation(e)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('contextmenu', handleContextMenu)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('contextmenu', handleContextMenu)
      clearTimeout(timeout)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg font-medium text-sm animate-in fade-in slide-in-from-top-2 duration-300">
        {t('screenshotWarning')}
      </div>
    </div>
  )
}