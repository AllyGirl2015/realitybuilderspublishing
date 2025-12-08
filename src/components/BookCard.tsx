import Link from 'next/link';
import Image from 'next/image';
import { Book, getAuthorById } from '@/lib/data';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const author = getAuthorById(book.authorId);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full group">
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={book.coverUrl}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
           <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors drop-shadow-md">{book.title}</h3>
           {author && (
            <p className="text-sm text-gray-300">by {author.name}</p>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow text-sm">{book.description}</p>
        <Link
          href={`/books/${book.id}`}
          className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors text-center mt-auto font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
