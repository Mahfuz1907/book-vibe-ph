import React from 'react';
import SortAndTabs from './SortAndTabs';
import ListedBookList from './ListedBooksList';

const ListedBooks = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <div className="bg-gray-100 rounded-2xl py-8 text-center">
                    <h1 className="text-3xl font-bold font-serif text-gray-900">Books</h1>
                </div>

                <SortAndTabs />

                <ListedBookList />
            </section>
        </div>
    );
};

export default ListedBooks;