import React from 'react';
import { Sparkles, Bot, Wand2, Video, Music, Layers, Cpu, Compass } from 'lucide-react';
import { TOOLS } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'ChatGPT':
        return Bot;
      case 'Gemini':
        return Sparkles;
      case 'Studio AI':
        return Wand2;
      case 'Canva':
        return Layers;
      case 'Flow AI':
        return Compass;
      case 'Suno AI':
        return Music;
      case 'Claude AI':
        return Cpu;
      case 'CapCut':
        return Video;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sky-400" />
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
                CREATIVE STACK
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              TOOLS & <span className="text-gradient-electric">TECHNOLOGIES</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              "Tools I use to create amazing experiences, combining modern generative intelligence with refined design craft."
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>8 CREATIVE ENGINES ACTIVE</span>
          </div>
        </div>

        {/* 8 Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10">
          {TOOLS.map((tool, idx) => {
            const Icon = getToolIcon(tool.name);
            return (
              <div
                key={idx}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#071329]/60 border border-blue-500/20 hover:border-sky-400/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,102,255,0.25)] flex flex-col justify-between"
              >
                {/* Subtle top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between pb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-[0_0_12px_rgba(37,99,235,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight group-hover:text-sky-300 transition-colors">
                    {tool.name}
                  </h3>

                  <div className="text-[11px] font-mono text-sky-400/90 tracking-wide mt-0.5">
                    {tool.category}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {tool.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
