import Image from 'next/image';
import Link from 'next/link';
import { getAuthorById, getBooksByAuthor } from '@/lib/data';
import BookCard from '@/components/BookCard';
import { notFound } from 'next/navigation';
import { Twitter, Instagram, Globe, PenTool } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AuthorPage({ params }: PageProps) {
  const { id } = await params;
  const author = getAuthorById(id);

  if (!author) {
    notFound();
  }

  const authorBooks = getBooksByAuthor(id);

  return (
    <div className="space-y-16">
      {/* Author Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl -z-10" />
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative h-[500px] w-full md:w-[400px]">
              <Image
                src={author.imageUrl}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col">
              <div className="uppercase tracking-wide text-sm text-pink-400 font-bold mb-2">Author Profile</div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                {author.name}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {author.style?.split(',').map((tag) => (
                  <span key={tag.trim()} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/10">
                    {tag.trim()}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-8">
                <p>{author.fullBio || author.bio}</p>
              </div>

              <div className="mt-auto flex items-center space-x-6">
                {author.social?.twitter && (
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {author.social?.instagram && (
                  <a href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {author.social?.website && (
                  <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Writing Style Section */}
      {author.style && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
              <PenTool className="w-5 h-5 text-pink-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Signature Style</h3>
            <p className="text-gray-400">Known for {author.style.toLowerCase()} elements woven into complex narratives.</p>
          </div>
          {/* Add more stats or info cards here if available in data */}
        </div>
      )}

      {/* Books Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Books by {author.name}</h2>
          <div className="h-px bg-white/10 flex-grow ml-8" />
        </div>
        
        {authorBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-gray-400 text-lg">No books found for this author yet.</p>
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <Link href="/authors" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span className="ml-2">Back to Authors</span>
        </Link>
      </div>
    </div>
  );
}
