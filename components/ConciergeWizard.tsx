import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Users, Calculator, Terminal, TrendingUp, DollarSign, Clock, Zap, Phone, Building2, ShieldCheck, Lock, Edit3, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PaymentGatewayModal } from './PaymentGatewayModal';

interface WizardProps {
  listId: string;
  filters: { id: string; label: string; options: string[] }[];
  onBook: () => void;
}

export const ConciergeWizard = ({ listId, filters, onBook }: WizardProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  
  // State for Quantity Calculator - Default to 1,000
  const [leadCount, setLeadCount] = useState<number>(1000);
  const [tierInfo, setTierInfo] = useState({ price: 0.90, time: "6 Hours", name: "Tier 2" });
  
  // Keep filters state
  const [filterData, setFilterData] = useState<Record<string, string>>({});
  const [engineerNotes, setEngineerNotes] = useState("");

  useEffect(() => {
    // Pricing Logic
    let price = 1.00;
    let time = "4 Hours";
    let name = "Tier 1";

    if (leadCount >= 5000) {
        price = 0.70;
        time = "24 Hours";
        name = "Tier 4";
    } else if (leadCount >= 2500) {
        price = 0.80;
        time = "12 Hours";
        name = "Tier 3";
    } else if (leadCount >= 1000) {
        price = 0.90;
        time = "6 Hours";
        name = "Tier 2";
    }

    setTierInfo({ price, time, name });
  }, [leadCount]);

  const totalCost = leadCount * tierInfo.price;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadCount(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (val > 5000) val = 5000;
    setLeadCount(val);
  };

  const handleFilterChange = (id: string, value: string) => {
    setFilterData(prev => ({ ...prev, [id]: value }));
  };

  const initiateBuild = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadCount < 500) {
        setLeadCount(500);
        return;
    }
    // Open Payment Modal instead of direct submit
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = () => {
      setIsPaymentOpen(false);
      navigate('/success');
  };

  // Upsell Logic
  const getUpsell = () => {
      if (leadCount >= 500 && leadCount < 1000) {
          // Close to Tier 2
          if (leadCount >= 800) return { needed: 1000 - leadCount, nextTier: "Tier 2 ($0.90/rec)" };
      }
      if (leadCount >= 1000 && leadCount < 2500) {
          // Close to Tier 3
          if (leadCount >= 2200) return { needed: 2500 - leadCount, nextTier: "Tier 3 ($0.80/rec)" };
      }
      if (leadCount >= 2500 && leadCount < 5000) {
          // Close to Tier 4
          if (leadCount >= 4500) return { needed: 5000 - leadCount, nextTier: "Tier 4 ($0.70/rec)" };
      }
      return null;
  };

  const upsell = getUpsell();

  return (
    <>
    <PaymentGatewayModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        onSuccess={handlePaymentSuccess}
        amount={totalCost}
        leadCount={leadCount}
        tier={tierInfo.name}
        deliveryTime={tierInfo.time}
    />

    <div id="build-kit" className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 max-w-6xl mx-auto flex flex-col lg:flex-row">
      {/* Left Panel: Configuration Form & Pricing Controls */}
      <div className="p-8 lg:w-3/5 space-y-8 bg-slate-900 relative flex flex-col">
        <div className="mb-2">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <h3 className="font-mono text-xs text-emerald-400">ENGINEER_READY // LIST_{listId}</h3>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <Lock className="w-3 h-3" />
                  SECURE_CHANNEL
              </div>
           </div>
           <h2 className="font-serif text-3xl text-white">Configure Your Build</h2>
           <p className="text-slate-400 text-sm mt-2 font-sans max-w-md">
             An engineer will review these specs and begin the harvest immediately after payment.
           </p>
        </div>
        
        <form onSubmit={initiateBuild} className="space-y-8 flex-grow">
          {/* Filters Section */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
             {filters.map((filter) => (
               <div key={filter.id} className="space-y-1">
                 <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{filter.label}</label>
                 <select 
                   onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                   className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white focus:border-emerald-500 outline-none cursor-pointer"
                 >
                   <option value="">Any / All</option>
                   {filter.options.map((opt) => (
                     <option key={opt} value={opt}>{opt}</option>
                   ))}
                 </select>
               </div>
             ))}
          </div>

          {/* Engineer Notes */}
          <div className="space-y-2">
             <label className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wide">
                <Edit3 className="w-3 h-3 text-emerald-500" /> Notes for your GTM Engineer
             </label>
             <textarea 
                value={engineerNotes}
                onChange={(e) => setEngineerNotes(e.target.value)}
                placeholder="Tell us what your ideal customer is complaining about online, or what specific tech stack they must use..."
                className="w-full h-20 bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:border-emerald-500 outline-none resize-none font-mono leading-relaxed"
             />
          </div>

          {/* Quantity Slider Section */}
          <div className="space-y-6">
             <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                   Target Lead Volume
                </label>
                <div className="flex items-center gap-2">
                   <Users className="w-4 h-4 text-emerald-500" />
                   <input 
                      type="number"
                      min="500"
                      max="5000"
                      step="100"
                      value={leadCount}
                      onChange={handleInputChange}
                      className="bg-slate-800 border border-slate-600 rounded px-3 py-1 text-right text-white font-mono font-bold w-24 focus:border-emerald-500 outline-none focus:ring-1 focus:ring-emerald-500"
                   />
                </div>
             </div>
             
             <div className="relative pt-6 pb-2 px-1">
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="100" 
                  value={leadCount}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2 relative">
                   <span className="absolute left-0 -translate-x-1/2">500</span>
                   <span className="absolute left-1/2 -translate-x-1/2">2,500</span>
                   <span className="absolute right-0 translate-x-1/2">5,000</span>
                </div>
                
                {/* Upsell Tooltip */}
                {upsell && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 bg-amber-500/10 border border-amber-500/50 text-amber-500 px-3 py-1 rounded text-[10px] font-bold flex items-center gap-2 animate-pulse whitespace-nowrap">
                        <Zap className="w-3 h-3" />
                        Tip: Add {upsell.needed} more leads to unlock {upsell.nextTier}
                    </div>
                )}
             </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-slate-800">
            <div className="bg-emerald-900/10 border border-emerald-500/20 p-3 rounded-lg mb-6 flex items-start gap-3">
               <HelpCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
               <div>
                  <h4 className="text-emerald-400 text-xs font-bold mb-1">Why the wait?</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                     Quality takes time. We don't just download a static CSV; we build it from scratch. Your dedicated engineer needs 4-24 hours to ensure 100% accuracy.
                  </p>
               </div>
            </div>

            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-lg flex items-center justify-center gap-3 transition-all group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] border border-emerald-400/20"
            >
                {isSubmitting ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-mono">INITIALIZING...</span>
                </>
                ) : (
                <>
                    <span className="font-mono text-lg tracking-tight">DEPLOY ENGINEER</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
                )}
            </button>
            
            <div className="flex items-center justify-center gap-6 text-[10px] text-slate-500 font-mono mt-4">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Human-Verified Accuracy</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-600" /> Encrypted Delivery</span>
            </div>
          </div>
        </form>
      </div>

      {/* Right Panel: Live Estimates Terminal */}
      <div className="bg-slate-950 lg:w-2/5 p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10 flex-grow flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
             <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Transaction Preview</h4>
             <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-mono text-emerald-500">LIVE_CALC</span>
             </div>
          </div>
          
          <div className="space-y-6">
             {/* Total Investment */}
             <div>
                <label className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">
                   <DollarSign className="w-4 h-4 text-emerald-500" /> Total Investment
                </label>
                <div className="text-5xl font-mono text-white tracking-tighter">
                   ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
             </div>

             <div className="h-px bg-slate-800 w-full" />

             {/* Applied Rate */}
             <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                        Applied Rate
                    </label>
                    <div className="text-xl font-mono text-emerald-400">
                        ${tierInfo.price.toFixed(2)} <span className="text-sm text-slate-600">/ lead</span>
                    </div>
                 </div>
                 
                 <div>
                    <label className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                        Tier Level
                    </label>
                    <div className="text-xl font-mono text-blue-400">
                        {tierInfo.name}
                    </div>
                 </div>
             </div>

             {/* Compilation Time */}
             <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                   <Clock className="w-4 h-4 text-amber-500" />
                   <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Estimated Delivery</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-2xl font-serif text-white">{tierInfo.time}</span>
                   <span className="text-[10px] text-slate-500 font-mono text-right">
                       Pending<br/>Human Review
                   </span>
                </div>
                {/* Visual Progress Bar for Time */}
                <div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-full opacity-60 relative overflow-hidden"></div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="relative z-10 mt-8 pt-6 border-t border-slate-800">
           <div className="flex gap-4 text-[10px] font-mono text-slate-500">
              <div className="flex-1">
                 <span className="block text-slate-600 mb-1">OUTPUT_FORMAT</span>
                 <span className="text-slate-300">CSV / JSON</span>
              </div>
              <div className="flex-1">
                 <span className="block text-slate-600 mb-1">DATA_KEY</span>
                 <span className="text-slate-300 truncate">SHA256_{listId}_SECURE</span>
              </div>
           </div>
        </div>
      </div>
    </div>
    </>
  );
};