'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneFrame } from './phone-frame'

export function AppShowcase() {
  const { language } = useLanguage()
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const ayamaScreenshots = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UXxppvAPcpViQ7v6D4jvUNgy4DfELY.png',
      title: language === 'ar' ? 'شاشة الجلسات الرئيسية' : 'Main Sessions Screen',
      description:
        language === 'ar'
          ? '4 جلسات تنفس مع شخصيات ملونة وديقة. كل جلسة لها مدة زمنية مختلفة.'
          : '4 breathing sessions with colorful and adorable characters. Each session has a different duration.',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XfpQFVYqiN0qTeLwg1eO6HgsEQKOKo.png',
      title: language === 'ar' ? 'واجهة الجلسة' : 'Session Interface',
      description:
        language === 'ar'
          ? 'تشغيل الجلسة مع زر التشغيل وعرض المدة الزمنية بشكل واضح.'
          : 'Session playback with play button and clear duration display.',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0MYSocsoC0XlR7iKJZMAIgsZMdh1R0.png',
      title: language === 'ar' ? 'الإعدادات' : 'Settings',
      description:
        language === 'ar'
          ? 'خيارات سهلة للغة والتعليمات ومعلومات التطبيق.'
          : 'Simple options for language, instructions, and app information.',
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iRce3W7F4QBZyW5NjngK0G8LY0bEhC.png',
      title: language === 'ar' ? 'الإعدادات بالعربية' : 'Arabic Settings',
      description:
        language === 'ar'
          ? 'دعم كامل للعربية مع واجهة مناسبة للغة العربية (RTL).'
          : 'Full Arabic support with proper RTL interface.',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % ayamaScreenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + ayamaScreenshots.length) % ayamaScreenshots.length)
  }

  return (
    <section id="showcase" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            {language === 'ar' ? 'واجهات التطبيق' : 'App Design'}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">Ayama</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تطبيق تفاعلي يساعد الأطفال على تعلم تمارين التنفس من خلال شخصيات جذابة وجلسات ممتعة'
              : 'An interactive app that helps children learn breathing exercises through engaging characters and fun sessions'}
          </p>
        </div>

        {/* Showcase content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Phone mockup */}
          <div className="flex justify-center">
            <PhoneFrame src={ayamaScreenshots[currentScreenshot].url} alt={ayamaScreenshots[currentScreenshot].title} />
          </div>

          {/* Content side */}
          <div className="space-y-8">
            {/* Screenshot info */}
            <div>
              <h3 className="text-3xl font-bold mb-2 text-primary">{ayamaScreenshots[currentScreenshot].title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {ayamaScreenshots[currentScreenshot].description}
              </p>
            </div>

            {/* Design highlights */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
                {language === 'ar' ? 'ميزات التصميم' : 'Design Highlights'}
              </h4>
              <ul className="space-y-3">
                {[
                  language === 'ar'
                    ? 'تصميم صديق للأطفال مع ألوان زاهية وشخصيات طريفة'
                    : 'Child-friendly design with vibrant colors and adorable characters',
                  language === 'ar'
                    ? '4 جلسات تنفس متنوعة لتناسب احتياجات مختلفة'
                    : '4 diverse breathing sessions for different needs',
                  language === 'ar'
                    ? 'دعم كامل للعربية والإنجليزية مع واجهات مناسبة'
                    : 'Full Arabic & English support with proper RTL/LTR',
                  language === 'ar'
                    ? 'تطبيق بدون انترنت - يعمل في أي مكان'
                    : 'Offline-first app - works anywhere',
                  language === 'ar'
                    ? 'واجهات بسيطة وسهلة الاستخدام للأطفال والآباء'
                    : 'Simple, intuitive interfaces for kids and parents',
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="space-y-3 pt-4 border-t border-secondary">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
                {language === 'ar' ? 'التقنيات' : 'Technologies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Offline Storage', 'Video Player', 'Bilingual Support'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={prevScreenshot}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {ayamaScreenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScreenshot(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentScreenshot ? 'bg-primary w-8' : 'bg-secondary'
                    }`}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextScreenshot}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <span className="text-sm text-muted-foreground ml-auto">
                {currentScreenshot + 1} / {ayamaScreenshots.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
