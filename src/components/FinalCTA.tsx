import React from 'react';
import { ArrowRight, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FinalCTAProps {
  onOpenVisitModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenVisitModal }) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#121110]">
      {/* Background with furniture image and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_showroom_luxury_1790774016064.jpg"
          alt="Zion Furniture Davangere Showroom Collection"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase mb-4">
          START YOUR TRANSFORMATION
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#FAF9F6] tracking-tight leading-[1.2] mb-6 text-balance">
          Ready to Refresh Your Space?
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#D6D3D1] font-light leading-relaxed mb-10 max-w-2xl text-pretty">
          Visit Zion Furniture &amp; Interior in Davangere and explore furniture that fits your style, comfort, and space.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenVisitModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] hover:bg-[#d8be97] active:bg-[#b0936b] transition-all duration-200 rounded-sm shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            Visit Our Showroom
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#FAF9F6] bg-[#1C1A17]/80 hover:bg-[#2A2724] border border-[#57534E] hover:border-[#C5A880] transition-all duration-200 rounded-sm backdrop-blur-sm cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#C5A880]" />
            Get Directions
          </a>
        </div>

        {/* Business Hours Note */}
        <p className="mt-8 text-xs text-[#A8A29E] tracking-wider uppercase">
          Open until 9:00 PM today · Hadadi Road, Davangere
        </p>
      </div>
    </section>
  );
};
