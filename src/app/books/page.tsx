import { books } from '@/lib/data';
import BookCard from '@/components/BookCard';

export default function BooksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
