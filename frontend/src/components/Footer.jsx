import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Amazing Pet
                </div>
                <div className="text-xs text-slate-500 -mt-0.5">Australia</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              On-site microscopy imaging for breeding management and observation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                  Amazing Pet Air
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-600 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Australia</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-600 text-sm">
                <EnvelopeSimple size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@amazingpet.com.au" className="hover:text-slate-900 transition-colors">
                  contact@amazingpet.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Amazing Pet Australia. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/compliance" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
                Compliance
              </Link>
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
