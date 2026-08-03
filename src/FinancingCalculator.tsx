import React, { useState } from 'react';
import { Calculator, MessageSquare, Check, HelpCircle, ShieldCheck, DollarSign } from 'lucide-react';
import { CAR_MODELS } from '../data/cars';
import { CarModel } from '../types';
import { CONSULTANT_INFO } from '../data/config';

interface FinancingCalculatorProps {
  selectedCarFromParent?: CarModel | null;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({ selectedCarFromParent }) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(selectedCarFromParent?.id || CAR_MODELS[0].id);
  const [downpaymentPercent, setDownpaymentPercent] = useState<number>(20);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);

  const selectedCar = CAR_MODELS.find(c => c.id === selectedCarId) || CAR_MODELS[0];

  // Base price estimations for calculation demo
  const estimatedPrices: Record<string, number> = {
    'mg5-cvt-core': 698000,
    'mg3-hybrid-plus': 898000,
    'mg4-xpower-ev': 1738000,
    'mg-marvel-r-ev': 2588000,
    'mg-zs-hybrid-plus': 998000,
    'mg-hs-hybrid-plus': 1288000,
    'mg-rx5-trq-l': 1058000
  };

  const basePrice = estimatedPrices[selectedCar.id] || 900000;
  const downpaymentAmount = (basePrice * downpaymentPercent) / 100;
  const loanAmount = basePrice - downpaymentAmount;
  
  // Approximate interest rates per term
  const annualInterestRate = 0.085; // 8.5% p.a. approx
  const totalInterest = loanAmount * (annualInterestRate * (loanTermMonths / 12));
  const totalLoanPayable = loanAmount + totalInterest;
  const monthlyAmortization = Math.round(totalLoanPayable / loanTermMonths);

  const whatsappMessage = `Hi Mark! I used your financing calculator for the ${selectedCar.name}. 
Downpayment: ${downpaymentPercent}% (₱${downpaymentAmount.toLocaleString()})
Loan Term: ${loanTermMonths} months
Estimated Monthly: ₱${monthlyAmortization.toLocaleString()}/mo

Can you check bank promo rates and fast-track my pre-approval application?`;

  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="financing" className="py-20 bg-carbon border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATED MG LOAN & FINANCING CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Calculate Your Monthly Payment
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Select your desired MG model, customize your downpayment and loan term, then submit directly to Mark for instant bank pre-qualification with partner banks (BDO, BPI, EastWest, Security Bank, PSBank).
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="max-w-4xl mx-auto bg-[#14171D] rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls Side */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Car Selection Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-300">Select MG Model</label>
                <select
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-sm text-white font-medium focus:border-[#E4002B] focus:outline-none transition-colors"
                >
                  {CAR_MODELS.map(car => (
                    <option key={car.id} value={car.id}>
                      {car.name} {car.isEV ? '⚡ (Electric)' : car.isHybrid ? '🌱 (Hybrid+)' : ''} — {car.officialTag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Downpayment Buttons */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase text-slate-300">Downpayment Percentage</label>
                  <span className="text-xs text-[#E4002B] font-bold">{downpaymentPercent}% (₱{downpaymentAmount.toLocaleString()})</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 20, 30, 50].map(pct => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownpaymentPercent(pct)}
                      className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                        downpaymentPercent === pct
                          ? 'bg-[#E4002B] text-white shadow-md'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Term Selection */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase text-slate-300">Loan Term Duration</label>
                  <span className="text-xs text-emerald-400 font-bold">{loanTermMonths} Months ({loanTermMonths / 12} Years)</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[24, 36, 48, 60].map(term => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermMonths(term)}
                      className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                        loanTermMonths === term
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {term} Mo
                    </button>
                  ))}
                </div>
              </div>

              {/* Freebies included note */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#E4002B]" />
                  <span>All-In Promo Perks Included:</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Free 1-Yr Comprehensive Insurance w/ AON, Free 3-Yr LTO Registration, Free Chattel Fee & MG Tint/Matting.
                </p>
              </div>

            </div>

            {/* Results Side */}
            <div className="lg:col-span-5 bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-800">
                  <p className="text-[11px] uppercase font-bold text-slate-400">Selected Model</p>
                  <h3 className="text-xl font-bold text-white">{selectedCar.name}</h3>
                  <p className="text-xs text-[#E4002B] font-semibold">{selectedCar.officialTag}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Est. Vehicle Price:</span>
                    <span className="font-semibold text-white">₱{basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Est. Downpayment ({downpaymentPercent}%):</span>
                    <span className="font-semibold text-white">₱{downpaymentAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Financed Amount:</span>
                    <span className="font-semibold text-white">₱{loanAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Main Estimated Monthly Display */}
                <div className="pt-4 border-t border-slate-800 text-center space-y-1">
                  <p className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Estimated Monthly Payment</p>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-white text-emerald-400">
                    ₱{monthlyAmortization.toLocaleString()} <span className="text-sm text-slate-400 font-normal">/ mo</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Subject to bank approval & final credit evaluation</p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#E4002B] hover:bg-[#c00024] shadow-lg mg-red-border-glow transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Apply for Bank Pre-Approval with Mark</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
