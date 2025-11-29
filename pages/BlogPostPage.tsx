
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticle } from '../data/articles';
import { products } from '../data/products';
import { ArrowLeft, Calendar, User, Clock, Share2, Printer, ArrowRight, ShieldCheck } from 'lucide-react';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = slug ? getArticle(slug) : null;
  const [scrollProgress, setScrollProgress] = useState(0);

  // SEO Simulation (Document Title)
  useEffect(() => {
    if (article) {
      document.title = `${article.meta_title} | CRS Intelligence`;
      window.scrollTo(0, 0);
    }
  }, [article]);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
         <div className="text-center">
            <h1 className="font-serif text-2xl text-slate-900">Brief Not Found</h1>
            <button onClick={() => navigate('/field-reports')} className="mt-4 text-sm text-blue-600 underline">Return to Archive</button>
         </div>
      </div>
    );
  }

  const relatedProduct = products.find(p => p.id === article.related_product_id);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
       
       {/* Reading Progress Bar */}
       <div className="fixed top-16 left-0 h-1 bg-emerald-500 z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

       <div className="container mx-auto px-6 py-12 max-w-6xl">
          <Link to="/field-reports" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 mb-8 uppercase tracking-widest">
             <ArrowLeft className="w-3 h-3" /> Return to Field Reports
          </Link>

          <div className="flex flex-col lg:flex-row gap-12">
             
             {/* Main Content */}
             <article className="lg:w-2/3">
                <header className="mb-10">
                   <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-mono text-slate-500">
                      <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold uppercase tracking-wider">{article.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                   </div>
                   <h1 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
                      {article.title}
                   </h1>
                   <div className="flex items-center gap-3 border-y border-slate-100 py-4">
                      <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif font-bold">
                         {article.author.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-900">{article.author}</span>
                         <span className="text-xs text-slate-500 font-mono uppercase">{article.role}</span>
                      </div>
                      <div className="ml-auto flex gap-2">
                         <button className="p-2 hover:bg-slate-50 rounded text-slate-400 hover:text-slate-900 transition-colors" title="Share Brief">
                            <Share2 className="w-4 h-4" />
                         </button>
                         <button onClick={() => window.print()} className="p-2 hover:bg-slate-50 rounded text-slate-400 hover:text-slate-900 transition-colors" title="Print Dossier">
                            <Printer className="w-4 h-4" />
                         </button>
                      </div>
                   </div>
                </header>

                <div 
                  className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-blue-600 prose-strong:text-slate-900"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                >
                </div>
             </article>

             {/* Sidebar */}
             <aside className="lg:w-1/3 space-y-8">
                {/* Related Signal Card */}
                {relatedProduct && (
                  <div className="sticky top-24">
                     <div className="bg-slate-900 text-white p-6 rounded-xl shadow-2xl border border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                           <ShieldCheck className="w-24 h-24" />
                        </div>
                        <div className="relative z-10">
                           <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">Recommended Signal</span>
                           <h3 className="font-serif text-xl mb-2">{relatedProduct.title}</h3>
                           <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                              {relatedProduct.hero_headline}
                           </p>
                           
                           <div className="bg-slate-800/50 rounded p-3 mb-6 border border-slate-700">
                              <div className="flex justify-between items-center text-xs mb-1">
                                 <span className="text-slate-500 font-mono">SIGNAL_ID</span>
                                 <span className="text-white font-mono">{relatedProduct.id}</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                 <span className="text-slate-500 font-mono">STATUS</span>
                                 <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> LIVE</span>
                              </div>
                           </div>

                           <Link to={`/marketplace/${relatedProduct.slug}`} className="w-full bg-white text-slate-900 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors">
                              Access This List <ArrowRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </div>
                     
                     <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Intelligence Newsletter</h4>
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                           Join 4,500+ RevOps leaders receiving declassified growth signals weekly.
                        </p>
                        <input type="email" placeholder="work@email.com" className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm mb-2 outline-none focus:border-slate-900" />
                        <button className="w-full bg-slate-200 text-slate-600 font-bold text-xs py-2 rounded hover:bg-slate-300 transition-colors">SUBSCRIBE</button>
                     </div>
                  </div>
                )}
             </aside>
          </div>
       </div>
    </main>
  );
};
