import React from 'react';
import { MessageSquare, Mail, ArrowUp, Youtube, Instagram, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-slate-900 py-16 overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 via-[#071329] to-slate-950 border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <span className="font-display font-black text-lg text-white">
                KA
              </span>
            </div>

            <div>
              <div className="font-display font-black text-lg text-white tracking-widest uppercase">
                {PERSONAL_INFO.fullName}
              </div>
              <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                {PERSONAL_INFO.brandConcept}
              </div>
            </div>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold tracking-wider text-slate-400">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-sky-400 transition-colors uppercase whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full bg-[#071329] border border-blue-500/30 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#071329] border border-blue-500/30 text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-blue-600 hover:bg-sky-500 text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {PERSONAL_INFO.fullName}. ALL RIGHTS RESERVED.
          </div>
          <div>
            DESIGNED WITH ULTRA-PREMIUM MIDNIGHT BLUE AESTHETICS.
          </div>
        </div>
      </div>
    </footer>
  );
};
