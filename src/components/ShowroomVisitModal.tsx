import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, CheckCircle2, Navigation, Copy, Check, Calendar, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES, CategoryItem } from '../data/businessData';

interface ShowroomVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: CategoryItem | null;
}

export const ShowroomVisitModal: React.FC<ShowroomVisitModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
}) => {
  const [selectedInterest, setSelectedInterest] = useState<string>(
    preselectedCategory?.name || 'Living Room'
  );
  const [preferredTiming, setPreferredTiming] = useState<string>('Evening (5:00 PM - 8:30 PM)');
  const [notes, setNotes] = useState<string>('');
  const [passGenerated, setPassGenerated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Lock background scroll when visit modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    setPassGenerated(true);
  };

  const handleCopyVisitSummary = () => {
    const summary = `Zion Furniture & Interior Showroom Visit
Location: ${BUSINESS_INFO.address}
Interest: ${selectedInterest}
Preferred Time: ${preferredTiming}
Showroom Hours: ${BUSINESS_INFO.hours}
Directions: ${BUSINESS_INFO.googleMapsUrl}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] text-[#1C1A17] rounded-sm max-w-lg w-full overflow-hidden shadow-2xl border border-[#D6D3D1] animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1C1A17] text-[#FAF9F6] px-5 py-4 sm:p-6 flex items-center justify-between border-b border-[#332E29] shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 -ml-1 text-[#C5A880] hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] block">
                DAVANGERE SHOWROOM
              </span>
              <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-white">
                Plan Your Showroom Visit
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {!passGenerated ? (
            <form onSubmit={handleGeneratePass} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-2">
                  What are you looking to explore?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedInterest(cat.name)}
                      className={`p-2.5 text-left text-xs rounded-sm border transition-all cursor-pointer ${
                        selectedInterest === cat.name
                          ? 'border-[#8C6D46] bg-[#F4F1EB] font-semibold text-[#1C1A17]'
                          : 'border-[#E7E5E4] bg-white text-[#57534E] hover:border-stone-300'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedInterest('General Consultation')}
                    className={`p-2.5 text-left text-xs rounded-sm border transition-all cursor-pointer ${
                      selectedInterest === 'General Consultation'
                        ? 'border-[#8C6D46] bg-[#F4F1EB] font-semibold text-[#1C1A17]'
                        : 'border-[#E7E5E4] bg-white text-[#57534E] hover:border-stone-300'
                    }`}
                  >
                    Complete Home Furniture
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-2">
                  Preferred Visit Timing
                </label>
                <div className="space-y-1.5">
                  {[
                    'Morning (10:30 AM - 1:00 PM)',
                    'Afternoon (2:00 PM - 5:00 PM)',
                    'Evening (5:00 PM - 8:30 PM)',
                  ].map((time) => (
                    <label
                      key={time}
                      className="flex items-center gap-2.5 p-2 rounded border border-[#E7E5E4] bg-white text-xs text-[#57534E] cursor-pointer hover:bg-stone-50"
                    >
                      <input
                        type="radio"
                        name="timing"
                        value={time}
                        checked={preferredTiming === time}
                        onChange={(e) => setPreferredTiming(e.target.value)}
                        className="text-[#8C6D46] focus:ring-[#8C6D46]"
                      />
                      <span>{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                  Any specific style or room size notes? (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Looking for a 3-seater sofa or 6-seater dining table for a 3BHK flat..."
                  rows={2}
                  className="w-full text-xs p-3 rounded-sm border border-[#D6D3D1] bg-white focus:outline-none focus:border-[#8C6D46]"
                />
              </div>

              <div className="bg-[#F4F1EB] p-3 rounded-sm border border-[#E7E5E4] text-xs text-[#57534E] flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1C1A17]">Open 7 Days until 9:00 PM: </span>
                  No formal appointment required. Planning your visit gives you a saved checklist with landmark directions.
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#8C6D46] transition-colors rounded-sm shadow-md cursor-pointer"
              >
                Generate Showroom Visit Note
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif-luxury font-medium text-[#1C1A17]">
                  Your Showroom Visit Note is Ready
                </h4>
                <p className="text-xs text-[#78716C] mt-1">
                  We look forward to welcoming you at Zion Furniture &amp; Interior!
                </p>
              </div>

              {/* Ready Pass Card */}
              <div className="bg-[#F4F1EB] border border-[#E7E5E4] rounded-sm p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2 text-xs">
                  <span className="text-[#78716C]">Selected Interest</span>
                  <span className="font-semibold text-[#1C1A17]">{selectedInterest}</span>
                </div>

                <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2 text-xs">
                  <span className="text-[#78716C]">Preferred Timing</span>
                  <span className="font-semibold text-[#1C1A17]">{preferredTiming}</span>
                </div>

                <div className="text-xs pt-1">
                  <div className="flex items-start gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#8C6D46] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1C1A17]">Zion Showroom: </span>
                      <span className="text-[#57534E]">
                        2, Hadadi Rd, Jeevan Bhima Nagara, Davangere 577005
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#57534E]">
                    <Phone className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                    <span>Contact Line: <strong className="text-[#1C1A17]">{BUSINESS_INFO.phone}</strong></span>
                  </div>
                </div>

                {notes && (
                  <div className="text-xs bg-white p-2.5 rounded border border-[#E7E5E4] text-[#57534E]">
                    <span className="font-semibold text-[#1C1A17]">Notes: </span>
                    {notes}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#1C1A17] hover:bg-[#8C6D46] transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  Open Navigation to Showroom
                </a>

                {/* Direct Call & WhatsApp Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-[#1C1A17] bg-white border border-[#D6D3D1] hover:bg-stone-50 transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8C6D46]" />
                    Call Showroom
                  </a>
                  <a
                    href={`https://wa.me/?text=Hi%20Zion%20Furniture%2C%20I%20am%20planning%20to%20visit%20your%20Davangere%20showroom.%20Interested%20in%3A%20${encodeURIComponent(
                      selectedInterest
                    )}.%20Preferred%20timing%3A%20${encodeURIComponent(preferredTiming)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-[#1C1A17] bg-white border border-[#D6D3D1] hover:bg-stone-50 transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#8C6D46]" />
                    WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyVisitSummary}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#57534E] hover:text-[#1C1A17] bg-[#F4F1EB] hover:bg-[#EAE5DC] border border-[#E7E5E4] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Details Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Showroom Address &amp; Summary</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPassGenerated(false)}
                  className="w-full text-center text-xs text-[#78716C] hover:text-[#1C1A17] pt-1 transition-colors cursor-pointer"
                >
                  Edit Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
