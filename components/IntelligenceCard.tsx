import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ListProduct } from '../types';
import { ArrowRight, Signal, ShieldCheck, Fingerprint, Clock } from 'lucide-react';
import { EcomVisual, TechVisual, RoleVisual, GrowthVisual, IntentVisual } from './CardVisuals';

const PACK_COLORS = {
  "Revenue Rescue": "bg-rose-500",
  "Tech & Ops": "bg-blue-500",
  "Personnel Shock": "bg-amber-500",
  "Growth & Funding": "bg-emerald-500",
  "Competitor & Intent": "bg-purple-500"
};

export const IntelligenceCard: React.FC<{ product: ListProduct }> = ({ product }) => {
  const stripeColor = PACK_COLORS[product.pack] || "bg-slate-500";

  // Generate a consistent "random" verification time based on product ID
  const verificationTime = useMemo(() => {
    const hours = (parseInt(product.id) * 3) % 12 + 1;
    return `${hours}h ago`;
  }, [product.id]);

  return (
    <Link to={`/marketplace/${product.slug}`} className="block h-full">
      <div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 flex flex-col h-full ring-0 hover:ring-1 hover:ring-slate-900/5">
        {/* Top Color Stripe */}
        <div className={`h-1 w-full ${stripeColor}`} />
        
        {/* Header */}
        <div className="px-5 py-4 flex justify-between items-start border-b border-slate-50">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              LIST_{product.id}
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-emerald-600 bg-emerald-50 px-1 rounded flex items-center gap-1">
                 <Clock className="w-2 h-2" /> {verificationTime}
              </span>
            </span>
            <div className="flex items-center gap-1.5 mt-1">
               {product.signal_strength === 'High' ? (
                 <div className="flex gap-0.5">
                   <div className="w-1 h-3 bg-emerald-500 rounded-sm" />
                   <div className="w-1 h-3 bg-emerald-500 rounded-sm" />
                   <div className="w-1 h-3 bg-emerald-500 rounded-sm" />
                 </div>
               ) : (
                 <div className="flex gap-0.5">
                   <div className="w-1 h-3 bg-amber-500 rounded-sm" />
                   <div className="w-1 h-3 bg-amber-500 rounded-sm" />
                   <div className="w-1 h-3 bg-slate-200 rounded-sm" />
                 </div>
               )}
               <span className="text-[10px] font-bold text-slate-600 uppercase">{product.signal_strength} Fidelity</span>
            </div>
          </div>
          <ShieldCheck className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
        </div>

        {/* Body */}
        <div className="p-5 flex-grow flex flex-col">
          <div className="mb-4">
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide mb-2 ${stripeColor} bg-opacity-10 text-slate-900`}>
              {product.pack}
            </span>
            <h3 className="font-serif text-xl font-medium text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
              {product.title}
            </h3>
          </div>
          
          <div className="relative mb-6 flex-grow">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
            <p className="pl-4 text-sm text-slate-500 font-sans leading-relaxed">
              {product.pain_point}
            </p>
          </div>

          {/* Visual Data Payload */}
          <div className="mt-auto bg-slate-50/50 rounded-lg p-3 border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all group-hover:border-slate-200">
            {product.payload.type === 'ECOM_SPEND' && <EcomVisual data={product.payload} />}
            {product.payload.type === 'TECH_GAP' && <TechVisual data={product.payload} />}
            {product.payload.type === 'ROLE_CHANGE' && <RoleVisual data={product.payload} />}
            {product.payload.type === 'GROWTH_EVENT' && <GrowthVisual data={product.payload} />}
            {product.payload.type === 'INTENT_SIGNAL' && <IntentVisual data={product.payload} />}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between group-hover:bg-slate-900 transition-colors duration-300">
           <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-500">
              <Fingerprint className="w-3 h-3" />
              <span className="text-[10px] font-mono">VERIFIED_SOURCE</span>
           </div>
           <div className="flex items-center gap-1 text-slate-900 font-bold text-xs group-hover:text-white">
              <span>Inspect Asset</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </div>
    </Link>
  );
};