import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100/80 rounded-3xl p-8 md:p-16 lg:p-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif">
            Books to freshen up <br className="hidden md:inline" />
            your bookshelf
          </h1>

          <div>
            <Link
              href="/listed-books"
              className="inline-block bg-[#23BE0A] hover:bg-[#1fa709] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-sm"
            >
              View The List
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 sm:w-64 md:w-72 aspect-3/4 drop-shadow-2xl rounded-3xl">
            <Image
              src="/hero_img.jpg"
              alt="Featured Book Cover"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}