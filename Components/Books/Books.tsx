import React from 'react';
import BookCard from './BookCard';
import { BooksPromiseTypes } from '@/type';

const getBooks = async() => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/Mahfuz1907/book-vibe-api@master/books.json')
    const data = await response.json()
    return data
}

const Books = async() => {
    const books = await getBooks()

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-900 mb-9">
                Books
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book: BooksPromiseTypes) => (
                <BookCard key={book.bookId} book={book} />
                ))}
            </div>
    </section>
    );
};

export default Books;