import React from 'react';
import { CONSULTANT_INFO } from '../data/config';
import { Shield, Car } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0C0F] text-slate-400 text-xs border-t border-slate-900 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <img 
              src={CONSULTANT_INFO.logoImage} 
              alt="MG Logo" 
              className="w-10 h-10 object-contain rounded bg-slate-900 p-1 border border-slate-800"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-heading text-lg font-bold text-white tracking-wider">MG x Mark Alcarde</p>
              <p className="text-[11px] text-slate-400">{CONSULTANT_INFO.title}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium text-slate-400">
            <a href="#lineup" className="hover:text-white">7-Car Lineup</a>
            <a href="#financing" className="hover:text-white">Loan Calculator</a>
            <a href="#comparison" className="hover:text-white">Spec Table</a>
            <a href="#why-mark" className="hover:text-white">Why Mark</a>
            <a href="#contact" className="hover:text-white">Contact Mark</a>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="space-y-3 text-[11px] text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> This page is operated independently by Mark Alcarde, an authorized MG car sales consultant. Vehicle specifications, prices, promos, and features mentioned herein are subject to official MG Philippines / SAIC Motor Philippines guidelines and bank financing approvals.
          </p>
          <p>
            All trademarks, logos, model names, and brand badges belong to MG Motor / SAIC Motor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Mark Alcarde — MG Philippines Sales Consultant. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fast 24-Hr Bank Processing & Nationwide Delivery</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
