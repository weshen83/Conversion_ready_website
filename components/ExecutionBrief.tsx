import React from 'react';
import { ListProduct } from "../types";
import { Crosshair, MessageSquare, Clock, Zap, Sparkles, Bot } from 'lucide-react';

export const ExecutionBrief = ({ product }: { product: ListProduct }) => {
  return (
    <div className="py-12 border-y border-gray-200 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif text-lg text-slate-900">The Execution Brief</h3>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800">Includes AI-Personalized Copy for Every Contact</span>
            </div>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Crosshair className="w-32 h-32" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-3 md:border-r border-slate-700 md:pr-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" />
                <span>The Core Hook</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                "{product.execution_brief.hook}"
              </p>
            </div>
            <div className="space-y-3 md:border-r border-slate-700 md:pr-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                <span>Outreach Window</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {product.execution_brief.outreach_window}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-widest">
                <Bot className="w-4 h-4" />
                <span>AI Enrichment</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                We analyze the prospect's LinkedIn & Company News to append a unique "P.S." line to every record in the CSV.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center">
            <span className="text-xs font-mono text-slate-500">STRATEGY_ID: {product.id}_V4</span>
            <span className="bg-white/10 px-3 py-1 rounded text-xs font-bold text-white">
              INCLUDED WITH DATA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};