import React, { useState } from "react";
import { TopProductCard, ProductCard } from "./card";
import Modal from "../modal";
import MobileBookDetails from "./mobile-details";

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

const ProductSlide: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024); // lg: breakpoint

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards: Book[] = [
        { number: 1, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 2, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 3, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 4, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 5, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 6, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 7, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 8, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 9, title: "The Sustainability Codex", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 10, title: "The Agile Learner", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training1", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 11, title: "The Resilient Loop", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training2", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" },
        { number: 12, title: "Product Alchemy", imageSrc: "/img.jpeg", desc: "This is the description", category: "Training3", isbnNum: "131-2025", pageCount: 308, authorsName: "Anyawu Star" }
   
    ];

    return (
        <div className="mt-4">
            {/* Render modal on large screens and MobileBookDetails on smaller screens */}
            {isMobile ? (
                <MobileBookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
            ) : (
                <Modal book={selectedBook} isOpen={!!selectedBook} onClose={() => setSelectedBook(null)} />
            )}

            <div className="w-full max-h-fit text-white lg:px-16 px-4">
                <h2 className="text-xl font-bold mb-4">Our Top 10</h2>
                <div className="flex gap-16 overflow-auto pb-4 scrollbar-hide">
                    {cards.map((card) => (
                        <TopProductCard key={card.number} book={card} onClick={() => setSelectedBook(card)} />
                    ))}
                </div>
            </div>

            <div className="w-full max-h-fit text-white lg:px-16 px-4">
                <h2 className="text-xl font-bold mb-4">Product Knowledge</h2>
                <div className="flex gap-4 overflow-auto pb-4 scrollbar-hide">
                    {cards.map((card) => (
                        <ProductCard key={card.number} book={card} onClick={() => setSelectedBook(card)} />
                    ))}
                </div>
            </div>

            <div className="w-full max-h-fit text-white lg:px-16 px-4 scrollbar-hide">
                <h2 className="text-xl font-bold mb-4">Policy</h2>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {cards.map((card) => (
                        <ProductCard key={card.number} book={card} onClick={() => setSelectedBook(card)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSlide;
