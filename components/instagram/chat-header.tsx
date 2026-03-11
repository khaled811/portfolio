"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Conversation } from "./conversation-list"

interface ChatHeaderProps {
  conversation: Conversation
}

export function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#262626]">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-11 w-11">
            <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.username} />
            <AvatarFallback className="bg-[#262626] text-white">
              {conversation.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {conversation.isOnline && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#1cd14f] border-2 border-black" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-white font-semibold text-base">{conversation.username}</span>
            {conversation.isVerified && (
              <svg className="h-3.5 w-3.5 text-[#0095f6]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            )}
          </div>
          <span className="text-[#a8a8a8] text-xs">
            {conversation.isOnline ? "Active now" : `Active ${conversation.timestamp} ago`}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-[#a8a8a8] transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <button className="text-white hover:text-[#a8a8a8] transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="text-white hover:text-[#a8a8a8] transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>
    </div>
  )
}
