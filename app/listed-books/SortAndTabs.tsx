'use client';

import { BooksContext } from "@/Context/BooksContext";
import { useContext } from "react";


export default function SortAndTabs() {
  const {tab, setTab} = useContext(BooksContext)

  const handleTab = (tabType:string) => {
    setTab(tabType)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <select defaultValue="Sort By" className="select">
          <option disabled={true}>Sort By</option>
          <option>Rating</option>
          <option>Number of Pages</option>
          <option>Published Year</option>
        </select>
      </div>

      <div role="tablist" className="tabs tabs-lift">
        <a onClick={() => handleTab('read')} role="tab" className={`tab ${tab === 'read' ? 'tab-active' : ''} font-medium`}>Read Books</a>
        <a onClick={() => handleTab('wish')} role="tab" className={`tab ${tab === 'wish' ? 'tab-active' : ''} font-medium`}>Wish List</a>
      </div>
    </div>
  );
}