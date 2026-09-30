import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface InteriorSectionProps {
  onExploreInteriors: () => void;
}

export const InteriorSection: React.FC<InteriorSectionProps> = ({ onExploreInteriors }) => {
  return (
    <section id="interiors" className="relative py-28 lg:py-36 overflow-hidden bg-[#121110]">
      {/* Background with Dark Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/interior_design_banner_1790774080247.jpg"
          alt="Modern Home Interior Design Inspiration by Zion"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <Compass className="w-4 h-4 text-[#C5A880]" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
            DESIGN YOUR SPACE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#FAF9F6] tracking-tight leading-[1.2] mb-6 text-balance max-w-3xl">
          Beautiful Interiors Begin With Beautiful Choices
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#D6D3D1] font-light leading-relaxed mb-9 max-w-2xl text-pretty">
          From statement furniture to thoughtfully designed spaces, discover ideas that can bring comfort, personality, and elegance into your home.
        </p>

        {/* CTA */}
        <div>
          <button
            onClick={onExploreInteriors}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#141210] bg-[#C5A880] hover:bg-[#d8be97] active:bg-[#b0936b] transition-all duration-200 rounded-sm shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            Explore Interiors
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet footnote */}
        <div className="mt-8 text-xs text-[#A8A29E] tracking-wider uppercase font-light">
          Interior Consultation &amp; Furniture Pairing Available in Davangere
        </div>
      </div>
    </section>
  );
};
