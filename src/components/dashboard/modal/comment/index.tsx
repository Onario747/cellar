"use client"

import React, { useState } from "react"

interface Comment  {
  id: number
  avatar: string
  text: string
  timestamp?: string
  likes: number
  replies: number
}

interface CommentsSectionProps {
  comments: Comment[]
  totalComments: number
}

export function CommentsSection({ comments, totalComments }: CommentsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-full max-w-md border-1 fixed border-gray-600 text-gray-300 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={toggleExpanded}>
        <span className="text-sm font-medium">{totalComments} Comments</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Comments List */}
      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? "max-h-[500px]" : "max-h-0"}`}>
        {comments.map((comment) => (
          <div key={comment.id} className="px-4 py-3 ">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                {comment.avatar ? (
                  <img
                    src={comment.avatar || "/placeholder.svg"}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm bg-gray-600 p-2 rounded-md mb-1">{comment.text}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <button className="text-gray-400 hover:text-gray-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 11V19C7 19.5523 6.55228 20 6 20H4C3.44772 20 3 19.5523 3 19V11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 10L17.7632 5.2906C17.4331 4.81539 16.8308 4.58209 16.2496 4.6893L12.5 5.5C11.8839 5.61567 11.5 6.14309 11.5 6.77101V10L7.5 10C6.39543 10 5.5 10.8954 5.5 12V13.5C5.5 14.7759 5.97081 16.0133 6.82104 17.0008L11 21.5C11.2761 21.8231 11.7119 22 12.1667 22H16.5C18.7091 22 20.5 20.2091 20.5 18V12C20.5 11.4872 20.2124 11.0645 19.8394 10.7765L21 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <span className="text-xs text-gray-400">{comment.likes}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-300 text-xs flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 10.5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H13L7 21V17H5C3.89543 17 3 16.1046 3 15V12.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Reply
                  </button>
                  {comment.replies > 0 && (
                        <button className="text-white/50 hover:text-white text-xs flex items-center gap-1">
                          See {comment.replies} Replies
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 17L15.5 12L9.5 7V17Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      )}
                </div>
              </div>
              {comment.timestamp && <span className="text-xs text-gray-500 mt-1">{comment.timestamp}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center justify-between gap-4 rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="Say Something..."
            className="border-none bg-black outline-none p-3 rounded-md text-sm w-full text-gray-300 placeholder-gray-500"
          />
          <button className="text-gray-400 p-3 rounded-md bg-black hover:text-gray-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 2L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
