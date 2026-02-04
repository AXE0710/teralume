'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-secondary/3 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-foreground mb-2">Get In Touch</h1>
          <p className="text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question about our products or need assistance? Our team is here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <a
                  href="mailto:hello@teralumeliving.com"
                  className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-sm text-muted-foreground">hello@teralumeliving.com</p>
                    <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </a>

                <a
                  href="tel:+1-555-123-4567"
                  className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Monday - Friday, 9am - 6pm EST</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Luxury Lane<br />
                      New York, NY 10001
                    </p>
                    <p className="text-xs text-muted-foreground">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Facebook', url: '#' },
                    { name: 'Instagram', url: '#' },
                    { name: 'Twitter', url: '#' },
                    { name: 'LinkedIn', url: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors font-medium text-sm"
                    >
                      {social.name.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-lg border border-border bg-card p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                    <p className="text-sm text-primary/80 mt-1">We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-status">Order Status</option>
                      <option value="shipping">Shipping Question</option>
                      <option value="return">Return or Exchange</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    We'll get back to you as soon as possible
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary/3 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Do you offer international shipping?',
                a: 'Yes, we ship worldwide! Shipping times and costs vary by location.',
              },
              {
                q: 'What is your return policy?',
                a: '30-day returns on all unworn, unwashed items with original tags attached.',
              },
              {
                q: 'Are your products sustainable?',
                a: 'Yes! All our products are made from eco-friendly, sustainable materials.',
              },
              {
                q: 'How should I care for my textiles?',
                a: 'Each product comes with detailed care instructions. Most can be gently machine washed.',
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes, we offer special pricing for large orders. Contact us for a quote.',
              },
              {
                q: 'Can I customize products?',
                a: 'We offer customization for orders over 50 units. Please reach out for details.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background">
                <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                  T
                </div>
                <span className="font-semibold">Teralume Living</span>
              </div>
              <p className="text-sm text-background/70">
                Crafting beautiful, sustainable home textiles.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Shop</h4>
              <a href="/catalog" className="text-sm text-background/70 hover:text-background transition">
                All Products
              </a>
              <a href="/catalog?category=cushions" className="text-sm text-background/70 hover:text-background transition">
                Cushions
              </a>
              <a href="/catalog?category=kitchen" className="text-sm text-background/70 hover:text-background transition">
                Kitchen Cloths
              </a>
              <a href="/catalog?category=living-room" className="text-sm text-background/70 hover:text-background transition">
                Living Room
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Company</h4>
              <a href="#" className="text-sm text-background/70 hover:text-background transition">
                About Us
              </a>
              <a href="#" className="text-sm text-background/70 hover:text-background transition">
                Sustainability
              </a>
              <a href="/contact" className="text-sm text-background/70 hover:text-background transition">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm">Legal</h4>
              <a href="#" className="text-sm text-background/70 hover:text-background transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/70 hover:text-background transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-background/70 hover:text-background transition">
                Returns
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
