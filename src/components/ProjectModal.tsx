import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle, Calendar, Building, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Khoer Afandi, I saw your "${project.title}" project in your portfolio and I would love to discuss a similar project!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#071329] border border-blue-500/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,102,255,0.4)] z-10 text-slate-100 p-6 sm:p-8 space-y-6">
        {/* Top bar with project number and close button */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-xl text-sky-400">
              PROJECT {project.number}
            </span>
            <span className="text-slate-500">/</span>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 tracking-wider">
              {project.categories.join(' · ')}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-slate-950 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071329] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            {project.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#030917]/70 border border-blue-900/40 text-center space-y-1"
            >
              <div className="font-display font-extrabold text-2xl text-sky-400 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Meta Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              KEY DELIVERABLES
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
              PROJECT CONTEXT
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-slate-400">Client:</span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-slate-400">Year:</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-mono">
                Tools & Capabilities Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-950/60 border border-blue-500/30 text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Interested in exploring a concept like {project.title}?
          </span>

          <a
            href={`${PERSONAL_INFO.whatsappUrl}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-sky-400 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all uppercase tracking-wider"
          >
            <span>INQUIRE VIA WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
