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
  bestSellersTitle: "Essentials",
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
  navHome: "Living",
  navShop: "Shop",
  navAbout: "Our Philosophy",
  navCatalog: "Collection",
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
  navKids: "Little Living",
  navBestSellers: "Essentials",
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
  kidsHeroTitle: "Terralume kleine Welt",
  kidsHeroSubtitle: "Gentle on skin, kind to the planet. Organic textiles for your little ones.",
  kidsCollectionTitle: "Little Living",
  kidsCollectionSubtitle: "Thoughtfully designed for comfort and play.",
  kid_name_1: "Organic Cotton Baby Blanket",
  kid_desc_1: "Soft and breathable for delicate skin",
  kid_name_2: "Muslin Swaddle Set",
  kid_desc_2: "Lightweight and versatile",
  kid_name_3: "Crib Sheet - Sage",
  kid_desc_3: "Fits standard crib mattresses",
  kid_name_4: "Hooded Towel",
  kid_desc_4: "Ultra-absorbent and cozy",
  catalogSubtitle: "Explore our collection of sustainable home textiles, handcrafted with care and designed for modern living.",
  catFilterAll: "All Products",
  catFilterTableLinen: "Table Linen",
  catFilterKitchen: "Kitchen",
  catFilterThrows: "Throws & Blankets",
  catFilterBeach: "Beach",
  catFilterBags: "Bags",
  privacyTitle: "Privacy Policy",
  privacyLastUpdated: "Last updated:",
  privacyIntroTitle: "1. Introduction",
  privacyIntroText: "Welcome to Terralume Living. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
  privacyDataTitle: "2. Data We Collect",
  privacyDataText: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, and Marketing and Communications Data.",
  privacyUseTitle: "3. How We Use Your Data",
  privacyUseText: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. Where we need to comply with a legal or regulatory obligation.",
  privacySecurityTitle: "4. Data Security",
  privacySecurityText: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.",
  imprintTitle: "Legal Notice (Imprint)",
  imprintCompanyTitle: "Company Information",
  imprintCompanyText: "Terralume Living GmbH<br />123 Design Street<br />Creative City, CC 12345<br />Country",
  imprintContactTitle: "Contact",
  imprintContactText: "Phone: +1 (555) 123-4567<br />Email: hello@Terralume.com",
  imprintRepresentedTitle: "Represented by",
  imprintRepresentedText: "Jane Doe, CEO",
  imprintRegisterTitle: "Register Entry",
  imprintRegisterText: "Entry in the Commercial Register.<br />Registering Court: Local Court of Creative City<br />Registration Number: HRB 12345",
  imprintVatTitle: "VAT ID",
  imprintVatText: "Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />DE 123 456 789",
  imprintDisputeTitle: "Dispute Resolution",
  imprintDisputeText: "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr.<br />Please find our email in the impressum/legal notice.<br />We do not take part in online dispute resolutions at consumer arbitration boards.",
  termsTitle: "Terms of Service",
  termsLastUpdated: "Last updated:",
  termsIntroTitle: "1. Introduction",
  termsIntroText: "Welcome to Terralume Living. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
  termsUseTitle: "2. Use License",
  termsUseText: "Permission is granted to temporarily download one copy of the materials (information or software) on Terralume Living's website for personal, non-commercial transitory viewing only.",
  termsDisclaimerTitle: "3. Disclaimer",
  termsDisclaimerText: "The materials on Terralume Living's website are provided on an 'as is' basis. Terralume Living makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  termsLimitationsTitle: "4. Limitations",
  termsLimitationsText: "In no event shall Terralume Living or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Terralume Living's website."
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
  bestSellersTitle: "Essentials",
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
  navHome: "Wohnen",
  navShop: "Shop",
  navAbout: "Philosophie",
  navCatalog: "Kollektion",
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
  navKids: "Kleine Welt",
  navBestSellers: "Essentials",
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
  kidsHeroTitle: "Terralume kleine Welt",
  kidsHeroSubtitle: "Sanft zur Haut, freundlich zum Planeten. Bio-Textilien für Ihre Kleinen.",
  kidsCollectionTitle: "Kleine Welt",
  kidsCollectionSubtitle: "Durchdachtes Design für Komfort und Spiel.",
  kid_name_1: "Bio-Baumwolle Babydecke",
  kid_desc_1: "Weich und atmungsaktiv für zarte Haut",
  kid_name_2: "Musselin-Pucktücher Set",
  kid_desc_2: "Leicht und vielseitig",
  kid_name_3: "Spannbettlaken - Salbei",
  kid_desc_3: "Passend für Standard-Kinderbetten",
  kid_name_4: "Kapuzenhandtuch",
  kid_desc_4: "Ultra-saugfähig und gemütlich",
  catalogSubtitle: "Entdecken Sie unsere Kollektion nachhaltiger Heimtextilien, sorgfältig handgefertigt und für modernes Wohnen entworfen.",
  catFilterAll: "Alle Produkte",
  catFilterTableLinen: "Tischwäsche",
  catFilterKitchen: "Küche",
  catFilterThrows: "Decken & Überwürfe",
  catFilterBeach: "Strand",
  catFilterBags: "Taschen",
  privacyTitle: "Datenschutzerklärung",
  privacyLastUpdated: "Zuletzt aktualisiert:",
  privacyIntroTitle: "1. Einführung",
  privacyIntroText: "Willkommen bei Terralume Living. Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre persönlichen Daten behandeln, wenn Sie unsere Website besuchen, und klärt Sie über Ihre Datenschutzrechte und den gesetzlichen Schutz auf.",
  privacyDataTitle: "2. Daten, die wir sammeln",
  privacyDataText: "Wir können verschiedene Arten von personenbezogenen Daten über Sie erheben, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben: Identitätsdaten, Kontaktdaten, Finanzdaten, Transaktionsdaten, technische Daten, Profildaten, Nutzungsdaten sowie Marketing- und Kommunikationsdaten.",
  privacyUseTitle: "3. Wie wir Ihre Daten verwenden",
  privacyUseText: "Wir verwenden Ihre personenbezogenen Daten nur, wenn das Gesetz es uns erlaubt. Am häufigsten verwenden wir Ihre personenbezogenen Daten in den folgenden Situationen: Wenn wir den Vertrag erfüllen müssen, den wir mit Ihnen schließen oder geschlossen haben. Wenn es für unsere berechtigten Interessen (oder die eines Dritten) notwendig ist und Ihre Interessen und Grundrechte diese Interessen nicht überwiegen. Wenn wir einer gesetzlichen oder behördlichen Verpflichtung nachkommen müssen.",
  privacySecurityTitle: "4. Datensicherheit",
  privacySecurityText: "Wir haben angemessene Sicherheitsvorkehrungen getroffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, verwendet oder auf unbefugte Weise abgerufen, verändert oder offengelegt werden.",
  imprintTitle: "Impressum",
  imprintCompanyTitle: "Angaben gemäß § 5 TMG",
  imprintCompanyText: "Terralume Living GmbH<br />123 Design Street<br />Creative City, CC 12345<br />Land",
  imprintContactTitle: "Kontakt",
  imprintContactText: "Telefon: +1 (555) 123-4567<br />E-Mail: hello@Terralume.com",
  imprintRepresentedTitle: "Vertreten durch",
  imprintRepresentedText: "Jane Doe, Geschäftsführerin",
  imprintRegisterTitle: "Registereintrag",
  imprintRegisterText: "Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Creative City<br />Registernummer: HRB 12345",
  imprintVatTitle: "Umsatzsteuer-ID",
  imprintVatText: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 123 456 789",
  imprintDisputeTitle: "Streitschlichtung",
  imprintDisputeText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  termsTitle: "Allgemeine Geschäftsbedingungen (AGB)",
  termsLastUpdated: "Zuletzt aktualisiert:",
  termsIntroTitle: "1. Einführung",
  termsIntroText: "Willkommen bei Terralume Living. Durch den Zugriff auf unsere Website erklären Sie sich mit diesen Nutzungsbedingungen sowie allen geltenden Gesetzen und Vorschriften einverstanden und stimmen zu, dass Sie für die Einhaltung aller geltenden lokalen Gesetze verantwortlich sind.",
  termsUseTitle: "2. Nutzungslizenz",
  termsUseText: "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien (Informationen oder Software) auf der Website von Terralume Living nur für den persönlichen, nicht-kommerziellen und vorübergehenden Gebrauch herunterzuladen.",
  termsDisclaimerTitle: "3. Haftungsausschluss",
  termsDisclaimerText: "Die Materialien auf der Website von Terralume Living werden 'wie besehen' bereitgestellt. Terralume Living gibt keine Garantien, weder ausdrücklich noch stillschweigend, und lehnt hiermit alle anderen Garantien ab, einschließlich, aber nicht beschränkt auf stillschweigende Garantien oder Bedingungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck oder der Nichtverletzung von geistigem Eigentum oder anderer Rechtsverletzungen.",
  termsLimitationsTitle: "4. Beschränkungen",
  termsLimitationsText: "In keinem Fall haften Terralume Living oder seine Lieferanten für Schäden (einschließlich, aber nicht beschränkt auf Schäden durch Daten- oder Gewinnverlust oder aufgrund von Betriebsunterbrechungen), die sich aus der Nutzung oder der Unmöglichkeit der Nutzung der Materialien auf der Website von Terralume Living ergeben."
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

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

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
