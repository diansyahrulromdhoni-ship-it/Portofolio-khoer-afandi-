import React, { useState } from 'react';
import { User, MapPin, Star, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [showExtendedBio, setShowExtendedBio] = useState(false);

  const personalDetails = [
    {
      icon: User,
      label: 'NAME',
      value: PERSONAL_INFO.shortName,
      color: 'text-sky-400',
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: PERSONAL_INFO.locationDisplay,
      color: 'text-blue-400',
    },
    {
      icon: Star,
      label: 'SPECIALIZATION',
      value: 'Digital Design & UI/UX Design',
      color: 'text-sky-300',
    },
    {
      icon: Send,
      label: 'AVAILABILITY',
      value: PERSONAL_INFO.availability,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sky-400" />
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
                  ABOUT ME
                </span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-tight text-white">
                DESIGNING IDEAS <br />
                <span className="text-gradient-electric">INTO DIGITAL EXPERIENCES.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                Hello! I'm Khoer Afandi, a passionate creative digital designer based in{' '}
                <strong className="text-white font-semibold">{PERSONAL_INFO.locationDisplay}</strong>.
                I enjoy combining creativity, technology, and visual storytelling to create
                meaningful digital experiences. My goal is to transform every idea into an elegant,
                functional, and visually engaging design.
              </p>

              {showExtendedBio && (
                <div className="p-5 rounded-2xl bg-[#08152e]/80 border border-blue-500/30 text-sm text-slate-300 space-y-3 animate-in fade-in duration-300">
                  <p>
                    With an eye for dark luxury aesthetics, precision typography, and intuitive interaction architecture, I collaborate closely with forward-thinking brands and businesses to build high-retention digital platforms.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2 text-xs text-sky-300">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Pixel-Perfect Polish</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> User-Centric Empathy</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Modern AI Tooling</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA to toggle or learn more */}
            <div>
              <button
                type="button"
                onClick={() => setShowExtendedBio(!showExtendedBio)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider text-sky-400 hover:text-white bg-blue-950/40 hover:bg-blue-900/60 border border-blue-500/40 hover:border-sky-400 shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all cursor-pointer uppercase"
              >
                <span>{showExtendedBio ? 'SHOW LESS' : 'LEARN MORE'}</span>
                <ArrowUpRight className={`w-4 h-4 transition-transform ${showExtendedBio ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column: Personal Data Panel & KA Monogram Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Personal Info Card (Dark Glassmorphism) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#071329]/70 border border-blue-500/30 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] space-y-5">
              <div className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>IDENTITY MATRIX</span>
                <span className="text-sky-400">2026 // EXP</span>
              </div>

              <div className="space-y-4">
                {personalDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-950/30 transition-colors">
                      <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-sky-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-white truncate">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Official KA Monogram Brand Card */}
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-[#050c1a] p-4 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,102,255,0.15)] group">
              <img
                src={PERSONAL_INFO.brandLogo}
                alt="Khoer Afandi Monogram Logo"
                className="w-full max-h-48 object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 filter brightness-105"
              />
              <div className="mt-3 flex items-center justify-between w-full px-2 text-[11px] font-mono text-slate-400">
                <span className="text-white font-bold tracking-wider">OFFICIAL MONOGRAM</span>
                <span className="text-sky-400">ORIGINAL IDENTITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
