import React from 'react';
import { Layout, Monitor, Sparkles, Palette, Layers, Workflow, CheckCircle2 } from 'lucide-react';
import { CAPABILITIES } from '../data/portfolioData';

export const CapabilitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Layout,
    Monitor,
    Sparkles,
    Palette,
    Layers,
    Workflow,
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sky-400" />
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
              CORE CAPABILITIES
            </span>
            <span className="h-px w-6 bg-sky-400" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            MY <span className="text-gradient-electric">EXPERTISE</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            "Core skills that bring ideas to life with precision, empathy, and high aesthetic standards."
          </p>
        </div>

        {/* 6 Capabilities in a responsive 2/3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = iconMap[cap.iconName] || Layout;
            return (
              <div
                key={cap.id}
                className="group relative p-7 rounded-3xl bg-[#071329]/70 border border-blue-500/20 hover:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-5px_rgba(0,102,255,0.25)] flex flex-col justify-between"
              >
                {/* Number index indicator */}
                <div className="flex items-center justify-between pb-4">
                  <div className="p-3 rounded-2xl bg-blue-950/70 border border-blue-500/30 text-sky-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-sky-300 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-sky-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight uppercase group-hover:text-sky-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Sub-highlights */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-2">
                  {cap.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
