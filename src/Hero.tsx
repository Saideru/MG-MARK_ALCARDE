import React from 'react';
import { MessageSquare, Phone, ShieldCheck, Award, Users, Star, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { CONSULTANT_INFO, CURRENT_PROMO } from '../data/config';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Mark! I want to check current MG availability, promos, and get a fast financing quote.")}`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-carbon">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E4002B]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Urgency / Promo Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <a 
            href="#promo" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:border-[#E4002B]/60 transition-all shadow-md group"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#E4002B] animate-pulse" />
            <span className="text-slate-300">SPECIAL MONTHLY PROMO:</span>
            <span className="text-[#E4002B] font-bold group-hover:underline">All-In Low Downpayment Offers</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E4002B] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Copy, CTAs & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sales Consultant Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D212A] border border-slate-700 text-xs font-bold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#E4002B]" />
              <span>OFFICIAL MG SALES CONSULTANT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Your MG. Your Terms. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#E4002B]">
                Talk Directly to Mark.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              No middleman delays, no hidden charges. Get personalized financing guidance, fast 24-hour bank approvals, and VIP handover on all 7 official MG models in the Philippines.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 bg-slate-900/60 p-2 rounded border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#E4002B] shrink-0" />
                <span>Fast Bank Approval</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 p-2 rounded border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#E4002B] shrink-0" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 p-2 rounded border border-slate-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>EV & Hybrid Expert</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#E4002B] hover:bg-[#c00024] rounded-xl shadow-xl mg-red-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat with Mark on WhatsApp</span>
              </a>

              <a 
                href={`tel:${CONSULTANT_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all"
              >
                <Phone className="w-5 h-5 text-[#E4002B]" />
                <span>Call {CONSULTANT_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Direct Contact Alternatives */}
            <p className="text-xs text-slate-400">
              Also available on <span className="text-slate-200 font-semibold">Viber</span> & <span className="text-slate-200 font-semibold">Messenger</span> • Response time: under 15 mins
            </p>

          </div>

          {/* Right Column: Hero Portrait Billboard Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E4002B] via-slate-700 to-emerald-500 opacity-30 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden bg-[#14171D] border border-slate-700/80 shadow-2xl">
                
                {/* Hero Image */}
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-900">
                  <img 
                    src={CONSULTANT_INFO.heroImage} 
                    alt="Mark Alcarde, MG Sales Consultant" 
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171D] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2">
                    <img src={CONSULTANT_INFO.logoImage} alt="MG" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                    <span className="text-xs font-bold text-white tracking-wide">SENIOR CONSULTANT</span>
                  </div>

                  {/* EV Specialist Tag */}
                  <div className="absolute top-4 right-4 bg-emerald-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/40 text-emerald-400 text-xs font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current text-emerald-400" />
                    <span>Certified EV Advisor</span>
                  </div>
                </div>

                {/* Card Footer Overlay */}
                <div className="p-5 space-y-3 bg-[#14171D]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{CONSULTANT_INFO.name}</h3>
                      <p className="text-xs text-slate-400">{CONSULTANT_INFO.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{CONSULTANT_INFO.rating}</span>
                        <span className="text-xs text-slate-400">({CONSULTANT_INFO.reviewCount})</span>
                      </div>
                      <p className="text-[10px] text-emerald-400 font-medium">5-Star Verified Reviews</p>
                    </div>
                  </div>

                  {/* Micro Quote */}
                  <p className="text-xs text-slate-300 italic bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                    "My goal is simple: get you into your dream MG car with zero hassle and the best deal possible."
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-white font-heading text-2xl md:text-3xl font-bold">
              <Award className="w-6 h-6 text-[#E4002B]" />
              <span>{CONSULTANT_INFO.yearsExperience}+ Years</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Dedicated MG Sales Experience</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-white font-heading text-2xl md:text-3xl font-bold">
              <Users className="w-6 h-6 text-[#E4002B]" />
              <span>{CONSULTANT_INFO.unitsDelivered}+ Units</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Happy Clients & Handovers</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-white font-heading text-2xl md:text-3xl font-bold">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <span>{CONSULTANT_INFO.rating} / 5.0</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Verified Customer Satisfaction</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-[#E4002B] font-heading text-2xl md:text-3xl font-bold">
              <span>24 HR</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Fast-Track Bank Approvals</p>
          </div>
        </div>

      </div>
    </section>
  );
};
