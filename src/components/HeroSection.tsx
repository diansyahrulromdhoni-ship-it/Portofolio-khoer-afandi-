import React from 'react';
import { ArrowUpRight, Download, Mouse, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#020617]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle futuristic digital geometric grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Greeting kicker */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-sky-400/80 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase font-mono">
                HELLO, I'M KHOER AFANDI
              </span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase">
                <span className="block text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]">
                  DIGITAL
                </span>
                <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  DESIGNER
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight">
              Crafting Digital Experiences That Inspire.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-normal">
              I'm Khoer Afandi, a creative digital designer passionate about
              transforming ideas into beautiful, meaningful, and high-performing
              digital experiences through creativity, strategy, and technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 hover:from-blue-600 hover:to-sky-400 border border-sky-400/40 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-sky-400/50 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase cursor-pointer"
              >
                <span>DOWNLOAD MY CV</span>
                <Download className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            {/* Subtle Scroll Down indicator */}
            <div className="pt-6 hidden lg:flex items-center gap-3 text-xs tracking-widest text-slate-500 uppercase">
              <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
                <span className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" />
              </div>
              <span>SCROLL DOWN</span>
            </div>
          </div>

          {/* Right Column: Original Untouched Portrait with High-End Futuristic Staging */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Outer circular glowing electric ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-sky-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-blue-600/30 shadow-[0_0_50px_rgba(0,102,255,0.35)] pointer-events-none" />

              {/* Glowing accent flare */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-400 rounded-full blur-xl opacity-75 pointer-events-none" />
              <div className="absolute bottom-10 -left-6 w-16 h-16 bg-blue-600 rounded-full blur-2xl opacity-60 pointer-events-none" />

              {/* Portrait container with glass rim and subtle gradient backdrop */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-blue-600/30 via-slate-900/60 to-blue-950/40 backdrop-blur-xl border border-sky-400/30 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.4)] overflow-hidden group">
                {/* Background aura behind subject */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-blue-600/10 z-10 pointer-events-none" />

                {/* The authentic, unedited photograph of Khoer Afandi */}
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt="Khoer Afandi — Digital Designer"
                  className="w-full h-auto object-cover rounded-2xl relative z-0 shadow-inner filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Futuristic overlay lines on the frame */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="w-8 h-[1px] bg-sky-400/60" />
                </div>
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-8 h-[1px] bg-blue-500/60" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#2563eb]" />
                </div>
              </div>

              {/* Floating Badge: "AVAILABLE FOR FREELANCE PROJECTS" */}
              <div className="absolute top-8 -right-4 sm:-right-8 z-30 bg-[#071329]/90 border border-sky-400/40 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-3 animate-float">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 shadow-[0_0_10px_#38bdf8]" />
                </span>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    AVAILABLE FOR
                  </div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                    FREELANCE PROJECTS
                  </div>
                </div>
              </div>

              {/* Monogram tag on bottom-left */}
              <div className="absolute -bottom-4 -left-4 z-30 bg-[#071329]/90 border border-blue-500/40 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-bold tracking-widest text-slate-200 uppercase font-mono">
                  KP PANYIRAPAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
