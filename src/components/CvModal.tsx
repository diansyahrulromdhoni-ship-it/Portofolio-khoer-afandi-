import React, { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, CAPABILITIES, TOOLS, PROJECTS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* CV Sheet Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#071329] border border-blue-500/40 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,102,255,0.4)] z-10 text-slate-100 p-6 sm:p-10 space-y-8 print:bg-white print:text-black print:border-none print:shadow-none print:max-h-none print:overflow-visible">
        {/* Header Controls (Hidden during print) */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
              CURRICULUM VITAE — 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-950/80 border border-blue-500/40 hover:bg-blue-900 text-sky-300 hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Lockup */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800/80 pb-6">
          <img
            src={PERSONAL_INFO.avatarImage}
            alt={PERSONAL_INFO.fullName}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-sky-400/50 shadow-md shrink-0"
          />

          <div className="space-y-2 text-center sm:text-left flex-1">
            <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase print:text-black">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-sky-400 font-mono tracking-wider uppercase print:text-blue-700">
              {PERSONAL_INFO.roleString}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.locationDisplay}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.whatsapp}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase print:text-blue-700">
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-slate-800">
            Passionate and detail-oriented Creative Digital Designer & UI/UX Designer dedicated to
            transforming ambitious ideas into elegant, memorable, and high-performing digital
            experiences. Specialized in clean editorial layouts, futuristic dark luxury interfaces,
            scalable design systems, and rapid prototyping utilizing cutting-edge generative
            creative suites.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase print:text-blue-700">
            CORE EXPERTISE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="p-3 rounded-xl bg-[#030917]/70 border border-blue-900/40 text-xs space-y-1 print:border-slate-300"
              >
                <div className="font-bold text-white print:text-black">{cap.title}</div>
                <div className="text-slate-400 print:text-slate-600 text-[11px] leading-snug">
                  {cap.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Workflow Stack */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase print:text-blue-700">
            CREATIVE STACK
          </h2>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-950/60 border border-blue-500/30 text-sky-300 print:text-black print:border-slate-300"
              >
                {t.name} ({t.badge})
              </span>
            ))}
          </div>
        </div>

        {/* Selected Featured Works */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase print:text-blue-700">
            SELECTED PORTFOLIO HIGHLIGHTS
          </h2>
          <div className="space-y-2">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-[#030917]/70 border border-blue-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs print:border-slate-300"
              >
                <div>
                  <span className="font-bold text-white print:text-black uppercase">
                    {p.title}
                  </span>
                  <span className="text-slate-500 mx-2">·</span>
                  <span className="text-sky-400 font-mono text-[11px]">
                    {p.categories.join(' / ')}
                  </span>
                </div>
                <span className="text-slate-400 text-[11px] font-mono">{p.client} ({p.year})</span>
              </div>
            ))}
          </div>
        </div>

        {/* CV Footer CTA */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <span className="text-xs text-slate-400">
            Looking for freelance or collaborative partnerships?
          </span>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-sky-500 transition-colors uppercase tracking-wider"
          >
            <span>CONTACT VIA WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
