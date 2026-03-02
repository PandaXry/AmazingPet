import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100/50 shadow-sm'
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-100/50'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" data-testid="nav-logo">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#DE9344] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Amazing Pet
                </div>
                <div className="text-xs text-slate-500 -mt-0.5">Australia</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/book-demo"
              data-testid="nav-book-demo-btn"
              className="bg-[#DE9344] text-white hover:bg-[#C57622] active:bg-[#AC671E] rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100"
            data-testid="mobile-menu"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-demo"
                className="block w-full bg-[#DE9344] text-white text-center rounded-full px-6 py-3 font-semibold mt-4 hover:bg-[#C57622] active:bg-[#AC671E] transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
