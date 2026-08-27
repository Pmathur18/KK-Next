"use client";

import React from "react";
import { Laptop, Smartphone, Share2, Database, ShoppingBag, TrendingUp, Workflow, Layers, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface GraphicProps {
  type: "project" | "blog" | "collage-team" | "collage-career";
  slug?: string;
  className?: string;
}

export default function GraphicPlaceholder({ type, slug = "", className }: GraphicProps) {

  if (type === "project") {
    switch (slug) {
      case "aurora-boutique":
        return (
          <div className={cn("w-full h-full bg-pastel-sky relative flex flex-col justify-between p-6 overflow-hidden select-none border border-blue-200/50", className)}>
            {/* Mockup Browser address bar */}
            <div className="w-full bg-white rounded-lg h-6 flex items-center justify-between px-3 border border-zinc-200/60 shadow-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[8px] font-mono text-zinc-400">aurora-fashion.com/checkout</span>
              <div className="w-4" />
            </div>
            {/* Floating content */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute w-28 h-28 bg-pastel-peach rounded-full filter blur-[20px] opacity-70 animate-pulse" />
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-zinc-100 z-10">
                <ShoppingBag className="w-6 h-6 text-accent-primary" />
              </div>
            </div>
            {/* Checkout indicators */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] font-bold text-ink">Checkout Speed</span>
              <span className="text-[9px] bg-white border border-zinc-200 px-2 py-0.5 rounded-full text-accent-primary font-bold">0.6s LCP</span>
            </div>
          </div>
        );

      case "fitquest-app":
        return (
          <div className={cn("w-full h-full bg-pastel-peach relative flex flex-col justify-between p-6 overflow-hidden select-none border border-orange-200/50", className)}>
            <div className="w-24 bg-white rounded-full h-5 flex items-center justify-center border border-zinc-200/50 mx-auto shadow-sm">
              <div className="w-6 h-1 rounded-full bg-zinc-800" />
            </div>
            <div className="flex-grow flex items-center justify-center relative">
              <div className="absolute w-24 h-24 bg-pastel-mint rounded-full filter blur-[15px] opacity-60" />
              <div className="w-12 h-16 bg-white rounded-xl border border-zinc-200 shadow-md p-2 flex flex-col justify-between z-10">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-pastel-peach" />
                  <div className="w-4 h-1 bg-zinc-200 rounded" />
                </div>
                <div className="h-5 bg-pastel-sky/50 rounded flex items-center justify-center text-[8px] font-bold font-mono">
                  12,040
                </div>
                <div className="flex gap-0.5">
                  <div className="h-2 w-1 bg-accent-primary rounded-t" />
                  <div className="h-3 w-1 bg-accent-primary rounded-t" />
                  <div className="h-4 w-1 bg-accent-secondary rounded-t" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-ink">
              <span>App Status</span>
              <span className="text-[8px] bg-white border border-zinc-200 px-2 py-0.5 rounded-full text-accent-secondary">Offline Synced</span>
            </div>
          </div>
        );

      case "nexus-social-scale":
        return (
          <div className={cn("w-full h-full bg-pastel-mint relative flex flex-col justify-between p-6 overflow-hidden select-none border border-green-200/50", className)}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-ink">Meta campaign stats</span>
              <TrendingUp className="w-4 h-4 text-accent-primary" />
            </div>
            <div className="flex-grow flex items-center justify-center relative">
              <div className="absolute w-28 h-28 bg-pastel-yellow rounded-full filter blur-[20px] opacity-70" />
              <div className="flex gap-2 z-10">
                <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-md flex flex-col gap-1">
                  <span className="text-[7px] font-semibold text-zinc-400 uppercase tracking-wider">Reach</span>
                  <span className="text-sm font-black font-mono text-ink">+180%</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-md flex flex-col gap-1">
                  <span className="text-[7px] font-semibold text-zinc-400 uppercase tracking-wider">CPA</span>
                  <span className="text-sm font-black font-mono text-accent-secondary">-42%</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="text-[8px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full text-white font-bold">Target ROI: 3.5x</span>
            </div>
          </div>
        );

      case "apex-erp-pipeline":
        return (
          <div className={cn("w-full h-full bg-pastel-yellow relative flex flex-col justify-between p-6 overflow-hidden select-none border border-yellow-250/50", className)}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-ink">Odoo Sync Log</span>
              <Workflow className="w-4 h-4 text-accent-primary animate-spin duration-10000" />
            </div>
            <div className="flex-grow flex items-center justify-center relative">
              <div className="absolute w-24 h-24 bg-pastel-peach rounded-full filter blur-[15px] opacity-60 animate-pulse" />
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-lg z-10">
                <Database className="w-6 h-6 text-accent-primary" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-ink">
              <span>Sync Speed</span>
              <span className="text-[9px] bg-white border border-zinc-200 px-2 py-0.5 rounded-full text-accent-primary">Real-time webhooks</span>
            </div>
          </div>
        );

      default:
        return (
          <div className={cn("w-full h-full bg-pastel-sky relative flex items-center justify-center p-6 border border-zinc-200/50", className)}>
            <Laptop className="w-8 h-8 text-accent-primary" />
          </div>
        );
    }
  }

  if (type === "blog") {
    return (
      <div className={cn("w-full h-full bg-pastel-lilac relative flex flex-col justify-between p-6 overflow-hidden select-none border border-purple-200/50", className)}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] bg-white border border-zinc-200 px-2 py-0.5 rounded-full text-ink font-semibold uppercase tracking-wider">
            KK Nex Tech Insights
          </span>
          <Layers className="w-4 h-4 text-accent-primary" />
        </div>
        <div className="flex-grow flex items-center justify-center relative">
          <div className="absolute w-32 h-32 bg-pastel-sky rounded-full filter blur-[25px] opacity-60 animate-pulse" />
          <div className="w-4/5 bg-white border border-zinc-200 rounded-xl p-4 shadow-md z-10 flex flex-col gap-2">
            <div className="h-2 bg-zinc-200 rounded w-3/4" />
            <div className="h-2 bg-zinc-100 rounded w-1/2" />
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3.5 h-3.5 bg-pastel-peach rounded-full flex items-center justify-center">
                <CheckCircle className="w-2.5 h-2.5 text-accent-secondary" />
              </div>
              <div className="h-1 bg-zinc-100 rounded w-1/4" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] font-bold text-zinc-550 mt-auto">
          <span>Software Engineering Guide</span>
          <span>·</span>
          <span>Verified layout</span>
        </div>
      </div>
    );
  }

  // Collages placeholders
  if (type === "collage-team") {
    return (
      <div className={cn("w-full h-full bg-pastel-sky relative flex flex-col justify-between p-8 overflow-hidden select-none border border-blue-200/50", className)}>
        <div className="absolute w-60 h-60 bg-pastel-lilac rounded-full filter blur-[35px] opacity-60 top-[-20%] left-[-10%]" />
        <div className="absolute w-52 h-52 bg-pastel-peach rounded-full filter blur-[30px] opacity-60 bottom-[-10%] right-[-10%]" />

        <div className="relative z-10 w-full h-full flex items-center justify-center gap-4">
          <div className="w-28 h-36 bg-white border border-zinc-200 rounded-2xl shadow-lg p-3 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div className="w-9 h-9 rounded-full bg-pastel-sky flex items-center justify-center text-xs font-bold font-display text-blue-700">KK</div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-ink">Kartik K.</span>
              <span className="text-[8px] text-zinc-400">Founder & CEO</span>
            </div>
          </div>
          <div className="w-28 h-36 bg-white border border-zinc-200 rounded-2xl shadow-lg p-3 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 translate-y-4">
            <div className="w-9 h-9 rounded-full bg-pastel-peach flex items-center justify-center text-xs font-bold font-display text-orange-700">SK</div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-ink">Sanjay K.</span>
              <span className="text-[8px] text-zinc-400">Lead Architect</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collage Career
  return (
    <div className={cn("w-full h-full bg-pastel-yellow relative flex flex-col justify-between p-8 overflow-hidden select-none border border-yellow-250/50", className)}>
      <div className="absolute w-60 h-60 bg-pastel-mint rounded-full filter blur-[35px] opacity-65 top-[10%] right-[-10%]" />
      <div className="relative z-10 w-full h-full flex items-center justify-center gap-4">
        <div className="p-4 bg-white border border-zinc-200 rounded-2xl shadow-lg flex flex-col gap-1 max-w-[150px]">
          <span className="text-[9px] font-semibold text-accent-primary uppercase tracking-wider">Perk allowance</span>
          <span className="text-sm font-bold text-ink">Remote-First Culture</span>
        </div>
        <div className="p-4 bg-white border border-zinc-200 rounded-2xl shadow-lg flex flex-col gap-1 max-w-[150px] translate-y-4">
          <span className="text-[9px] font-semibold text-accent-secondary uppercase tracking-wider">Annual stipend</span>
          <span className="text-sm font-bold text-ink">Learning Budget</span>
        </div>
      </div>
    </div>
  );
}
