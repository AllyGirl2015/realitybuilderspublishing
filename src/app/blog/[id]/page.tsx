'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPostPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span className="px-4 py-1 bg-pink-500/20 text-pink-400 rounded-full">Writing Tips</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            November 23, 2025
          </span>
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Alissa M.R. Eldridge
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            8 min read
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          The Art of World-Building: Crafting Believable Universes
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          Discover the essential techniques that transform ordinary settings into immersive, lived-in worlds that readers cannot help but believe in.
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </motion.div>

      {/* Featured Image */}
      <div className="relative h-96 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
          alt="World Building"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        <p className="text-gray-300 leading-relaxed">
          World-building is the foundation upon which great speculative fiction rests. Whether you are crafting a distant galaxy, a parallel dimension, or an alternate history, the key to success lies in creating a world that feels authentic, lived-in, and internally consistent.
        </p>

        <h2 className="text-white">Start with the Big Questions</h2>
        <p className="text-gray-300 leading-relaxed">
          Before diving into the minutiae of your world, ask yourself the fundamental questions: What are the rules of this reality? How does magic or technology work? What drives the society, economy, and politics? These foundational elements will inform every detail that follows.
        </p>

        <h2 className="text-white">Less is More</h2>
        <p className="text-gray-300 leading-relaxed">
          One of the biggest mistakes new writers make is over-explaining their world. Readers do not need to know every historical event or cultural custom upfront. Reveal your world gradually through the eyes of your characters. Let the setting breathe naturally within the story.
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-6 italic text-xl text-gray-300 my-8">
          "The best world-building is invisible. It is the air your characters breathe, not the lecture they endure."
        </blockquote>

        <h2 className="text-white">Consistency is Key</h2>
        <p className="text-gray-300 leading-relaxed">
          Once you establish the rules of your world, stick to them. Inconsistencies break immersion faster than anything else. Keep detailed notes about your world systems, timelines, and character backgrounds. Refer back to them often.
        </p>

        <h2 className="text-white">Show the Mundane</h2>
        <p className="text-gray-300 leading-relaxed">
          Believable worlds have everyday details. What do people eat? How do they greet each other? What do they do for fun? These small touches make your world feel real and relatable, even if it features dragons or spaceships.
        </p>

        <h2 className="text-white">Let Culture Evolve from Environment</h2>
        <p className="text-gray-300 leading-relaxed">
          Geography, climate, and resources shape culture. A desert civilization will have different values and traditions than one built around an ocean. Think about how the physical environment influences language, religion, art, and social structure.
        </p>

        <h2 className="text-white">Final Thoughts</h2>
        <p className="text-gray-300 leading-relaxed">
          World-building is an art that requires patience, attention to detail, and a deep love for the process. The most memorable fictional universes are those where every element serves the story and enriches the reader experience. Take your time, stay curious, and do not be afraid to revise as your story evolves.
        </p>
      </motion.article>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 text-center">
        <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Want to Learn More?</h3>
        <p className="text-gray-300 mb-6">
          Explore our full collection of writing tips, author interviews, and publishing insights.
        </p>
        <Link href="/blog" className="inline-block px-8 py-3 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-colors">
          View All Articles
        </Link>
      </div>
    </div>
  );
}
