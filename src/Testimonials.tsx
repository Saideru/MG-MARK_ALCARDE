import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, CONSULTANT_INFO } from '../data/config';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>REAL CLIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Mark's Clients Say
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Over {CONSULTANT_INFO.unitsDelivered}+ happy owners delivered across Metro Manila and surrounding provinces. Here are verified buyer reviews.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-6 rounded-2xl bg-[#14171D] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 relative shadow-xl"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-800 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <span>{t.clientName}</span>
                    {t.verifiedBuyer && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified MG Owner" />
                    )}
                  </h4>
                  <p className="text-[11px] text-[#E4002B] font-semibold">{t.modelBought}</p>
                  <p className="text-[10px] text-slate-400">{t.location} • {t.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
