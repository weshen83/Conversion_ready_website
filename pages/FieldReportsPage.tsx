import React from 'react';
import { FileText, ArrowUpRight, Calendar, User, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export const FieldReportsPage = () => {
  return (
    <main className="min-h-screen bg-paper font-sans">
      <section className="pt-24 pb-12 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 mb-6">
                <FileText className="w-3 h-3" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Intelligence Archive</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
                Field Reports.
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                Tactical playbooks, signal analysis, and declassified case studies from the GTM frontline.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300 max-w-lg mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3 text-slate-900 font-bold">
                    <Mail className="w-4 h-4" />
                    <span>Join 4,000+ RevOps Leaders</span>
                </div>
                <div className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="work@email.com" 
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                        Subscribe
                    </button>
                </div>
                <p className="text-xs text-slate-500 mt-2">No spam. Only high-signal intel.</p>
            </div>
        </div>
      </section>

      <section className="py-16 px-6 container mx-auto max-w-4xl">
         <div className="space-y-8">
            {articles.map((article, index) => (
                <Link key={article.id} to={`/field-reports/${article.slug}`} className="block">
                    <div className={`bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-slate-300 transition-all group cursor-pointer ${index === 0 ? 'ring-2 ring-emerald-500/20' : ''}`}>
                        {index === 0 && (
                            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold text-white bg-emerald-600 px-2 py-1 rounded uppercase tracking-wide">
                                Featured Report
                            </div>
                        )}
                        <div className="flex items-center gap-3 mb-4 text-xs font-mono text-slate-400">
                            <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">{article.category}</span>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {article.date}
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-3 h-3" /> {article.author}
                            </div>
                        </div>
                        <h2 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {article.title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:underline">
                            Read Full Brief <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </Link>
            ))}
         </div>
      </section>

      {/* Internal Linking / CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-6">
              <h3 className="font-serif text-3xl mb-4">Enough reading. Start hunting.</h3>
              <p className="text-slate-400 max-w-lg mx-auto mb-8">
                  Apply these strategies using our verified signal data.
              </p>
              <div className="flex justify-center gap-4">
                  <Link to="/protocol" className="px-6 py-3 bg-slate-800 rounded-lg font-bold text-sm hover:bg-slate-700 transition-colors">
                      View Protocol
                  </Link>
                  <Link to="/" className="px-6 py-3 bg-emerald-600 rounded-lg font-bold text-sm hover:bg-emerald-500 transition-colors flex items-center gap-2">
                      Access Live Feed <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
          </div>
      </section>
    </main>
  );
};