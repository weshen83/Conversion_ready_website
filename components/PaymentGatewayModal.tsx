
import React, { useState, useEffect } from 'react';
import { X, Lock, CreditCard, ShieldCheck, Loader2, CheckCircle2 } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
  leadCount: number;
  tier: string;
  deliveryTime: string;
}

export const PaymentGatewayModal = ({ isOpen, onClose, onSuccess, amount, leadCount, tier, deliveryTime }: PaymentModalProps) => {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  // Reset state when opening
  useEffect(() => {
    if (isOpen) setStep('details');
  }, [isOpen]);

  if (!isOpen) return null;

  const formatCard = (val: string) => {
    return val.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().substring(0, 19);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate Stripe Processing Delay
    setTimeout(() => {
      setStep('success');
      // Wait a moment to show success state before redirecting
      setTimeout(() => {
        onSuccess();
      }, 1000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50/50">
           <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
             <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-sm font-serif">C</div>
             <span>Secure Checkout</span>
           </div>
           <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
             <X className="w-5 h-5" />
           </button>
        </div>

        <div className="flex-1 overflow-y-auto">
            {step === 'processing' || step === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 px-8 text-center space-y-6">
                    {step === 'processing' ? (
                        <>
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-slate-100 border-t-emerald-500 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-emerald-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Processing Payment...</h3>
                                <p className="text-sm text-slate-500 mt-1">Securing connection to banking rails.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Payment Approved</h3>
                                <p className="text-sm text-slate-500 mt-1">Redirecting to secure download terminal...</p>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className="p-6 space-y-8">
                    {/* Order Summary */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Product</p>
                                <h4 className="font-bold text-slate-900">Custom Lead Cohort</h4>
                                <p className="text-xs text-slate-500 mt-1">Quantity: {leadCount.toLocaleString()} Records</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Total</p>
                                <h4 className="font-bold text-xl text-slate-900">${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[10px] text-slate-500 border-t border-slate-200 pt-3">
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded flex items-center gap-1">
                                <Loader2 className="w-3 h-3" /> {deliveryTime} TAT
                            </span>
                            <span className="bg-white border border-slate-200 px-2 py-1 rounded">
                                {tier} Pricing
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handlePay} className="space-y-4">
                        <div className="space-y-3">
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Card Information</label>
                            
                            <div className="relative">
                                <input 
                                    type="text" 
                                    required
                                    placeholder="0000 0000 0000 0000"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(formatCard(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-mono text-sm"
                                />
                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    required
                                    placeholder="MM / YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5))}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono text-sm"
                                />
                                <input 
                                    type="text" 
                                    required
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 3))}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Cardholder Name</label>
                            <input 
                                type="text" 
                                required
                                placeholder="J. Smith"
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
                            />
                        </div>
                        
                        <div className="pt-4">
                            <button 
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10 transition-all hover:scale-[1.01]"
                            >
                                <Lock className="w-4 h-4" />
                                Pay ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>

        {/* Footer */}
        {step === 'details' && (
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-center items-center gap-4 text-slate-400 grayscale opacity-60">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono">POWERED BY STRIPE // 256-BIT SSL ENCRYPTED</span>
            </div>
        )}
      </div>
    </div>
  );
};
