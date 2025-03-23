import React, { useState } from "react";
import { ProductCard } from "../product-slide/card";
import { CommentsSection } from "./comment";

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

interface ModalProps {
    book: Book | null;
    isOpen: boolean;
    onClose: () => void;
}

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

const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);


const Modal: React.FC<ModalProps> = ({ book, isOpen, onClose }) => {
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
      <div className="fixed inset-0 z-9999999999 flex items-center justify-center p-4">
        {/* Modal overlay */}
        <div className="absolute inset-0 z-999999 backdrop-blur-sm backdrop-filter" onClick={onClose} />
  
        {/* Modal with solid background */}
        <div className="relative z-99999999 mt-6 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-[#121212] p-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-2">
            <h2 className="text-base font-medium text-white">Book Details</h2>
            <button className="text-gray-400 hover:text-white" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
  
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]">
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
    );
  };

export default Modal;
