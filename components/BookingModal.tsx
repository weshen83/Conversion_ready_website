import React from 'react';
import { X, Calendar, ShieldCheck, Globe, Loader2 } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <Calendar className="w-5 h-5 text-emerald-400" />
             </div>
             <div>
                <h3 className="font-serif text-lg leading-none">Custom Signal Request</h3>
                <div className="flex items-center gap-2 mt-1">
                   <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      <Globe className="w-3 h-3" /> SECURE_UPLINK_ESTABLISHED
                   </span>
                </div>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-grow bg-slate-50 relative isolate">
           {/* 
              TODO: REPLACE THE SRC BELOW WITH YOUR GOOGLE BOOKING PAGE URL 
              Example: https://calendar.google.com/calendar/appointments/schedules/...
           */}
           <iframe 
             src="https://calendar.google.com/calendar/appointments/schedules/AcZssZgn-placeholder" 
             className="w-full h-full border-none relative z-10"
             title="Booking Calendar"
           ></iframe>
           
           {/* Fallback/Loading State Overlay */}
           <div className="absolute inset-0 flex items-center justify-center -z-10 bg-white">
              <div className="flex flex-col items-center gap-3 text-slate-400">
                 <Loader2 className="w-8 h-8 text-slate-300 animate-spin" />
                 <span className="font-mono text-xs text-slate-500">INITIALIZING CALENDAR MODULE...</span>
              </div>
           </div>
        </div>
        
        {/* Footer */}
        <div className="bg-white px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center shrink-0">
           <span>Session ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
           <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Engineer Assigned</span>
        </div>
      </div>
    </div>
  );
};