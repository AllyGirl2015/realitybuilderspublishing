'use client';

import { motion } from 'framer-motion';
import { Mail, Send, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does the submission review process take?',
      answer: 'We typically review submissions within 4-6 weeks. Due to high volume, we can only respond to submissions that fit our current publishing focus.'
    },
    {
      question: 'Do you accept unsolicited manuscripts?',
      answer: 'Yes! We welcome unsolicited manuscripts that align with our genres. Please review our submission guidelines on the "Publish With Us" page before submitting.'
    },
    {
      question: 'What genres do you publish?',
      answer: 'We specialize in speculative fiction, including science fiction, fantasy, dystopian, and genre-bending works that push creative boundaries.'
    },
    {
      question: 'Do you offer literary agent representation?',
      answer: 'We are a publishing house, not an agency. However, we work with both agented and unagented authors.'
    },
    {
      question: 'How can I purchase your books?',
      answer: 'Our books are available through our online shop, major retailers like Amazon and Barnes & Noble, and select independent bookstores.'
    }
  ];

  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="text-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
        >
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Touch</span>
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a question, a manuscript, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400">General: alissarobbin2015@gmail.com</p>
                  <p className="text-gray-400">Submissions: alissarobbin2015@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 pb-3 last:border-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between text-left text-white hover:text-pink-400 transition-colors py-2"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-pink-400 shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-400 text-sm mt-2 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form action="https://formspree.io/f/manadbny" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="submission">Manuscript Submission</option>
                <option value="press">Press & Media</option>
                <option value="rights">Rights & Licensing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
