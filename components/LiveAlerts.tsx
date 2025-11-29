import React, { useState, useEffect } from 'react';
import { Radio, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

const ALERTS = [
  { type: 'purchase', text: 'Growth Team in SF just unlocked "Series B RevOps" list.', icon: CheckCircle2, color: 'text-emerald-500' },
  { type: 'signal', text: 'NEW SIGNAL: "HubSpot Migration" detected in Fintech sector.', icon: Zap, color: 'text-amber-500' },
  { type: 'purchase', text: 'Agency in London purchased "Shopify Pixel Gap".', icon: CheckCircle2, color: 'text-emerald-500' },
  { type: 'trend', text: 'TRENDING: "Tech Gap" signals up 240% this week.', icon: TrendingUp, color: 'text-blue-500' },
];

export const LiveAlerts = () => {
  const [visible, setVisible] = useState(false);
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    // Initial delay
    const initTimer = setTimeout(() => setVisible(true), 5000);

    // Cycle alerts
    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setAlertIndex((prev) => (prev + 1) % ALERTS.length);
        setVisible(true);
      }, 500); // Wait for fade out
    }, 12000); // Every 12 seconds

    return () => {
      clearTimeout(initTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  const alert = ALERTS[alertIndex];
  const Icon = alert.icon;

  return (
    <div 
      className={`fixed top-24 right-6 z-40 max-w-sm transition-all duration-500 transform hidden md:flex ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur border border-slate-700 text-white p-4 rounded-lg shadow-2xl flex items-start gap-3">
        <div className={`mt-0.5 p-1.5 rounded-full bg-white/10 ${alert.color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
             <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">LIVE_FEED</span>
             </div>
             <span className="text-[10px] text-slate-500">Just now</span>
          </div>
          <p className="text-xs font-medium leading-relaxed font-sans">
            {alert.text}
          </p>
        </div>
        <button 
          onClick={() => setVisible(false)}
          className="ml-auto text-slate-500 hover:text-white transition-colors"
        >
          <span className="sr-only">Dismiss</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>
  );
};