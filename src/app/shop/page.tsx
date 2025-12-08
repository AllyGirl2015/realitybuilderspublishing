'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ShoppingCart, Star } from 'lucide-react';
import { books, authors } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  // Generate unique genres from books
  const genres = ['all', ...Array.from(new Set(books.map(book => book.genre)))];

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let result = books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
      const matchesAuthor = selectedAuthor === 'all' || book.authorId === selectedAuthor;
      
      // Mock price filtering (since we don't have prices in data)
      const bookPrice = parseInt(book.id) * 10 + 15; // Mock price generation
      let matchesPrice = true;
      if (priceRange === 'under20') matchesPrice = bookPrice < 20;
      if (priceRange === '20-30') matchesPrice = bookPrice >= 20 && bookPrice <= 30;
      if (priceRange === 'over30') matchesPrice = bookPrice > 30;

      return matchesSearch && matchesGenre && matchesAuthor && matchesPrice;
    });

    // Sort
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, selectedGenre, selectedAuthor, priceRange, sortBy, books]);

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Shop</span>
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover your next favorite reality. Browse our collection of mind-bending stories.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-5 h-5 text-pink-400" />
          <h2 className="text-xl font-bold text-white">Filters</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Genre Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Genre
            </label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>

          {/* Author Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Author
            </label>
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            >
              <option value="all">All Authors</option>
              {authors.map(author => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            >
              <option value="all">All Prices</option>
              <option value="under20">Under $20</option>
              <option value="20-30">$20 - $30</option>
              <option value="over30">Over $30</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          Showing <span className="text-white font-semibold">{filteredBooks.length}</span> {filteredBooks.length === 1 ? 'book' : 'books'}
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredBooks.map((book, index) => {
          const author = authors.find(a => a.id === book.authorId);
          const displayPrice = book.price ? book.price.replace('$', '') : (parseInt(book.id) * 10 + 15).toString();
          const avgRating = book.rating?.toString() || (book.reviews.length > 0 
            ? (book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length).toFixed(1)
            : '0');

          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10"
            >
              {/* Book Cover */}
              <Link href={`/books/${book.id}`} className="block relative h-80 overflow-hidden">
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-pink-400">
                  ${displayPrice}
                </div>
              </Link>

              {/* Book Info */}
              <div className="p-6 space-y-3">
                <Link href={`/books/${book.id}`}>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                </Link>
                
                {author && (
                  <Link href={`/authors/${author.id}`} className="text-sm text-gray-400 hover:text-pink-400 transition-colors block">
                    by {author.name}
                  </Link>
                )}

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(parseFloat(avgRating))
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    ({book.reviews.length})
                  </span>
                </div>

                <p className="text-sm text-gray-400 line-clamp-2">
                  {book.description}
                </p>

                <div className="flex gap-2 mt-4">
                  {book.buyUrl ? (
                    <a
                      href={book.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </a>
                  ) : (
                    <button disabled className="flex-1 bg-gray-700 text-gray-400 font-bold py-3 rounded-lg cursor-not-allowed flex items-center justify-center gap-2 text-sm">
                      <ShoppingCart className="w-4 h-4" />
                      Coming Soon
                    </button>
                  )}
                  <Link
                    href={`/books/${book.id}`}
                    className="px-4 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No books found</h3>
          <p className="text-gray-400">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}
