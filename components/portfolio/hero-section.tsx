"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { t, dir } = useLanguage()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow"
          style={{
            top: "20%",
            left: dir === "rtl" ? "auto" : "20%",
            right: dir === "rtl" ? "20%" : "auto",
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-chart-2/20 rounded-full blur-[100px] animate-pulse-glow"
          style={{
            bottom: "20%",
            right: dir === "rtl" ? "auto" : "20%",
            left: dir === "rtl" ? "20%" : "auto",
            animationDelay: "1s",
            transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-rotate-slow"
          style={{ animationDuration: "30s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/10 rounded-full animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-muted-foreground">{t("hero.available")}</span>
        </div>

        {/* Main heading - Simplified and Bold */}
        <div className="space-y-6 mb-8">
          <div className="animate-slide-up" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">{t("hero.name")}</span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
              {t("hero.title")}
            </p>
          </div>
        </div>

        {/* Main value proposition */}
        <p
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero.description")}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">{t("hero.cta")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium glass hover:bg-secondary/50 transition-colors"
          >
            {t("hero.contact")}
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex justify-center gap-6 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full glass hover:bg-secondary/50 transition-all hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
