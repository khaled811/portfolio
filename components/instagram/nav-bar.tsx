"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavBarProps {
  currentUser: {
    username: string
    avatar: string
  }
}

export function NavBar({ currentUser }: NavBarProps) {
  const navItems = [
    { id: "home", icon: "home", label: "Home" },
    { id: "search", icon: "search", label: "Search" },
    { id: "explore", icon: "explore", label: "Explore" },
    { id: "reels", icon: "reels", label: "Reels" },
    { id: "messages", icon: "messages", label: "Messages", active: true },
    { id: "notifications", icon: "notifications", label: "Notifications" },
    { id: "create", icon: "create", label: "Create" },
  ]

  const renderIcon = (icon: string, active?: boolean) => {
    switch (icon) {
      case "home":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      case "search":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        )
      case "explore":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        )
      case "reels":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <path d="M7 2v20M2 12h5M17 2l-10 10M22 7l-10 10" />
          </svg>
        )
      case "messages":
        return (
          <svg className={cn("h-6 w-6", active && "fill-white")} fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        )
      case "notifications":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        )
      case "create":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <nav className="flex flex-col h-full w-[72px] xl:w-[244px] border-r border-[#262626] px-3 py-4">
      {/* Logo */}
      <div className="mb-5 px-3 py-4">
        <svg className="h-7 hidden xl:block" viewBox="0 0 175 51" fill="white">
          <path d="M17.3 48.6c-9.5 0-17.1-7.7-17.1-17.1 0-9.5 7.7-17.1 17.1-17.1 2.8 0 5.4.7 7.7 1.8l-4.8 7.4c-1-.3-2-.5-3-5-.5-5.2 4.2-9.3 9.3-9.3 3.6 0 6.7 2.1 8.2 5.1l7.8-4.4c-2.8-5.4-8.5-9.2-15.1-9.2-9.4 0-17 7.6-17 17s7.6 17 17 17c6.4 0 12-3.5 14.9-8.7l-7.5-4.6c-1.6 2.9-4.6 4.8-8.1 4.8z"/>
        </svg>
        <svg className="h-7 xl:hidden" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex items-center gap-4 px-3 py-3 rounded-lg transition-colors hover:bg-[#1a1a1a] group",
              item.active && "font-bold"
            )}
          >
            <span className="text-white group-hover:scale-105 transition-transform">
              {renderIcon(item.icon, item.active)}
            </span>
            <span className={cn(
              "text-white text-base hidden xl:block",
              item.active && "font-bold"
            )}>
              {item.label}
            </span>
            {item.id === "messages" && (
              <span className="ml-auto hidden xl:flex h-5 w-5 items-center justify-center rounded-full bg-[#ff3040] text-white text-xs font-semibold">
                3
              </span>
            )}
          </button>
        ))}

        {/* Profile */}
        <button className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors hover:bg-[#1a1a1a] group mt-auto">
          <Avatar className="h-6 w-6">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.username} />
            <AvatarFallback className="bg-[#262626] text-white text-xs">
              {currentUser.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-white text-base hidden xl:block">Profile</span>
        </button>

        {/* More */}
        <button className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors hover:bg-[#1a1a1a] group">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-white text-base hidden xl:block">More</span>
        </button>
      </div>
    </nav>
  )
}
