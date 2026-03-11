"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
  isLiked?: boolean
  replyTo?: string
}

interface MessageThreadProps {
  messages: Message[]
  currentUserId: string
  partnerAvatar: string
  partnerUsername: string
}

export function MessageThread({ messages, currentUserId, partnerAvatar, partnerUsername }: MessageThreadProps) {
  return (
    <div className="flex flex-col gap-0.5 px-4 py-4">
      {messages.map((message, index) => {
        const isOwn = message.senderId === currentUserId
        const showAvatar = !isOwn && (index === messages.length - 1 || messages[index + 1]?.senderId === currentUserId)
        const isFirstInGroup = index === 0 || messages[index - 1]?.senderId !== message.senderId
        const isLastInGroup = index === messages.length - 1 || messages[index + 1]?.senderId !== message.senderId

        return (
          <div
            key={message.id}
            className={cn(
              "flex items-end gap-2",
              isOwn ? "justify-end" : "justify-start",
              isFirstInGroup && "mt-2"
            )}
          >
            {!isOwn && (
              <div className="w-7 flex-shrink-0">
                {showAvatar && (
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={partnerAvatar || "/placeholder.svg"} alt={partnerUsername} />
                    <AvatarFallback className="bg-[#262626] text-white text-xs">
                      {partnerUsername[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            )}
            <div
              className={cn(
                "max-w-[65%] px-4 py-2.5 text-sm",
                isOwn 
                  ? "bg-[#3797f0] text-white" 
                  : "bg-[#262626] text-white",
                isFirstInGroup && isLastInGroup && "rounded-[22px]",
                isFirstInGroup && !isLastInGroup && (isOwn ? "rounded-[22px] rounded-br-[6px]" : "rounded-[22px] rounded-bl-[6px]"),
                !isFirstInGroup && !isLastInGroup && (isOwn ? "rounded-[22px] rounded-r-[6px]" : "rounded-[22px] rounded-l-[6px]"),
                !isFirstInGroup && isLastInGroup && (isOwn ? "rounded-[22px] rounded-tr-[6px]" : "rounded-[22px] rounded-tl-[6px]")
              )}
            >
              {message.text}
            </div>
            {message.isLiked && (
              <div className="flex-shrink-0">
                <svg className="h-4 w-4 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
