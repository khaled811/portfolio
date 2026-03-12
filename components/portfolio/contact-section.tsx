"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, ArrowUpRight, Clock, CheckCircle, Phone, MessageCircle } from "lucide-react"
import { useLanguage, CONTACT_INFO } from "@/lib/language-context"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Open WhatsApp with the message
    const message = `Name: ${formState.name}%0AEmail: ${formState.email}%0AMessage: ${formState.message}`
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank")
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/khaled811" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/khaled-essam-09230a298" },
    { name: "WhatsApp", href: `https://wa.me/${CONTACT_INFO.whatsapp}` },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 sm:mb-16 px-2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase">
            {language === "ar" ? "تواصل" : "Contact"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 break-words">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Info cards */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl glass hover:bg-secondary/30 transition-all duration-300 group hover:scale-[1.02] active:scale-95"
              >
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{t("contact.info.email")}</p>
                  <p className="font-semibold text-sm sm:text-base truncate">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl glass hover:bg-secondary/30 transition-all duration-300 group hover:scale-[1.02] active:scale-95"
              >
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{t("contact.info.phone")}</p>
                  <p className="font-semibold text-sm sm:text-base" dir="ltr">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl glass">
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{t("contact.info.location")}</p>
                  <p className="font-semibold text-sm sm:text-base">{t("contact.info.locationValue")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-2xl glass">
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-green-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{t("contact.info.availability")}</p>
                  <p className="font-semibold text-sm sm:text-base text-green-500">{t("contact.info.availabilityValue")}</p>
                </div>
              </div>
            </div>

            {/* Quick contact via WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-green-500 text-white font-medium hover:bg-green-600 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              {language === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>

            {/* Social links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                {language === "ar" ? "تابعني" : "Follow Me"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full glass hover:bg-secondary/30 transition-all duration-300 text-sm hover:scale-105"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 p-8 rounded-3xl glass transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === "ar" ? "تم فتح واتساب!" : "WhatsApp Opened!"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "ar"
                    ? "أكمل إرسال رسالتك في واتساب"
                    : "Complete sending your message in WhatsApp"}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder={language === "ar" ? "أسمك" : "ِname"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder={
                      language === "ar"
                        ? "أخبرني عن مشروعك..."
                        : "Tell me about your project..."
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.form.send")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
