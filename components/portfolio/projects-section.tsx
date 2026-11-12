'use client'

import { useEffect, useRef, useState } from 'react'
import { PhoneMockup } from './phone-mockup'
import { ArrowUpRight, CheckCircle, WifiOff, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showScreenshots, setShowScreenshots] = useState(false)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

 const ayamaScreenshots = [
  {
    url: '/images/welcome.webp',
    title: language === 'ar' ? 'شاشة البداية' : 'Splash Screen',
    description: language === 'ar' ? 'شاشة الترحيب مع شعار Ayama' : 'Welcome splash screen with Ayama branding',
  },
  {
    url: '/images/language-selection.webp',
    title: language === 'ar' ? 'اختيار اللغة' : 'Language Selection',
    description: language === 'ar' ? 'اختر بين العربية والإنجليزية للبدء' : 'Choose between Arabic and English to get started',
  },
  {
    url: '/images/sessions-ar.webp',
    title: language === 'ar' ? 'الجلسات (العربية)' : 'Sessions (Arabic)',
    description: language === 'ar' ? '4 جلسات تنفس مصممة خصيصاً للأطفال مع واجهة عربية' : '4 breathing sessions designed for kids with Arabic interface',
  },
  {
    url: '/images/sessions-en.webp',
    title: language === 'ar' ? 'الجلسات (الإنجليزية)' : 'Sessions (English)',
    description: language === 'ar' ? '4 جلسات تنفس مصممة خصيصاً للأطفال مع واجهة إنجليزية' : '4 breathing sessions designed for kids with English interface',
  },
  {
    url: '/images/settings-en.webp',
    title: language === 'ar' ? 'الإعدادات (الإنجليزية)' : 'Settings (English)',
    description: language === 'ar' ? 'خيارات اللغة والتعليمات ومعلومات التطبيق' : 'Language options, instructions, and app info',
  },
  {
    url: '/images/settings-ar.webp',
    title: language === 'ar' ? 'الإعدادات (العربية)' : 'Settings (Arabic)',
    description: language === 'ar' ? 'دعم كامل للعربية مع واجهة RTL' : 'Full Arabic support with RTL interface',
  },
]

const najehScreenshots = [
  {
    url: '/images/najeh-home.webp',
    title: language === 'ar' ? 'الرئيسية' : 'Home',
    description: language === 'ar' ? 'الواجهة الرئيسية' : 'Main dashboard',
  },
  {
    url: '/images/najeh-add-invoice.webp',
    title: language === 'ar' ? 'إضافة فاتورة' : 'Add Invoice',
    description: language === 'ar' ? 'إنشاء فاتورة جديدة' : 'Create invoice',
  },
  {
    url: '/images/najeh-add-edit-product.webp',
    title: language === 'ar' ? 'إضافة وتعديل منتج' : 'Add/Edit Product',
    description: language === 'ar' ? 'إدارة المنتجات' : 'Manage products',
  },
  {
    url: '/images/najeh-collection.webp',
    title: language === 'ar' ? 'التحصيل' : 'Collection',
    description: language === 'ar' ? 'تسجيل الدفعات' : 'Record payments',
  },
  {
    url: '/images/najeh-collection-schedule.webp',
    title: language === 'ar' ? 'مواعيد التحصيل' : 'Collection Schedule',
    description: language === 'ar' ? 'تنظيم المواعيد' : 'Manage schedules',
  },
  {
    url: '/images/najeh-customer-options.webp',
    title: language === 'ar' ? 'خيارات العميل' : 'Customer Options',
    description: language === 'ar' ? 'إدارة العميل' : 'Customer actions',
  },
  {
    url: '/images/najeh-customers.webp',
    title: language === 'ar' ? 'العملاء' : 'Customers',
    description: language === 'ar' ? 'قائمة العملاء' : 'Customer list',
  },
  {
    url: '/images/najeh-accounts.webp',
    title: language === 'ar' ? 'الحسابات' : 'Accounts',
    description: language === 'ar' ? 'أرصدة العملاء' : 'Balances',
  },
  {
    url: '/images/najeh-records.webp',
    title: language === 'ar' ? 'السجلات' : 'Records',
    description: language === 'ar' ? 'عرض السجلات' : 'Records history',
  },
  {
    url: '/images/najeh-reports.webp',
    title: language === 'ar' ? 'التقارير' : 'Reports',
    description: language === 'ar' ? 'تقارير المبيعات' : 'Sales reports',
  },
  {
    url: '/images/najeh-monthly-sales-report.webp',
    title: language === 'ar' ? 'تقرير شهري' : 'Monthly Report',
    description: language === 'ar' ? 'تقرير المبيعات الشهري' : 'Monthly sales report',
  },
  {
    url: '/images/najeh-returns.webp',
    title: language === 'ar' ? 'المرتجعات' : 'Returns',
    description: language === 'ar' ? 'إدارة المرتجعات' : 'Manage returns',
  },
  {
    url: '/images/najeh-slow-products.webp',
    title: language === 'ar' ? 'منتجات بطيئة' : 'Slow Products',
    description: language === 'ar' ? 'تحليل المنتجات البطيئة' : 'Slow items',
  },
  {
    url: '/images/najeh-settings.webp',
    title: language === 'ar' ? 'الإعدادات' : 'Settings',
    description: language === 'ar' ? 'إعدادات التطبيق' : 'App settings',
  },
  {
    url: '/images/najeh-add-restriction.webp',
    title: language === 'ar' ? 'إضافة قيد' : 'Add Restriction',
    description: language === 'ar' ? 'إضافة قيد جديد' : 'Add restriction',
  },
  {
    url: '/images/najeh-customer-inventory.webp',
    title: language === 'ar' ? 'مخزون العميل' : 'Customer Inventory',
    description: language === 'ar' ? 'مخزون خاص بالعميل' : 'Customer stock',
  },
  {
    url: '/images/najeh-customer-update-inventory.webp',
    title: language === 'ar' ? 'تحديث مخزون العميل' : 'Update Customer Inventory',
    description: language === 'ar' ? 'تحديث مخزون العميل' : 'Update stock',
  },
]

  const docstracScreenshots = [
  {
    url: '/images/login.webp',
    title: language === 'ar' ? 'تسجيل الدخول' : 'Login',
    description: language === 'ar' ? 'الدخول للحساب' : 'Login screen',
  },
  {
    url: '/images/signUp.webp',
    title: language === 'ar' ? 'إنشاء حساب' : 'Sign Up',
    description: language === 'ar' ? 'تسجيل حساب جديد' : 'Create account',
  },
  {
    url: '/images/available-forms.webp',
    title: language === 'ar' ? 'النماذج المتاحة' : 'Forms',
    description: language === 'ar' ? 'جميع النماذج' : 'Available forms',
  },
  {
    url: '/images/leave-form.webp',
    title: language === 'ar' ? 'طلب إجازة' : 'Leave Form',
    description: language === 'ar' ? 'نموذج الإجازة' : 'Leave request',
  },
  {
    url: '/images/resit-form.webp',
    title: language === 'ar' ? 'إعادة امتحان' : 'Resit Form',
    description: language === 'ar' ? 'طلب إعادة' : 'Exam resit',
  },
  {
    url: '/images/clash-form.webp',
    title: language === 'ar' ? 'تضارب امتحان' : 'Clash Form',
    description: language === 'ar' ? 'تضارب جدول' : 'Exam clash',
  },
  {
    url: '/images/appeal-form.webp',
    title: language === 'ar' ? 'استئناف' : 'Appeal',
    description: language === 'ar' ? 'استئناف أكاديمي' : 'Academic appeal',
  },
  {
    url: '/images/status.webp',
    title: language === 'ar' ? 'حالة الطلب' : 'Status',
    description: language === 'ar' ? 'متابعة الطلبات' : 'Track requests',
  },
  {
    url: '/images/notifications.webp',
    title: language === 'ar' ? 'الإشعارات' : 'Notifications',
    description: language === 'ar' ? 'تنبيهات فورية' : 'Notifications',
  },
]

  const isAr = language === 'ar'
  const thulathiScreenshots = [
    {
      url: '/images/thulathi-app/onboarding-1.webp',
      title: isAr ? 'اطلب خدمتك بخطوات بسيطة' : 'Request a service in simple steps',
      description: isAr ? 'شاشات تعريفية بتوضيحات مرسومة تشرح رحلة العميل من أول خطوة.' : 'Onboarding with custom illustrations that walk clients through the journey.',
    },
    {
      url: '/images/thulathi-app/onboarding-2.webp',
      title: isAr ? 'تابع التنفيذ والدفعات' : 'Follow execution and payments',
      description: isAr ? 'متابعة مراحل المشروع والدفعات أولاً بأول من التطبيق.' : 'Follow project stages and payments step by step.',
    },
    {
      url: '/images/thulathi-app/onboarding-3.webp',
      title: isAr ? 'وقّع عقدك من التطبيق' : 'Sign your contract in-app',
      description: isAr ? 'توقيع العقود ورفع الإيصالات مباشرة بدون زيارات.' : 'Sign contracts and upload receipts directly, no office visits.',
    },
    {
      url: '/images/thulathi-app/home-new.webp',
      title: isAr ? 'الرئيسية للعميل الجديد' : 'Home for new clients',
      description: isAr ? 'عرض الخدمات وأعمال الشركة وخطوات العمل بوضوح.' : 'Services, past work and how it works, laid out clearly.',
    },
    {
      url: '/images/thulathi-app/home-active.webp',
      title: isAr ? 'الرئيسية مع مشروع جارٍ' : 'Home with an active project',
      description: isAr ? 'نسبة الإنجاز وآخر صورة من الموقع والعقود المنتظرة والإجراءات السريعة.' : 'Progress, latest site photo, pending contracts and quick actions.',
    },
  ]

  const aryafScreenshots = [
    {
      url: '/images/aryaf/login.webp',
      title: isAr ? 'تسجيل الدخول' : 'Sign in',
      description: isAr ? 'دخول برقم الهاتف وكلمة المرور، ولكل دور شاشاته وصلاحياته.' : 'Sign in with phone and password, with screens and permissions per role.',
    },
    {
      url: '/images/aryaf/dashboard.webp',
      title: isAr ? 'لوحة تحكم المدير' : 'Manager dashboard',
      description: isAr ? 'ديون السوق والعملاء، تقارير التصفية اليومية، واختصارات الإدارة.' : 'Market and client debts, daily settlement reports and management shortcuts.',
    },
    {
      url: '/images/aryaf/clients.webp',
      title: isAr ? 'العملاء والديون' : 'Clients & debts',
      description: isAr ? 'قائمة العملاء بالأرصدة والمطلوب، مع بحث وفرز بين البقالات والأفراد.' : 'Client list with balances and amounts due, searchable and split into shops and individuals.',
    },
    {
      url: '/images/aryaf/staff.webp',
      title: isAr ? 'الموظفون والصلاحيات' : 'Staff & permissions',
      description: isAr ? 'إدارة الفريق وأدواره: مدير، كاشير، كابتن توزيع، ومسؤول معرض.' : 'Manage the team and roles: admin, cashier, delivery captain and showroom manager.',
    },
    {
      url: '/images/aryaf/inventory.webp',
      title: isAr ? 'المستودع' : 'Inventory',
      description: isAr ? 'المنتجات وأسعارها والمواد الخام في مكان واحد.' : 'Products, prices and raw materials in one place.',
    },
    {
      url: '/images/aryaf/baker.webp',
      title: isAr ? 'الإنتاج اليومي (العجّان)' : 'Daily production (baker)',
      description: isAr ? 'فترات الإنتاج وخطة الإدارة والكمية المطلوبة لكل فترة.' : 'Production periods, management plan and the quantity required per period.',
    },
    {
      url: '/images/aryaf/baker-materials.webp',
      title: isAr ? 'كميات العجن والخامات' : 'Dough quantities & materials',
      description: isAr ? 'اختيار كمية الدفعة مع احتساب الخامات المسحوبة والمتوفر منها.' : 'Pick the batch size with the materials drawn and stock available calculated.',
    },
    {
      url: '/images/aryaf/cashier-close.webp',
      title: isAr ? 'التصفية وإغلاق الصندوق' : 'Daily close-out',
      description: isAr ? 'المقبوضات والمخرجات والتسويات وصافي النقد المتوقع في الدرج.' : 'Receipts, payouts and adjustments, with the expected net cash in the drawer.',
    },
    {
      url: '/images/aryaf/cashier-expenses.webp',
      title: isAr ? 'المصروفات والسلف اليومية' : 'Daily expenses & advances',
      description: isAr ? 'تسجيل المصروفات وسداد الالتزامات ومسحوبات الموظفين مع سجل يومي.' : 'Log expenses, settle obligations and staff withdrawals with a daily record.',
    },
  ]

  const projects = [
    {
      id: 4,
      title: isAr ? 'ثلاثي' : 'Thulathi',
      titleDisplay: isAr ? 'ثلاثي' : 'ثلاثي - Thulathi',
      subtitle: isAr ? 'تطبيق إدارة العقود والمشاريع' : 'Contracts & Projects Management App',
      description: isAr
        ? 'تطبيق للعملاء لطلب خدمات التصميم والتنفيذ ومتابعة مشاريعهم من الفكرة إلى التسليم: توقيع العقود، وجدولة الدفعات ورفع الإيصالات، وصور تقدّم العمل، وإشعارات فورية. مرتبط بلوحة تحكم وAPI مبنيين بـ Laravel، بواجهة عربية كاملة.'
        : 'A client app to request design & build services and follow projects from idea to handover: contract signing, payment schedules and receipt uploads, progress photos and instant notifications. Connected to a Laravel dashboard and API, with a full Arabic RTL interface.',
      tags: ['Flutter', 'REST API', 'Laravel', 'Arabic RTL'],
      color: 'from-teal-500 to-cyan-700',
      bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-100',
      icon: '/images/thulathi-icon.webp',
      offline: false,
      features: isAr
        ? ['طلب خدمة بخطوات بسيطة', 'توقيع العقود من التطبيق', 'جدولة الدفعات ورفع الإيصالات', 'متابعة مراحل المشروع بالصور', 'إشعارات فورية', 'واجهة عربية RTL كاملة']
        : ['Request a service in a few steps', 'Sign contracts in-app', 'Payment schedule & receipt upload', 'Project stages with photos', 'Instant notifications', 'Full Arabic RTL interface'],
      screenshots: thulathiScreenshots,
    },
    {
      id: 5,
      title: isAr ? 'أرياف' : 'Aryaf',
      titleDisplay: isAr ? 'أرياف' : 'أرياف - Aryaf',
      subtitle: isAr ? 'نظام إدارة المخابز' : 'Bakery Management System',
      description: isAr
        ? 'نظام متكامل لإدارة سلسلة مخابز: لوحة للمدير، وتطبيقات للكاشير والمعرض وكابتن التوزيع والعجّان، في تطبيق واحد بصلاحيات لكل دور. يغطي المبيعات والديون، والمخزون والموردين، وجدولة فترات الإنتاج، والتصفية اليومية، مع تصدير كشوفات PDF وExcel وطباعة إيصالات حرارية.'
        : 'An all-in-one system for running a bakery chain: a manager dashboard plus cashier, showroom, delivery-captain and baker roles in a single role-based app. Covers sales and debts, inventory and suppliers, production scheduling and daily settlement, with PDF/Excel statements and thermal receipt printing.',
      tags: ['Flutter', 'Firebase', 'Riverpod', 'PDF & Excel'],
      color: 'from-emerald-700 to-green-900',
      bgColor: 'bg-gradient-to-br from-orange-50 to-emerald-100',
      icon: '/images/aryaf-icon.webp',
      offline: false,
      features: isAr
        ? ['خمسة أدوار بصلاحيات منفصلة', 'التصفية اليومية واعتماد الإقفال', 'متابعة الديون وكشف حساب العميل', 'المخزون مع تنبيهات انخفاض الرصيد', 'جدولة فترات الإنتاج والإشعارات', 'تصدير PDF وExcel وإيصالات حرارية']
        : ['Five roles with separate permissions', 'Daily settlement and close approval', 'Debt tracking and client statements', 'Inventory with low-stock alerts', 'Production scheduling & notifications', 'PDF / Excel export and thermal receipts'],
      screenshots: aryafScreenshots,
    },
    {
      id: 1,
      title: language === 'ar' ? 'ناجح' : 'Najeh',
      titleDisplay: language === 'ar' ? 'ناجح' : 'ناجح - Najeh',
      subtitle: language === 'ar' ? 'تطبيق متابعة المبيعات' : 'Sales Tracking App',
      description: t('projects.najeh.description'),
      tags: ['Flutter', 'Clean Architecture', 'Hive', 'Riverpod'],
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      icon: '/images/najeh-icon.webp',
      offline: true,
      features: [
        t('projects.najeh.feature1'),
        t('projects.najeh.feature2'),
        t('projects.najeh.feature3'),
        t('projects.najeh.feature4'),
        t('projects.najeh.feature5'),
        t('projects.najeh.feature6'),
        t('projects.najeh.feature7'),
      ],
      screenshots: najehScreenshots,
    },
    {
      id: 2,
      title: 'Ayama',
      titleDisplay: 'Ayama',
      subtitle: language === 'ar' ? 'تمارين تنفس للأطفال' : 'Kids Mental Wellness & Mindfulness',
      description: t('projects.ayama.description'),
      tags: ['Flutter', 'Video Player', 'Offline Storage'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-100',
      icon: '/images/ayama-icon.webp',
      offline: true,
      features: [
        t('projects.ayama.feature1'),
        t('projects.ayama.feature2'),
        t('projects.ayama.feature3'),
        t('projects.ayama.feature4'),
        t('projects.ayama.feature5'),
        t('projects.ayama.feature6'),
      ],
      screenshots: ayamaScreenshots,
    },
    {
      id: 3,
      title: 'DocsTrac',
      titleDisplay: 'DocsTrac',
      subtitle: language === 'ar' ? 'منصة إدارة الطلبات الجامعية' : 'University Request Management',
      description: t('projects.docstrac.description'),
      tags: ['Flutter', 'Firebase', 'REST API', 'Real-time'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      icon: '/images/docstrac-icon.webp',
      offline: false,
      features: [
        t('projects.docstrac.feature1'),
        t('projects.docstrac.feature2'),
        t('projects.docstrac.feature3'),
        t('projects.docstrac.feature4'),
        t('projects.docstrac.feature5'),
        t('projects.docstrac.feature6'),
      ],
      screenshots: docstracScreenshots,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const currentProject = projects[activeIndex]
  const currentScreenshots = currentProject.screenshots || []
  const hasScreenshots = currentScreenshots.length > 0

  // Preload the next/previous screenshots while the modal is open
  useEffect(() => {
    if (!showScreenshots || currentScreenshots.length === 0) return
    const n = currentScreenshots.length
    ;[(activeScreenshot + 1) % n, (activeScreenshot - 1 + n) % n].forEach((i) => {
      const img = new window.Image()
      img.src = currentScreenshots[i].url
    })
  }, [showScreenshots, activeScreenshot, currentScreenshots])

  const handleNextScreenshot = () => {
    setActiveScreenshot((prev) => (prev + 1) % currentScreenshots.length)
  }

  const handlePrevScreenshot = () => {
    setActiveScreenshot((prev) => (prev - 1 + currentScreenshots.length) % currentScreenshots.length)
  }

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            {language === 'ar' ? 'أعمالي' : 'Portfolio'}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects carousel */}
        <div className="relative">
          {/* Project cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Phone mockup */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <PhoneMockup>
                <div
                  className={`w-full h-full ${currentProject.bgColor} flex items-center justify-center`}
                >
                  <div className="text-center p-6">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-white shadow-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={currentProject.icon || '/placeholder.svg'}
                        alt={currentProject.title}
                        width={96}
                        height={96}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-2 bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent`}
                    >
                      {currentProject.titleDisplay}
                    </h3>
                    <p className="text-sm text-gray-600">{currentProject.subtitle}</p>
                    {currentProject.offline && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <WifiOff className="w-3 h-3" />
                        {language === 'ar' ? 'يعمل أوفلاين' : 'Works Offline'}
                      </div>
                    )}
                  </div>
                </div>
              </PhoneMockup>
            </div>

            {/* Project details */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              {/* Project selector tabs */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setActiveIndex(index)
                      setActiveScreenshot(0)
                    }}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      activeIndex === index
                        ? 'bg-primary text-primary-foreground scale-105'
                        : 'glass hover:bg-secondary/50'
                    }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>

              {/* Active project info */}
              <div key={currentProject.id} className="animate-slide-up">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {currentProject.titleDisplay}
                  </h3>
                  {currentProject.offline && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
                      <WifiOff className="w-3 h-3" />
                      {t('projects.offline')}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-primary font-medium mb-4">{currentProject.subtitle}</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {currentProject.features.slice(0, 6).map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    {t('projects.techStack')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {hasScreenshots && (
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                      onClick={() => setShowScreenshots(true)}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base hover:opacity-90 transition-opacity active:scale-95"
                    >
                      {language === 'ar' ? 'شاهد التطبيق' : 'View App'}
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Modal */}
      {showScreenshots && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowScreenshots(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-background rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowScreenshots(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Screenshot container */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
              {/* Phone frame with screenshot */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-[500px]">
                  {/* Phone frame */}
                  <div className="absolute inset-0 bg-black rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-black p-3">
                      <div className="w-full h-full rounded-[32px] overflow-hidden bg-white">
                        <img
                          key={currentScreenshots[activeScreenshot].url}
                          src={currentScreenshots[activeScreenshot].url}
                          alt={currentScreenshots[activeScreenshot].title}
                          decoding="async"
                          className="w-full h-full object-cover object-top animate-in fade-in duration-300"
                        />
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl" />
                  </div>
                </div>
              </div>

              {/* Screenshot details and navigation */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  {currentScreenshots[activeScreenshot].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentScreenshots[activeScreenshot].description}
                </p>

                {/* Screenshot dots */}
                <div className="flex justify-center gap-2 mb-8">
                  {currentScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeScreenshot
                          ? 'bg-primary w-8'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrevScreenshot}
                    className="flex-1 p-3 rounded-full glass hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {language === 'ar' ? 'السابق' : 'Previous'}
                  </button>
                  <button
                    onClick={handleNextScreenshot}
                    className="flex-1 p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
