'use client';

import Link from 'next/link';
import { authors, books } from '@/lib/data';
import AuthorCard from '@/components/AuthorCard';
import BookCard from '@/components/BookCard';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredBooks = books.slice(0, 3);
  const featuredAuthors = authors.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center h-full">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.15)] mb-6 mx-auto hover:border-pink-400 transition-colors duration-300"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span className="text-sm font-semibold text-pink-300 tracking-wide uppercase">
              Forging futures through fiction
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
          >
            <span className="text-white drop-shadow-2xl">
              Reality Builders
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              Publishing
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Architects of the impossible.{' '}
            <span className="font-bold text-pink-400 border-b-2 border-pink-500/50 pb-1">
              We don&apos;t just publish books
            </span>
            {' '}— we construct universes, engineer epics, and blueprint the boundaries of believability. Every story is a new dimension waiting to unfold.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <Link href="/shop" className="group relative px-8 py-4 bg-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span>Browse Shop</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/authors" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Meet Authors</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="relative z-10">
        <div className="flex justify-between items-end mb-8 px-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="text-pink-500" /> Featured Works
          </h2>
          <Link href="/shop" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Featured Authors */}
      <section className="relative z-10">
        <div className="flex justify-between items-end mb-8 px-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Users className="text-purple-500" /> Our Authors
          </h2>
          <Link href="/authors" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAuthors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">What Readers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Chen', book: 'The Reality Builder', quote: 'A breathtaking journey that redefined what sci-fi can be. Every page felt like discovering a new dimension.' },
            { name: 'Marcus Webb', book: 'Echoes of Tomorrow', quote: 'Time travel has never felt so visceral and emotionally charged. This book haunted me for weeks.' },
            { name: 'Elena Rodriguez', book: 'Whispers in the Wind', quote: 'The atmosphere, the mystery, the slow burn—absolute perfection. I couldn\'t put it down.' }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-sm text-pink-400">Reader of {testimonial.book}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/20 rounded-3xl p-12 md:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Have a Story to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Tell?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We're always searching for the next groundbreaking voice. If you've crafted a universe that deserves to be seen, we want to hear from you.
            </p>
            <Link href="/publish" className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Submit Your Manuscript
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 pb-20">
        <div className="bg-black/40 border border-white/10 rounded-3xl p-12 text-center">
          <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get exclusive updates on new releases, author interviews, and behind-the-scenes glimpses into our worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
            <button className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
