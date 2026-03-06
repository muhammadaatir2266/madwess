import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 glass mt-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-64 h-64 left-[25%] top-0 bg-gold/5 rounded-full blur-[32px]" />
      <div className="absolute w-64 h-64 right-[25%] bottom-0 bg-blue/5 rounded-full blur-[32px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/madwess-logo.png" alt="MADWESS" width={40} height={40} className="w-10 h-10" />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses with innovative solutions and exceptional service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FACC15] to-[#3B82F6] hover:opacity-90 flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)' }}
              >
                <Facebook className="w-5 h-5 text-black" strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FACC15] to-[#3B82F6] hover:opacity-90 flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)' }}
              >
                <Twitter className="w-5 h-5 text-black" strokeWidth={0} fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FACC15] to-[#3B82F6] hover:opacity-90 flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)' }}
              >
                <Instagram className="w-5 h-5 text-black" strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FACC15] to-[#3B82F6] hover:opacity-90 flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)' }}
              >
                <Linkedin className="w-5 h-5 text-black" strokeWidth={0} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white transition text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/affiliate" className="text-gray-400 hover:text-white transition text-sm">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="/our-story" className="text-gray-400 hover:text-white transition text-sm">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/support" className="text-gray-400 hover:text-white transition text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                  Privacy and Return Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-black/40"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Madwess. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/terms" className="text-gray-500 hover:text-white transition text-sm">
              Terms
            </a>
            <a href="/privacy" className="text-gray-500 hover:text-white transition text-sm">
              Privacy Policy
            </a>
            <a href="/contact" className="text-gray-500 hover:text-white transition text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
