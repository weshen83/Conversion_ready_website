import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { SuccessPage } from './pages/SuccessPage';
import { ContactPage } from './pages/ContactPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { FieldReportsPage } from './pages/FieldReportsPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-12">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center items-center gap-2 mb-4">
         <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
         <span className="font-serif font-bold text-slate-900">Conversion-Ready System</span>
      </div>
      <p className="text-sm text-slate-500 font-sans mb-6">
        Hand-curated intelligence. GDPR & CCPA Compliant. Ethical Sourcing Standards.
      </p>
      <div className="flex justify-center gap-6 text-xs text-slate-400 font-mono uppercase tracking-widest">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Signal Status: Online</span>
      </div>
      <div className="mt-8 text-[10px] text-slate-300 font-mono">
        SYSTEM_VER: 4.3.0 // NODE: US_EAST_1
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace/:slug" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/manifesto" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/protocol" element={<MethodologyPage />} />
          <Route path="/field-reports" element={<FieldReportsPage />} />
          <Route path="/field-reports/:slug" element={<BlogPostPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}