/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collection } from './components/Collection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InteriorSection } from './components/InteriorSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ShowroomVisitModal } from './components/ShowroomVisitModal';
import { CategoryItem } from './data/businessData';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<CategoryItem | null>(null);

  const handleOpenVisitModal = (category?: CategoryItem) => {
    setPreselectedCategory(category || null);
    setIsVisitModalOpen(true);
  };

  const handleCloseVisitModal = () => {
    setIsVisitModalOpen(false);
    setPreselectedCategory(null);
  };

  const handleDiscoverClick = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreInteriors = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#1C1A17] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#1C1A17]">
      {/* 2. NAVIGATION BAR */}
      <Navbar onOpenVisitModal={() => handleOpenVisitModal()} />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* 3. ABOUT SECTION */}
        <About onDiscoverClick={handleDiscoverClick} />

        {/* 4. COLLECTION SECTION */}
        <Collection onCategoryInquire={(cat) => handleOpenVisitModal(cat)} />

        {/* 5. WHY CHOOSE ZION */}
        <WhyChooseUs />

        {/* 6. INTERIOR DESIGN SECTION */}
        <InteriorSection onExploreInteriors={handleExploreInteriors} />

        {/* 7. GALLERY */}
        <Gallery onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* 8. CUSTOMER REVIEWS */}
        <Reviews />

        {/* 9. LOCATION / CONTACT SECTION */}
        <Contact onOpenVisitModal={() => handleOpenVisitModal()} />

        {/* 10. FINAL CTA */}
        <FinalCTA onOpenVisitModal={() => handleOpenVisitModal()} />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* Interactive Showroom Visit Modal */}
      <ShowroomVisitModal
        isOpen={isVisitModalOpen}
        onClose={handleCloseVisitModal}
        preselectedCategory={preselectedCategory}
      />
    </div>
  );
}
