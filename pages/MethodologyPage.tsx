import React, { useEffect } from 'react';
import { ShieldAlert, Zap, Lock, Crosshair, Users, Activity, BarChart3, Fingerprint, Cpu, Search, CheckCircle2, XCircle, Database, HelpCircle, ArrowRight, Server, Globe, Radio, Eye, Layers, Code2, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';

/* --- SEO HOOK --- */
const useSEO = () => {
  useEffect(() => {
    // 1. Title Tag Optimization
    document.title = "The Protocol | CRS Event-Driven Data Methodology";
    
    // 2. Meta Description Optimization
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore the CRS Protocol: Our proprietary methodology for harvesting live B2B intent signals. Learn how we ingest, verify, and enrich funding, hiring, and tech intent data.");
    }
  }, []);
};

const ProcessStep = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: string, icon: any }) => (
  <div className="relative group h-full">
    <div className="absolute inset-0 bg-slate-100 rounded-xl -rotate-1 group-hover:rotate-1 transition-transform duration-300"></div>
    <div className="relative bg-white border border-slate-200 p-6 rounded-xl h-full hover:border-primary/50 hover:shadow-glow transition-all flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <span className="font-mono text-4xl text-slate-100 font-bold group-hover:text-slate-200 transition-colors">{number}</span>
      </div>
      <h3 className="font-serif text-xl text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed font-sans">{desc}</p>
    </div>
  </div>
);

const ComparisonRow = ({ label, oldWay, newWay }: { label: string, oldWay: string, newWay: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors px-4 rounded-lg items-center">
    <div className="flex items-center text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
      {label}
    </div>
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
      <span className="line-through decoration-red-200 decoration-2 decoration-wavy">{oldWay}</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
      <span>{newWay}</span>
    </div>
  </div>
);

const DecayCurveGraph = () => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative h-64 flex flex-col justify-end overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
            {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-100"></div>)}
        </div>
        
        {/* Labels */}
        <div className="absolute top-4 left-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Data Accuracy %</div>
        <div className="absolute bottom-4 right-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Time (Months)</div>

        <div className="relative w-full h-40 flex items-end px-2">
             {/* Competitor Line (Decay) */}
             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,10 C50,10 100,50 300,150" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
                 <circle cx="0" cy="10" r="4" fill="#ef4444" />
                 <circle cx="300" cy="150" r="4" fill="#ef4444" />
                 <text x="100" y="80" fill="#ef4444" fontSize="10" fontWeight="bold">Competitors (Static)</text>
             </svg>
             
             {/* CRS Line (Stable) */}
             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,5 L300,5" fill="none" stroke="#10b981" strokeWidth="3" />
                 <circle cx="0" cy="5" r="4" fill="#10b981" />
                 <circle cx="300" cy="5" r="4" fill="#10b981" />
                 <text x="100" y="-10" fill="#10b981" fontSize="10" fontWeight="bold">CRS Protocol (Live)</text>
             </svg>
        </div>
        
        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 text-[10px] text-slate-400 font-mono">
            <span>Day 0</span>
            <span>Day 30</span>
            <span>Day 60</span>
            <span>Day 90</span>
        </div>
    </div>
);

const ComplianceFlow = () => (
    <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
        <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                <Globe className="w-6 h-6 text-slate-500" />
            </div>
            <span className="text-xs font-bold text-slate-600">Public Source</span>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-300" />
        <div className="flex flex-col items-center gap-2 text-center">
             <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                <GitMerge className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xs font-bold text-slate-600">B2B Filter</span>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-300" />
        <div className="flex flex-col items-center gap-2 text-center">
             <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                <ShieldAlert className="w-6 h-6 text-amber-500" />
            </div>
            <span className="text-xs font-bold text-slate-600">PII Redaction</span>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-300" />
        <div className="flex flex-col items-center gap-2 text-center">
             <div className="w-12 h-12 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-emerald-700">GDPR Compliant</span>
        </div>
    </div>
);

const SourceNode = ({ label, icon: Icon }: { label: string, icon: any }) => (
    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded border border-slate-700 hover:bg-slate-800 transition-colors">
        <div className="p-1.5 bg-slate-700 rounded text-emerald-400">
            <Icon className="w-4 h-4" />
        </div>
        <span className="text-xs font-mono text-slate-300">{label}</span>
    </div>
);

const TaxonomyCard = ({ title, color, desc, tags }: { title: string, color: string, desc: string, tags: string[] }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all group">
        <div className={`w-12 h-1 rounded-full ${color} mb-4 group-hover:scale-110 transition-transform origin-left`}></div>
        <h3 className="font-serif text-xl text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4 h-10">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(t => (
                <span key={t} className="text-[10px] font-mono bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 uppercase tracking-tight">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

export const MethodologyPage = () => {
  useSEO(); 

  return (
    <main className="min-h-screen bg-paper font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark text-white mb-8 shadow-xl shadow-primary/20">
                <Crosshair className="w-3 h-3 text-primary-hover" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Protocol V4.2 // Declassified</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Data Decay is the Enemy.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
                Traditional databases (ZoomInfo, Apollo) sell static snapshots that decay at 2% per month. 
                <br className="hidden md:block" />
                The CRS Protocol captures <span className="font-bold text-slate-900 bg-emerald-50 px-1">live events</span> the moment they occur.
            </p>
            <div className="flex justify-center gap-8 text-xs font-mono text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Live Ingestion</span>
                <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> SMTP Verified</span>
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Saturation Limits</span>
            </div>
        </div>
      </section>

      {/* The Engine Visualization */}
      <section className="py-24 bg-subtle relative border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="mb-16 md:text-center">
              <h2 className="font-serif text-3xl text-slate-900 mb-4">The Harvest Engine</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">How we turn open web chaos into pure alpha.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
              
              <ProcessStep 
                number="01" 
                title="Ingestion" 
                desc="We monitor 50+ public data sources (Ad Libraries, DNS records, Job Boards) every hour." 
                icon={Globe}
              />
              <ProcessStep 
                number="02" 
                title="Detection" 
                desc="Our heuristic engine flags anomalies: Pixel drops, Tech installs, or Executive churn." 
                icon={Cpu}
              />
              <ProcessStep 
                number="03" 
                title="Verification" 
                desc="Signal identified. We cross-reference contact data via SMTP handshakes to ensure validity." 
                icon={CheckCircle2}
              />
              <ProcessStep 
                number="04" 
                title="Delivery" 
                desc="Clean JSON/CSV payload delivered to the marketplace. Saturation lock enabled." 
                icon={Server}
              />
           </div>
        </div>
      </section>

      {/* Decay Curve and Compliance */}
      <section className="py-24 bg-white border-b border-slate-200">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="font-serif text-3xl text-slate-900 mb-4">The Decay Curve</h2>
                   <p className="text-slate-600 mb-6">
                       Static databases start dying the moment they are scraped. Our live protocol ensures 95% validity at the moment of harvest.
                   </p>
                   <DecayCurveGraph />
                </div>
                <div>
                   <h2 className="font-serif text-3xl text-slate-900 mb-4">Compliance Firewall</h2>
                   <p className="text-slate-600 mb-6">
                       We automate the "Legitimate Interest" test. All data is processed through our strict compliance engine before it touches your CRM.
                   </p>
                   <ComplianceFlow />
                </div>
            </div>
         </div>
      </section>

      {/* Sensor Network */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-10 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
         <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-6 text-emerald-400">
                        <Radio className="w-5 h-5 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest font-bold">Global Sensor Network</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">Listening to the entire web.</h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        We don't rely on a single database. We aggregate live signals from over 50 disparate public sources to create a "composite view" of every company.
                    </p>
                    <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                            <span>SOURCES_ONLINE</span>
                            <span className="text-emerald-400">54/54</span>
                        </div>
                        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-2/3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <SourceNode label="Meta Ad Library" icon={Eye} />
                        <SourceNode label="LinkedIn Jobs" icon={Users} />
                        <SourceNode label="BuiltWith API" icon={Code2} />
                        <SourceNode label="Google PageSpeed" icon={Activity} />
                        <SourceNode label="DNS Records" icon={Globe} />
                        <SourceNode label="G2 Reviews" icon={Layers} />
                        <SourceNode label="SEC Filings" icon={Database} />
                        <SourceNode label="ListenNotes API" icon={Radio} />
                        <SourceNode label="Glassdoor" icon={Search} />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Trust Footer */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
          <div className="container mx-auto px-6">
            <h3 className="font-serif text-3xl text-slate-900 mb-8">Ready to hunt?</h3>
            <div className="flex justify-center gap-4">
               <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-hover transition-all shadow-glow hover:shadow-glow-lg transform hover:-translate-y-0.5">
                  <Fingerprint className="w-4 h-4" />
                  Access The Live Feed
               </Link>
               <Link to="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold text-sm hover:border-slate-300 hover:text-slate-900 transition-all">
                  Request Custom Build
               </Link>
            </div>
          </div>
      </section>
    </main>
  );
};