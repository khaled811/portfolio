"use client"

import { useEffect, useState } from "react"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
              scrolled ? "glass shadow-lg" : ""
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {language === "ar" ? "م" : "D"}
                </span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">
                {language === "ar" ? "خالد عصام" : "khaled Issam"}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Language dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="p-2.5 rounded-full hover:bg-secondary/50 transition-colors"
                    aria-label="Change language"
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={dir === "rtl" ? "start" : "end"}>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>
                    <span className={language === "en" ? "font-bold text-primary" : ""}>
                      English
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ar")}>
                    <span className={language === "ar" ? "font-bold text-primary" : ""}>
                      العربية
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* CTA button */}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity ms-2"
              >
                {language === "ar" ? "وظفني" : "Hire Me"}
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-24 left-6 right-6 p-6 rounded-3xl glass transition-all duration-300 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language switcher in mobile */}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-border mt-2">
              <button
                onClick={() => setLanguage("en")}
                className={`${language === "en" ? "text-primary font-bold" : "text-muted-foreground"}`}
              >
                EN
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLanguage("ar")}
                className={`${language === "ar" ? "text-primary font-bold" : "text-muted-foreground"}`}
              >
                عربي
              </button>
            </div>
            
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 bg-primary text-primary-foreground rounded-xl text-center font-medium mt-2"
            >
              {language === "ar" ? "وظفني" : "Hire Me"}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
