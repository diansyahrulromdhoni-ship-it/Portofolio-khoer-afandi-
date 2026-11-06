import React from 'react';
import { Search, Compass, Palette, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Search, Compass, Palette, Code, CheckCircle];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sky-400" />
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
              WORKFLOW & METHODOLOGY
            </span>
            <span className="h-px w-6 bg-sky-400" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            MY DESIGN <span className="text-gradient-electric">PROCESS</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            "A systematic five-step creative voyage from strategic exploration to high-impact production."
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="relative">
          {/* Connecting glowing electric line (visible on desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-blue-700 via-sky-400 to-blue-700 shadow-[0_0_12px_#38bdf8] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || CheckCircle;
              return (
                <div
                  key={step.step}
                  className="group relative p-6 rounded-3xl bg-[#071329]/80 border border-blue-500/20 hover:border-sky-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(0,102,255,0.3)] flex flex-col justify-between"
                >
                  {/* Step Icon & Number Badge */}
                  <div>
                    <div className="flex items-center justify-between pb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#030917] border border-blue-500/40 text-sky-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-sky-300 transition-all flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="font-display font-black text-2xl text-slate-600 group-hover:text-sky-400 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-white tracking-tight uppercase group-hover:text-sky-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                      {step.description}
                    </p>
                  </div>

                  {/* Output deliverable tag */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                      Deliverable
                    </div>
                    <div className="text-xs font-semibold text-sky-300/90 leading-tight">
                      {step.deliverables}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
