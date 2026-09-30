import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Phone, MessageSquare, Check, Copy, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ContactProps {
  onOpenVisitModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenVisitModal }) => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleShareLocation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zion Furniture & Interior, Davangere',
          text: `Visit Zion Furniture & Interior showroom at: ${BUSINESS_INFO.address} | Call: ${BUSINESS_INFO.phone}`,
          url: BUSINESS_INFO.googleMapsUrl,
        });
      } catch {
        handleCopyAddress();
      }
    } else {
      handleCopyAddress();
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#8C6D46]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8C6D46] uppercase">
              SHOWROOM LOCATION &amp; HOURS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-medium text-[#1C1A17] tracking-tight mb-4 text-balance">
            Visit Zion Furniture &amp; Interior
          </h2>

          <p className="text-base text-[#57534E] font-normal leading-relaxed text-pretty">
            Experience our furniture collections and finish quality in person. Conveniently located on Hadadi Road in Davangere.
          </p>
        </div>

        {/* Split Layout: Left Details / Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 bg-[#F4F1EB] p-8 sm:p-10 rounded-sm border border-[#E7E5E4] shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address Card */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-2">
                  <MapPin className="w-4 h-4 text-[#8C6D46]" />
                  <span>Showroom Address</span>
                </div>
                <p className="text-base sm:text-lg font-serif-luxury text-[#1C1A17] leading-relaxed">
                  2, Hadadi Rd, Jeevan Bhima Nagara,<br />
                  2nd Stage, Shivakumara Swamy Nagara,<br />
                  Davangere, Karnataka 577005
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1C1A17] font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>

                  <span className="text-[#D6D3D1]">·</span>

                  <button
                    onClick={handleShareLocation}
                    className="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1C1A17] font-medium transition-colors cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Location</span>
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp Contact Card */}
              <div className="pt-6 border-t border-[#E7E5E4]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-2">
                  <Phone className="w-4 h-4 text-[#8C6D46]" />
                  <span>Direct Showroom Contact</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-lg sm:text-xl font-serif-luxury font-medium text-[#1C1A17] hover:text-[#8C6D46] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-[#78716C] mt-0.5">
                      Available on Call &amp; WhatsApp for showroom inquiries
                    </p>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="self-start sm:self-center inline-flex items-center gap-1 px-2.5 py-1 text-xs text-[#57534E] hover:text-[#1C1A17] bg-white border border-[#D6D3D1] rounded transition-colors cursor-pointer"
                  >
                    {phoneCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Hours Card */}
              <div className="pt-6 border-t border-[#E7E5E4]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D46] mb-2">
                  <Clock className="w-4 h-4 text-[#8C6D46]" />
                  <span>Business Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-[#1C1A17]">
                    {BUSINESS_INFO.hours}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Open Today
                  </span>
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Monday through Sunday · Walk-ins welcomed
                </p>
              </div>

              {/* Showroom Guidance */}
              <div className="pt-6 border-t border-[#E7E5E4] text-xs text-[#57534E] leading-relaxed">
                <span className="font-semibold text-[#1C1A17]">Landmark: </span>
                Hadadi Road, 2nd Stage Shivakumara Swamy Nagara, near Jeevan Bhima Nagara junction. Ample parking space available.
              </div>

            </div>

            {/* Action Buttons as requested */}
            <div className="mt-8 pt-6 border-t border-[#E7E5E4] space-y-3">
              {/* Primary: Get Directions */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=Zion+Furniture+%26+Interior+2+Hadadi+Rd+Davangere+Karnataka+577005`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#8C6D46] active:bg-[#121110] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                Get Directions
              </a>

              {/* Secondary Buttons: Call Now & WhatsApp Us */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#1C1A17] bg-[#FAF9F6] hover:bg-[#EAE5DC] border border-[#D6D3D1] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8C6D46]" />
                  Call Now
                </a>

                <a
                  href={BUSINESS_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#1C1A17] bg-[#FAF9F6] hover:bg-[#EAE5DC] border border-[#D6D3D1] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#8C6D46]" />
                  WhatsApp Us
                </a>
              </div>

              {/* Showroom Visit Planning Assistant */}
              <button
                onClick={onOpenVisitModal}
                className="w-full py-2.5 text-xs font-medium text-[#8C6D46] hover:text-[#1C1A17] transition-colors flex items-center justify-center gap-1 underline underline-offset-4 cursor-pointer"
              >
                Plan your showroom walkthrough in advance
              </button>
            </div>

          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-7 h-[460px] lg:h-[560px] rounded-sm overflow-hidden border border-[#E7E5E4] shadow-md relative bg-stone-100">
            <iframe
              title="Zion Furniture & Interior Davangere Location Map"
              src="https://maps.google.com/maps?q=Zion%20Furniture%20%26%20Interior%2C%202%2C%20Hadadi%20Rd%2C%20Jeevan%20Bhima%20Nagara%2C%20Davangere%20577005&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Direct Map Overlay Link */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-sm shadow-md border border-[#E7E5E4] text-xs">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1A17] hover:text-[#8C6D46] font-semibold flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C6D46]" />
                Open Full Map
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
