'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { books, authors } from '@/lib/data';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const results = query.length > 0 ? {
    books: books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3),
    authors: authors.filter(author =>
      author.name.toLowerCase().includes(query.toLowerCase()) ||
      author.bio.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3)
  } : { books: [], authors: [] };

  const hasResults = results.books.length > 0 || results.authors.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 mx-auto max-w-2xl px-4 z-50"
          >
            <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books and authors..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Results */}
              {query.length > 0 && (
                <div className="max-h-96 overflow-y-auto p-4 space-y-6">
                  {hasResults ? (
                    <>
                      {results.books.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Books</h3>
                          <div className="space-y-2">
                            {results.books.map(book => (
                              <Link
                                key={book.id}
                                href={`/books/${book.id}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setQuery('');
                                }}
                                className="block p-3 hover:bg-white/5 rounded-lg transition-colors group"
                              >
                                <h4 className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                                  {book.title}
                                </h4>
                                <p className="text-sm text-gray-400 line-clamp-1">
                                  {book.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {results.authors.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Authors</h3>
                          <div className="space-y-2">
                            {results.authors.map(author => (
                              <Link
                                key={author.id}
                                href={`/authors/${author.id}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setQuery('');
                                }}
                                className="block p-3 hover:bg-white/5 rounded-lg transition-colors group"
                              >
                                <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                                  {author.name}
                                </h4>
                                <p className="text-sm text-gray-400 line-clamp-1">
                                  {author.bio}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-600" />
                      </div>
                      <p className="text-gray-400">No results found for "{query}"</p>
                    </div>
                  )}
                </div>
              )}

              {query.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  Start typing to search...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
