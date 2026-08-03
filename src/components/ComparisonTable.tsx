import React from 'react';
import { CAR_MODELS } from '../data/cars';
import { MessageSquare, Zap, Fuel, ArrowRight, Table } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/config';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-sky-400">
            <Table className="w-3.5 h-3.5" />
            <span>QUICK MODEL SPECIFICATION MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Compare All 7 MG Models Side-by-Side
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Compare powertrains, seating, transmission types, and target drive styles to find the exact MG car that matches your budget and lifestyle.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#14171D] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-xs uppercase font-bold text-slate-300">
                <th className="p-4">Model Name</th>
                <th className="p-4">Body Style</th>
                <th className="p-4">Powertrain Type</th>
                <th className="p-4">Transmission</th>
                <th className="p-4">Ideal For</th>
                <th className="p-4 text-center">Inquire</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {CAR_MODELS.map((car) => {
                const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Mark! I'm comparing models and would like more details on the ${car.name}.`
                )}`;

                return (
                  <tr 
                    key={car.id} 
                    className={`hover:bg-slate-900/60 transition-colors ${
                      car.isEV ? 'bg-emerald-950/10' : ''
                    }`}
                  >
                    {/* Model Name & Tag */}
                    <td className="p-4 font-bold text-white">
                      <div className="flex items-center gap-2">
                        <span>{car.name}</span>
                        {car.isEV && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
                            EV
                          </span>
                        )}
                        {car.isHybrid && (
                          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/40 text-[10px] font-bold">
                            HYBRID+
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#E4002B] font-medium mt-0.5">{car.officialTag}</p>
                    </td>

                    {/* Body Style */}
                    <td className="p-4 text-slate-300 font-medium">
                      {car.type}
                    </td>

                    {/* Powertrain */}
                    <td className="p-4 font-semibold">
                      {car.isEV ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" /> Electric (EV)
                        </span>
                      ) : car.isHybrid ? (
                        <span className="text-sky-400 flex items-center gap-1">
                          <Fuel className="w-3.5 h-3.5" /> Hybrid+
                        </span>
                      ) : (
                        <span className="text-amber-400">Petrol Turbo</span>
                      )}
                    </td>

                    {/* Transmission */}
                    <td className="p-4 text-slate-300">
                      {car.transmission}
                    </td>

                    {/* Ideal For */}
                    <td className="p-4 text-slate-300 max-w-xs text-xs">
                      {car.idealFor}
                    </td>

                    {/* Action Button */}
                    <td className="p-4 text-center">
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-800 hover:bg-[#E4002B] text-slate-200 hover:text-white transition-colors border border-slate-700"
                        title={`Inquire ${car.name}`}
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
