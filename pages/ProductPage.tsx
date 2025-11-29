import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { RedactedDossier } from '../components/RedactedDossier';
import { ConciergeWizard } from '../components/ConciergeWizard';
import { DataDictionary } from '../components/DataDictionary';
import { ExecutionBrief } from '../components/ExecutionBrief';
import { BookingModal } from '../components/BookingModal';
import { IntelligenceCard } from '../components/IntelligenceCard';
import { SignalStreamBackground } from '../components/SignalStreamBackground';
import { ShieldCheck, FileWarning, ArrowLeft, ArrowDown, HelpCircle, Star, AlertTriangle, Users, MousePointer2, Calculator, DollarSign, Activity, Layers, Table, Flame, Scan, UserCheck, HardDrive, CheckCircle2, Code, ClipboardList } from 'lucide-react';

// --- NEW COMPONENTS FOR PRODUCT PAGE ---

const VerificationTimeline = () => (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
                <h3 className="font-serif text-2xl text-slate-900 mb-4">The Managed Service Workflow</h3>
                <p className="text-slate-500 text-sm">We don't pull from a stale database. A human engineer builds your list from scratch.</p>
            </div>
            <div className="relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Intake & Strategy", icon: ClipboardList, desc: "A GTM Engineer reviews your request and configures our scraper logic to target specific pain points and needs." },
                        { title: "Deep-Dive Harvest", icon: Layers, desc: "We aggregate 200+ datapoints using Clay, Social Listening, and BI Databases to identify real-time intent." },
                        { title: "Human Verification", icon: UserCheck, desc: "Our team manually validates contacts and filters for quality before the file is encrypted and sent." },
                        { title: "Secure Delivery", icon: CheckCircle2, desc: "Final clean CSV/JSON is delivered to your inbox with a custom outreach playbook." }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                            <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-2 text-center md:text-left">{step.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed text-center md:text-left">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const ImprovedAnatomySection = () => (
    <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 mb-6">
                        <MousePointer2 className="w-3 h-3" />
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Data Fidelity</span>
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900 mb-4">Anatomy of a Lead.</h3>
                    <p className="text-slate-600 font-sans leading-relaxed mb-6">
                        Most vendors sell you a "Business Card" (Name + Phone). We sell you the <strong>Reason to Call</strong>.
                        <br/><br/>
                        Every record in this list contains four distinct layers of intelligence, enriched via Clay and verified by our team.
                    </p>
                </div>
                
                <div className="md:w-2/3 w-full grid gap-4">
                    {/* Layer 1 */}
                    <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm hover:border-emerald-400 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">1. Identity Layer</h4>
                            <p className="text-xs text-slate-500">Verified Contact Info (Work Email, Mobile, LinkedIn URL).</p>
                        </div>
                    </div>
                    {/* Layer 2 */}
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-xl transform md:scale-105 z-10">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-glow">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">2. Signal Layer (The Alpha)</h4>
                            <p className="text-xs text-slate-300">The specific trigger event (e.g. "Pixel Misfire" or "Hiring Surge").</p>
                        </div>
                    </div>
                    {/* Layer 3 */}
                    <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm hover:border-blue-400 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            <Layers className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">3. Context Layer</h4>
                            <p className="text-xs text-slate-500">Firmographics: Revenue, Tech Stack, Headcount Growth %.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Sticky CTA Component for CRO
const StickyAction = ({ onClick, capacity }: { onClick: () => void, capacity: number }) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-xl bg-slate-900/95 backdrop-blur-md text-white p-2 rounded-full shadow-2xl border border-slate-700 flex items-center justify-between pl-6 pr-2 animate-in slide-in-from-bottom-10 fade-in duration-500 hover:scale-[1.02] transition-transform">
    <div className="flex flex-col">
        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Engineer Available</span>
        <span className="text-xs font-bold text-slate-300">Ready to build your cohort</span>
    </div>
    <button 
      onClick={onClick}
      className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-400 transition-colors flex items-center gap-2"
    >
      Configure Build <ArrowDown className="w-4 h-4" />
    </button>
  </div>
);

const GuaranteeModule = () => (
    <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-6 mb-12 flex items-start gap-4 shadow-sm relative overflow-hidden group">
        <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
        <div className="p-3 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Human-Verified Accuracy</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
                We guarantee a <span className="font-bold text-slate-900">95% deliverability rate</span>. Our engineers verify emails using SMTP handshakes and perform a manual spot-check before delivery.
            </p>
        </div>
    </div>
);

const CustomRequestSection = ({ onOpen }: { onOpen: () => void }) => (
    <section className="py-12 bg-blue-50/50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-3">
                <Activity className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Custom Intelligence</span>
            </div>
            <h3 className="font-serif text-2xl text-slate-900 mb-3">Not seeing the exact signal you need?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto text-sm">
                We don't do "Enterprise Plans" or subscriptions. Our GTM Engineers build custom scrapers and execute full outreach campaigns for specific requirements.
            </p>
            <button 
                onClick={onOpen}
                className="bg-white border border-slate-200 text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
            >
                Schedule Strategy Briefing
            </button>
        </div>
    </section>
);

const EfficiencyCalculator = () => {
    const [hourlyRate, setHourlyRate] = useState(30);
    const [hoursPerLead, setHoursPerLead] = useState(0.5); // 30 mins to research one good lead
    const listSize = 1000;
    
    // Manual Cost
    const manualHours = listSize * hoursPerLead;
    const manualCost = manualHours * hourlyRate;
    
    // Our Cost (Approx $0.90/lead)
    const ourCost = listSize * 0.90;
    
    const savings = manualCost - ourCost;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
                        <Calculator className="w-3 h-3" />
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Cost of Inaction</span>
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900">Stop paying SDRs to be Data Entry clerks.</h3>
                    <p className="text-slate-500 mt-2 text-sm">Compare the cost of manual research vs. instant harvest.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                    <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-6">Manual Research Cost</h4>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">SDR Hourly Rate ($)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input 
                                        type="number" 
                                        value={hourlyRate}
                                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none font-mono text-slate-900"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Time to Research 1 Lead (Mins)</label>
                                <input 
                                    type="range" 
                                    min="5" max="60" step="5"
                                    value={hoursPerLead * 60}
                                    onChange={(e) => setHoursPerLead(Number(e.target.value) / 60)}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                                />
                                <div className="text-right text-xs font-mono text-slate-500 mt-1">{hoursPerLead * 60} minutes</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 md:w-1/2 bg-slate-50 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-xs text-slate-500 font-medium">Cost to build 1,000 leads manually:</span>
                            <div className="text-3xl font-serif text-red-500 mt-1 line-through decoration-slate-300">
                                ${manualCost.toLocaleString()}
                            </div>
                        </div>
                        <div className="p-4 bg-emerald-100 border border-emerald-200 rounded-lg">
                            <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block mb-1">Instant Savings</span>
                            <p className="text-sm text-emerald-900 leading-relaxed font-bold">
                                You save <span className="border-b-2 border-emerald-500">${savings.toLocaleString()}</span> and {Math.floor(manualHours)} hours of SDR time by hiring an engineer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RelatedSignals = ({ currentProduct, allProducts }: { currentProduct: any, allProducts: any[] }) => {
    // Filter logic: Same pack, but not current ID. Limit to 2.
    const related = allProducts
        .filter(p => p.pack === currentProduct.pack && p.id !== currentProduct.id)
        .slice(0, 2);

    if (related.length === 0) return null;

    return (
        <section className="py-20 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-100 rounded text-slate-600">
                        <Layers className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-serif text-xl text-slate-900">Related Intelligence</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">More signals in {currentProduct.pack}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {related.map(product => (
                        <IntelligenceCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => (
  <section className="py-24 bg-white border-t border-slate-200">
    <div className="container mx-auto px-6 max-w-4xl">
       <div className="text-center mb-12">
         <h3 className="font-serif text-3xl text-slate-900">Verified Field Reports</h3>
         <p className="text-slate-500 mt-2 font-sans">Used by growth teams at Series B+ startups.</p>
       </div>
       <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "The accuracy of the 'Tech Gap' data is frighteningly good. We booked 3 demos day one.", a: "Head of Sales, SaaS" },
            { q: "Finally, a list that isn't just generic ZoomInfo exports. This is actual intent.", a: "Founder, Agency" },
            { q: "We replaced our entire SDR research workflow with these dossiers.", a: "Growth Lead, Fintech" }
          ].map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative group hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-sm text-slate-700 mb-6 font-sans leading-relaxed font-medium">"{t.q}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-white font-mono">{t.a[0]}</div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{t.a}</span>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const FAQ = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section className="py-20 bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-6 max-w-3xl">
       <div className="text-center mb-12">
         <h3 className="font-serif text-2xl text-slate-900">Protocol FAQ</h3>
       </div>
       <div className="space-y-4">
          {[
            { q: "Do you offer refunds for bounces?", a: "Yes. If your bounce rate exceeds 5%, we provide credit for the invalid records instantly." },
            { q: "Can I request a custom signal?", a: <span>Yes. We don't do plans or subscriptions. We build custom campaigns. <button onClick={onOpenBooking} className="text-emerald-600 underline font-bold hover:text-emerald-700">Schedule a briefing</button> to discuss.</span> },
            { q: "What tools can I upload this to?", a: "The export is a standardized CSV compatible with Instantly, SmartLead, Salesforce, HubSpot, Clay, and most outreach tools." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg px-6 py-6 hover:border-slate-300 transition-colors shadow-sm">
               <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                 <HelpCircle className="w-4 h-4 text-slate-400" /> {item.q}
               </h4>
               <p className="text-sm text-slate-600 leading-relaxed pl-6 border-l-2 border-slate-100 ml-2">{item.a}</p>
            </div>
          ))}
       </div>
    </div>
  </section>
);

export const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Dynamic randomizers for social proof
  const [viewers, setViewers] = useState(12);
  const [capacity, setCapacity] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Randomize slightly on load to feel authentic but stable
    setViewers(Math.floor(Math.random() * (24 - 8 + 1)) + 8);
    setCapacity(Math.floor(Math.random() * (12 - 3 + 1)) + 3);
  }, [slug]);

  const scrollToWizard = () => {
    document.getElementById('build-kit')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!product) {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-paper p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
          <div className="bg-white border border-slate-200 p-12 rounded-xl shadow-xl text-center max-w-lg relative z-10">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 border border-red-100">
              <FileWarning className="w-8 h-8" />
            </div>
            <h2 className="font-mono text-xs text-red-600 uppercase tracking-widest mb-2">Error 404 // REDACTED</h2>
            <h1 className="font-serif text-3xl text-slate-900 mb-4">Intelligence Not Found</h1>
            <Link to="/" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Return to Console
            </Link>
          </div>
        </div>
    );
  }

  return (
    <main className="min-h-screen bg-paper text-slate-900 font-sans relative selection:bg-emerald-200 selection:text-emerald-900">
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* 2-Column Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        {/* Live Signal Background - The "Matrix" Effect */}
        <SignalStreamBackground />
        
        {/* Gradient Fade to connect with content below */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-paper to-transparent z-0"></div>

        <div className="container mx-auto relative z-10">
            {/* Nav Breadcrumbs */}
            <div className="mb-8 flex justify-between items-center animate-in fade-in slide-in-from-top-4 duration-700">
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                <ArrowLeft className="w-3 h-3" /> CATALOG_INDEX
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-600 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                {viewers} Engineers active now
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
                {/* Left: Copy & Value Prop */}
                <div className="lg:w-1/2 pt-4">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-slate-200 rounded-md mb-6 shadow-sm animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                        <div className={`w-2 h-2 rounded-full ${product.signal_strength === 'High' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></div>
                        <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                        {product.pack}
                        </span>
                        <span className="h-3 w-px bg-slate-200"></span>
                        <span className="text-[10px] font-mono text-slate-400">ID_{product.id}</span>
                    </div>
                    
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                        {product.hero_headline}
                    </h1>
                    
                    <p className="text-lg text-slate-600 font-sans mb-8 leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                        {product.pain_point}. Verified by our GTM engineers to ensure high deliverability and relevance.
                    </p>
                    
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                        <GuaranteeModule />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                        <button 
                        onClick={scrollToWizard}
                        className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2 group hover:scale-[1.02] active:scale-95"
                        >
                            <span>Configure Build</span>
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </button>
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 rounded-lg shadow-sm">
                            <Users className="w-5 h-5 text-slate-500" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Saturation Check</span>
                                <span className="text-xs font-medium text-slate-500">{capacity} spots left in cohort</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: The Data Proof (Redacted Dossier moved up) */}
                <div className="lg:w-1/2 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                    <div className="relative">
                        {/* Decorative Elements behind dossier */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-pattern-dots opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50"></div>
                        
                        {/* Interactive Dossier Component */}
                        <div className="relative z-10">
                            <RedactedDossier data={product.payload} />
                            
                            {/* Live Connection Status */}
                            <div className="mt-4 px-6 py-2 bg-white/50 backdrop-blur rounded-full border border-slate-200 inline-flex items-center gap-3 text-xs font-mono text-slate-500 shadow-sm">
                                <span className="flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="font-bold text-emerald-700">LIVE FEED ACTIVE</span>
                                </span>
                                <span className="h-3 w-px bg-slate-300"></span>
                                <span>LATENCY: 14ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. CONVERSION SECTION: Wizard (Moved UP) */}
      <section className="py-12 bg-slate-900 text-white relative overflow-hidden mt-12">
        {/* Abstract grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 text-emerald-400 animate-in fade-in slide-in-from-bottom-2">
             <Flame className="w-4 h-4 animate-pulse" />
             <span className="text-xs font-mono uppercase tracking-widest font-bold">High Demand: {capacity} spots left in this cohort</span>
          </div>
          <div className="text-center mb-10">
             <h2 className="font-serif text-3xl mb-4 text-white">Configure Your Build</h2>
             <p className="text-slate-400 max-w-lg mx-auto">Select your specific filters below. Our GTM Engineers will build and verify your unique CSV export.</p>
          </div>
          <ConciergeWizard listId={product.id} filters={product.wizard_config.filters} onBook={() => setIsBookingOpen(true)} />
        </div>
      </section>

      {/* 3. PIVOT SECTION: Related Intelligence */}
      <RelatedSignals currentProduct={product} allProducts={products} />
      
      {/* 4. LOGIC SECTION: Reinforcement */}
      <ExecutionBrief product={product} />
      <VerificationTimeline />
      <EfficiencyCalculator />
      <ImprovedAnatomySection />
      
      {/* 5. SPECS SECTION: Deep Details */}
      <DataDictionary data={product.payload} />
      
      {/* 6. SUPPORT SECTION: FAQ & Custom */}
      <CustomRequestSection onOpen={() => setIsBookingOpen(true)} />
      <Testimonials />
      <FAQ onOpenBooking={() => setIsBookingOpen(true)} />
      
      <StickyAction onClick={scrollToWizard} capacity={capacity} />
    </main>
  );
};