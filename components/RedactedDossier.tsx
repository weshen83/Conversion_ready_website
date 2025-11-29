import React, { useState } from 'react';
import { Lock, Eye, Unlock, Fingerprint, Database, Loader2, ShieldAlert, Building2, User, Wallet, Server } from 'lucide-react';
import { SignalPayload } from '../types';

export const RedactedDossier = ({ data }: { data: SignalPayload }) => {
  const [isUnlocked, setUnlocked] = useState(false);
  const [isDecrypting, setDecrypting] = useState(false);

  const handleReveal = () => {
    setDecrypting(true);
    // Simulate decryption delay
    setTimeout(() => {
        setDecrypting(false);
        setUnlocked(true);
    }, 1200);
  };

  const getSignalLabel = () => {
    if (data.type === 'ECOM_SPEND') return `${data.ad_spend} Spend`;
    if (data.type === 'TECH_GAP') return `Missing ${data.tool_missing}`;
    if (data.type === 'GROWTH_EVENT') return `${data.event_name}`;
    if (data.type === 'ROLE_CHANGE') return `${data.role}`;
    return data.value || "Signal Detected";
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white w-full shadow-2xl relative group transform transition-all duration-500 hover:scale-[1.01]">
       {/* Noise Overlay for "Paper" feel */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      
      {/* Top Secret Stamp */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none opacity-20 transform rotate-12 border-4 border-red-500 rounded px-2 py-1">
        <span className="text-red-500 font-black text-xl uppercase tracking-widest">Confidential</span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 bg-slate-900 px-4 py-3 border-b border-slate-700 text-[9px] font-mono text-slate-400 uppercase tracking-wider relative z-20">
         <div className="col-span-3 flex items-center gap-2"><Building2 className="w-3 h-3" /> Entity</div>
         <div className="col-span-3 flex items-center gap-2"><User className="w-3 h-3" /> Decision Maker</div>
         <div className="col-span-4 flex items-center gap-2"><Fingerprint className="w-3 h-3" /> Signal Context</div>
         <div className="col-span-2 text-right">Verification</div>
      </div>

      {/* Row 1: The Revealable One */}
      <div className={`grid grid-cols-12 gap-2 px-4 py-5 items-center border-b border-slate-100 transition-all duration-500 relative ${isUnlocked ? 'bg-emerald-50/30' : 'bg-white'}`}>
         {/* Decryption Scanline Effect */}
         {isDecrypting && (
             <div className="absolute inset-0 bg-emerald-500/10 z-10 animate-pulse border-b-2 border-emerald-500/50 backdrop-blur-[1px]"></div>
         )}
         
         {/* Column 1: Entity */}
         <div className="col-span-3 relative z-20">
            <div className="flex items-center gap-2">
               <div className={`w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center transition-all duration-500 shadow-sm ${isUnlocked ? 'scale-100 opacity-100 rotate-0' : 'scale-90 opacity-50 blur-[2px]'}`}>
                  <span className="font-serif font-bold text-slate-700">A</span>
               </div>
               <div className="flex flex-col min-w-0">
                  <span className={`font-bold text-xs text-slate-900 truncate transition-all duration-300 ${isUnlocked ? 'blur-0' : 'blur-[4px] select-none bg-slate-100 text-transparent rounded px-1'}`}>
                     {isUnlocked ? "Acme Corp" : "Hidden Corp"}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono mt-0.5 truncate">Series B • SaaS</span>
               </div>
            </div>
         </div>

         {/* Column 2: Decision Maker */}
         <div className="col-span-3 relative z-20">
             <div className="flex flex-col min-w-0">
                <span className={`font-bold text-xs text-slate-900 truncate transition-all duration-300 ${isUnlocked ? 'blur-0' : 'blur-[4px] select-none bg-slate-100 text-transparent rounded px-1'}`}>
                     {isUnlocked ? "Jane Doe" : "Confidential Name"}
                </span>
                <span className="text-[9px] text-slate-500 font-mono mt-0.5 truncate">VP of Marketing</span>
                <span className={`text-[9px] text-emerald-600 font-mono mt-0.5 flex items-center gap-1 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
                    {isUnlocked && <><Server className="w-2 h-2" /> Verified Email</>}
                </span>
             </div>
         </div>
         
         {/* Column 3: Signal */}
         <div className="col-span-4 relative z-20">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-slate-900 bg-amber-100/50 px-1.5 py-0.5 rounded border border-amber-100 inline-block w-fit mb-1">
                   {getSignalLabel()}
               </span>
               <span className="text-[9px] text-slate-500 font-mono leading-tight">
                  Detected via Public API.<br/>Confirmed active status.
               </span>
            </div>
         </div>

         {/* Column 4: Action */}
         <div className="col-span-2 flex justify-end relative z-20">
            {!isUnlocked ? (
               <button 
                 onClick={handleReveal}
                 disabled={isDecrypting}
                 className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 rounded shadow-lg shadow-slate-900/10 text-[9px] font-bold text-white hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group border border-slate-700"
               >
                  {isDecrypting ? (
                      <Loader2 className="w-3 h-3 animate-spin" /> 
                  ) : (
                      <span className="whitespace-nowrap">UNLOCK ROW</span>
                  )}
               </button>
            ) : (
               <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full border border-emerald-200 animate-in fade-in zoom-in duration-300">
                  <Unlock className="w-3 h-3" /> OPEN
               </span>
            )}
         </div>
      </div>

      {/* Rows 2-4: Ghost Rows (Visual Volume) */}
      {[1, 2, 3].map((i) => (
         <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 items-center border-b border-slate-100 opacity-60 select-none bg-slate-50/30 grayscale hover:grayscale-0 transition-all">
            <div className="col-span-3 flex items-center gap-2">
               <div className="w-8 h-8 rounded bg-slate-200"></div>
               <div className="flex flex-col gap-1 w-full">
                 <div className="h-2 w-16 bg-slate-200 rounded"></div>
                 <div className="h-1.5 w-10 bg-slate-100 rounded"></div>
               </div>
            </div>
            <div className="col-span-3">
               <div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
               <div className="h-1.5 w-12 bg-slate-100 rounded"></div>
            </div>
            <div className="col-span-4">
               <div className="h-4 w-24 bg-amber-50 rounded mb-1 border border-amber-100/50"></div>
            </div>
            <div className="col-span-2 flex justify-end text-slate-300">
               <Lock className="w-3 h-3" />
            </div>
         </div>
      ))}
      
      {/* Scarcity Footer */}
      <div className="bg-slate-50 px-4 py-2 flex justify-between items-center border-t border-slate-200">
         <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <Database className="w-3 h-3" />
            <span>2,405 records in full manifest</span>
         </div>
         <div className="flex items-center gap-2">
            <ShieldAlert className="w-3 h-3 text-amber-500" />
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">High Demand Cohort</span>
         </div>
      </div>
    </div>
  );
};