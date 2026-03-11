"use client"

import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                {language === "ar" ? "م" : "D"}
              </span>
            </div>
            <div>
              <p className="font-semibold">{language === "ar" ? "خالد عصام" : "Khaled Issam"}</p>
              <p className="text-sm text-muted-foreground">
                {language === "ar" ? "مطور فلاتر" : "Flutter Developer"}
              </p>
            </div>
          </div>

        

        
        </div>
      </div>
    </footer>
  )
}
