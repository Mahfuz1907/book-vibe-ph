import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          

          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight block">
              Book <span className="text-[#23BE0A]">Vibe</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Discover, organize, and keep track of your favorite reads. Your ultimate cozy bookshelf on the web.
            </p>
          </div>


          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#23BE0A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listed-books" className="text-gray-600 hover:text-[#23BE0A] transition-colors">
                  Listed Books
                </Link>
              </li>
              <li>
                <Link href="/pages-to-read" className="text-gray-600 hover:text-[#23BE0A] transition-colors">
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>


          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect With Us
            </h4>
            <p className="text-gray-600 text-sm">
              Have suggestions or book requests? Reach out anytime!
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Mahfuz1907"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#23BE0A] hover:text-white flex items-center justify-center text-gray-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://portfolio-frontend-cv.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#59C6D2] hover:text-white flex items-center justify-center text-gray-600 transition-colors duration-200"
                >
                <svg
                    className="w-5 h-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}