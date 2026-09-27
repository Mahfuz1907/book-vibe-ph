'use client'

import { BooksContext } from "@/Context/BooksContext";
import { useContext } from "react";
import ListedBookCard from "./ListedBooksCard";


export default function ListedBookList() {
  const {readBooks, wishList, tab, sortBy} = useContext(BooksContext)

  const sortedReadBooks = [...readBooks].sort((a, b) => {
    if(sortBy === 'rating'){
      return b.rating - a.rating
    }
    if(sortBy === 'pages'){
      return b.totalPages - a.totalPages
    }
    if(sortBy === 'year'){
      return b.yearOfPublishing - a.yearOfPublishing
    }

    return 0
  })


  const sortedWishBooks = [...wishList].sort((a, b) => {
    if(sortBy === 'rating'){
      return b.rating - a.rating
    }
    if(sortBy === 'pages'){
      return b.totalPages - a.totalPages
    }
    if(sortBy === 'year'){
      return b.yearOfPublishing - a.yearOfPublishing
    }

    return 0
  })

  if(tab === 'read') {
    return readBooks.length === 0 ? (
      <div className="text-center py-16 text-gray-500 font-medium">
        No books found in this list.
      </div>
    ) : (
      <div className="space-y-6">
        {sortedReadBooks.map((book) => (
          <ListedBookCard key={book.bookId} book={book} />
        ))}
    </div>
    )
  }else{
    return wishList.length === 0 ? (
      <div className="text-center py-16 text-gray-500 font-medium">
        No books found in this list.
      </div>
    ) : (
      <div className="space-y-6">
        {sortedWishBooks.map((book) => (
          <ListedBookCard key={book.bookId} book={book} />
        ))}
    </div>
    )
  }
}