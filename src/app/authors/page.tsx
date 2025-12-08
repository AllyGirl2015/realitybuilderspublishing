'use client';

import { motion } from 'framer-motion';
import { authors } from '@/lib/data';
import AuthorCard from '@/components/AuthorCard';
import { Users, BookOpen, Award, Pen } from 'lucide-react';
import Image from 'next/image';

export default function AuthorsPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 tracking-wide uppercase">
              Meet the Visionaries
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Authors</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The architects behind the worlds. Every story begins with a mind willing to challenge the impossible. 
            These are the creators who dare to dream beyond boundaries.
          </p>
        </motion.div>
      </section>

      {/* Featured Quote */}
      <section className="relative">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Pen className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
              "We don't just write stories — we engineer entire universes, one word at a time."
            </blockquote>
            <p className="text-gray-400">— The Reality Builders Collective</p>
          </motion.div>
        </div>
      </section>

      {/* Authors Grid */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">All Authors</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow ml-8" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AuthorCard author={author} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="bg-black/60 border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Join Our Authors?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We're always looking for fresh voices with bold visions. If you have a story that defies convention, 
            we want to hear it.
          </p>
          <a
            href="/publish"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Submit Your Work
          </a>
        </div>
      </section>
    </div>
  );
}
