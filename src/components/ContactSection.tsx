import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState('UI/UX Design');
  const [customNote, setCustomNote] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const getCustomWhatsappUrl = () => {
    const message = `Hello Khoer Afandi, I'm interested in working with you on a ${selectedService} project.${
      customNote ? ` Details: ${customNote}` : ''
    }`;
    return `https://wa.me/6283826970607?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-900">
      {/* Cinematic background spotlighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-t from-blue-600/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-80 h-80 bg-blue-900/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Big Headline & Interactive WhatsApp Composer */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sky-400" />
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase font-mono">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98]">
                LET'S CREATE <br />
                SOMETHING <br />
                <span className="text-gradient-electric">EXTRAORDINARY.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                "Have a creative idea or exciting project? Let's connect and turn your vision into something extraordinary."
              </p>
            </div>

            {/* Prominent Primary CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold tracking-wider text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 hover:from-blue-600 hover:to-sky-400 border border-sky-300/50 shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:shadow-[0_0_50px_rgba(56,189,248,0.85)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase group"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>LET'S TALK ON WHATSAPP</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider text-slate-200 bg-[#071329]/90 hover:bg-blue-950/80 border border-slate-700/80 hover:border-sky-400/50 shadow-sm transition-all hover:-translate-y-0.5 uppercase"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>SEND ME AN EMAIL</span>
              </a>
            </div>

            {/* Quick Interactive Project Inquirer (Prepares WhatsApp Draft) */}
            <div className="p-6 rounded-3xl bg-[#071329]/70 border border-blue-500/20 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-sky-400 uppercase font-mono tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  CUSTOMIZE YOUR WHATSAPP INQUIRY
                </span>
                <span className="text-[11px] text-slate-500 font-mono">INSTANT RESPONSE</span>
              </div>

              <div className="space-y-3">
                <label className="text-xs text-slate-400 font-medium block">
                  Select Project Focus:
                </label>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Website Design', 'Brand Identity', 'Mobile App', 'Design Systems'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedService === service
                          ? 'bg-blue-600 text-white border border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                          : 'bg-[#030917] text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>

                <div className="pt-1">
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Brief idea or note (e.g., Redesign for modern SaaS web app)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030917] border border-blue-900/50 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <a
                    href={getCustomWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-sky-500 transition-colors shadow-md"
                  >
                    <span>Launch WhatsApp with this draft</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Info Cards & Elegant Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#071329]/80 border border-blue-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                  DIRECT CHANNELS
                </span>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-[#030917]/80 border border-blue-900/50 hover:border-sky-400/50 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/40 text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      WHATSAPP
                    </div>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'WhatsApp')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy WhatsApp"
                >
                  {copiedField === 'WhatsApp' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#030917]/80 border border-blue-900/50 hover:border-sky-400/50 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/40 text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#030917]/80 border border-blue-900/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-500/40 text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      LOCATION
                    </div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-sky-400 px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-500/30">
                  INDONESIA
                </span>
              </div>
            </div>

            {/* Signature Showcase Block */}
            <div className="p-6 rounded-3xl bg-[#050c1a]/90 border border-blue-500/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-4xl sm:text-5xl font-signature text-sky-300 tracking-wide font-normal pt-2">
                Khoer Afandi
              </div>
              <div className="text-xs font-mono tracking-widest text-slate-400 uppercase pt-1">
                {PERSONAL_INFO.brandConcept}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
