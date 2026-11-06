import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#071329] border border-sky-400/50 text-white shadow-[0_10px_30px_rgba(0,102,255,0.4)] backdrop-blur-xl animate-in slide-in-from-bottom-5 fade-in duration-300">
      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
      <span className="text-xs font-semibold tracking-wide font-mono">{message}</span>
    </div>
  );
};
