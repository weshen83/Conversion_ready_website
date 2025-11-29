import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Terminal, FileText, Globe, Shield, Users, ArrowRight, Zap, Database } from "lucide-react";
import { BookingModal } from './BookingModal';

const NavDropdown = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="relative group">
    <button className="flex items-center gap-1.5 py-2 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors outline-none">
      {label}
      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
    </button>
    <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 p-2">
      {children}
    </div>
  </div>
);

const DropdownItem = ({ to, icon: Icon, title, desc }: { to: string, icon: any, title: string, desc: string }) => (
  <Link to={to} className="flex items-start gap-3 p-3 rounded hover:bg-slate-50 transition-colors group/item">
    <div className="mt-0.5 p-1.5 bg-slate-100 rounded text-slate-500 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 transition-colors">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-700">{title}</div>
      <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{desc}</div>
    </div>
  </Link>
);

export const Navbar = () => {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTerminal = () => {
    navigate('/#catalog');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Main Navigation - Sticky Top Level 0 */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-slate-200 h-16 flex items-center shadow-sm relative">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <div className="w-8 h-8 bg-dark text-white flex items-center justify-center font-serif font-bold text-lg rounded-sm group-hover:bg-primary transition-colors shadow-lg shadow-primary/20">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-tight text-slate-900 leading-none group-hover:text-primary-active transition-colors">
                  Conversion-Ready System
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                  GTM Engineering
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              
              <NavDropdown label="Catalog">
                <DropdownItem to="/" icon={Database} title="Full Marketplace" desc="Browse all live intent signals" />
                <DropdownItem to="/pricing" icon={Zap} title="Pricing Model" desc="Pay-per-harvest pricing tiers" />
              </NavDropdown>

              <NavDropdown label="Intelligence">
                <DropdownItem to="/protocol" icon={Shield} title="The Protocol" desc="Methodology & verification" />
                <DropdownItem to="/field-reports" icon={FileText} title="Field Reports" desc="Tactical sales playbooks" />
              </NavDropdown>

              <NavDropdown label="Company">
                <DropdownItem to="/manifesto" icon={Terminal} title="Our Engineers" desc="Our origin & tech stack" />
                <DropdownItem to="/contact" icon={Globe} title="Contact" desc="Enterprise support" />
              </NavDropdown>

              <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            
            <Link 
              to="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-primary-active text-xs font-bold transition-colors border border-transparent hover:border-slate-200 rounded"
            >
              <span>Contact Sales</span>
            </Link>

            <button 
              onClick={scrollToTerminal}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded text-xs font-bold hover:bg-primary-hover hover:shadow-glow transition-all group"
            >
              <span>ACCESS SIGNALS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl lg:hidden flex flex-col p-4 animate-in slide-in-from-top-2 duration-200 z-50 overflow-y-auto max-h-[80vh]">
                <div className="flex flex-col space-y-1">
                    <div className="px-3 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Catalog</div>
                    <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Full Marketplace</Link>
                    <Link to="/pricing" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Pricing</Link>
                    
                    <div className="px-3 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mt-2">Intelligence</div>
                    <Link to="/protocol" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">The Protocol</Link>
                    <Link to="/field-reports" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Field Reports</Link>
                    
                    <div className="px-3 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mt-2">Company</div>
                    <Link to="/manifesto" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Our Engineers</Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">Contact</Link>
                </div>
            </div>
        )}
      </nav>

      {/* Global Live Ticker - Sticky Level 1 (Top-16) */}
      <div className="sticky top-16 z-40 bg-dark border-b border-slate-800 overflow-hidden py-2 flex whitespace-nowrap shadow-md">
        <div className="animate-marquee flex gap-12 items-center text-[10px] font-mono">
           {[
             { symbol: "SIGNAL_DETECTED", val: "Series B Funding (SF) -> +12 Records" },
             { symbol: "OPP_ALERT", val: "Pixel Misfire (Shopify) -> +45 Records" },
             { symbol: "SYSTEM_STATUS", val: "ONLINE // LATENCY: 14ms" },
             { symbol: "ROLE_CHANGE", val: "VP Sales Departures -> +8% Vol" },
             { symbol: "TECH_GAP", val: "Salesforce -> HubSpot Migration -> High Vol" },
             { symbol: "INTENT", val: "G2 Review Spikes -> 'Alternatives' -> +120" },
             { symbol: "GROWTH", val: "Headcount Surge > 20% -> 500+ Detected" },
             { symbol: "MIGRATION", val: "Segment.io Drops -> +15 Records Today" },
             { symbol: "COMPETITOR", val: "Ad Spend Increase > $50k -> 22 Records" },
             { symbol: "MARKET_MOVER", val: "Enterprise ERP RFP Detected" },
             { symbol: "SIGNAL_DETECTED", val: "Series B Funding (SF) -> +12 Records" }, 
             { symbol: "OPP_ALERT", val: "Pixel Misfire (Shopify) -> +45 Records" },
             { symbol: "RECRUITING", val: "Hiring > 5 SDRs -> 34 Companies" },
             { symbol: "EXPANSION", val: "New Office Locations (NY/LON) -> 8 Records" },
           ].map((item, i) => (
             <span key={i} className="flex items-center gap-2">
               <span className="font-bold text-primary-hover">{item.symbol}:</span>
               <span className="font-medium text-slate-100">{item.val}</span>
             </span>
           ))}
        </div>
      </div>
    </>
  );
};