import Image from 'next/image';
import Link from 'next/link';
import { getBookById, getAuthorById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Calendar, BookOpen, Star, Tag, Globe, Download, Award, DollarSign } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookPage({ params }: PageProps) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    notFound();
  }

  const author = getAuthorById(book.authorId);

  return (
    <div className="space-y-16">
      {/* Book Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-[600px] w-full md:w-[450px]">
              <Image
                src={book.coverUrl}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500/20">
                  {book.genre}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                {book.title}
              </h1>
              
              {author && (
                <Link href={`/authors/${author.id}`} className="text-2xl text-gray-300 hover:text-pink-400 transition-colors mb-8 block">
                  by <span className="font-semibold text-white">{author.name}</span>
                </Link>
              )}

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <span>{book.publishDate}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span>{book.pages} pages</span>
                </div>
              </div>

              {/* Additional Book Info */}
              {(book.language || book.rating || book.fileSize || book.edition || book.price) && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {book.language && (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{book.language}</span>
                    </div>
                  )}
                  {book.rating && (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{book.rating} stars</span>
                    </div>
                  )}
                  {book.fileSize && (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Download className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{book.fileSize}</span>
                    </div>
                  )}
                  {book.edition && (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{book.edition} Edition</span>
                    </div>
                  )}
                  {book.price && (
                    <div className="flex items-center space-x-3 text-gray-300">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-white">{book.price}</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none mb-8 text-gray-300 leading-relaxed">
                {book.longDescription || book.description}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                {book.buyUrl ? (
                  <a 
                    href={book.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20 text-lg text-center flex items-center justify-center"
                  >
                    Buy Now
                  </a>
                ) : (
                  <button disabled className="flex-1 bg-gray-600 text-gray-300 px-8 py-4 rounded-xl font-bold cursor-not-allowed text-lg">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {book.reviews && book.reviews.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Reader Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {book.reviews.map((review) => (
              <div key={review.id} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-white">{review.user}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link href="/books" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span className="ml-2">Back to Library</span>
        </Link>
      </div>
    </div>
  );
}
