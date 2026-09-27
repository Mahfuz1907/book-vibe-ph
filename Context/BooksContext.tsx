'use client'

import { BooksPromiseTypes } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';


interface BooksContextTypes{
    readBooks: BooksPromiseTypes[],
    setReadBooks: Dispatch<SetStateAction<BooksPromiseTypes[]>>,
    wishList: BooksPromiseTypes[],
    setWishlist: Dispatch<SetStateAction<BooksPromiseTypes[]>>, 
    tab: string,
    setTab: Dispatch<SetStateAction<string>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>
}


export const BooksContext = createContext<BooksContextTypes>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishlist: () => {},
    tab: 'read',
    setTab: () => {},
    sortBy: 'rating',
    setSortBy: () => {}
})

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<BooksPromiseTypes[]>(() => {
        if(typeof window !== 'undefined'){
            const save = localStorage.getItem('book_read')
            return save ? JSON.parse(save) : []
        }

        return []
    })

    const [wishList, setWishlist] = useState<BooksPromiseTypes[]>(() => {
        if(typeof window !== 'undefined'){
            const save = localStorage.getItem('book_wish')
            return save ? JSON.parse(save) : []
        }

        return []
    })

    const [tab, setTab] = useState<string>('read')
    const [sortBy, setSortBy] = useState<string>('rating')

    useEffect(() => {
        localStorage.setItem('book_read', JSON.stringify(readBooks))
    }, [readBooks])

    useEffect(() => {
        localStorage.setItem('book_wish', JSON.stringify(wishList))
    }, [wishList])

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishlist,
        tab, 
        setTab,
        sortBy,
        setSortBy
    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;