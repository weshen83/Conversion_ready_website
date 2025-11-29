import React from 'react';
import { SignalPayload } from "../types";
import { AlertCircle, Zap, User, MapPin, TrendingUp, Lock, Globe, Smartphone, ShoppingCart, Activity } from "lucide-react";

const Label = ({ children }: React.PropsWithChildren<unknown>) => (
  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5 block">{children}</span>
);

const Value = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <span className={`font-mono text-xs font-bold text-slate-900 block truncate ${className}`}>{children}</span>
);

export const EcomVisual = ({ data }: { data: Extract<SignalPayload, { type: 'ECOM_SPEND' }> }) => (
  <div className="grid grid-cols-2 gap-4 w-full">
    <div>
      <Label>Monthly Spend</Label>
      <div className="flex items-center gap-1.5 mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <Value>{data.ad_spend}</Value>
      </div>
    </div>
    <div>
      <Label>Pixel Health</Label>
      <div className={`flex items-center gap-1.5 mt-0.5 font-bold text-xs ${data.pixel_status === 'MISSING' ? 'text-red-600' : 'text-amber-600'}`}>
        <Activity className="w-3 h-3" />
        {data.pixel_status}
      </div>
    </div>
  </div>
);

export const TechVisual = ({ data }: { data: Extract<SignalPayload, { type: 'TECH_GAP' }> }) => (
  <div className="w-full bg-red-50/50 border border-red-100 rounded p-2.5 flex items-start gap-3">
    <div className="mt-0.5 w-6 h-6 rounded bg-white border border-red-100 flex items-center justify-center text-red-500 shadow-sm">
      <Zap className="w-3.5 h-3.5" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold text-red-600 uppercase tracking-tight">Tech Gap Detected</span>
        <span className="text-[9px] font-mono bg-white px-1.5 py-0.5 rounded border border-red-100 text-red-400">{data.risk_level}</span>
      </div>
      <div className="mt-1">
        <span className="text-xs text-slate-700 font-medium">Missing: <span className="font-bold">{data.tool_missing}</span></span>
      </div>
      {data.traffic_vol && (
        <div className="mt-1 text-[10px] text-slate-400 font-mono">
          Context: {data.traffic_vol}
        </div>
      )}
    </div>
  </div>
);

export const RoleVisual = ({ data }: { data: Extract<SignalPayload, { type: 'ROLE_CHANGE' }> }) => (
  <div className="w-full">
    <div className="flex items-center gap-2 mb-2">
      <div className="p-1 bg-blue-50 text-blue-600 rounded">
        <User className="w-3 h-3" />
      </div>
      <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">{data.status.replace('_', ' ')}</span>
    </div>
    <div className="pl-1 border-l-2 border-blue-100 ml-2.5">
      <div className="pl-3">
        <Label>Role Title</Label>
        <Value className="text-sm">{data.role}</Value>
        <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
          <ClockIcon />
          <span>Detected {data.days_ago} days ago</span>
        </div>
      </div>
    </div>
  </div>
);

export const GrowthVisual = ({ data }: { data: Extract<SignalPayload, { type: 'GROWTH_EVENT' }> }) => (
  <div className="w-full">
    <div className="flex items-center justify-between mb-2">
      <Label>Trigger Event</Label>
      {data.amount && <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-sm">{data.amount}</span>}
    </div>
    <div className="flex items-center gap-2">
      <TrendingUp className="w-4 h-4 text-emerald-500" />
      <span className="text-sm font-serif font-bold text-slate-900">{data.event_name}</span>
    </div>
    {data.hiring_velocity && (
      <div className="mt-2 text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded inline-block">
        > {data.hiring_velocity}
      </div>
    )}
  </div>
);

export const IntentVisual = ({ data }: { data: Extract<SignalPayload, { type: 'INTENT_SIGNAL' }> }) => {
  const getIcon = () => {
    switch (data.signal_key) {
      case 'SPEED_SCORE': return <Smartphone className="w-3.5 h-3.5" />;
      case 'LOCATIONS':
      case 'GMB_STATUS': return <MapPin className="w-3.5 h-3.5" />;
      case 'REVIEW':
      case 'REVIEW_COUNT': return <Lock className="w-3.5 h-3.5" />; // Symbolic of gatekeeping
      default: return <Globe className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 border border-slate-100 rounded p-2">
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center gap-1.5 text-slate-500">
          {getIcon()}
          <span className="text-[10px] font-bold uppercase">{data.signal_key.replace('_', ' ')}</span>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-sm font-mono font-bold text-slate-900">{data.value}</span>
        <span className="text-[9px] text-slate-400 font-mono text-right max-w-[50%] truncate">{data.context}</span>
      </div>
    </div>
  );
};

const ClockIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);