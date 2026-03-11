import React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
})

const cairo = Cairo({ 
  subsets: ["arabic", "latin"], 
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Khaled Issam | Mobile Applications Developer",
  description:
    "Flutter developer with 2 years of experience building beautiful, performant mobile apps. خالد عصام - مطور فلاتر بخبرة سنتين",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${cairo.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
