import React, { useState, useEffect } from 'react';
import { Download, PlayCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SuccessPage = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-slate-700 bg-slate-800/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Mission Control // Access Granted</span>
          </div>
          <h1 className="font-serif text-3xl">Your Intelligence Brief is Ready.</h1>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="p-8 border-r border-slate-700 bg-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-sm uppercase tracking-wide">Briefing: Execution Strategy</h3>
            </div>
            <div className="aspect-video bg-slate-900 rounded-lg border border-slate-600 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors group">
               <span className="text-xs text-slate-500 font-mono">[VIDEO_PLAYER_PLACEHOLDER]</span>
            </div>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
               Watch the 2-min guide to learn the exact outreach script converting at 15% for this list.
            </p>
          </div>
          <div className="p-8 flex flex-col justify-center space-y-6">
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Payment Verified</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Freshness Audit Passed</div>
              <div className="flex items-center gap-2">
                 {ready ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-500 border-t-emerald-500 animate-spin" />}
                 <span>{ready ? 'Secure Link Generated' : 'Encrypting Download...'}</span>
              </div>
            </div>
            <button 
              disabled={!ready}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                ready ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-900/20' : 'bg-slate-700 text-slate-500'
              }`}
            >
              <Download className="w-5 h-5" />
              {ready ? 'DOWNLOAD CSV' : 'PLEASE WAIT...'}
            </button>
            <Link to="/" className="text-center text-xs text-slate-500 hover:text-slate-300">Return to Catalog</Link>
          </div>
        </div>
      </div>
    </main>
  );
};