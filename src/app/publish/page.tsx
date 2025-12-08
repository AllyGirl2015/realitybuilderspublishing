'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, FileText, Send, Sparkles } from 'lucide-react';

export default function PublishPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          Publish With <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          We are looking for stories that defy expectations. If you have a manuscript that breaks the mold, we want to read it.
        </motion.p>
      </section>

      {/* What We Are Looking For */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Sci-Fi & Fantasy',
            description: 'Space operas, high fantasy, cyberpunk, and magical realism. We love world-building that feels lived-in and authentic.',
            icon: Sparkles
          },
          {
            title: 'Speculative Fiction',
            description: 'Stories that ask "what if?" and explore the human condition through a distorted lens. Dystopian, utopian, and everything in between.',
            icon: BookOpen
          },
          {
            title: 'Genre-Bending',
            description: 'Works that refuse to be categorized. If your book is a mystery-romance-thriller set on Mars, we are interested.',
            icon: FileText
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Submission Process */}
      <section className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Submission Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Prepare', desc: 'Format your manuscript according to our guidelines.' },
            { step: '02', title: 'Submit', desc: 'Send your query letter and first 50 pages via our portal.' },
            { step: '03', title: 'Review', desc: 'Our editors will review your work. This takes 4-6 weeks.' },
            { step: '04', title: 'Response', desc: 'We will contact you with our decision and next steps.' }
          ].map((item, index) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-bold text-white/5 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Submission Guidelines</h2>
          <ul className="space-y-4">
            {[
              'Standard manuscript format (Times New Roman, 12pt, double spaced)',
              'Include a one-page synopsis',
              'Brief author bio (max 200 words)',
              'Simultaneous submissions are accepted'
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Submit?</h3>
          <p className="text-gray-300 mb-8">
            Download our submission form, fill it out, and send it to us via email. We look forward to reading your work!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submission-form.docx"
              download="reality-builders-submission-form.docx"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Submission Form</span>
            </a>
            <a 
              href="mailto:alissarobbin2015@gmail.com?subject=Manuscript Submission"
              className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send via Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
