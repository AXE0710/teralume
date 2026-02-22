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

const defaultEn = {
  trustOrganic: "100% Organic",
  trustOrganicDesc: "Certified sustainable materials",
  trustEthical: "Ethically Crafted",
  trustEthicalDesc: "Fair wages & safe conditions",
  trustQuality: "Quality Guarantee",
  trustQualityDesc: "30-day return policy",
  trustShipping: "Worldwide Shipping",
  trustShippingDesc: "Free on orders over $150",
  featuredTitle: "Curated for Effortless Living",
  featuredSubtitle: "Thoughtfully designed pieces that blend seamlessly into modern interiors.",
  exploreDesigns: "Explore All Designs",
  badgeNew: "New",
  badgeBestSeller: "Best Seller",
  benefitSoftWoven: "Soft woven texture with a refined, natural feel",
  craftTitle: "Crafted with Intention",
  craftDesc: "Every Terralume piece is created with a focus on material quality, tactile comfort, and timeless design. We believe true luxury is felt — in the texture, the weight, and the way a space comes together.",
  ourStoryBtn: "Our Story",
  shopSustainableBtn: "Shop Sustainable",
  storyTitle: "Designed to Elevate Everyday Living",
  storyDesc1: "Terralume was founded with a simple idea: to create home textiles that feel calm, refined, and enduring. Inspired by natural tones and modern interiors, our collections are designed to bring balance and warmth into everyday spaces.",
  storyDesc2: "We focus on quality materials, thoughtful craftsmanship, and designs that remain relevant beyond seasons and trends.",
  readStoryBtn: "Read Our Story",
  bestSellersTitle: "Best Sellers",
  bestSellersSubtitle: "Our most loved pieces, chosen by you.",
  viewAll: "View All",
  newsletterTitle: "Join the Terralume Circle",
  newsletterDesc: "Receive early access to new collections, exclusive pieces, and quiet moments of inspiration.",
  emailPlaceholder: "Enter your email",
  joinNowBtn: "Join Now",
  newsletterNote: "Sign up and get 10% off your first order.",
  footerBrandDesc: "Premium sustainable home textiles for modern living.",
  securePayment: "Secure Payment",
  qualityGuarantee: "Quality Guarantee",
  secureShopping: "Secure Shopping",
  navTitle: "Navigation",
  navHome: "Home",
  navShop: "Shop",
  navAbout: "About",
  navCatalog: "Catalog",
  navContact: "Contact",
  catTitle: "Categories",
  catCushions: "Cushions",
  catKitchen: "Kitchen",
  catLiving: "Living",
  contactTitle: "Contact",
  joinBtn: "Join",
  copyright: "All rights reserved.",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  legal: "Imprint",
  navKids: "KIDS",
  navBestSellers: "BEST SELLERS",
  buyBtn: "Buy",
  screenshotWarning: "Screenshot not allowed",
  loading3D: "Loading 3D Experience...",
  dragRotateZoom: "Drag to rotate • Scroll to zoom",
  rendering3D: "Rendering 3D Model...",
  dragRotate: "Drag to rotate",
  scrollZoom: "Scroll to zoom",
  instagramTooltip: "Message on Instagram",
  heroTitle: "Premium Sustainable Home Textiles",
  heroSubtitle: "Discover Terralume Living's collection of handcrafted, organic home textiles. Elevate your space with sustainable luxury, designed for comfort and modern living.",
  cta: "Shop Collection",
  aboutTitle: "Our Story",
  aboutSubtitle: "Weaving nature into the fabric of everyday life.",
  aboutTerraTitle: "Terra",
  aboutTerraDesc: "Earth, ground, and soil. It represents our commitment to natural materials and grounding aesthetics.",
  aboutLumeTitle: "Lume",
  aboutLumeDesc: "Light, clarity, and warmth. It reflects how our textiles bring a soft, illuminating presence to a home.",
  aboutLivingTitle: "Living",
  aboutLivingDesc: "The art of dwelling. Creating spaces that breathe, evolve, and comfort us in our daily rituals.",
  aboutCoreMeaningTitle: "The Essence",
  aboutCoreMeaningDesc: "Terralume is where the grounding force of the earth meets the uplifting quality of light.",
  aboutStoryTitle: "From the Loom to Your Home",
  aboutStoryDesc: "What started as a fascination with the tactile quality of linen and organic cotton has grown into a dedicated studio. We believe that the objects we surround ourselves with shape our inner state.",
  aboutCraftedTitle: "Handcrafted Excellence",
  aboutCraftedDesc1: "We work with artisans who have inherited generations of weaving knowledge. Every thread is placed with intention.",
  aboutCraftedDesc2: "Imperfections are not flaws; they are the signature of the human hand.",
  aboutSustainableTitle: "Rooted in Sustainability",
  aboutSustainableDesc: "Our commitment goes beyond materials. It's about the entire lifecycle of the product, from the soil where the cotton grows to the fair wages paid to the weavers.",
  aboutPhilosophyTitle: "Our Philosophy",
  aboutPhilMindful: "Mindful Production",
  aboutPhilMindfulDesc: "Small batches to reduce waste and ensure quality.",
  aboutPhilEthical: "Ethical Sourcing",
  aboutPhilEthicalDesc: "Direct partnerships with growers and makers.",
  aboutPhilTimeless: "Timeless Design",
  aboutPhilTimelessDesc: "Styles that outlast trends and seasons.",
  aboutTrustEthical: "Ethical Labor",
  aboutTrustEthicalDesc: "Fair trade certified",
  aboutTrustShipping: "Global Shipping",
  aboutTrustShippingDesc: "Carbon neutral delivery",
  aboutTrustSecure: "Secure Shopping",
  aboutTrustSecureDesc: "Encrypted transactions",
  contactPageTitle: "Get in Touch",
  contactPageSubtitle: "We'd love to hear from you. Whether you have a question about our products, shipping, or just want to say hello.",
  contactName: "Name",
  contactEmail: "Email",
  contactMessage: "Message",
  contactSend: "Send Message",
  contactSuccess: "Message sent successfully!",
  contactAddress: "Address",
  contactHours: "Hours",
  contactHoursDesc: "Mon-Fri: 9am - 5pm EST",
  kidsHeroTitle: "Terralume Mini",
  kidsHeroSubtitle: "Gentle on skin, kind to the planet. Organic textiles for your little ones.",
  kidsCollectionTitle: "Kids Collection",
  kidsCollectionSubtitle: "Thoughtfully designed for comfort and play.",
  kid_name_1: "Organic Cotton Baby Blanket",
  kid_desc_1: "Soft and breathable for delicate skin",
  kid_name_2: "Muslin Swaddle Set",
  kid_desc_2: "Lightweight and versatile",
  kid_name_3: "Crib Sheet - Sage",
  kid_desc_3: "Fits standard crib mattresses",
  kid_name_4: "Hooded Towel",
  kid_desc_4: "Ultra-absorbent and cozy"
}

const defaultDe = {
  trustOrganic: "100% Bio",
  trustOrganicDesc: "Zertifizierte nachhaltige Materialien",
  trustEthical: "Ethisch Hergestellt",
  trustEthicalDesc: "Faire Löhne & sichere Bedingungen",
  trustQuality: "Qualitätsgarantie",
  trustQualityDesc: "30 Tage Rückgaberecht",
  trustShipping: "Weltweiter Versand",
  trustShippingDesc: "Kostenlos ab 150€ Bestellwert",
  featuredTitle: "Kuratiert für müheloses Wohnen",
  featuredSubtitle: "Durchdacht gestaltete Stücke, die sich nahtlos in moderne Interieurs einfügen.",
  exploreDesigns: "Alle Designs entdecken",
  badgeNew: "Neu",
  badgeBestSeller: "Beliebt",
  benefitSoftWoven: "Weiche Webstruktur mit edlem, natürlichem Gefühl",
  craftTitle: "Mit Absicht gefertigt",
  craftDesc: "Jedes Terralume-Stück wird mit Fokus auf Materialqualität, taktilem Komfort und zeitlosem Design kreiert. Wir glauben, dass wahrer Luxus gefühlt wird — in der Textur, dem Gewicht und der Art und Weise, wie ein Raum zusammenkommt.",
  ourStoryBtn: "Unsere Geschichte",
  shopSustainableBtn: "Nachhaltig Einkaufen",
  storyTitle: "Entworfen, um den Alltag zu bereichern",
  storyDesc1: "Terralume wurde mit einer einfachen Idee gegründet: Heimtextilien zu schaffen, die sich ruhig, edel und beständig anfühlen. Inspiriert von natürlichen Tönen und modernen Interieurs sind unsere Kollektionen darauf ausgelegt, Balance und Wärme in alltägliche Räume zu bringen.",
  storyDesc2: "Wir konzentrieren uns auf hochwertige Materialien, durchdachte Handwerkskunst und Designs, die über Jahreszeiten und Trends hinaus relevant bleiben.",
  readStoryBtn: "Unsere Geschichte lesen",
  bestSellersTitle: "Meistverkauft",
  bestSellersSubtitle: "Unsere beliebtesten Stücke, von Ihnen ausgewählt.",
  viewAll: "Alle ansehen",
  newsletterTitle: "Treten Sie dem Terralume-Kreis bei",
  newsletterDesc: "Erhalten Sie frühzeitigen Zugang zu neuen Kollektionen, exklusiven Stücken und ruhigen Momenten der Inspiration.",
  emailPlaceholder: "Geben Sie Ihre E-Mail ein",
  joinNowBtn: "Jetzt beitreten",
  newsletterNote: "Melden Sie sich an und erhalten Sie 10% Rabatt auf Ihre erste Bestellung.",
  footerBrandDesc: "Premium nachhaltige Heimtextilien für modernes Wohnen.",
  securePayment: "Sichere Bezahlung",
  qualityGuarantee: "Qualitätsgarantie",
  secureShopping: "Sicherer Einkauf",
  navTitle: "Navigation",
  navHome: "Startseite",
  navShop: "Shop",
  navAbout: "Über uns",
  navCatalog: "Katalog",
  navContact: "Kontakt",
  catTitle: "Kategorien",
  catCushions: "Kissen",
  catKitchen: "Küche",
  catLiving: "Wohnen",
  contactTitle: "Kontakt",
  joinBtn: "Beitreten",
  copyright: "Alle Rechte vorbehalten.",
  privacy: "Datenschutz",
  terms: "AGB",
  legal: "Impressum",
  navKids: "KINDER",
  navBestSellers: "MEISTVERKAUFT",
  buyBtn: "Kaufen",
  screenshotWarning: "Screenshot nicht erlaubt",
  loading3D: "Lade 3D-Erlebnis...",
  dragRotateZoom: "Ziehen zum Drehen • Scrollen zum Zoomen",
  rendering3D: "Rendere 3D-Modell...",
  dragRotate: "Ziehen zum Drehen",
  scrollZoom: "Scrollen zum Zoomen",
  instagramTooltip: "Nachricht auf Instagram",
  heroTitle: "Premium Nachhaltige Heimtextilien",
  heroSubtitle: "Entdecken Sie die Kollektion handgefertigter, organischer Heimtextilien von Terralume Living. Veredeln Sie Ihren Raum mit nachhaltigem Luxus, entworfen für Komfort und modernes Leben.",
  cta: "Kollektion ansehen",
  aboutTitle: "Unsere Geschichte",
  aboutSubtitle: "Natur in das Gewebe des täglichen Lebens weben.",
  aboutTerraTitle: "Terra",
  aboutTerraDesc: "Erde, Boden und Grund. Es steht für unser Engagement für natürliche Materialien und erdende Ästhetik.",
  aboutLumeTitle: "Lume",
  aboutLumeDesc: "Licht, Klarheit und Wärme. Es spiegelt wider, wie unsere Textilien eine sanfte, erhellende Präsenz in ein Zuhause bringen.",
  aboutLivingTitle: "Living",
  aboutLivingDesc: "Die Kunst des Wohnens. Räume schaffen, die atmen, sich entwickeln und uns in unseren täglichen Ritualen trösten.",
  aboutCoreMeaningTitle: "Die Essenz",
  aboutCoreMeaningDesc: "Terralume ist der Ort, an dem die erdende Kraft der Erde auf die erhebende Qualität des Lichts trifft.",
  aboutStoryTitle: "Vom Webstuhl zu Ihnen nach Hause",
  aboutStoryDesc: "Was als Faszination für die taktile Qualität von Leinen und Bio-Baumwolle begann, hat sich zu einem engagierten Studio entwickelt. Wir glauben, dass die Objekte, mit denen wir uns umgeben, unseren inneren Zustand formen.",
  aboutCraftedTitle: "Handwerkliche Exzellenz",
  aboutCraftedDesc1: "Wir arbeiten mit Handwerkern zusammen, die Generationen von Webwissen geerbt haben. Jeder Faden wird mit Absicht platziert.",
  aboutCraftedDesc2: "Unvollkommenheiten sind keine Fehler; sie sind die Handschrift der menschlichen Hand.",
  aboutSustainableTitle: "Verwurzelt in Nachhaltigkeit",
  aboutSustainableDesc: "Unser Engagement geht über Materialien hinaus. Es geht um den gesamten Lebenszyklus des Produkts, vom Boden, auf dem die Baumwolle wächst, bis zu den fairen Löhnen für die Weber.",
  aboutPhilosophyTitle: "Unsere Philosophie",
  aboutPhilMindful: "Achtsame Produktion",
  aboutPhilMindfulDesc: "Kleine Chargen zur Reduzierung von Abfall und Sicherung der Qualität.",
  aboutPhilEthical: "Ethische Beschaffung",
  aboutPhilEthicalDesc: "Direkte Partnerschaften mit Anbauern und Machern.",
  aboutPhilTimeless: "Zeitloses Design",
  aboutPhilTimelessDesc: "Stile, die Trends und Jahreszeiten überdauern.",
  aboutTrustEthical: "Ethische Arbeit",
  aboutTrustEthicalDesc: "Fair Trade zertifiziert",
  aboutTrustShipping: "Globaler Versand",
  aboutTrustShippingDesc: "Klimaneutrale Lieferung",
  aboutTrustSecure: "Sicherer Einkauf",
  aboutTrustSecureDesc: "Verschlüsselte Transaktionen",
  contactPageTitle: "Kontaktieren Sie uns",
  contactPageSubtitle: "Wir freuen uns, von Ihnen zu hören. Ob Sie eine Frage zu unseren Produkten, zum Versand haben oder einfach nur Hallo sagen möchten.",
  contactName: "Name",
  contactEmail: "E-Mail",
  contactMessage: "Nachricht",
  contactSend: "Nachricht senden",
  contactSuccess: "Nachricht erfolgreich gesendet!",
  contactAddress: "Adresse",
  contactHours: "Öffnungszeiten",
  contactHoursDesc: "Mo-Fr: 09:00 - 17:00 Uhr",
  kidsHeroTitle: "Terralume Mini",
  kidsHeroSubtitle: "Sanft zur Haut, freundlich zum Planeten. Bio-Textilien für Ihre Kleinen.",
  kidsCollectionTitle: "Kinderkollektion",
  kidsCollectionSubtitle: "Durchdachtes Design für Komfort und Spiel.",
  kid_name_1: "Bio-Baumwolle Babydecke",
  kid_desc_1: "Weich und atmungsaktiv für zarte Haut",
  kid_name_2: "Musselin-Pucktücher Set",
  kid_desc_2: "Leicht und vielseitig",
  kid_name_3: "Spannbettlaken - Salbei",
  kid_desc_3: "Passend für Standard-Kinderbetten",
  kid_name_4: "Kapuzenhandtuch",
  kid_desc_4: "Ultra-saugfähig und gemütlich"
}

const translations: Record<Language, Record<string, string>> = {
  en: { ...defaultEn, ...enMessages },
  de: { ...defaultDe, ...deMessages }
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
