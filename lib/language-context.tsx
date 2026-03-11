"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Khaled Issam",
    "hero.title": "Mobile Applications Developer",
    "hero.titleShort": "Building Apps That Matter",
    "hero.subtitle": "I craft beautiful mobile experiences",
    "hero.description": "I build Flutter apps that solve real problems. Two years turning ideas into production-ready applications with clean code, solid architecture, and a focus on what actually matters—reliability and performance.",
    "hero.cta": "View My Work",
    "hero.contact": "Get In Touch",
    "hero.available": "Available for freelance",
    "hero.scroll": "Scroll to explore",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "More than writing code — I build solutions.",
    "about.description": "I focus on understanding the real needs behind every project and building solutions that work smoothly, scale well, and feel natural to use. From offline-first tools for field teams to simple apps that help people in their daily lives, I approach every project with the mindset that good technology should make life easier.",
    "about.experience": "Years Experience",
    "about.apps": "Apps Published",
    "about.downloads": "Total Downloads",
    "about.clients": "Happy Clients",
    "about.skills": "Skills & Expertise",
    "about.skill.flutter": "Flutter & Dart",
    "about.skill.architecture": "Clean Architecture",
    "about.skill.state": "Riverpod",
    "about.skill.storage": "Hive Database",
    "about.skill.api": "REST APIs",
    "about.skill.git": "Git & CI/CD",
    "about.education": "Twintech University Graduate 2025",
    "about.experienceYears": "2 Years Flutter Experience",
    
    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Apps that make a difference",
    "projects.viewStore": "View on Store",
    "projects.learnMore": "Learn More",
    "projects.offline": "Offline App",
    "projects.techStack": "Tech Stack",
    
    // Najeh
    "projects.najeh.name": "Najeh",
    "projects.najeh.nameAr": "ناجح",
    "projects.najeh.description": "A comprehensive offline sales tracking app for supermarket representatives. Built with Clean Architecture, Hive for local storage, and Riverpod for state management. Works completely without internet.",
    "projects.najeh.feature1": "Track sales by client",
    "projects.najeh.feature2": "Create invoices & receipts",
    "projects.najeh.feature3": "Manage returns",
    "projects.najeh.feature4": "View inventory",
    "projects.najeh.feature5": "Set sales targets",
    "projects.najeh.feature6": "Schedule payment collection",
    "projects.najeh.feature7": "Works offline with Hive",
    
    // Ayama
    "projects.ayama.name": "Ayama",
    "projects.ayama.description": "A therapeutic breathing app that helps children manage stress and anxiety through guided exercises. 4 immersive video sessions in Arabic & English with soothing animations. Designed for mental wellness—works entirely offline, giving children a safe, distraction-free space to practice mindfulness.",
    "projects.ayama.feature1": "4 therapeutic breathing sessions",
    "projects.ayama.feature2": "Bilingual: Arabic & English videos",
    "projects.ayama.feature3": "Child-centered design & UX",
    "projects.ayama.feature4": "100% offline—no internet needed",
    "projects.ayama.feature5": "Soothing animations & audio",
    "projects.ayama.feature6": "Designed for mental wellness",
    
    // DocsTrac
    "projects.docstrac.name": "DocsTrac",
    "projects.docstrac.description": "Digital platform for managing university student requests efficiently. Enables students to submit requests (exam re-sit, exam schedule conflicts, official leave, academic appeals), track their status, and receive approval or rejection from teachers and deans through the system instead of manual processes.",
    "projects.docstrac.feature1": "Exam re-sit requests",
    "projects.docstrac.feature2": "Report exam schedule conflicts",
    "projects.docstrac.feature3": "Request official leave approval",
    "projects.docstrac.feature4": "Submit academic appeals",
    "projects.docstrac.feature5": "Teacher & Dean approval system",
    "projects.docstrac.feature6": "Real-time request status tracking",
    
    // Contact
    "contact.title": "Let's Work Together",
    "contact.subtitle": "Have a project in mind? Let's create something amazing.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Yemen",
    "contact.info.availability": "Availability",
    "contact.info.availabilityValue": "Open for projects",
    
    // Footer

  },
  ar: {
    // Navigation
    "nav.about": "عني",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    
    // Hero
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "خالد عصام",
    "hero.title": "مطور تطبيقات موبايل",
    "hero.titleShort": "بناء تطبيقات ذات معنى",
    "hero.subtitle": "أصنع تجارب موبايل استثنائية",
    "hero.description": "مطوّر Flutter بخبرة عملية في تطوير تطبيقات موبايل جاهزة للإنتاج",
    "hero.cta": "شاهد أعمالي",
    "hero.contact": "تواصل معي",
    "hero.available": "متاح للعمل الحر",
    "hero.scroll": "اسحب للاستكشاف",
    
    // About
    "about.title": "عني",
    "about.subtitle": "أكثر من مجرد كود، إنه حل المشاكل",
    "about.description": "مطوّر Flutter من اليمن بخبرة عملية في تطوير تطبيقات موبايل. عملت على مشاريع مختلفة من الفكرة إلى التنفيذ، مع تركيز على تنظيم الكود والاستقرار وسهولة الصيانة.",
    "about.experience": "سنوات الخبرة",
    "about.apps": "تطبيقات منشورة",
    "about.downloads": "إجمالي التحميلات",
    "about.clients": "عملاء سعداء",
    "about.skills": "المهارات والخبرات",
    "about.skill.flutter": "Flutter & Dart",
    "about.skill.architecture": "Clean Architecture",
    "about.skill.state": "Riverpod",
    "about.skill.storage": "Hive Database",
    "about.skill.api": "REST APIs",
    "about.skill.git": "Git & CI/CD",
    "about.education": "خريج جامعة تونتك 2025",
    "about.experienceYears": "سنتين خبرة في Flutter",
    
    // Projects
    "projects.title": "المشاريع المميزة",
    "projects.subtitle": "تطبيقات تصنع فرقاً",
    "projects.viewStore": "عرض في المتجر",
    "projects.learnMore": "اعرف المزيد",
    "projects.offline": "تطبيق أوفلاين",
    "projects.techStack": "التقنيات المستخدمة",
    
    // Najeh
    "projects.najeh.name": "Najeh",
    "projects.najeh.nameAr": "ناجح",
    "projects.najeh.description": "تطبيق شامل لمتابعة المبيعات للمندوبين في السوبرماركتس. يعمل بدون انترنت، مبني بـ Clean Architecture و Hive للتخزين المحلي و Riverpod لإدارة الحالة.",
    "projects.najeh.feature1": "متابعة مبيعات العملاء",
    "projects.najeh.feature2": "إنشاء فواتير وسندات قبض",
    "projects.najeh.feature3": "إدارة المرتجعات",
    "projects.najeh.feature4": "عرض المخزون",
    "projects.najeh.feature5": "تحديد أهداف المبيعات",
    "projects.najeh.feature6": "جدولة مواعيد التحصيل",
    "projects.najeh.feature7": "يعمل بدون انترنت مع Hive",
    
    // Ayama
    "projects.ayama.name": "Ayama",
    "projects.ayama.description": "تطبيق علاجي للتنفس يساعد الأطفال على إدارة الإجهاد والقلق من خلال تمارين موجهة. 4 جلسات بفيديوهات سحرية بالعربية والإنجليزية مع رسوم متحركة مهدئة. مصمم لصحة الأطفال النفسية—يعمل بدون انترنت، مما يوفر مساحة آمنة وهادئة للتأمل.",
    "projects.ayama.feature1": "4 جلسات تنفس علاجية",
    "projects.ayama.feature2": "ثنائي اللغة: فيديوهات عربي وإنجليزي",
    "projects.ayama.feature3": "تصميم موجه للأطفال",
    "projects.ayama.feature4": "أوفلاين 100%—لا يحتاج انترنت",
    "projects.ayama.feature5": "رسوم وأصوات مهدئة",
    "projects.ayama.feature6": "مصمم للصحة النفسية",
    
    // DocsTrac
    "projects.docstrac.name": "DocsTrac",
    "projects.docstrac.nameAr": "DocsTrac",
    "projects.docstrac.description": "منصة رقمية لإدارة طلبات الطلاب الجامعيين بكفاءة. يمكّن الطلاب من تقديم الطلبات (إعادة امتحان، حل تضارب جدول، إجازة رسمية، استئناف أكاديمي) وتتبع حالتها وقبولها أو رفضها من قبل المعلمين والعمداء في النظام بدلاً من الإجراءات اليدوية.",
    "projects.docstrac.feature1": "تقديم طلب إعادة الامتحان",
    "projects.docstrac.feature2": "إبلاغ تضارب جدول الامتحانات",
    "projects.docstrac.feature3": "طلب إجازة رسمية",
    "projects.docstrac.feature4": "تقديم استئناف أكاديمي",
    "projects.docstrac.feature5": "نظام الموافقة من المعلمين والعمداء",
    "projects.docstrac.feature6": "تتبع حالة الطلبات في الوقت الفعلي",
    
    // Contact
    "contact.title": "لنعمل معاً",
    "contact.subtitle": "لديك مشروع في ذهنك؟ دعنا نصنع شيئاً مذهلاً.",
    "contact.form.name": "اسمك",
    "contact.form.email": "بريدك الإلكتروني",
    "contact.form.message": "رسالتك",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.sending": "جاري الإرسال...",
    "contact.form.success": "تم إرسال الرسالة بنجاح!",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.location": "الموقع",
    "contact.info.locationValue": "اليمن",
    "contact.info.availability": "التوفر",
    "contact.info.availabilityValue": "متاح للمشاريع",
    
    // Footer

  },
}

// Contact info constants
export const CONTACT_INFO = {
  phone: "+967771514151",
  email: "Kissam540@gmail.com",
  whatsapp: "967771514151",
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved) setLanguage(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
    // Apply font based on language
    if (language === "ar") {
      document.body.classList.add("font-arabic")
      document.body.classList.remove("font-sans")
    } else {
      document.body.classList.add("font-sans")
      document.body.classList.remove("font-arabic")
    }
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
