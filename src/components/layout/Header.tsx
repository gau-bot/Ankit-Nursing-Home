import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const PHONE_NUMBER = "+91 63714 87256";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-md border-b-transparent py-1' 
          : 'bg-white border-b-slate-200 shadow-sm py-2'
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all">
        {/* LOGO PLACEHOLDER */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 shrink-0 flex items-center justify-center rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-900/10 group-hover:shadow-md transition-shadow">
            <img src="/ankitnusringlogo.png" alt="Homenursings Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight tracking-tight text-slate-900">
              Homenursings
            </span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest sm:text-[11px]">
              By Ankit Nursing & Caretaker Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition-colors hover:text-teal-600 ${
                isActive(item.path) ? 'text-teal-600' : 'text-slate-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="hidden lg:flex items-center gap-2 rounded-full bg-teal-50 px-5 py-2.5 text-sm font-bold text-teal-700 transition-colors hover:bg-teal-100 active:bg-teal-200"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{PHONE_NUMBER}</span>
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6 text-slate-900" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6 text-slate-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-semibold ${
                  isActive(item.path)
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-slate-900 hover:bg-slate-50 hover:text-teal-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-base font-bold text-white transition-colors hover:bg-teal-700"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call Now: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
