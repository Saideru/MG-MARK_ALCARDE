import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/config';
import { CAR_MODELS } from '../data/cars';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredModel: CAR_MODELS[0].name,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp message string for direct handoff
    const messageText = `Hi Mark! I submitted an inquiry via your landing page:
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Model: ${formData.preferredModel}
Message: ${formData.message || 'I want to inquire about availability & financing.'}`;

    const waUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    setSubmitted(true);
    // Open WhatsApp in new tab after brief confirmation feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-carbon relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#E4002B]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH WITH MARK ALCARDE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Ready to Drive Your New MG?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Send a direct message or request a official bank quote. Mark personally responds to all inquiries within 15 minutes during operating hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Mark's Card & Direct Contact Channels */}
          <div className="lg:col-span-5 bg-[#14171D] rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                <img 
                  src={CONSULTANT_INFO.heroImage} 
                  alt="Mark Alcarde" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{CONSULTANT_INFO.name}</h3>
                <p className="text-xs text-[#E4002B] font-semibold">{CONSULTANT_INFO.title}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{CONSULTANT_INFO.dealership}</p>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase text-slate-400">Direct Contact Channels</p>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Mark! I'm reaching out directly from your MG website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/50 text-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">WhatsApp Direct Chat</p>
                    <p className="text-[11px] text-slate-400">+{CONSULTANT_INFO.whatsappNumber}</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">Chat &rarr;</span>
              </a>

              {/* Viber */}
              <a 
                href={`viber://chat?number=%2B${CONSULTANT_INFO.whatsappNumber}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-purple-950/40 border border-slate-800 hover:border-purple-500/50 text-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Viber Official Line</p>
                    <p className="text-[11px] text-slate-400">{CONSULTANT_INFO.viberNumber}</p>
                  </div>
                </div>
                <span className="text-xs text-purple-400 font-bold group-hover:translate-x-1 transition-transform">Viber &rarr;</span>
              </a>

              {/* Mobile Phone Call */}
              <a 
                href={`tel:${CONSULTANT_INFO.phone}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#E4002B]/20 text-[#E4002B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Mobile Direct Call</p>
                    <p className="text-[11px] text-slate-400">{CONSULTANT_INFO.displayPhone}</p>
                  </div>
                </div>
                <span className="text-xs text-[#E4002B] font-bold group-hover:translate-x-1 transition-transform">Call &rarr;</span>
              </a>
            </div>

            {/* Dealership Location & Hours */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E4002B] shrink-0 mt-0.5" />
                <span>{CONSULTANT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sun: 8:00 AM – 8:00 PM (Inquiries Always Open)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Contact Form */}
          <div className="lg:col-span-7 bg-[#14171D] rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl">
            
            <h3 className="text-xl font-bold text-white mb-1">Request a Quote or Test Drive</h3>
            <p className="text-xs text-slate-400 mb-6">Fill out the brief form below and Mark will connect with you right away with complete price computation sheets.</p>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-slate-900/90 rounded-xl border border-emerald-500/50">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Inquiry Sent to Mark!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! Opening WhatsApp to start direct messaging with Mark Alcarde now.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase">Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Juan dela Cruz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:border-[#E4002B] focus:outline-none"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 0917 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:border-[#E4002B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Preferred Model Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase">Preferred MG Model</label>
                  <select
                    value={formData.preferredModel}
                    onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-[#E4002B] focus:outline-none"
                  >
                    {CAR_MODELS.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name} ({car.type} — {car.powertrain})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Remarks */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase">Additional Remarks / Questions</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. Asking for downpayment terms, test drive schedule, or trade-in estimate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:border-[#E4002B] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E4002B] hover:bg-[#c00024] text-white font-bold text-sm shadow-xl mg-red-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Mark Alcarde</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  🔒 Your information is confidential and used solely by Mark Alcarde for official MG quotation.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
