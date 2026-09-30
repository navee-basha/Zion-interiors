import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenVisitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Interiors', href: '#interiors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro banner with business status & phone */}
      <aside 
        aria-label="Showroom Status and Hours"
        className="bg-[#121110] text-[#A8A29E] text-xs py-1.5 px-4 border-b border-[#292524] transition-colors relative z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#E7E5E4]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Davangere Showroom
            </span>
            <span className="hidden sm:inline text-[#78716C]">·</span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              {BUSINESS_INFO.hours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center gap-1.5 text-[#FAF9F6] hover:text-[#C5A880] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-[#78716C]">·</span>
            <span className="hidden md:inline text-[#C5A880] font-medium">
              ★ 5.0 Rating (10 Reviews)
            </span>
            <span className="hidden lg:inline text-[#78716C]">·</span>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-[#E7E5E4] hover:text-[#C5A880] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Hadadi Rd, Davangere
              <ArrowUpRight className="w-3 h-3 text-[#78716C]" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#141210] border-b border-[#292524] shadow-lg shadow-black/25 ${
          isScrolled ? 'py-3.5' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <span className="text-2xl sm:text-3xl font-serif-luxury tracking-widest text-[#FAF9F6] font-semibold uppercase group-hover:text-[#C5A880] transition-colors">
              ZION
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-sans font-medium -mt-1">
              Furniture &amp; Interior
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#E7E5E4] hover:text-[#C5A880] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVisitModal}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] hover:bg-[#d4b992] active:bg-[#b0936b] rounded-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              Visit Showroom
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenVisitModal}
              className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] rounded-sm whitespace-nowrap"
            >
              Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF9F6] hover:text-[#C5A880] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141210] border-b border-[#292524] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#FAF9F6] hover:text-[#C5A880] py-2 border-b border-[#292524]/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] rounded-sm transition-colors cursor-pointer"
              >
                Plan Showroom Visit
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="py-2.5 px-3 text-center text-xs font-medium text-[#FAF9F6] bg-[#1C1A17] border border-[#3E3832] rounded-sm hover:border-[#C5A880] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  Call
                </a>
                <a
                  href={BUSINESS_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-center text-xs font-medium text-[#FAF9F6] bg-[#1C1A17] border border-[#3E3832] rounded-sm hover:border-[#C5A880] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                  WhatsApp
                </a>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-medium tracking-wide text-[#E7E5E4] border border-[#44403C] rounded-sm hover:border-[#C5A880] transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
