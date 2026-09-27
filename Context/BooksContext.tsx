'use client'

import { BooksPromiseTypes } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';


interface BooksContextTypes{
    readBooks: BooksPromiseTypes[],
    setReadBooks: Dispatch<SetStateAction<BooksPromiseTypes[]>>,
    wishList: BooksPromiseTypes[],
    setWishlist: Dispatch<SetStateAction<BooksPromiseTypes[]>>, 
    tab: string,
    setTab: Dispatch<SetStateAction<string>>
}


export const BooksContext = createContext<BooksContextTypes>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishlist: () => {},
    tab: 'read',
    setTab: () => {}
})

const BooksProvider = ({children}: {children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState<BooksPromiseTypes[]>([])
    const [wishList, setWishlist] = useState<BooksPromiseTypes[]>([])
    const [tab, setTab] = useState<string>('read')

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishlist,
        tab, 
        setTab
    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;