import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ToolsSection } from './components/ToolsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main vertical landing page */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 4 Statistics Cards */}
        <StatsSection />

        {/* About Me & Official KA Identity */}
        <AboutSection />

        {/* Featured Portfolio / Selected Work */}
        <PortfolioSection />

        {/* Core Capabilities / Expertise */}
        <CapabilitiesSection />

        {/* Creative Stack / Tools & Technologies */}
        <ToolsSection />

        {/* 5-Step Design Methodology Process */}
        <ProcessSection />

        {/* Contact Section & Prominent WhatsApp CTA */}
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Sheet Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
