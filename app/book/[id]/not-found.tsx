import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-gray-100/80 rounded-3xl p-8 md:p-16 max-w-2xl w-full border border-gray-200/80 shadow-sm flex flex-col items-center">
        <div className="w-24 h-24 bg-[#23BE0A]/10 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-[#23BE0A]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>

        <span className="text-sm font-semibold tracking-wider text-[#23BE0A] uppercase mb-2">
          404 Error
        </span>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Book Not Found
        </h1>

        <p className="text-gray-600 max-w-md text-base mb-8">
          Sorry, we couldn&apos;t find the book you are looking for. It might have been removed or the link might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#23BE0A] hover:bg-[#1fa709] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/listed-books"
            className="w-full sm:w-auto bg-[#59C6D2] hover:bg-[#4cb4bf] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            View Listed Books
          </Link>
        </div>
      </div>
    </div>
  );
}