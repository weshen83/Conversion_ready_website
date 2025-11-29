import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { IntelligenceCard } from '../components/IntelligenceCard';
import { BookingModal } from '../components/BookingModal';
import { filterProducts } from '../utils';
import { products } from '../data/products';
import { 
  Flame, Filter, SlidersHorizontal, Search, X, ChevronRight, Layers, 
  ArrowUpRight, ShieldCheck, Activity, Database, Crosshair, Download, 
  Zap, TrendingUp, CheckCircle2, XCircle, ChevronDown, Tag, FileText, 
  ArrowRight, Building2, Globe, Server, HelpCircle, BarChart3, Mail, 
  Phone, Target, User, Users, DollarSign, ArrowDown, Terminal, Ear, Code2, UserCheck
} from 'lucide-react';

/* --- SEO & METADATA --- */
const useSEO = () => {
  useEffect(() => {
    document.title = "CRS | Hire a GTM Engineer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Don't buy static lists. Hire a GTM Engineer to build fresh, human-verified datasets using Clay and custom scrapers.");
    }
  }, []);
};

/* --- COMPONENTS --- */

const TerminalWindow = () => {
    const [lines, setLines] = useState<string[]>([
        "> ENGINEER_SESSION_INIT: ACTIVE",
        "> CONNECTING TO CLAY_WORKFLOW_V4...",
        "> HUMAN_REVIEW_STATION: ONLINE...",
    ]);

    useEffect(() => {
        const potentialLines = [
            "TASK: Scraping Reddit for 'Competitor Complaints' -> [DONE]",
            "ENRICHMENT: Analyzing Tech Stack via BuiltWith -> [VERIFIED]",
            "REVIEW: Engineer manually checking LinkedIn validity -> [VALID]",
            "DETECTED: Hiring Manager confirmed active 2 hours ago -> [UNLOCK]",
            "SIGNAL: Negative G2 Review parsed -> [CONTEXT ADDED]",
            "STATUS: Building custom cohort for Client_882..."
        ];

        const interval = setInterval(() => {
            const randomLine = potentialLines[Math.floor(Math.random() * potentialLines.length)];
            const timestamp = new Date().toLocaleTimeString([], { hour12: false });
            setLines(prev => [`> [${timestamp}] ${randomLine}`, ...prev].slice(0, 6));
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-lg overflow-hidden shadow-2xl border border-slate-800 font-mono text-xs my-8">
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                </div>
                <span className="text-slate-500 ml-2">gtm_engineer_console.sh</span>
            </div>
            <div className="p-4 h-48 overflow-hidden flex flex-col justify-end">
                {lines.map((line, i) => (
                    <div key={i} className={`${i === 0 ? 'text-emerald-400 font-bold' : 'text-slate-500'} mb-1`}>
                        {line}
                    </div>
                ))}
                <div className="animate-pulse text-emerald-500 mt-1">_</div>
            </div>
        </div>
    );
};

const SocialProofTicker = () => (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-6 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-4">
             <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Engineering Stack</span>
        </div>
        <div className="flex justify-center gap-12 grayscale opacity-50 select-none flex-wrap px-6 items-center">
            {['Clay', 'LinkedIn', 'Instantly', 'SmartLead', 'Python', 'Apollo'].map(company => (
                <span key={company} className="text-xl font-serif font-bold text-slate-400">{company}</span>
            ))}
        </div>
    </div>
);

const HybridIntelligenceGrid = () => (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-5 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 mb-6">
                    <UserCheck className="w-3 h-3" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Human-in-the-Loop Protocol</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Not a Database. An Engineering Service.</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Databases are fast but inaccurate. We trade speed for perfection. <br/>
                    Our GTM Engineers spend 4-24 hours building your list from scratch.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-900/20 group-hover:scale-110 transition-transform">
                        <Ear className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">AI Social Listening</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We analyze what your prospects are saying on social media (LinkedIn, Twitter, Reddit) to capture frustration and real-time intent signals before they hit a database.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Tech Stack Analysis</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We verify backend technologies (Shopify, AWS, Klaviyo, Salesforce) by scanning source code and DNS records to ensure they fit your specific ICP requirements.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-purple-400 mb-6 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform">
                        <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Human-Verified Validity</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        AI is fast, but humans are accurate. A GTM Engineer double-checks every bounce signal and manually reviews the list quality before encryption and delivery.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CustomSolutionsBanner = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
    <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-30 pointer-events-none"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-8">
            <Target className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Bespoke Engineering</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">Need a custom signal?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
             Our GTM Engineers build custom scrapers, Clay workflows, and enrichment pipelines for your specific needs. If you can define the signal, we can capture it.
          </p>
          <div className="flex flex-wrap gap-4">
             <button 
                onClick={onOpenBooking}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all shadow-xl flex items-center gap-2 transform hover:-translate-y-0.5"
             >
                <Phone className="w-4 h-4" /> Book a Strategy Briefing
             </button>
             <Link to="/contact" className="px-8 py-4 rounded-lg border border-slate-200 hover:border-slate-400 font-bold text-sm transition-all text-slate-600 hover:text-slate-900">
                View Capabilities
             </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full bg-white rounded-2xl p-8 border border-slate-200 shadow-2xl">
           <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
             <Database className="w-4 h-4 text-emerald-500" /> Recent Custom Builds
           </h3>
           <ul className="space-y-6">
             {[
               { name: "Scraped 15k Dental Practices using 'Open Dental'", time: "24h turnaround" },
               { name: "Identified 500 Shopify stores engaging with 'Competitor X' on Twitter", time: "48h turnaround" },
               { name: "Built 'Hiring + Funding' intent model for Fintech VC", time: "Custom Engagement" }
             ].map((item, i) => (
               <li key={i} className="flex justify-between items-start gap-4 text-sm group">
                 <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{item.name}</span>
                 <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap bg-slate-100 px-2 py-1 rounded border border-slate-200">{item.time}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  </section>
);

export const HomePage = () => {
  useSEO();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Filter States
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);

  const filteredProducts = filterProducts(products, selectedPersona, selectedVertical, null, null, searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="min-h-screen bg-paper">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-30 pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="lg:w-1/2 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white mb-6 shadow-xl shadow-slate-900/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Powered by Clay, Custom AI, & Human Review</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Don't buy static lists. <br/>Hire a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">GTM Engineer</span> to build yours fresh.
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 max-w-xl font-sans leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    We combine custom scraping, social listening, and <strong>human verification</strong> to deliver 100% accurate intent data. 4-24 Hour Turnaround.
                </p>

                <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <button 
                        onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all shadow-glow hover:shadow-glow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <Zap className="w-4 h-4" /> Browse Catalog
                    </button>
                    <Link to="/protocol" className="px-8 py-4 rounded-lg border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-900 hover:text-slate-900 transition-all flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Why The Wait?
                    </Link>
                </div>
             </div>

             <div className="lg:w-1/2 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                 <TerminalWindow />
             </div>
          </div>
        </div>
      </section>

      <SocialProofTicker />
      
      <HybridIntelligenceGrid />

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-6 container mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
           <div>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Signal Marketplace</h2>
              <p className="text-slate-500 max-w-lg">
                Select a signal below to task an engineer with a fresh harvest. 
              </p>
           </div>
           
           <div className="w-full md:w-auto relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search signals (e.g. 'Shopify', 'Hiring')..." 
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg w-full md:w-80 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
              />
           </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-slate-200">
           <div className="flex items-center gap-2 mr-4 text-slate-400">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide">Filter View:</span>
           </div>
           
           {/* Persona Filter */}
           <div className="relative">
              <select 
                value={selectedPersona || ""}
                onChange={(e) => setSelectedPersona(e.target.value || null)}
                className="appearance-none bg-white border border-slate-200 text-slate-700 py-1.5 pl-3 pr-8 rounded text-xs font-bold focus:border-primary outline-none cursor-pointer hover:border-slate-300"
              >
                <option value="">All Roles</option>
                <option value="Marketer / Agency">Marketers & Agencies</option>
                <option value="Sales Leader">Sales Leaders</option>
                <option value="Founder">Founders</option>
                <option value="Recruiter">Recruiters</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
           </div>

           {/* Vertical Filter */}
           <div className="relative">
              <select 
                value={selectedVertical || ""}
                onChange={(e) => setSelectedVertical(e.target.value || null)}
                className="appearance-none bg-white border border-slate-200 text-slate-700 py-1.5 pl-3 pr-8 rounded text-xs font-bold focus:border-primary outline-none cursor-pointer hover:border-slate-300"
              >
                <option value="">All Verticals</option>
                <option value="E-commerce">E-commerce</option>
                <option value="SaaS & Tech">SaaS & Tech</option>
                <option value="Retail & Local">Retail & Local</option>
                <option value="Professional Services">Professional Services</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
           </div>

           {(selectedPersona || selectedVertical || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedPersona(null);
                  setSelectedVertical(null);
                  setSearchQuery("");
                }}
                className="ml-auto text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
           )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredProducts.map((product) => (
             <IntelligenceCard key={product.id} product={product} />
           ))}
        </div>

        {filteredProducts.length === 0 && (
           <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                 <Search className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-slate-600 mb-2">No signals found.</h3>
              <p className="text-slate-400 text-sm">Try adjusting your filters or request a custom build.</p>
              <button onClick={() => setIsBookingOpen(true)} className="mt-4 text-primary font-bold text-sm hover:underline">
                 Request Custom Signal
              </button>
           </div>
        )}
      </section>
      
      <CustomSolutionsBanner onOpenBooking={() => setIsBookingOpen(true)} />

    </main>
  );
};