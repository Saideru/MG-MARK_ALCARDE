import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Car, ShieldCheck } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Mark! I visited your MG page and would like to inquire about current inventory & promos.")}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0F1115]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-gradient-to-b from-[#0F1115]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={CONSULTANT_INFO.logoImage} 
                alt="MG Logo" 
                className="w-10 h-10 object-contain rounded-md border border-slate-700/60 bg-black/40 p-1 group-hover:border-[#E4002B] transition-colors"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl font-bold tracking-wider text-white">MG</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#E4002B] text-white">OFFICIAL</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">x {CONSULTANT_INFO.name}</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#lineup" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#E4002B]" /> 7-Car Lineup
            </a>
            <a href="#financing" className="hover:text-white transition-colors">Financing Calculator</a>
            <a href="#comparison" className="hover:text-white transition-colors">Spec Comparison</a>
            <a href="#why-mark" className="hover:text-white transition-colors">Why Mark</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${CONSULTANT_INFO.phone}`} 
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#E4002B]" />
              <span>{CONSULTANT_INFO.displayPhone}</span>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#E4002B] hover:bg-[#c00024] rounded-lg shadow-lg mg-red-border-glow transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14171D] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <a 
            href="#lineup" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            🚗 7-Car Lineup
          </a>
          <a 
            href="#financing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            🧮 Financing Calculator
          </a>
          <a 
            href="#comparison" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            📊 Spec Comparison Table
          </a>
          <a 
            href="#why-mark" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            ⭐ Why Buy From Mark
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            💬 Client Reviews
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E4002B]"
          >
            📍 Contact & Location
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#E4002B] rounded-lg shadow"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Message Mark on WhatsApp
            </a>
            <a 
              href={`tel:${CONSULTANT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-300 bg-slate-800 rounded-lg border border-slate-700"
            >
              <Phone className="w-4 h-4 text-[#E4002B]" />
              Call {CONSULTANT_INFO.displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
