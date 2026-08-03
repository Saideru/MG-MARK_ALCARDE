import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { CarGrid } from './components/CarGrid';
import { CarDetailModal } from './components/CarDetailModal';
import { FinancingCalculator } from './components/FinancingCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { WhyMark } from './components/WhyMark';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { CarModel } from './types';

export default function App() {
  const [selectedCarForModal, setSelectedCarForModal] = useState<CarModel | null>(null);
  const [selectedCarForCalculator, setSelectedCarForCalculator] = useState<CarModel | null>(null);

  const handleSelectCarForCalculator = (car: CarModel) => {
    setSelectedCarForCalculator(car);
    const calculatorEl = document.getElementById('financing');
    if (calculatorEl) {
      calculatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-100 font-sans antialiased selection:bg-[#E4002B] selection:text-white relative">
      {/* Sticky Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Highlight Promo Strip */}
        <PromoBanner />

        {/* 7-Car Model Lineup Grid */}
        <CarGrid 
          onSelectCarForModal={(car) => setSelectedCarForModal(car)}
          onSelectCarForCalculator={handleSelectCarForCalculator}
        />

        {/* Interactive Financing Loan Calculator */}
        <FinancingCalculator selectedCarFromParent={selectedCarForCalculator} />

        {/* Full 7-Model Spec Comparison Table */}
        <ComparisonTable />

        {/* Why Buy From Mark Alcarde */}
        <WhyMark />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Form & Direct WhatsApp/Viber Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar (Visible only on mobile) */}
      <MobileStickyBar />

      {/* Car Detail Specs Modal */}
      <CarDetailModal 
        car={selectedCarForModal} 
        onClose={() => setSelectedCarForModal(null)} 
      />
    </div>
  );
}
