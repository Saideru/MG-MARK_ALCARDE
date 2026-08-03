import React from 'react';
import { DollarSign, Clock, Truck, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/config';

export const WhyMark: React.FC = () => {
  const valueProps = [
    {
      icon: <DollarSign className="w-6 h-6 text-[#E4002B]" />,
      title: "100% Transparent Pricing",
      description: "No hidden mandatory dealer add-ons or unexpected insurance markup fees. Every price quotation provided is itemized and written upfront.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E4002B]" />,
      title: "Fast 24 to 48-Hour Bank Approvals",
      description: "Direct relationship with major Philippine auto-loan banks (BDO, BPI, EastWest, Security Bank, PSBank) to fast-track your credit evaluation.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#E4002B]" />,
      title: "VIP Home or Office Car Handover",
      description: "Busy work schedule? Mark personally prepares and delivers your new MG unit directly to your doorstep in Metro Manila or provincial centers.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E4002B]" />,
      title: "Dedicated After-Sales & Warranty Specialist",
      description: "Mark remains your single point of contact long after handover — assisting with routine PMS scheduling, insurance renewals, and warranty support.",
    }
  ];

  return (
    <section id="why-mark" className="py-20 bg-carbon relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#E4002B]">
            <Award className="w-3.5 h-3.5" />
            <span>THE MARK ALCARDE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Buy Your MG Car From Mark?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Buying a car should be exciting, straightforward, and stress-free. Here is how Mark Alcarde delivers a red-carpet vehicle purchasing experience.
          </p>
        </div>

        {/* 4 Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#14171D] border border-slate-800 hover:border-[#E4002B]/60 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E4002B]/10 transition-all">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#E4002B] transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Mark's Service Promise</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#14171D] border border-slate-700/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#E4002B]/20 border border-[#E4002B] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-[#E4002B]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have Questions About MG Cars or Bank Approvals?</h4>
              <p className="text-xs text-slate-400">Mark provides free credit consultations with zero obligation to buy.</p>
            </div>
          </div>

          <a 
            href={`https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Mark! I'd like to ask a quick question about MG financing / stock availability.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#E4002B] hover:bg-[#c00024] text-white text-xs font-bold shrink-0 shadow-lg mg-red-border-glow transition-all"
          >
            Ask Mark on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
