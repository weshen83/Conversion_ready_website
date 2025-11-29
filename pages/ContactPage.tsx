import React, { useState } from 'react';
import { Mail, MessageSquare, ArrowRight, CheckCircle2, Loader2, MapPin, Phone, Calendar, Clock, Globe } from 'lucide-react';

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // HubSpot Form Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-paper pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white mb-6">
                 <span className="text-[10px] font-mono uppercase tracking-widest">Direct Link // High Priority</span>
             </div>
             <h1 className="font-serif text-5xl text-slate-900 mb-6">Open a Channel.</h1>
             <p className="text-lg text-slate-600 font-sans max-w-2xl mx-auto">
               Whether you need a custom data build, enterprise API access, or just have a question about our methodology, our engineers are standing by.
             </p>
          </div>

          <div className="grid md:grid-cols-5 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
             {/* Left: Info Panel */}
             <div className="md:col-span-2 bg-slate-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[size:20px_20px] bg-grid-pattern opacity-10 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                
                <div className="relative z-10 space-y-8">
                   <div>
                      <h3 className="font-serif text-xl mb-6">Contact Information</h3>
                      <div className="space-y-4 font-sans text-sm text-slate-300">
                         <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-emerald-400 mt-0.5" />
                            <div>
                               <span className="block text-white font-medium">Email Us</span>
                               <span>intelligence@crs.com</span>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-emerald-400 mt-0.5" />
                            <div>
                               <span className="block text-white font-medium">Headquarters</span>
                               <span>123 Data Drive, Floor 4<br/>San Francisco, CA 94105</span>
                            </div>
                         </div>
                         <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-emerald-400 mt-0.5" />
                            <div>
                               <span className="block text-white font-medium">Enterprise Line</span>
                               <span>+1 (555) 012-3456</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Support Widget */}
                <div className="relative z-10 mt-12">
                    <div className="flex items-center gap-2 text-[10px] font-mono mb-2 text-emerald-500">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        SUPPORT ONLINE
                    </div>
                   <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-300">
                            <Clock className="w-4 h-4" />
                         </div>
                         <div>
                             <span className="block text-white text-xs font-bold">Avg Response Time</span>
                             <span className="text-slate-400 text-[10px]">&lt; 12 Minutes</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right: Form */}
             <div className="md:col-span-3 p-8 md:p-12">
                {submitted ? (
                   <div className="h-full flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                         <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif text-2xl text-slate-900 mb-2">Message Received</h3>
                      <p className="text-slate-500 text-sm mb-8">
                         Your inquiry has been routed to our concierge team. Expect a response within 2 hours during business hours.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-slate-900 underline hover:text-emerald-600"
                      >
                        Send another message
                      </button>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">First Name</label>
                            <input 
                              name="firstname"
                              required 
                              type="text" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Last Name</label>
                            <input 
                              name="lastname"
                              required 
                              type="text" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Work Email</label>
                         <input 
                           name="email"
                           required 
                           type="email" 
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                         />
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Inquiry Type</label>
                         <select 
                           name="inquiry_type"
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all"
                         >
                            <option value="sales">Sales & Enterprise Licensing</option>
                            <option value="support">Technical Support</option>
                            <option value="custom">Custom Data Request</option>
                            <option value="other">Other</option>
                         </select>
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                         <textarea 
                           name="message"
                           required
                           rows={4}
                           className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all resize-none"
                           placeholder="Tell us what you're looking for..."
                         ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                         {isSubmitting ? (
                            <>
                               <Loader2 className="w-4 h-4 animate-spin" />
                               <span>TRANSMITTING...</span>
                            </>
                         ) : (
                            <>
                               <span>SEND MESSAGE</span>
                               <ArrowRight className="w-4 h-4" />
                            </>
                         )}
                      </button>
                   </form>
                )}
             </div>
          </div>

          {/* Direct Booking Section */}
          <div className="mt-16 text-center">
              <h2 className="font-serif text-3xl text-slate-900 mb-8">Or Book Directly</h2>
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden h-[600px] w-full">
                 <iframe 
                   src="https://calendar.google.com/calendar/appointments/schedules/AcZssZgn-placeholder" 
                   className="w-full h-full border-none"
                   title="Booking Calendar"
                 ></iframe>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};