import React, { useState, useEffect } from 'react';
import { Check, X, Calculator, Zap, Users, ArrowRight, ShieldCheck, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="py-4 px-6 font-serif font-bold text-slate-900">Feature</th>
          <th className="py-4 px-6 font-mono text-slate-500 uppercase tracking-wider text-center">ZoomInfo / Apollo</th>
          <th className="py-4 px-6 font-mono text-emerald-600 uppercase tracking-wider text-center bg-emerald-50/50">Conversion-Ready System</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {[
          { feature: "Pricing Model", old: "Annual Subscription ($20k+)", new: "Pay Per Harvest (No Commit)" },
          { feature: "Data Freshness", old: "Quarterly Updates", new: "Live (Hourly Scans)" },
          { feature: "Contract Lock-in", old: "12-Month Minimum", new: "Zero Lock-in" },
          { feature: "Exclusivity", old: "Sold to Everyone", new: "Locked after 5 Buyers" },
          { feature: "Verification", old: "60-70% Valid", new: "95% SMTP Verified" },
          { feature: "Context", old: "Static (Industry/Rev)", new: "Event-Driven (Triggers)" },
        ].map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="py-4 px-6 font-medium text-slate-700">{row.feature}</td>
            <td className="py-4 px-6 text-center text-slate-500">{row.old}</td>
            <td className="py-4 px-6 text-center font-bold text-emerald-700 bg-emerald-50/30">{row.new}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ROICalculator = () => {
    const [dealSize, setDealSize] = useState(10000);
    const [closeRate, setCloseRate] = useState(20);
    const listCost = 1000; // Avg cost per list
    
    // Assumptions: 1 list = 1000 leads -> 5% meeting rate -> 50 meetings -> Close Rate -> Deals
    const meetings = 50; 
    const deals = Math.floor(meetings * (closeRate / 100));
    const revenue = deals * dealSize;
    const profit = revenue - listCost;

    return (
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-10 pointer-events-none"></div>
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400">
                        <Calculator className="w-5 h-5" />
                        <h3 className="font-mono text-xs uppercase tracking-widest font-bold">Profit Simulator</h3>
                    </div>
                    <h2 className="font-serif text-3xl">Do the math.</h2>
                    <p className="text-slate-400 text-sm">See how one "Harvest" performs compared to an SDR retainer.</p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Deal Size ($)</label>
                            <input 
                                type="range" min="1000" max="50000" step="1000"
                                value={dealSize}
                                onChange={(e) => setDealSize(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-2"
                            />
                            <div className="text-right font-mono text-emerald-400">${dealSize.toLocaleString()}</div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Close Rate (%)</label>
                            <input 
                                type="range" min="5" max="50" step="1"
                                value={closeRate}
                                onChange={(e) => setCloseRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-2"
                            />
                            <div className="text-right font-mono text-emerald-400">{closeRate}%</div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                    <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">Projected Net Profit</span>
                    <div className="text-5xl font-serif text-white mt-2 mb-2">${profit.toLocaleString()}</div>
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded border border-emerald-500/20 font-bold">
                        {(profit / listCost).toFixed(1)}x ROI
                    </span>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Based on 1 Harvest (1,000 verified records) converting to {meetings} meetings.
                    </p>
                </div>
             </div>
        </div>
    );
}

export const PricingPage = () => {
  useEffect(() => {
    document.title = "Pricing | Conversion-Ready System";
  }, []);

  return (
    <main className="min-h-screen bg-paper font-sans">
      
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-white border-b border-slate-200">
         <div className="container mx-auto max-w-4xl text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white mb-6">
                <Lock className="w-3 h-3" />
                <span className="text-[10px] font-mono uppercase tracking-widest">NO_SUBSCRIPTIONS_DETECTED</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 tracking-tight">
                Pay Per Harvest. <br/><span className="text-emerald-600">Never Per Seat.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We believe subscriptions encourage "shelfware". You should only pay for the specific, high-intent signals that drive revenue.
            </p>
         </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6 container mx-auto max-w-6xl">
         <div className="grid md:grid-cols-3 gap-8">
            {/* Standard */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-4">
                    <h3 className="font-bold text-slate-900 text-lg">Single Harvest</h3>
                    <p className="text-slate-500 text-sm">For pilots and sprint campaigns.</p>
                </div>
                <div className="text-4xl font-serif text-slate-900 mb-6">
                    $0.90 <span className="text-sm font-sans text-slate-400 font-normal">/ record</span>
                </div>
                <ul className="space-y-3 mb-8">
                    {['1,000 Record Minimum', 'Real-Time Verification', 'CSV Export', 'Standard Support'].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="w-4 h-4 text-emerald-500" /> {feat}
                        </li>
                    ))}
                </ul>
                <Link to="/" className="block w-full py-3 bg-slate-100 text-slate-900 text-center font-bold text-sm rounded-lg hover:bg-slate-200 transition-colors">
                    Browse Catalog
                </Link>
            </div>

            {/* Deep Dive - Highlighted */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-700 shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
                <div className="mb-4">
                    <h3 className="font-bold text-white text-lg">Volume Cohort</h3>
                    <p className="text-slate-400 text-sm">For quarterly growth targets.</p>
                </div>
                <div className="text-4xl font-serif text-white mb-6">
                    $0.70 <span className="text-sm font-sans text-slate-500 font-normal">/ record</span>
                </div>
                <ul className="space-y-3 mb-8">
                    {['5,000+ Records', 'Priority Saturation Access', 'Custom Filters', 'Execution Playbook Included'].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-emerald-500" /> {feat}
                        </li>
                    ))}
                </ul>
                <Link to="/" className="block w-full py-3 bg-emerald-600 text-white text-center font-bold text-sm rounded-lg hover:bg-emerald-500 transition-colors">
                    Start Build
                </Link>
            </div>

            {/* Agency */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Users className="w-24 h-24" />
                </div>
                <div className="mb-4 relative z-10">
                    <h3 className="font-bold text-slate-900 text-lg">Partner / API</h3>
                    <p className="text-slate-500 text-sm">For Agencies and Platforms.</p>
                </div>
                <div className="text-4xl font-serif text-slate-900 mb-6">
                    Custom
                </div>
                <ul className="space-y-3 mb-8 relative z-10">
                    {['White Label CSVs', 'API Access', 'Dedicated Account Mgr', 'Volume Discounts'].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="w-4 h-4 text-emerald-500" /> {feat}
                        </li>
                    ))}
                </ul>
                <Link to="/contact" className="block w-full py-3 bg-white border-2 border-slate-200 text-slate-600 text-center font-bold text-sm rounded-lg hover:border-slate-900 hover:text-slate-900 transition-colors">
                    Contact Partnerships
                </Link>
            </div>
         </div>
      </section>

      {/* ROI & Comparison */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-16 text-center">
               <h2 className="font-serif text-3xl text-slate-900 mb-4">The Anti-Subscription Model</h2>
               <p className="text-slate-600">Why we refuse to lock you in.</p>
            </div>
            
            <ComparisonTable />
            
            <div className="mt-20">
                <ROICalculator />
            </div>
         </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white rounded-full border border-slate-200 shadow-sm text-emerald-600">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">5% Bounce Guarantee</h4>
                        <p className="text-xs text-slate-500">Instant credit for invalid data.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-left">
                    <div className="p-3 bg-white rounded-full border border-slate-200 shadow-sm text-blue-600">
                        <Database className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Secure Transfer</h4>
                        <p className="text-xs text-slate-500">256-bit Encrypted Downloads.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

    </main>
  );
};