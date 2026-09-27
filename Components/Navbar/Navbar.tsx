'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const fixStyle = (path:string) => {
    const isActive = (pathname === path)
    return isActive
  }


  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Book Vibe
        </Link>
        <div className="flex items-center space-x-4">
            <Link
                href={'/'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  fixStyle('/')
                    ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
            </Link>
            <Link
                href={'/listed-books'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  fixStyle('/listed-books')
                    ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Listed Books
            </Link>
            <Link
                href={'/pages-to-read'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  fixStyle('/pages-to-read')
                    ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pages to Read
            </Link>
        </div>

        <div className="flex items-center space-x-3">
          <button className="bg-[#23BE0A] hover:bg-[#1fa709] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200">
            Sign In
          </button>
          <button className="bg-[#59C6D2] hover:bg-[#4cb4bf] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}