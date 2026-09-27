'use client'

import { BooksContext } from '@/Context/BooksContext';
import { BooksPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ListedBookCardButton = ({book}:{book: BooksPromiseTypes}) => {
    const {tab, readBooks, setReadBooks, wishList, setWishlist} = useContext(BooksContext)

    const handleRemoveButton = (item:BooksPromiseTypes) => {
        if(tab === 'read'){
            const afterDelRead = readBooks.filter((thing) => thing.bookId !== item.bookId)
            setReadBooks(afterDelRead)
            toast.success(`${item.bookName} reading is completed successfully`)
        }else{
            const afterDelWish = wishList.filter((thing) => thing.bookId !== item.bookId)
            setWishlist(afterDelWish)
            toast.success(`${item.bookName} is removed from wish list successfully`)
        }
        
    }

    return (
        <button
        onClick={() => handleRemoveButton(book)}
         className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-medium text-sm px-5 py-2 rounded-full transition-colors duration-200">
            {
                tab === 'read' ? 'Reading Complete' : 'Remove from Wish List'
            }
        </button>
    );
};

export default ListedBookCardButton;