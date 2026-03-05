'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If on homepage, scroll to pricing section
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#pricing');
    }
    setMobileMenuOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If on homepage, scroll to features section
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#features');
    }
    setMobileMenuOpen(false);
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If on homepage, scroll to FAQ section
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#faq');
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-xl' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push('/')}
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/madwess-logo.png"
            alt="MADWESS"
            width={40}
            height={40}
            className={`transition-all duration-300 ${scrolled ? 'w-9 h-9' : 'w-10 h-10'}`}
            priority
          />
        </motion.button>

        {/* Desktop Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {[
            { label: 'Our Story', href: '/our-story' },
            { label: 'Plans', href: '/#pricing', onClick: handlePricingClick },
            { label: 'Services', href: '/#features', onClick: handleServicesClick },
            { label: 'FAQ', href: '/#faq', onClick: handleFaqClick },
          ].map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={link.onClick}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium relative group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold-blue group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Auth Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center gap-4"
        >
          <Button
            variant="ghost"
            onClick={() => router.push('/login')}
            className="text-white hover:text-gold transition-colors"
          >
            Login
          </Button>
          <Button
            onClick={() => router.push('/signup')}
            className="bg-gradient-to-r from-[#FACC15] to-[#FACC15] hover:opacity-90 text-black font-semibold transition-all hover:scale-105"
          >
            Sign Up
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 glass"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {[
              { label: 'Our Story', href: '/our-story' },
              { label: 'Plans', href: '/#pricing', onClick: handlePricingClick },
              { label: 'Services', href: '/#features', onClick: handleServicesClick },
              { label: 'FAQ', href: '/#faq', onClick: handleFaqClick },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.onClick || (() => setMobileMenuOpen(false))}
                className="block text-gray-300 hover:text-white transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                onClick={() => {
                  router.push('/login');
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  router.push('/signup');
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
