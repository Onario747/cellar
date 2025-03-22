"use client";

import React, { useState, useEffect, useRef } from "react";

interface SearchResult {
  id: number;
  title: string;
  type: string;
}

interface RecommendedItem {
  id: number;
  title: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([
    { id: 1, title: "How to create an account on our website", type: "Guide" },
    { id: 2, title: "Team meeting announcement", type: "Memo" },
    { id: 3, title: "The Competitive Edge", type: "Book" },
    { id: 4, title: "Global Compliance", type: "Policy" },
    { id: 5, title: "The Governance Grid", type: "Document" },
  ]);

  const [recommendedItems, setRecommendedItems] = useState<RecommendedItem[]>([
    { id: 1, title: "The Remote Revolution" },
    { id: 2, title: "The Ethical Edge" },
    { id: 3, title: "Latest book recommendations" },
    { id: 4, title: "How to write a compelling memo" },
    { id: 5, title: "Compliance in Code" },
    { id: 6, title: "Pocket Zen" },
  ]);

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const removeSearchResult = (id: number) => {
    setSearchResults(searchResults.filter((result) => result.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-start justify-center pt-16 z-50" onClick={onClose}>
      <div
        ref={modalRef}
        className="w-full h-[90vh] max-w-2xl bg-black text-gray-300 rounded-lg overflow-hidden shadow-xl"
      >
        {/* Search Input */}
        <div className="px-4 py-3 border-b border-grey-200">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Memos, Posts and Books"
              className="w-full bg-[#353434] text-gray-300 pl-10 pr-4 py-2 rounded-md text-sm outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="px-4 py-3 flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-300">{result.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeSearchResult(result.id)}
                  className="text-gray-500 hover:text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="1 4 1 10 7 10" />
                    <polyline points="23 20 23 14 17 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.86-3" />
                    <path d="M20.49 15a9 9 0 0 1-14.86 3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Section */}
        <div className="px-4 py-3 border-t border-gray-800">
          <h3 className="text-sm font-medium mb-2">Recommended</h3>
          <div className="grid grid-cols-2 gap-2">
            {recommendedItems.map((item) => (
              <div
                key={item.id}
                className="text-xs bg-gray-800 px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
