"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code2,
  Smartphone,
  Zap,
  Shield,
  Users,
  TrendingUp,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, apps: 0, downloads: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          const duration = 2000
          const steps = 60
          const interval = duration / steps
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
              years: Math.round(2 * progress),
              apps: Math.round(3 * progress),
              downloads: Math.round(100 * progress),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const whatIMakes = [
    {
      icon: Code2,
      title: language === "ar" ? "كود يدوم" : "Code That Lasts",
      description: language === "ar" ? "معمارية نظيفة تسهل الصيانة والتطوير المستقبلي" : "Clean architecture that's easy to maintain and extend",
    },
    {
      icon: Zap,
      title: language === "ar" ? "أداء حقيقي" : "Real Performance",
      description: language === "ar" ? "تطبيقات سريعة وسلسة في الاستخدام اليومي" : "Apps that feel snappy and responsive",
    },
    {
      icon: Shield,
      title: language === "ar" ? "موثوقية" : "Reliability",
      description: language === "ar" ? "تطبيقات لا تتعطل، تعمل في كل الظروف" : "Apps that don't crash, work offline when needed",
    },
    {
      icon: Users,
      title: language === "ar" ? "تجربة واضحة" : "Clear UX",
      description: language === "ar" ? "واجهات سهلة الاستخدام بدون تعقيدات" : "Interfaces that make sense to real users",
    },
  ]

  const stats = [
    { value: `${counters.years}+`, label: language === "ar" ? "سنوات خبرة" : "Years Building" },
    { value: counters.apps, label: language === "ar" ? "تطبيقات" : "Apps Shipped" },
    { value: language === "ar" ? "100%" : "100%", label: language === "ar" ? "رضا العملاء" : "Client Happy" },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            {t("about.title")}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-8">
            {t("about.subtitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Education and Experience */}
        <div
          className={`flex flex-col md:flex-row gap-6 mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex-1 glass rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("about.education")}</h3>
                <p className="text-muted-foreground">Class of 2025</p>
              </div>
            </div>
          </div>
          <div className="flex-1 glass rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t("about.experienceYears")}</h3>
                <p className="text-muted-foreground">{language === "ar" ? "بناء تطبيقات إنتاجية" : "Building production apps"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className={`grid grid-cols-3 gap-4 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What I Make - Focus on Results */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12">{language === "ar" ? "ما الذي أقدمه" : "What You Get"}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIMakes.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-2xl glass hover:bg-secondary/30 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Simple and Clear */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">{t("about.skills")}</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Flutter & Dart", desc: language === "ar" ? "تطوير التطبيقات الأساسي" : "Core development" },
              { name: "REST APIs", desc: language === "ar" ? "تكامل الخوادم والبيانات" : "Server integration" },
              { name: "Firebase", desc: language === "ar" ? "قاعدة بيانات سحابية ومراقبة" : "Cloud database & auth" },
              { name: "Riverpod & Bloc", desc: language === "ar" ? "إدارة الحالة بكفاءة" : "State management" },
              { name: "Clean Architecture", desc: language === "ar" ? "هيكل منظم وقابل للتطور" : "Scalable structure" },
              { name: "Hive & Local Storage", desc: language === "ar" ? "تخزين محلي وعمل أوفلاين" : "Offline support" },
            ].map((tech) => (
              <div key={tech.name} className="glass rounded-xl p-4 text-center">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
