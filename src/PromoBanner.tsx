import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { CURRENT_PROMO, CONSULTANT_INFO } from '../data/config';

export const PromoBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Mark! I want to claim the "${CURRENT_PROMO.title}" promo. Please send me available units and approval terms.`
  )}`;

  return (
    <section id="promo" className="py-12 bg-gradient-to-r from-[#1D0008] via-[#14171D] to-[#1D0008] border-y border-[#E4002B]/40 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#E4002B_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#14171D]/90 p-8 rounded-2xl border border-slate-700 shadow-2xl">
          
          {/* Promo Text Details */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4002B] text-white text-xs font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>{CURRENT_PROMO.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {CURRENT_PROMO.title}
            </h2>

            <p className="text-sm text-slate-300 font-medium">
              {CURRENT_PROMO.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-2">
              {CURRENT_PROMO.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E4002B] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-amber-400 font-semibold italic pt-1">
              ⌛ {CURRENT_PROMO.validity}
            </p>
          </div>

          {/* Promo CTA Box */}
          <div className="shrink-0 w-full lg:w-auto text-center space-y-3 bg-slate-900/90 p-6 rounded-xl border border-slate-800">
            <p className="text-xs uppercase font-bold text-slate-400">Reserved Units Available</p>
            <p className="text-2xl font-heading font-bold text-white">Drive Away This Week</p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-[#E4002B] hover:bg-[#c00024] rounded-xl shadow-lg mg-red-border-glow transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Claim Promo with Mark</span>
            </a>

            <p className="text-[10px] text-slate-400">Fast processing for BDO, BPI, EastWest & PSBank applicants</p>
          </div>

        </div>
      </div>
    </section>
  );
};
