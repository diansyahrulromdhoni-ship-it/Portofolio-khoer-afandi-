import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterTabs = ['ALL', 'UI/UX DESIGN', 'WEB APPLICATION', 'BRANDING', 'MOBILE APP'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.categories.some((cat) => cat.toUpperCase().includes(activeFilter));
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sky-400" />
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              FEATURED <span className="text-gradient-electric">PORTFOLIO</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              "A collection of creative ideas transformed into meaningful digital experiences."
            </p>
          </div>

          {/* Interactive filter controls (functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#08152e] border border-blue-900/40">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer uppercase ${
                  activeFilter === tab
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)]'
                    : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden bg-[#071329]/80 border border-blue-500/20 hover:border-sky-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.35)] cursor-pointer flex flex-col justify-between"
            >
              {/* Top ambient glow bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Visual Mockup Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-transparent opacity-80" />

                  {/* Project Number badge on top left */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-[#020617]/80 backdrop-blur-md border border-sky-400/30 text-sky-400 font-display font-extrabold text-xs tracking-wider">
                    {project.number}
                  </div>

                  {/* Arrow CTA Icon on hover */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-blue-600/90 group-hover:bg-sky-400 text-white group-hover:text-slate-950 flex items-center justify-center shadow-lg transition-all transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  {/* Category text metadata (no pill enclosures) */}
                  <div className="text-[11px] font-bold text-sky-400 tracking-widest uppercase font-mono">
                    {project.categories.join(' · ')}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-black text-xl text-white tracking-tight uppercase group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Concise description */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with client and deliverable tags */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">{project.client}</span>
                <span className="text-sky-400 text-xs font-semibold group-hover:underline inline-flex items-center gap-1">
                  View Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Work Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#071329]/90 to-blue-950/60 border border-blue-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                Need a Custom Interface or Brand Redesign?
              </h4>
              <p className="text-xs text-slate-400">
                Every project is uniquely engineered from concept to high-fidelity completion.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6283826970607?text=Hello%20Khoer%20Afandi,%20I%20would%20like%20to%20commission%20a%20design%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-sky-500 border border-sky-300/30 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all uppercase tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>COMMISSION A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
