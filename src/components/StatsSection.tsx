import React from 'react';
import { Palette, Monitor, Globe, Sparkles } from 'lucide-react';
import { STATISTICS } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Palette,
    Layout: Monitor,
    Globe,
    Sparkles,
  };

  return (
    <section className="py-12 relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="relative group rounded-2xl p-6 bg-[#071329]/80 backdrop-blur-xl border border-blue-500/20 hover:border-sky-400/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Electric blue top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Subtle corner light reflection */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl group-hover:bg-sky-400/20 transition-all pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-500/30 text-sky-400 group-hover:text-white group-hover:bg-blue-600 transition-all shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 min-w-0">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wider uppercase group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-snug">
                      {item.subtitle}
                    </p>
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
