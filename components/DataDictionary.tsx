import React from 'react';
import { Database, Check, Zap, Hash, AtSign, Linkedin } from 'lucide-react';
import { SignalPayload } from '../types';

export const DataDictionary = ({ data }: { data: SignalPayload }) => {
  
  const getSignalInfo = () => {
    switch (data.type) {
      case 'ECOM_SPEND':
        return {
          title: "Ad Spend Intelligence",
          desc: `Precise extraction of ${data.ad_spend} monthly spend on ${data.platform}, flagged with ${data.pixel_status} pixel status.`
        };
      case 'TECH_GAP':
        return {
          title: "Technographic Gap",
          desc: `Identifies specific absence of ${data.tool_missing} indicating a ${data.risk_level} operational risk.`
        };
      case 'ROLE_CHANGE':
        return {
          title: "Executive Movement",
          desc: `Detects ${data.role} status change to ${data.status} within the last ${data.days_ago} days.`
        };
      case 'GROWTH_EVENT':
        return {
          title: "Growth Event",
          desc: `Verifies ${data.event_name} triggers with specific magnitude: ${data.amount || 'High Velocity'}.`
        };
      case 'INTENT_SIGNAL':
        return {
          title: "High-Intent Signal",
          desc: `Captures '${data.signal_key.replace('_', ' ')}' activity with value '${data.value}' verified via ${data.context}.`
        };
      default:
        return {
          title: "Signal Data",
          desc: "The specific trigger event identifying the opportunity."
        };
    }
  };

  const signalInfo = getSignalInfo();

  return (
    <div className="py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-md">
                <Database className="w-5 h-5 text-slate-700" />
            </div>
            <div>
                <h3 className="font-serif text-2xl text-slate-900">The Data Schema</h3>
                <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wide">Standardized Output Format // JSON & CSV</p>
            </div>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 uppercase tracking-wide">
                Schema Version 4.2
             </span>
          </div>
        </div>

        {/* BENTO GRID LAYOUT - No more scrolling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Standard Columns */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col gap-3 hover:border-slate-300 transition-all">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                    <AtSign className="w-4 h-4" />
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Column A</span>
                    <div className="font-bold text-slate-900 text-sm">Company Identity</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">Domain, Name, Size</div>
                </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col gap-3 hover:border-slate-300 transition-all">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                    <Linkedin className="w-4 h-4" />
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Column B</span>
                    <div className="font-bold text-slate-900 text-sm">Decision Maker</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">Name, Title, LinkedIn</div>
                </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col gap-3 hover:border-slate-300 transition-all">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                    <Hash className="w-4 h-4" />
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Column C</span>
                    <div className="font-bold text-slate-900 text-sm">Firmographics</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">Revenue, Industry, Geo</div>
                </div>
            </div>

            {/* THE GOLD - Spans 2 cols on mobile, 1 on desktop but visually distinct */}
            <div className="col-span-2 md:col-span-1 md:row-span-1 bg-slate-900 rounded-xl p-5 border border-slate-700 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Zap className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">The Alpha</span>
                    </div>
                    <div>
                        <div className="font-serif text-xl text-white mb-1">{signalInfo.title}</div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {signalInfo.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Integration Bar */}
        <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Instant Sync With:</span>
            <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
                {['Salesforce', 'HubSpot', 'Instantly', 'SmartLead', 'Clay'].map(tool => (
                    <span key={tool} className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500" /> {tool}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};