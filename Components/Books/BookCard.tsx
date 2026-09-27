import { BooksPromiseTypes } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface bookType{
    book: BooksPromiseTypes
}

const BookCard = ({book}: bookType) => {
    return (
        <Link href={`/book/${book.bookId}`} className="block group">
            <div className="border border-gray-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col justify-between h-full bg-white">
                <div>
                    <div className="bg-gray-100/80 rounded-2xl py-8 px-4 flex items-center justify-center h-60 w-full mb-6">
                        <div className="relative w-32 h-44 drop-shadow-md transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                        {book.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium text-xs px-3 py-1.5 rounded-full"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-[#23BE0A] transition-colors line-clamp-1">
                        {book.bookName}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium mb-5">
                        By : {book.author}
                    </p>
            </div>

                <div>
                    <div className="border-t border-dashed border-gray-200 my-4" />
                        <div className="flex items-center justify-between text-gray-600 text-sm font-medium">
                            <span>{book.category}</span>
                            <div className="flex items-center gap-1.5">
                                <span>{book.rating.toFixed(2)}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-700"
                                >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.488-.415.87-.837.625l-4.717-2.753a.562.562 0 00-.56 0l-4.717 2.753c-.422.245-.953-.137-.837-.625l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;