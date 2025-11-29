import React, { useEffect } from 'react';
import { Terminal, Code, Cpu, Shield, Globe, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechNode = ({ label }: { label: string }) => (
    <div className="px-3 py-2 bg-slate-800 rounded border border-slate-700 text-xs font-mono text-emerald-400 flex items-center justify-center hover:bg-slate-700 hover:border-emerald-500/50 transition-all cursor-default">
        {label}
    </div>
);

export const AboutPage = () => {
  useEffect(() => {
    document.title = "Manifesto | Conversion-Ready System";
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-900 selection:text-white">
      
      {/* Header */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-5 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 mb-8">
                <Terminal className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Conversion-Ready System</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-8 tracking-tight leading-tight">
                The database is dead. <br/><span className="text-emerald-500">Long live the stream.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
                We built Conversion-Ready System (CRS) because we were tired of buying "fresh" leads that were 6 months old.
                Static databases are artifacts of a slower era. The modern market moves too fast for snapshots.
            </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 border-y border-slate-900 bg-slate-900/50">
          <div className="container mx-auto max-w-3xl space-y-8 text-lg text-slate-300 leading-relaxed">
              <p>
                  <strong className="text-white">The Origin:</strong> In 2022, our founding team was running a high-velocity outbound agency. We spent over $150k on data vendors (ZoomInfo, Apollo, Lusha).
              </p>
              <p>
                  The result? <span className="text-red-400">20% bounce rates</span> and prospects replying "I left that job 4 months ago."
              </p>
              <p>
                  We realized that the "Database Model" is fundamentally broken. It relies on scraping LinkedIn once a quarter and hoping nothing changes. But everything changes. People move. Tech stacks churn. Budgets open and close in days.
              </p>
              <p>
                  So we stopped buying databases and started hiring <strong>GTM Engineers</strong>. We build custom scrapers, use <strong>Clay</strong> for enrichment, and verify data in real-time.
              </p>
          </div>
      </section>

      {/* The Stack */}
      <section className="py-24 px-6">
         <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl text-white mb-4">Engineering First. Sales Second.</h2>
                <p className="text-slate-400">We are not a "List Broker". We are a Data Engineering firm.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-emerald-500" /> The Harvest Stack
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        Our infrastructure utilizes a powerful combination of custom Python scripts and best-in-class tools. We leverage <strong>Clay</strong> for waterfall enrichment, <strong>LinkedIn API</strong> for identity resolution, and <strong>Instantly/SmartLead</strong> for deliverability checks.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-mono font-bold text-white">50M+</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest">Daily Events</span>
                        </div>
                        <div className="w-px bg-slate-800 h-12"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-mono font-bold text-white">14ms</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest">Ingest Latency</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl">
                    <div className="grid grid-cols-3 gap-3">
                        {['Clay', 'Instantly', 'SmartLead', 'LinkedIn API', 'Python', 'Puppeteer', 'Snowflake', 'Postgres', 'GraphQL'].map(tech => (
                            <TechNode key={tech} label={tech} />
                        ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
                        <span>INFRA_STATUS: <span className="text-emerald-500">OPTIMAL</span></span>
                        <span>REGION: US-EAST-1</span>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-900 text-center">
          <h2 className="font-serif text-3xl text-white mb-8">Join the resistance against bad data.</h2>
          <div className="flex justify-center gap-4">
              <Link to="/" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                  Access The Terminal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-lg font-bold text-sm transition-all">
                  Contact Engineering
              </Link>
          </div>
      </section>

    </main>
  );
};