'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: '1',
    title: 'The Art of World-Building: Crafting Believable Universes',
    excerpt: 'Discover the essential techniques that transform ordinary settings into immersive, lived-in worlds that readers cannot help but believe in.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-11-15',
    category: 'Writing Tips',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Behind the Scenes: Publishing Process Demystified',
    excerpt: 'Ever wondered what happens after you submit a manuscript? We take you through every step of our editorial journey.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-11-10',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Interview: Exploring Transformation in Fiction',
    excerpt: 'A deep dive into how character transformation drives narrative and reflects the human experience.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-11-05',
    category: 'Author Interviews',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    readTime: '12 min read'
  },
  {
    id: '4',
    title: '5 Genre-Bending Books That Redefined Fiction',
    excerpt: 'From our catalog and beyond, explore the books that dared to defy categorization and created entirely new reading experiences.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-10-28',
    category: 'Book Reviews',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop',
    readTime: '10 min read'
  },
  {
    id: '5',
    title: 'The Future of Speculative Fiction: Trends to Watch',
    excerpt: 'As we look ahead, we examine the emerging themes and styles that are shaping the next generation of speculative storytelling.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-10-20',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1200&auto=format&fit=crop',
    readTime: '7 min read'
  },
  {
    id: '6',
    title: 'Character Development: Creating Memorable Protagonists',
    excerpt: 'Learn the secrets behind crafting characters that linger in readers minds long after they have finished the last page.',
    author: 'Alissa M.R. Eldridge',
    date: '2025-10-12',
    category: 'Writing Tips',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
    readTime: '9 min read'
  }
];

const categories = ['All', 'Writing Tips', 'Author Interviews', 'Industry Insights', 'Book Reviews'];

export default function BlogPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Blog</span>
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Insights, interviews, and inspiration from the world of speculative fiction publishing.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-pink-500/50 transition-all"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group hover:border-pink-500/50 transition-all"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-80 md:h-auto">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-4 py-2 bg-pink-500 text-white text-xs font-bold rounded-full uppercase">
              Featured
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">{blogPosts[0].category}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <User className="w-4 h-4" />
                <span>{blogPosts[0].author}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link href={`/blog/${blogPosts[0].id}`} className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/10"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="text-pink-400 hover:text-pink-300 text-sm font-semibold flex items-center gap-1 transition-colors">
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
        <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Post</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and get the latest articles, author interviews, and publishing insights delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-black/40 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
          />
          <button className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
