'use client';

import { BooksContext } from "@/Context/BooksContext";
import { BooksPromiseTypes } from "@/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface BookActionButtonsProps {
  book: BooksPromiseTypes;
}

export default function BookActionButtons({ book }: BookActionButtonsProps) {

  const {readBooks, setReadBooks, wishList, setWishlist} = useContext(BooksContext)

  const handleRead = (item: BooksPromiseTypes) => {
    const alreadyIn = readBooks.some((thing) => thing.bookId === item.bookId)

    if(!alreadyIn){
      const afterAdd = [...readBooks, item]
      setReadBooks(afterAdd)
      toast.success(`${item.bookName} is added in read books section successfully`)
    }else{
      toast.error(`${item.bookName} is already in read books section`)
    }
  };

  const handleWishlist = (item: BooksPromiseTypes) => {
    const alreadyIn = wishList.some((thing) => thing.bookId === item.bookId)

    if(!alreadyIn){
      const afterAdd = [...wishList, item]
      setWishlist(afterAdd)
      toast.success(`${item.bookName} is added in wish list successfully`)
    }else{
      toast.error(`${item.bookName} is already in wish list`)
    }
  };

  return (
    <div className="flex items-center gap-4 pt-4">
      <button
        onClick={() => handleRead(book)}
        className="px-7 py-3 cursor-pointer rounded-xl border border-gray-300 font-bold text-gray-900 bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        Read
      </button>
      <button
        onClick={() => handleWishlist(book)}
        className="px-7 py-3 cursor-pointer rounded-xl font-bold text-white bg-[#50B1C9] hover:bg-[#439cb3] transition-colors duration-200"
      >
        Wishlist
      </button>
    </div>
  );
}