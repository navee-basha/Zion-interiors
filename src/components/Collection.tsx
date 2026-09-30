import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, Check, X, MapPin } from 'lucide-react';
import { CATEGORIES, CategoryItem } from '../data/businessData';

interface CollectionProps {
  onCategoryInquire: (category: CategoryItem) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onCategoryInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  // Prevent background page from scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (selectedCategory) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedCategory(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedCategory]);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#F4F1EB] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#8C6D46]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
              SHOWROOM CATEGORIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#1C1A17] tracking-tight mb-4 text-balance">
            Explore Our Collection
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-normal leading-relaxed text-pretty">
            Furniture designed to bring comfort, style, and character to every space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category, index) => {
            // Give first 2 or 5th an expansive rhythm if desired, or uniform clean grid
            const isFeatured = index === 0;

            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`group relative bg-[#FAF9F6] border border-[#E7E5E4] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-stone-200 ${
                    isFeatured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1C1A17] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200">
                    <ArrowUpRight className="w-4 h-4 text-[#8C6D46]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-[#1C1A17] mb-2 group-hover:text-[#8C6D46] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[#78716C] font-normal leading-relaxed mb-4">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#8C6D46]">
                    <span>View Category Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Inventory Consultation */}
        <div className="mt-12 p-6 bg-[#FAF9F6] border border-[#E7E5E4] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8C6D46]" />
            <p className="text-xs sm:text-sm text-[#57534E]">
              Categories shown represent design styles and types available for consultation and selection at our Davangere showroom.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold tracking-wider uppercase text-[#1C1A17] hover:text-[#8C6D46] whitespace-nowrap transition-colors flex items-center gap-1"
          >
            Visit Showroom on Hadadi Rd
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Category Quick Details Modal */}
      {selectedCategory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="bg-[#FAF9F6] text-[#1C1A17] rounded-sm max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#D6D3D1] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header with Back Arrow Button */}
            <div className="bg-[#1C1A17] text-[#FAF9F6] px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-[#332E29] shrink-0">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E7E5E4] hover:text-[#C5A880] transition-colors cursor-pointer py-1 px-2 -ml-2 rounded hover:bg-white/5"
                aria-label="Back to collections"
              >
                <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
                <span>Back to Collections</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[11px] uppercase font-mono tracking-widest text-[#C5A880]">
                  Zion Collection
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto overscroll-contain flex-1 p-5 sm:p-7 space-y-6">
              {/* Image Container */}
              <div className="relative aspect-[16/9] bg-stone-200 rounded-sm overflow-hidden border border-[#E7E5E4] shadow-sm">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#1C1A17]/85 backdrop-blur-sm px-3 py-1 text-[11px] text-[#FAF9F6] font-medium tracking-wider uppercase rounded-sm">
                  {selectedCategory.name}
                </div>
              </div>

              {/* Category Content */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
                    Category Overview
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#1C1A17] mb-2">
                  {selectedCategory.name}
                </h3>

                <p className="text-sm font-medium text-[#78716C] mb-4">
                  {selectedCategory.subtitle}
                </p>

                <p className="text-sm text-[#57534E] leading-relaxed mb-6">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-[#F4F1EB] p-4 sm:p-5 rounded-sm border border-[#E7E5E4]">
                <h4 className="text-xs font-semibold tracking-wider uppercase text-[#1C1A17] mb-3">
                  Key Design Elements &amp; Available Options:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCategory.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#57534E]">
                      <Check className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Showroom Availability Info */}
              <div className="flex items-start gap-2 text-xs text-[#78716C] p-3 rounded-sm bg-stone-50 border border-stone-200">
                <MapPin className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                <span>
                  Explore material swatches, dimensions, and customized setups directly at our showroom on Hadadi Road, Davangere (Open until 9:00 PM).
                </span>
              </div>
            </div>

            {/* Sticky Modal Footer with Back and Action Buttons */}
            <div className="p-4 sm:p-5 bg-[#F4F1EB] border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#57534E] hover:text-[#1C1A17] bg-white hover:bg-stone-50 border border-[#D6D3D1] rounded-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#8C6D46]" />
                <span>Back</span>
              </button>

              <button
                onClick={() => {
                  const cat = selectedCategory;
                  setSelectedCategory(null);
                  onCategoryInquire(cat);
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#8C6D46] transition-colors rounded-sm shadow-sm cursor-pointer"
              >
                Plan Visit for {selectedCategory.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
