import React from 'react';
import { X, MessageSquare, Check, Zap, Gauge, Fuel, Shield, Award, Users, ChevronRight } from 'lucide-react';
import { CarModel } from '../types';
import { CONSULTANT_INFO } from '../data/config';

interface CarDetailModalProps {
  car: CarModel | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Mark! I am reviewing the full specifications for the ${car.name}. Can you send me the latest price breakdown, available colors, and fast approval process?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#14171D] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-white">{car.name}</h3>
              {car.isEV && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs">
                  ⚡ ELECTRIC EV
                </span>
              )}
            </div>
            <p className="text-xs text-[#E4002B] font-semibold">{car.officialTag}</p>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img 
              src={car.image} 
              alt={car.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14171D] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">Suggested Retail Price</p>
                <p className="text-2xl font-heading font-bold text-white">{car.startingPrice}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-300 font-medium">{car.monthlyEstimate}</p>
                <p className="text-[10px] text-emerald-400">Bank Financing Promos Available</p>
              </div>
            </div>
          </div>

          {/* Key Specs Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Key Technical Specs</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-400">Powertrain</p>
                <p className="text-sm font-bold text-white">{car.powertrain}</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-400">Transmission</p>
                <p className="text-sm font-bold text-white">{car.transmission}</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-400">Horsepower / Output</p>
                <p className="text-sm font-bold text-[#E4002B]">{car.powerOutput}</p>
              </div>

              {car.specs.batteryRange ? (
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-900/50 col-span-2">
                  <p className="text-[10px] text-emerald-400">Battery & WLTP Range</p>
                  <p className="text-sm font-bold text-white">{car.specs.batteryRange}</p>
                </div>
              ) : (
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <p className="text-[10px] text-slate-400">Fuel Efficiency</p>
                  <p className="text-sm font-bold text-emerald-400">{car.specs.fuelEfficiency || "High Efficiency"}</p>
                </div>
              )}

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-slate-400">Seating Capacity</p>
                <p className="text-sm font-bold text-white">{car.seating} Passengers</p>
              </div>
            </div>
          </div>

          {/* Top Features */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Key Standard Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {car.highlights.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#E4002B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Suite */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Safety & Security Suite</h4>
            <div className="flex flex-wrap gap-2">
              {car.specs.safetyFeatures.map((safety, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-xs font-medium">
                  🛡️ {safety}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="p-3.5 rounded-xl bg-[#0F1115] border border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-400">Best Suited For:</p>
            <p className="text-xs font-medium text-slate-200 mt-0.5">{car.idealFor}</p>
          </div>

        </div>

        {/* Modal Footer / CTA */}
        <div className="p-5 border-t border-slate-800 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate-300 font-semibold">Ready to test drive or get bank quotation?</p>
            <p className="text-[11px] text-slate-400">Mark Alcarde assists with fast 24-hr approvals & unit reservations.</p>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#E4002B] hover:bg-[#c00024] rounded-xl shadow-lg mg-red-border-glow transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Inquire {car.name} on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
