'use client';

import { motion } from 'framer-motion';
import { Users, Target, Sparkles, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          We are more than just a publishing house. We are architects of imagination, builders of new realities, and champions of stories that dare to dream.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
        >
          <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To discover and nurture diverse voices that challenge the status quo. We believe in the power of storytelling to shape perspectives and inspire change. Our mission is to provide a platform for authors who push the boundaries of creativity.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
        >
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            A world where every story finds its reader. We envision a literary landscape that is inclusive, innovative, and boundless. We strive to be the leading publisher for the next generation of storytellers.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in 2025, Reality Builders Publishing emerged from a simple idea: that books are not just paper and ink, but portals to other worlds. What started as a small collective of sci-fi enthusiasts has grown into a premier publishing house for genre-defying fiction.
            </p>
            <p>
              We saw a gap in the industry for stories that didn't fit neatly into existing boxes. We wanted to create a home for the weird, the wonderful, and the visionary. Today, we are proud to represent a diverse roster of authors who are redefining what is possible in literature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
