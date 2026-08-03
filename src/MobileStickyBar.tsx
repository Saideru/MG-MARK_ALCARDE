import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/config';

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONSULTANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Mark! I am inquiring directly from your MG mobile page.")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0F1115]/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-lg"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Message Mark</span>
        </a>

        <a 
          href={`tel:${CONSULTANT_INFO.phone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#E4002B] active:bg-[#c00024] text-white font-bold text-xs shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};
