import React from 'react';
import { Sparkles, BadgePercent, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'quality':
        return <Sparkles className="w-6 h-6 text-[#C5A880]" strokeWidth={1.5} />;
      case 'affordable':
        return <BadgePercent className="w-6 h-6 text-[#C5A880]" strokeWidth={1.5} />;
      case 'customer-friendly':
        return <HeartHandshake className="w-6 h-6 text-[#C5A880]" strokeWidth={1.5} />;
      case 'local-convenient':
        return <MapPin className="w-6 h-6 text-[#C5A880]" strokeWidth={1.5} />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A880]" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#141210] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 justify-center">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase">
              THE ZION PROMISE
            </span>
            <span className="w-6 h-[1px] bg-[#C5A880]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#FAF9F6] tracking-tight mb-4 text-balance">
            Why Choose Zion Furniture &amp; Interior
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29E] font-light leading-relaxed text-pretty">
            Grounded in honesty, helpful guidance, and genuine value for Davangere residents.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#1C1A17] border border-[#2E2A25] p-7 rounded-sm hover:border-[#C5A880]/60 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#292521] border border-[#3E3832] flex items-center justify-center mb-6 group-hover:bg-[#342F2A] transition-colors">
                  {getIcon(item.id)}
                </div>

                <div className="text-xs font-mono text-[#78716C] mb-2 tracking-widest">
                  0{index + 1}.
                </div>

                <h3 className="text-lg font-serif-luxury font-medium text-[#FAF9F6] mb-3 group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A8A29E] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#292521] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C]">
                  Showroom Standard
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
