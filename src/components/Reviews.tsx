import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F4F1EB] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 justify-center">
            <span className="w-6 h-[1.5px] bg-[#8C6D46]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
              GENUINE FEEDBACK
            </span>
            <span className="w-6 h-[1.5px] bg-[#8C6D46]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#1C1A17] tracking-tight mb-4 text-balance">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-[#57534E] font-normal leading-relaxed text-pretty">
            Real experiences from visitors and homeowners at our Davangere showroom.
          </p>
        </div>

        {/* Google Trust Metric Card */}
        <div className="max-w-3xl mx-auto mb-12 bg-[#FAF9F6] border border-[#E7E5E4] rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-serif-luxury text-2xl font-bold">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 stroke-none" />
                ))}
              </div>
              <div className="text-sm font-semibold text-[#1C1A17]">
                5.0 Google Rating
              </div>
              <div className="text-xs text-[#78716C]">
                Based on 10 verified Google Reviews
              </div>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#8C6D46] transition-colors rounded-sm shadow-sm cursor-pointer whitespace-nowrap"
          >
            View More Google Reviews
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Genuine Customer Review Cards (Only Provided Reviews - No Fake Names or Additions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BUSINESS_INFO.customerQuotes.map((quote, idx) => (
            <div
              key={quote.id}
              className="bg-[#FAF9F6] border border-[#E7E5E4] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C5A880] mb-4 stroke-none fill-[#C5A880]/30" />
                
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(quote.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 stroke-none" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg sm:text-xl font-serif-luxury text-[#1C1A17] italic leading-relaxed mb-6">
                  “{quote.text}”
                </blockquote>
              </div>

              {/* Review attribution adhering strictly to no fake names */}
              <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between text-xs text-[#78716C]">
                <span className="flex items-center gap-1.5 font-medium text-[#1C1A17]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Google Verified Review {idx + 1}
                </span>
                <span className="text-[#8C6D46]">Zion Davangere Customer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust footnote */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <span>Davangere showroom open until 9:00 PM · Walk-ins welcome everyday</span>
        </div>

      </div>
    </section>
  );
};
