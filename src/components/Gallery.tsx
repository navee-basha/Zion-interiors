import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, ArrowLeft } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';

interface GalleryProps {
  onOpenVisitModal: () => void;
}

const CATEGORIES = [
  'All',
  'Living Rooms',
  'Bedrooms',
  'Dining Spaces',
  'Furniture',
  'Interiors',
  'Showroom',
] as const;

export const Gallery: React.FC<GalleryProps> = ({ onOpenVisitModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentLightboxItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] ?? null : null;

  // Lock background scrolling and support keyboard navigation in lightbox
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveLightboxIndex(null);
        } else if (e.key === 'ArrowLeft') {
          setActiveLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
          );
        } else if (e.key === 'ArrowRight') {
          setActiveLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filteredItems.length : null
          );
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#8C6D46]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
                CURATED SPACES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#1C1A17] tracking-tight">
              Showroom &amp; Interior Gallery
            </h2>
          </div>

          <p className="text-sm text-[#78716C] max-w-md">
            Click on any setting to inspect craftsmanship, spatial proportions, and material harmony.
          </p>
        </div>

        {/* Filter Category Segmented Controls (interactive buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E7E5E4] overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#1C1A17] text-[#FAF9F6] shadow-sm'
                  : 'bg-[#F4F1EB] text-[#57534E] hover:text-[#1C1A17] hover:bg-[#EAE5DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative bg-stone-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Overlay & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="self-end">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif-luxury font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery bottom footnote with Showroom Visit action */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#78716C] mb-3">
            Want to see these pieces and materials in person?
          </p>
          <button
            onClick={onOpenVisitModal}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1C1A17] hover:text-[#8C6D46] underline underline-offset-8 transition-colors cursor-pointer"
          >
            Schedule a Walkthrough at Davangere Showroom
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Header with Back button and close */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-30 pointer-events-auto">
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-black/70 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border border-white/10"
              aria-label="Back to gallery"
            >
              <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
              <span>Back to Gallery</span>
            </button>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 text-white/80 hover:text-white bg-black/70 hover:bg-black rounded-full transition-colors cursor-pointer border border-white/10"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-20 cursor-pointer"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-20 cursor-pointer"
                aria-label="Next gallery image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Card */}
          <div
            className="max-w-4xl w-full bg-[#1C1A17] text-[#FAF9F6] rounded-sm overflow-hidden border border-[#3E3832] shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#2E2A25]">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#C5A880] block mb-1">
                  {currentLightboxItem.category}
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-white mb-1">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-[#A8A29E] max-w-xl">
                  {currentLightboxItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    setActiveLightboxIndex(null);
                    onOpenVisitModal();
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#141210] bg-[#C5A880] hover:bg-[#d8be97] transition-colors rounded-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Inquire at Showroom
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
