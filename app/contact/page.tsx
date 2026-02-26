'use client'

import React, { useEffect, useRef, useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { Mail, MapPin, Phone } from 'lucide-react'
import { sendEmail } from "./actions"

const initialState = {
  message: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()
  const { t } = useLanguage()

  return (
    <Button type="submit" size="lg" className="w-full uppercase tracking-widest font-bold" disabled={pending}>
      {pending ? '...' : t('contactSend')}
    </Button>
  )
}

export default function ContactPage() {
  const { t } = useLanguage()
  const [state, formAction] = useActionState(sendEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message === 'success') {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navigation />

      <main className="flex-grow py-12 md:py-24 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4 break-words hyphens-auto">{t('contactPageTitle')}</h1>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              {t('contactPageSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{t('contactEmail')}</h3>
                  <p className="text-muted-foreground font-light">info@terralumeliving.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{t('contactAddress')}</h3>
                  <p className="text-muted-foreground font-light">Terralume Living UG</p>
                  <p className="text-muted-foreground font-light">Am Irscher Hof 73</p>
                  <p className="text-muted-foreground font-light">54294 Trier, Germany</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground font-light">+49 175 92 777 97</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-wider">
                      {t('contactName')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-wider">
                      {t('contactEmail')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground uppercase tracking-wider">
                      {t('contactMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    />
                  </div>

                  {state.message === 'success' ? (
                    <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-600 text-sm">
                      {t('contactSuccess')}
                    </div>
                  ) : state.message ? (
                    <div className="p-4 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
                      {state.message}
                    </div>
                  ) : null}

                  <SubmitButton />
                </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}