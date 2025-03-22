import React, { useState, useRef } from "react";
import { CommentsSection } from "../../modal/comment";
import { ProductCard } from "../card";

interface Book {
  number: number;
  title: string;
  imageSrc: string;
  desc: string;
  category: string;
  isbnNum: string;
  pageCount: number;
  authorsName: string;
}

export default function MobileBookDetails({ book, onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const startY = useRef(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
      const [isExpanded, setIsExpanded] = useState(false);
      if (!isOpen || !book) return null;
  
      const toggleDesc = () => {
          setIsExpanded(!isExpanded);
      }
  
      const cards: Book[] = [
          { number: 1, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: ".this is the descriptionthis is the description. this is the description.this is the descriptionthis is the description.this is the description.this is the description.this is the description.this is the description.this is the description.this is the descriptionthis is the descriptionv.this is the description.this is the description.this is the description.vvthis is the descriptionthis is the description.v.v.this is the descriptionthis is the descriptionthis is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 2, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 3, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 4, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 1, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: ".this is the descriptionthis is the description. this is the description.this is the descriptionthis is the description.this is the description.this is the description.this is the description.this is the description.this is the description.this is the descriptionthis is the descriptionv.this is the description.this is the description.this is the description.vvthis is the descriptionthis is the description.v.v.this is the descriptionthis is the descriptionthis is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 2, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 3, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 4, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 1, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: ".this is the descriptionthis is the description. this is the description.this is the descriptionthis is the description.this is the description.this is the description.this is the description.this is the description.this is the description.this is the descriptionthis is the descriptionv.this is the description.this is the description.this is the description.vvthis is the descriptionthis is the description.v.v.this is the descriptionthis is the descriptionthis is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 2, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 3, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
          { number: 4, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "this is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" }
      ];
  

  const closeDrawer = () => setIsOpen(false);

  // Handles swipe down to close
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY.current > 50) closeDrawer(); // Swipe down threshold
  };

  const comments = [
      {
      id: 1,
      avatar: "",
      text: "Thanks a lot, i was finally about to give up on using it",
      likes: 6,            
      timestamp: "03:17",
      replies: 22

      },
      {
      id: 2,
      avatar: "",
      text: "Really nice! I finally got it. You guys are amazing. I am going to give a good review",
      likes: 1,
      timestamp: "03:17",
      replies: 22
      },
  ]

  return (
    <div className="absolute inset-0 h-screen w-full flex z-9999990 justify-center items-center">
      <div
        className="fixed bottom-0 left-0 w-full h-[75vh] bg-black shadow-xl rounded-t-2xl transition-transform duration-300 translate-y-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Header with Close Icon */}
        <div className="flex justify-end items-center p-4 border-b">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="transition-all relative px-4 duration-300 overflow-y-auto max-h-[550px]">
                  <div className="relative mt-4 flex flex-row gap-4">
                    {/* Left column - Book cover and actions */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <img src={book.imageSrc} alt={book.title} className="w-full max-w-[180px] h-[200px] aspect-[3/4] rounded-md" />
                      <button className="absolute max-w-[180px] text-white py-2 px-8 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-md text-xs h-auto">
                        Read Now
                      </button>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-gray-400"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        <span className="text-gray-400">Download Size:</span>
                        <span className="text-gray-300">(4.5MB)</span>
                        </div>
        
                    </div>
          
                    {/* Right column - Book details */}
                    <div className="space-y-3">
                      <h2 className="text-lg font-medium text-white">{book.title}</h2>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        <div>
                          <div className="text-gray-400">Author's name</div>
                          <div className="text-white">{book.authorsName}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Category</div>
                          <div className="text-white">{book.category}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Page Count</div>
                          <div className="text-white">{book.pageCount}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">ISBN Number</div>
                          <div className="text-white">{book.isbnNum}</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">Description</div>
                        <p className="mt-1 text-xs text-white">
                        {isExpanded || book.desc.length <= 100
                          ? book.desc
                          : book.desc.slice(0, 100) + "... "}
                        {book.desc.length > 100 && (
                          <span
                            className="text-blue-400 cursor-pointer"
                            onClick={toggleDesc}
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </span>
                        )}
                      </p>
                    </div>
                    </div>
                  </div>
        
        
        
                  <div className="mt-4 w-3/5">
                  <CommentsSection comments={comments} totalComments={25} />
                  </div>
        
                        <div className="mt-36">
                          <h3 className="text-sm font-medium text-white">More by Anytown Star</h3>
                            <div className="flex w-full gap-4 overflow-auto pb-4 scrollbar-hide">
                                {cards.map((card) => (
                                    <ProductCard key={card.number} book={card} onClick={() => setSelectedBook(card)} />
                                ))}
                            </div>
                        </div>  
        </div>
      </div>
    </div>
  );
}
