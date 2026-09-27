import Image from 'next/image';
import React from 'react';
import BookActionButtons from './BookActionButtons';

export interface BookDetailsTypes{
    params: Promise<{ id: string }>
}

const getBooks = async() => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/Mahfuz1907/book-vibe-api@master/books.json')
    const data = await response.json()
    return data
}

const BookDetails = async({params}: BookDetailsTypes) => {
    const books = await getBooks()
    const {id} = await params
    const book = books[Number(id) - 1]
    
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 bg-gray-100/80 rounded-3xl p-12 flex items-center justify-center min-h-140">
          <div className="relative w-64 md:w-80 h-105 drop-shadow-2xl">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3">
              {book.bookName}
            </h1>
            <p className="text-gray-600 text-lg font-medium">
              By : {book.author}
            </p>
          </div>

          <div className="border-t border-gray-200" />

          <p className="text-gray-700 font-medium text-lg">{book.category}</p>

          <div className="border-t border-gray-200" />

          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900">Review : </span>
            {book.review}
          </p>

          <div className="flex items-center gap-3 py-2">
            <span className="font-bold text-gray-900 mr-2">Tag</span>
            {book.tags.map((tag:string) => (
              <span
                key={tag}
                className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium text-sm px-4 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-t border-gray-200" />

          {/* Table Details */}
          <div className="max-w-md space-y-3 text-sm md:text-base">
            <div className="grid grid-cols-2">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-2">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          <BookActionButtons bookId={book} />
        </div>

      </div>
    </section>
    );
};

export default BookDetails;