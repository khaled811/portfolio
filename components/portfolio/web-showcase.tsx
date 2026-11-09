'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const SCREENS = [
  {
    file: 'dashboard',
    ar: { title: 'لوحة المؤشرات', desc: 'نظرة شاملة على المشاريع والمدفوعات وتطور العملاء والخدمات.' },
    en: { title: 'Dashboard', desc: 'A full overview of projects, payments, client growth and services.' },
  },
  {
    file: 'requests-list',
    ar: { title: 'إدارة الطلبات', desc: 'قائمة الطلبات مع فلاتر بالتاريخ والحالة ونوع الخدمة.' },
    en: { title: 'Request management', desc: 'Requests list with date, status and service-type filters.' },
  },
  {
    file: 'request-details',
    ar: { title: 'تفاصيل الطلب', desc: 'مسار واضح من الاستلام إلى التعاقد والاعتماد مع المرفقات.' },
    en: { title: 'Request details', desc: 'A clear flow from intake to contract and approval, with attachments.' },
  },
  {
    file: 'projects',
    ar: { title: 'المشاريع', desc: 'متابعة جميع المشاريع ومراحلها ومبالغها المستحقة.' },
    en: { title: 'Projects', desc: 'Track every project, its stages and amounts due.' },
  },
  {
    file: 'project-details',
    ar: { title: 'تفاصيل المشروع', desc: 'مراحل المشروع والدفعات والمرفقات ومراسلة العميل عبر واتساب.' },
    en: { title: 'Project details', desc: 'Stages, payments, attachments and one-tap WhatsApp contact.' },
  },
  {
    file: 'project-installments',
    ar: { title: 'الدفعات والفواتير', desc: 'جدولة الدفعات وتتبع حالتها وتصدير الجدول بصيغة CSV.' },
    en: { title: 'Payments & invoices', desc: 'Installment scheduling, status tracking and CSV export.' },
  },
  {
    file: 'clients',
    ar: { title: 'العملاء', desc: 'قاعدة عملاء مع بحث سريع وإحصائيات لكل عميل.' },
    en: { title: 'Clients', desc: 'A client base with quick search and per-client stats.' },
  },
  {
    file: 'notifications-scoped',
    ar: { title: 'الإشعارات', desc: 'إشعارات فورية مفلترة حسب الصلاحيات.' },
    en: { title: 'Notifications', desc: 'Real-time notifications scoped by role.' },
  },
]

const TAGS = ['Laravel', 'Filament', 'REST API','Playwright', 'Tailwind CSS']

export function WebShowcase() {
  const { language } = useLanguage()
  const isAr = language === 'ar'
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const features = isAr
    ? ['لوحة تحكم كاملة للإدارة', 'تتبع الطلبات والعقود والتوقيع', 'جدولة الدفعات والفواتير', 'صلاحيات وإشعارات فورية', 'واجهة عربية RTL', 'اختبارات E2E آلية']
    : ['Complete admin dashboard', 'Requests, contracts & signing flow', 'Payment & invoice scheduling', 'Roles and real-time notifications', 'Arabic RTL interface', 'Automated E2E tests']

  const current = SCREENS[active]
  const text = isAr ? current.ar : current.en

  return (
    <section id="web" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
            <Globe className="w-4 h-4" />
            {isAr ? 'مواقع وأنظمة ويب' : 'Web & Systems'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            {isAr ? 'ثلاثي — نظام إدارة المشاريع' : 'Thulathi — Project Management System'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'لوحة تحكم وAPI متكاملة لشركة تصميم وتشطيب: من استلام الطلب وتوقيع العقد إلى جدولة الدفعات ومتابعة التنفيذ، مع تطبيق موبايل مرتبط بها.'
              : 'A complete admin dashboard and API for a design & fit-out company: from request intake and contract signing to payment scheduling and project follow-up, paired with a mobile app.'}
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Screen selector */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 snap-x [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible">
            {SCREENS.map((s, i) => (
              <button
                key={s.file}
                onClick={() => setActive(i)}
                className={`shrink-0 snap-start px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  active === i ? 'bg-primary text-primary-foreground' : 'glass hover:bg-secondary/50'
                }`}
              >
                {isAr ? s.ar.title : s.en.title}
              </button>
            ))}
          </div>

          {/* Browser frame */}
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden" dir="ltr">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/60 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <div className="ml-3 flex-1 max-w-sm mx-auto h-6 rounded-md bg-background/70 text-[11px] text-muted-foreground flex items-center justify-center font-mono truncate">
                thulathi.app/admin
              </div>
            </div>
            <div className="relative bg-white aspect-[16/10] overflow-hidden">
              {SCREENS.map((s, i) => (
                <img
                  key={s.file}
                  src={`/images/thulathi/${s.file}.webp`}
                  alt={isAr ? s.ar.title : s.en.title}
                  width={1280}
                  height={720}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                    active === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold mb-1">{text.title}</h3>
            <p className="text-muted-foreground text-sm">{text.desc}</p>
          </div>
        </div>

        {/* Features + tech */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
