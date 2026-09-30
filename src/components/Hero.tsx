import React from 'react';
import { ArrowRight, MapPin, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenVisitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-[#121110]"
    >
      {/* Background Image with Fallback Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/src/assets/images/hero_showroom_luxury_1790774016064.jpg"
          alt="Zion Furniture & Interior Luxury Showroom in Davangere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Cinematic Gradient Overlays: 35% - 50% dark overlay per user spec */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(14,12,10,0.78) 0%, rgba(14,12,10,0.52) 55%, rgba(14,12,10,0.30) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              ZION FURNITURE &amp; INTERIOR
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-medium text-[#FAF9F6] leading-[1.15] tracking-tight mb-6 text-balance">
            Transform Your Space With Timeless Furniture &amp; Interiors
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#D6D3D1] font-light leading-relaxed mb-8 max-w-2xl text-pretty">
            Discover stylish furniture and elegant interior solutions designed to make your home more comfortable, beautiful, and uniquely yours.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] hover:bg-[#d8be97] active:bg-[#b0936b] transition-all duration-200 rounded-sm shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              Explore Our Collection
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenVisitModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF9F6] bg-[#1C1A17]/80 hover:bg-[#2A2724] border border-[#57534E]/60 hover:border-[#C5A880] transition-all duration-200 rounded-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              Visit Our Showroom
            </button>
          </div>

          {/* Trust Indicator per exact spec */}
          <div className="pt-6 border-t border-[#44403C]/50 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#A8A29E]">
            <div className="flex items-center gap-1 text-[#E7E5E4] font-medium">
              <span className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] stroke-none" />
                ))}
              </span>
              <span className="ml-1 tracking-tight text-white font-semibold">5.0</span>
              <span className="text-[#A8A29E]">Google Rating</span>
            </div>

            <span className="text-[#57534E]" aria-hidden="true">·</span>

            <span className="text-[#D6D3D1] font-medium">
              {BUSINESS_INFO.reviewsCount}+ Reviews
            </span>

            <span className="text-[#57534E]" aria-hidden="true">·</span>

            <span className="inline-flex items-center gap-1 text-[#A8A29E]">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              Davangere, Karnataka
            </span>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll hint */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-[#A8A29E]/80">
        <span className="w-6 h-[1px] bg-[#C5A880]/60" />
        <span>Hadadi Rd Showroom</span>
      </div>
    </section>
  );
};
