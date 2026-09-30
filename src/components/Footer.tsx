import React from 'react';
import { Star, MapPin, Clock, ArrowUpRight, ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Interiors', href: '#interiors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F0E0D] text-[#A8A29E] border-t border-[#292524] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#24211E]">
          
          {/* Column 1: Brand & Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-serif-luxury tracking-widest text-[#FAF9F6] font-semibold uppercase block">
                ZION
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-sans font-medium">
                Furniture &amp; Interior
              </span>
            </div>

            <p className="text-xs text-[#A8A29E] font-light leading-relaxed max-w-sm">
              A premium local furniture and interior showroom in Davangere, Karnataka. Offering curated collections for living rooms, bedrooms, dining, and elegant home spaces with reliable customer-first service.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E7E5E4]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0</span>
              <span className="text-[#78716C]">·</span>
              <span>10 Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#A8A29E] hover:text-[#C5A880] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Visit Us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] mb-4">
              Visit Us
            </h3>
            <address className="not-italic text-xs text-[#A8A29E] leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  2, Hadadi Rd, Jeevan Bhima Nagara,<br />
                  2nd Stage, Shivakumara Swamy Nagara,<br />
                  Davangere, Karnataka 577005
                </span>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E7E5E4] hover:text-[#C5A880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E7E5E4] hover:text-[#C5A880] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsAppNumber}</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#C5A880] hover:text-[#e4cfb4] transition-colors mt-1"
                >
                  View on Google Maps
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </address>
          </div>

          {/* Column 4: Business Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] mb-4">
              Business Hours
            </h3>
            <div className="flex items-start gap-2 text-xs text-[#A8A29E]">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#FAF9F6]">
                  {BUSINESS_INFO.hours}
                </p>
                <p className="text-xs text-[#78716C] mt-1">
                  Monday to Sunday (All 7 Days)
                </p>
              </div>
            </div>

            <div className="pt-3">
              <div className="bg-[#181614] border border-[#2B2723] p-3 rounded-sm text-xs text-[#D6D3D1]">
                <span className="text-[#C5A880] font-medium block mb-0.5">Showroom Assistance</span>
                Walk-ins are welcomed at our Hadadi Road showroom anytime before 9:00 PM.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© 2026 Zion Furniture &amp; Interior. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>Designed &amp; Developed for Davangere Homes</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#181614] hover:bg-[#2B2723] text-[#A8A29E] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
