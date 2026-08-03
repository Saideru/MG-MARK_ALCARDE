import React, { useState } from 'react';
import { MessageSquare, Zap, Fuel, Gauge, Users, ChevronRight, Info, Calculator, Shield, Sparkles } from 'lucide-react';
import { CAR_MODELS } from '../data/cars';
import { CarModel } from '../types';
import { CONSULTANT_INFO } from '../data/config';

interface CarGridProps {
  onSelectCarForModal: (car: CarModel) => void;
  onSelectCarForCalculator: (car: CarModel) => void;
}

export const CarGrid: React.FC<CarGridProps> = ({ onSelectCarForModal, onSelectCarForCalculator }) => {
  const [filter, setFilter] = useState<'ALL' | 'EV' | 'HYBRID' | 'PETROL' | 'SUV' | 'SEDAN_HATCH'>('ALL');

  const filteredCars = CAR_MODELS.filter(car => {
    if (filter === 'EV') return car.isEV;
    if (filter === 'HYBRID') return car.isHybrid;
    if (filter === 'PETROL') return !car.isEV && !car.isHybrid;
    if (filter === 'SUV') return car.type === 'SUV' || car.type === 'Crossover';
    if (filter === 'SEDAN_HATCH') return car.type === 'Sedan' || car.type === 'Hatchback';
    return true;
  });

  return (
    <section id="lineup" className="py-20 bg-[#0F1115] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#E4002B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 OFFICIAL MG PHILIPPINES LINEUP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Explore the 7 MG Models
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            From hyper-electric 435 HP hot hatches to fuel-sipping smart hybrids and bold turbocharged SUVs. Tap any model to view full specs or message Mark directly for stock & promos.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'ALL'
                  ? 'bg-[#E4002B] text-white shadow-lg mg-red-border-glow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Models (7)
            </button>

            <button
              onClick={() => setFilter('EV')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                filter === 'EV'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg ev-green-glow'
                  : 'bg-slate-900 text-emerald-400 hover:bg-emerald-950/40 border border-emerald-900/60'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              100% Electric EVs (2)
            </button>

            <button
              onClick={() => setFilter('HYBRID')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'HYBRID'
                  ? 'bg-sky-500 text-slate-950 shadow-lg'
                  : 'bg-slate-900 text-sky-400 hover:bg-sky-950/40 border border-sky-900/60'
              }`}
            >
              Hybrid+ Models (3)
            </button>

            <button
              onClick={() => setFilter('PETROL')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'PETROL'
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'bg-slate-900 text-amber-400 hover:bg-amber-950/40 border border-amber-900/60'
              }`}
            >
              Turbo & Petrol (2)
            </button>

            <button
              onClick={() => setFilter('SUV')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === 'SUV'
                  ? 'bg-slate-200 text-slate-950 shadow-lg'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              SUVs & Crossovers
            </button>
          </div>
        </div>

        {/* 7-Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => {
            const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(car.whatsappMessage)}`;

            return (
              <div 
                key={car.id} 
                className={`group relative rounded-2xl bg-[#14171D] border transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 ${
                  car.isEV 
                    ? 'border-emerald-500/40 hover:border-emerald-400/80 hover:shadow-xl hover:shadow-emerald-950/30' 
                    : car.isHybrid
                    ? 'border-sky-500/30 hover:border-sky-400/70 hover:shadow-xl'
                    : 'border-slate-800 hover:border-[#E4002B]/60 hover:shadow-xl'
                }`}
              >
                {/* Top Image Container */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if network fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171D] via-transparent to-transparent opacity-90" />

                  {/* EV Green Tag or Hybrid/Petrol Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {car.isEV && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg ev-green-glow">
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        100% ELECTRIC (EV)
                      </span>
                    )}

                    {car.isHybrid && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500 text-slate-950 font-bold text-xs shadow-md">
                        <Fuel className="w-3.5 h-3.5" />
                        HYBRID+
                      </span>
                    )}

                    {!car.isEV && !car.isHybrid && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 font-semibold text-xs">
                        {car.powertrain}
                      </span>
                    )}
                  </div>

                  {/* Body Style Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700 text-[11px] font-semibold text-slate-300">
                    {car.type}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starting SRP</p>
                      <p className="text-lg font-heading font-bold text-white tracking-wide">
                        {car.startingPrice}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-emerald-400 font-semibold">Low Downpayment Available</p>
                      <p className="text-xs text-slate-300 font-medium">{car.monthlyEstimate}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Official Name & Subtag */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#E4002B] transition-colors">
                        {car.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#E4002B] font-semibold">{car.officialTag}</p>

                    {/* One-Line Hook */}
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {car.oneLineHook}
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-[#E4002B] shrink-0" />
                        <span className="truncate">{car.powerOutput}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {/* Primary WhatsApp Button */}
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white transition-all shadow-md ${
                        car.isEV 
                          ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40' 
                          : 'bg-[#E4002B] hover:bg-[#c00024] mg-red-border-glow'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Inquire About {car.name}</span>
                    </a>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => onSelectCarForModal(car)}
                        className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-semibold transition-colors"
                      >
                        <Info className="w-3 h-3 text-[#E4002B]" />
                        <span>Full Specs</span>
                      </button>

                      <button 
                        onClick={() => onSelectCarForCalculator(car)}
                        className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-semibold transition-colors"
                      >
                        <Calculator className="w-3 h-3 text-emerald-400" />
                        <span>Calculate Loan</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
