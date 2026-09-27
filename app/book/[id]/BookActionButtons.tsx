'use client';

interface BookActionButtonsProps {
  bookId: number | string;
}

export default function BookActionButtons({ bookId }: BookActionButtonsProps) {
  const handleRead = () => {
    console.log('Added to Read list:', bookId);
  };

  const handleWishlist = () => {
    console.log('Added to Wishlist:', bookId);
  };

  return (
    <div className="flex items-center gap-4 pt-4">
      <button
        onClick={handleRead}
        className="px-7 py-3 rounded-xl border border-gray-300 font-bold text-gray-900 bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        Read
      </button>
      <button
        onClick={handleWishlist}
        className="px-7 py-3 rounded-xl font-bold text-white bg-[#50B1C9] hover:bg-[#439cb3] transition-colors duration-200"
      >
        Wishlist
      </button>
    </div>
  );
}