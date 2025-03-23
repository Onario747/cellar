import React from "react";

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

interface ProductCardProps {
    book: Book | null;
    onClick: () => void;
}

export const TopProductCard: React.FC<ProductCardProps> = ({ book, onClick }) => {
    if (!book) return null;

    return (
        <div className="flex py-6" onClick={onClick}>
            <div className="relative min-w-[150px] h-[190px] rounded-sm overflow-hidden">
                <img
                    src={book.imageSrc || "/img.jpeg"}
                    alt={book.title}
                    className="absolute z-999 inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="left-auto right-0 z-9 mt-[-32px] italic ml-[-65px] text-center text-white/70 text-5xl font-bold">
                {book.number}
            </div>
        </div>
    );
};

export const ProductCard: React.FC<ProductCardProps> = ({ book, onClick }) => {
    if (!book) return null;

    return (
        <div className="flex py-6" onClick={onClick}>
            <div className="relative min-w-[150px] h-[190px] rounded-sm overflow-hidden">
                <img
                    src={book.imageSrc || "/img.jpeg"}
                    alt={book.title}
                    className="absolute z-999 inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
        </div>
    );
};
