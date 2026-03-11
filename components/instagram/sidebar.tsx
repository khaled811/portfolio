"use client"

import { ConversationList, type Conversation } from "./conversation-list"

interface SidebarProps {
  conversations: Conversation[]
  selectedId: string | null
  onSelect: (id: string) => void
  currentUser: {
    username: string
    avatar: string
  }
}

export function Sidebar({ conversations, selectedId, onSelect, currentUser }: SidebarProps) {
  return (
    <div className="flex flex-col h-full border-r border-[#262626]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-xl">{currentUser.username}</span>
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <button className="text-white hover:text-[#a8a8a8] transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-6 gap-2 mb-2">
        <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg">
          Primary
        </button>
        <button className="px-4 py-2 bg-[#262626] text-white text-sm font-semibold rounded-lg hover:bg-[#363636] transition-colors">
          General
        </button>
        <button className="px-4 py-2 text-[#0095f6] text-sm font-semibold">
          Requests
        </button>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        <ConversationList
          conversations={conversations}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
}
