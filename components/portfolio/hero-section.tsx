"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

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

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16 sm:pt-20 md:pt-24">
        {/* AWESOME Profile Picture with Interactive Effects */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 animate-slide-up group">
          <div 
            className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${-mousePos.x * 0.5}deg)`,
              transition: "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
            }}
          >
            {/* Multiple animated rings */}
            <div className="absolute inset-0 rounded-full animate-rotate-slow border-2 border-transparent border-t-primary border-r-primary/50 blur-sm" 
              style={{ animationDuration: "4s" }} />
            <div className="absolute inset-[-4px] rounded-full animate-rotate-slow border border-transparent border-t-chart-2/40 border-r-primary/20"
              style={{ animationDuration: "6s", animationDirection: "reverse" }} />
            
            {/* Glowing gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-chart-2/30 rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner glow layer */}
            <div className="absolute inset-3 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
            
            {/* Profile image with frame */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_40px_rgba(var(--primary),0.3)] bg-background">
              <Image
                src="/khaled-profile.jpg"
                alt="Khaled Essam"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
              />
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
            </div>

            {/* Advanced Floating Particles with Glow & Trails */}
            {/* Large particles */}
            {[0, 1, 2, 3].map((i) => (
              <div key={`large-${i}`}>
                {/* Glow halo */}
                <div
                  className="absolute w-4 h-4 bg-primary rounded-full blur-sm animate-float"
                  style={{
                    top: `${15 + Math.sin(i * Math.PI / 2) * 35}%`,
                    left: `${50 + Math.cos(i * Math.PI / 2) * 35}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "6s",
                    opacity: 0.15,
                    filter: "blur(8px)",
                  }}
                />
                {/* Main particle */}
                <div
                  className="absolute w-2.5 h-2.5 bg-primary rounded-full animate-float shadow-lg shadow-primary/60"
                  style={{
                    top: `${15 + Math.sin(i * Math.PI / 2) * 35}%`,
                    left: `${50 + Math.cos(i * Math.PI / 2) * 35}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: "6s",
                    opacity: 0.7,
                    boxShadow: "0 0 12px rgba(var(--primary), 0.8), 0 0 24px rgba(var(--primary), 0.4)",
                  }}
                />
              </div>
            ))}

            {/* Small accent particles with different orbit */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={`small-${i}`}
                className="absolute w-1.5 h-1.5 bg-chart-2 rounded-full animate-float"
                style={{
                  top: `${35 + Math.sin(i * Math.PI / 2 + Math.PI / 4) * 25}%`,
                  left: `${50 + Math.cos(i * Math.PI / 2 + Math.PI / 4) * 25}%`,
                  animationDelay: `${i * 0.25 + 1}s`,
                  animationDuration: "8s",
                  opacity: 0.5,
                  filter: "drop-shadow(0 0 6px rgba(var(--chart-2), 0.6))",
                }}
              />
            ))}

            {/* Bottom accent bar with glow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-sm shadow-lg shadow-primary/50" />
          </div>
        </div>

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight break-words">
              <span className="block text-foreground">{t("hero.name")}</span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-muted-foreground">
              {t("hero.title")}
            </p>
          </div>
        </div>

        {/* Main value proposition */}
        <p
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up px-2"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero.description")}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 animate-slide-up w-full px-4 sm:px-0"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
          >
            <span className="relative z-10">{t("hero.cta")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium glass hover:bg-secondary/50 transition-colors active:scale-95 w-full sm:w-auto text-center"
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
            { icon: Github, href: "https://github.com/khaled811", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/khaled-essam-09230a298", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-secondary/50 transition-all hover:scale-110 active:scale-95"
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
