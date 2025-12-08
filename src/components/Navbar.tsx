'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Users, BookOpen, ShoppingBag } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/RBP-logo.png"
              alt="Reality Builders Publishing Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-bold text-white tracking-wide" style={{ textShadow: '0 0 10px rgba(255, 20, 147, 0.5)' }}>
                RBP
              </div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-pink-400 font-medium">
                Reality Builders Publishing
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              About
            </Link>
            <Link href="/authors" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <Users className="w-4 h-4" />
              Authors
            </Link>
            <Link href="/shop" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <ShoppingBag className="w-4 h-4" />
              Shop
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <Link href="/publish" className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
              Publish With Us
            </Link>
            <SearchBar />
            <Link href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium text-white transition-all border border-white/10 hover:border-pink-500/50">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link href="/about" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Users className="w-5 h-5" />
              About
            </Link>
            <Link href="/authors" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Users className="w-5 h-5" />
              Authors
            </Link>
            <Link href="/shop" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingBag className="w-5 h-5" />
              Shop
            </Link>
            <Link href="/blog" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <BookOpen className="w-5 h-5" />
              Blog
            </Link>
            <Link href="/publish" className="flex items-center gap-3 px-4 py-3 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Publish With Us
            </Link>
            <Link href="/contact" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Users className="w-5 h-5" />
              Contact
            </Link>
            <div className="px-4 py-3">
              <SearchBar />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
