import React from 'react';
import { Star, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutProps {
  onDiscoverClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Showroom Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-stone-900/10 border border-[#E7E5E4] bg-stone-100 aspect-[4/3]">
              <img
                src="/src/assets/images/about_showroom_interior_1790774035344.jpg"
                alt="Zion Furniture & Interior Showroom Setup in Davangere"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Showroom Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1C1A17]/90 backdrop-blur-md text-[#FAF9F6] p-4 rounded-sm border border-[#44403C]/40">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#C5A880]">
                    Showroom Location
                  </span>
                </div>
                <p className="text-xs font-light text-[#D6D3D1] max-w-xs">
                  Hadadi Rd, Jeevan Bhima Nagara, Davangere
                </p>
              </div>
            </div>

            {/* Subtle decorative architectural framing element */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C5A880] -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C5A880]/60 -z-10" />
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Eyebrow Heading */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
                ABOUT ZION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#1C1A17] leading-[1.2] mb-6 text-balance">
              Furniture That Makes Your House Feel Like Home
            </h2>

            {/* Core Narrative with Grounded Facts */}
            <p className="text-base text-[#57534E] font-normal leading-relaxed mb-6">
              Welcome to <strong>Zion Furniture &amp; Interior</strong>, a dedicated furniture and interior showroom located in Davangere, Karnataka. We are focused on helping local homeowners and families discover beautiful, practical, and affordable furniture crafted to bring warmth and elegance to everyday spaces.
            </p>

            <p className="text-base text-[#57534E] font-normal leading-relaxed mb-8">
              Whether you are furnishing a new apartment or refreshing your existing living room, bedroom, or dining area, our showroom brings together thoughtfully selected collections with patient, customer-focused service.
            </p>

            {/* Factual Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-[#E7E5E4]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1C1A17]">Located in Davangere</h3>
                  <p className="text-xs text-[#78716C] mt-0.5">Conveniently situated on Hadadi Road for easy showroom visits.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1C1A17]">Affordable Furniture</h3>
                  <p className="text-xs text-[#78716C] mt-0.5">Appreciated by customers for fair and accessible pricing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1C1A17]">Customer-Focused Service</h3>
                  <p className="text-xs text-[#78716C] mt-0.5">Courteous assistance to guide you in choosing what fits your space.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1C1A17] flex items-center gap-1.5">
                    5.0 Google Rating
                    <span className="flex text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                    </span>
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5">Perfect rating supported by 10 verified Google customer reviews.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#2D2A26] active:bg-[#121110] transition-colors rounded-sm shadow-sm hover:shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              >
                Discover Zion
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
