import Image from 'next/image';
import Link from 'next/link';

export interface Book {
  bookId: number | string;
  bookName: string;
  author: string;
  image: string;
  review?: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface ListedBookCardProps {
  book: Book;
}

export default function ListedBookCard({ book }: ListedBookCardProps) {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 bg-white shadow-sm">
      <div className="bg-gray-100/80 rounded-2xl py-6 px-8 flex items-center justify-center shrink-0 w-full md:w-56 h-56">
        <div className="relative w-32 h-40 drop-shadow-md">
          <Image
            src={image}
            alt={bookName}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 space-y-4 w-full">
        <div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
            {bookName}
          </h3>
          <p className="text-gray-600 text-sm font-medium">By : {author}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">Tag</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6 0 3.375 3.375 0 016 0zm6 2.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <span>Publisher: {publisher}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>Page {totalPages}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-3" />

        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#328EFF]/15 text-[#328EFF] font-normal text-sm px-4 py-2 rounded-full">
            Category: {category}
          </span>
          <span className="bg-[#FFAC33]/15 text-[#FFAC33] font-normal text-sm px-4 py-2 rounded-full">
            Rating: {rating}
          </span>
          <Link
            href={`/book/${bookId}`}
            className="bg-[#23BE0A] hover:bg-[#1fa709] text-white font-medium text-sm px-5 py-2 rounded-full transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}