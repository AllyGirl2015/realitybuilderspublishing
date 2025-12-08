import Link from 'next/link';
import { Twitter, Facebook, Instagram, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/RBP-logo.png"
                alt="Reality Builders Publishing Logo"
                className="h-12 w-auto"
              />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Reality Builders Publishing
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Crafting worlds, one story at a time. We are dedicated to bringing the most imaginative and groundbreaking stories to readers worldwide. Join us in exploring new realities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rbentertainmemtworks/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-cyan-600/20 hover:text-cyan-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link href="/authors" className="text-gray-400 hover:text-pink-400 transition-colors">Authors</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-pink-400 transition-colors">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-pink-400 transition-colors">Blog</Link></li>
              <li><Link href="/publish" className="text-gray-400 hover:text-pink-400 transition-colors">Publish With Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal & Network */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              <li><Link href="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-4">Our Network</h4>
            <div className="flex gap-4">
               {/* Placeholder Logos for Network Sites */}
               <a href="https://www.rbentertainment-works.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" title="RBEW Entertainment - Main Site">
                  <Globe className="w-5 h-5 text-cyan-400" />
               </a>
               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer" title="Reality Radio Network">
                  <Mail className="w-5 h-5 text-purple-400" />
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Reality Builders Publishing. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Developed by <span className="text-pink-400 font-medium">Emerson Rodrigues</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
