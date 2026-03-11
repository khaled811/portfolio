"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface Conversation {
  id: string
  username: string
  fullName: string
  avatar: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  unread: boolean
  isVerified?: boolean
  isActive?: boolean
}

interface ConversationListProps {
  conversations: Conversation[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function ConversationList({ conversations, selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="flex flex-col">
      {conversations.map((conversation) => (
        <button
          key={conversation.id}
          onClick={() => onSelect(conversation.id)}
          className={cn(
            "flex items-center gap-3 px-6 py-2 hover:bg-[#1a1a1a] transition-colors text-left w-full",
            selectedId === conversation.id && "bg-[#1a1a1a]"
          )}
        >
          <div className="relative flex-shrink-0">
            <Avatar className="h-14 w-14">
              <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.username} />
              <AvatarFallback className="bg-[#262626] text-white">
                {conversation.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {conversation.isOnline && (
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-[#1cd14f] border-[3px] border-black" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className={cn(
                "text-sm truncate",
                conversation.unread ? "text-white font-semibold" : "text-white"
              )}>
                {conversation.username}
              </span>
              {conversation.isVerified && (
                <svg className="h-3 w-3 text-[#0095f6] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className={cn(
                "text-sm truncate",
                conversation.unread ? "text-white font-semibold" : "text-[#a8a8a8]"
              )}>
                {conversation.lastMessage}
              </span>
              <span className="text-[#a8a8a8] text-sm flex-shrink-0">· {conversation.timestamp}</span>
            </div>
          </div>
          {conversation.unread && (
            <div className="h-2 w-2 rounded-full bg-[#0095f6] flex-shrink-0" />
          )}
        </button>
      ))}
    </div>
  )
}
