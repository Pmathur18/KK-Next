"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Send,
  Zap,
  TrendingUp,
  Sliders,
  Bell,
  Eye,
  Check,
  Play
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const socialFAQs: FAQItem[] = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage Instagram, Facebook, LinkedIn, X (Twitter), YouTube, TikTok, Pinterest, Threads, and Google Business Profiles. We customize the channel strategy based on where your target buyers spend their time."
  },
  {
    q: "Do you create the content (graphics, reels, videos, copy) or do we provide it?",
    a: "We handle the entire content production pipeline — graphic design, video micro-reels editing, copy generation, hashtag research, and publishing. You review and approve drafts before anything goes live."
  },
  {
    q: "How do you track ROI and campaign performance?",
    a: "We provide real-time performance analytics dashboards tracking conversion rate, cost per acquisition (CPA), engagement rate, click-through rates (CTR), and follower growth. Monthly strategy calls review what worked and what we optimize next."
  },
  {
    q: "Can we approve posts before they are scheduled?",
    a: "Absolutely. We build a bi-weekly or monthly content calendar inside a shared portal where your team can review, request edits, or approve posts with a single click before scheduling."
  },
  {
    q: "How does your paid ad management work alongside organic posting?",
    a: "We fuse organic community building with targeted performance advertising (Meta Ads & LinkedIn Campaign Manager). We test high-performing organic posts as paid ad creatives to maximize ROAS and scale lead volume."
  }
];

// Zoho Social platform brand badges data
const platforms = [
  { name: "Instagram", icon: "📸", color: "from-pink-500 via-red-500 to-yellow-500", handle: "@brand.official", followers: "48.2k" },
  { name: "Facebook", icon: "👤", color: "from-blue-600 to-indigo-600", handle: "Brand Page", followers: "120k" },
  { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-sky-700", handle: "Company HQ", followers: "32.4k" },
  { name: "X / Twitter", icon: "🐦", color: "from-slate-800 to-slate-950", handle: "@brand_tech", followers: "89.1k" },
  { name: "YouTube", icon: "▶️", color: "from-red-600 to-rose-700", handle: "Brand Channel", followers: "65.8k" },
  { name: "TikTok", icon: "🎵", color: "from-[#00F2FE] to-[#4FACFE]", handle: "@brand_tok", followers: "115k" },
];

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState<"publish" | "listen" | "analyze" | "collaborate">("publish");
  const [emailInput, setEmailInput] = useState("");

  const socialData = services.find((s) => s.id === "social-media") || {
    features: [
      "Interactive Content Creation & Design",
      "Paid Ad Campaign Operations",
      "A/B Creative and Copy Testing",
      "Community Scaling & PR Handling",
      "Influencer Outreach & Contracts",
      "Monthly Conversion Analytics & Dashboards"
    ],
    techStack: ["Meta Ads Manager", "Google Analytics", "Figma", "Tiktok Ads", "LinkedIn Campaign Manager", "Canva Pro"]
  };

  return (
    <div className="relative w-full bg-transparent min-h-screen">

      {/* ══ 1. HERO SECTION (Replicating Zoho Social floating animation UI) ══ */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="relative z-10 max-w-6xl px-6 md:px-8 w-full flex flex-col items-center gap-8">

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200/80 shadow-xs">
              ✨ AI-Ready Social Media Management &amp; Scaling
            </Badge>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 font-display max-w-4xl"
          >
            Scale Brand Reach, Automate Posts &amp;{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
              Multiply Conversions
            </span>
          </motion.h1>

          {/* Subheading Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl text-center font-normal"
          >
            Accelerate your social growth. We craft bespoke content calendars, manage targeted paid search/social advertising accounts, run community conversations, and compile analytical reports to maximize your ROAS.
          </motion.p>

          {/* Combined Email / CTA Pill Bar (Zoho Social signup style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xl mt-2"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-full p-2 shadow-2xl shadow-purple-900/10 flex items-center justify-between gap-2">
              <input
                type="email"
                placeholder="Enter your business email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-transparent border-none px-4 py-2 text-sm text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
              />
              <Link href="/contact" className="shrink-0">
                <Button variant="primary" colorTheme="violet" className="!py-3 !px-6 !text-sm whitespace-nowrap shadow-md">
                  Book a Demo →
                </Button>
              </Link>
            </div>
            <span className="text-xs text-slate-400 mt-2 block font-medium">
              ⚡ Free discovery consultation · Customized content calendar preview
            </span>
          </motion.div>

          {/* Floating Platform Mockups Animation Bar (Replicating Zoho Social UI) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-5xl mt-8 relative rounded-3xl overflow-hidden border border-purple-200/80 shadow-2xl bg-gradient-to-br from-purple-50/90 via-fuchsia-50/50 to-cyan-50/90 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">

              {/* Mock Floating Platform Card 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-5 border border-purple-100 shadow-xl shadow-purple-900/5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white flex items-center justify-center text-xs font-bold">
                      IG
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">Instagram Reel</span>
                      <span className="text-[10px] text-purple-600 font-semibold">Scheduled for 6:30 PM</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                    Best Time ✨
                  </span>
                </div>
                <div className="h-32 rounded-xl border border-purple-100 relative overflow-hidden bg-slate-900 group">
                  <img
                    src="/images/social_marketing_showcase.jpg"
                    alt="Social Media Reel Growth Showcase"
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-lg text-white">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between z-10 text-[9px] font-bold text-white">
                    <span className="bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-400/30 backdrop-blur-xs">▶ 0:45 · 4K 60fps</span>
                    <span className="text-emerald-400 font-mono">⚡ Trending #1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-1">
                  <span>Likes: 4.8k</span>
                  <span>Comments: 312</span>
                  <span>Shares: 890</span>
                </div>
              </motion.div>

              {/* Mock Floating Platform Card 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-5 border border-purple-100 shadow-xl shadow-purple-900/5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      LI
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">LinkedIn Article</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">Published · 120 Leads</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                    Live Lead Capture
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1 text-xs text-slate-700 font-medium">
                  <p className="line-clamp-2">&ldquo;5 B2B Growth Engines Driving High-Ticket Lead Conversions in 2026...&rdquo;</p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-1">
                  <span>Impressions: 42.1k</span>
                  <span>CTR: 4.2%</span>
                </div>
              </motion.div>

              {/* Mock Floating Platform Card 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-5 border border-purple-100 shadow-xl shadow-purple-900/5 flex flex-col gap-3 sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      X
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">Meta / X Ads Pipeline</span>
                      <span className="text-[10px] text-purple-600 font-semibold">ROAS: 3.4x</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                    Active Ad Set
                  </span>
                </div>
                <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                    <span>Campaign Conversion Velocity</span>
                    <span className="text-purple-700">+315%</span>
                  </div>
                  <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
                    <div className="w-[84%] h-full bg-[#7C3AED] rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-1">
                  <span>Cost / Lead: ₹42</span>
                  <span>Conversions: 1,240</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ══ 2. CONNECTED SOCIAL CHANNELS MARQUEE ════════════════════════════ */}
      <section className="py-8 bg-white border-y border-purple-100 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Unified Multi-Channel Platform Support
          </span>
        </div>
        <div className="w-full relative flex overflow-hidden">
          <div className="animate-marquee gap-6 pr-6 items-center flex">
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-purple-100 bg-purple-50/50 backdrop-blur-md min-w-[200px]"
              >
                <span className="text-lg">{p.icon}</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900">{p.name}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{p.handle} · {p.followers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. INTERACTIVE CAPABILITIES SHOWCASE TABS (Zoho Social Replica) ══ */}
      <section className="py-16 md:py-24 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col gap-12 text-center">

          <div className="flex flex-col items-center gap-3">
            <Badge colorTheme="navy">Core Platform Capabilities</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Everything You Need to Scale Social Commerce &amp; Brand Authority
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl">
              From automated visual content publishing to real-time community listening and paid ad retargeting pipelines.
            </p>
          </div>

          {/* Tabs Navigation Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap bg-purple-50/70 p-1.5 rounded-full border border-purple-100 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab("publish")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
                activeTab === "publish"
                  ? "bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Calendar className="w-4 h-4" /> Publishing &amp; Calendar
            </button>
            <button
              onClick={() => setActiveTab("listen")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
                activeTab === "listen"
                  ? "bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <MessageSquare className="w-4 h-4" /> Listening &amp; Inbox
            </button>
            <button
              onClick={() => setActiveTab("analyze")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
                activeTab === "analyze"
                  ? "bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <BarChart3 className="w-4 h-4" /> Analytics &amp; Reports
            </button>
            <button
              onClick={() => setActiveTab("collaborate")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
                activeTab === "collaborate"
                  ? "bg-[#7C3AED] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Users className="w-4 h-4" /> Team Approvals
            </button>
          </div>

          {/* Active Tab Mockup Display */}
          <AnimatePresence mode="wait">
            {activeTab === "publish" && (
              <motion.div
                key="publish"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center border border-purple-100">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Drag-and-Drop Visual Content Calendar
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Plan, preview, and schedule posts across Instagram Reels, LinkedIn articles, Meta ads, and X threads from a single visual dashboard.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Best Time to Post AI Predictions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Multi-channel bulk queue scheduler
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Automated link previews &amp; hashtag suggestions
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary" colorTheme="violet" className="w-fit">
                      Start Scheduling →
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 bg-gradient-to-br from-[#6D28D9] to-[#9333EA] rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                  <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                      <span className="font-extrabold text-sm text-slate-900">Content Calendar · June 2026</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                        18 Posts Queued
                      </span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400">
                      <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-xs">
                      {[...Array(14)].map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-16 rounded-xl border p-1.5 flex flex-col justify-between text-[10px] font-bold",
                            i === 3 || i === 7 || i === 11
                              ? "bg-purple-50 border-purple-300 text-purple-900"
                              : "bg-slate-50 border-slate-100 text-slate-400"
                          )}
                        >
                          <span>{i + 1}</span>
                          {(i === 3 || i === 7 || i === 11) && (
                            <span className="bg-[#7C3AED] text-white px-1.5 py-0.5 rounded text-[9px] truncate">
                              IG Reel
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "listen" && (
              <motion.div
                key="listen"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center border border-purple-100">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Unified Multi-Channel Social Inbox
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Never miss a customer query or mention. Manage DMs, comments, and reviews across all platforms from a single inbox stream.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Automatic Comment-to-CRM Lead Capture
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Sentiment analysis &amp; priority tag routing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Instant automated response triggers
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary" colorTheme="violet" className="w-fit">
                      Connect Inbox →
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 bg-gradient-to-br from-[#6D28D9] to-[#9333EA] rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                  <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                      <span className="font-extrabold text-sm text-slate-900">Unified Inbox Stream</span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold">
                        3 Unread Messages
                      </span>
                    </div>
                    {[
                      { user: "Sarah K.", text: "Love this product! Is this available for shipping in India?", platform: "Instagram DM", time: "2m ago" },
                      { user: "Rohan M.", text: "Sent a quick inquiry regarding enterprise pricing packages.", platform: "LinkedIn Message", time: "14m ago" },
                      { user: "Alex T.", text: "Can someone help me set up the CRM integration flow?", platform: "X Mention", time: "42m ago" }
                    ].map((msg, idx) => (
                      <div key={idx} className="p-3 bg-purple-50/50 rounded-xl border border-purple-100 flex items-start gap-3">
                        <Avatar name={msg.user} className="w-8 h-8 text-xs border border-purple-200" />
                        <div className="flex flex-col gap-0.5 flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-900">{msg.user}</span>
                            <span className="text-[10px] text-purple-600 font-semibold">{msg.platform} · {msg.time}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-snug">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "analyze" && (
              <motion.div
                key="analyze"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center border border-purple-100">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Real-Time Performance &amp; ROAS Analytics
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Track engagement rates, click-through performance, follower acquisition, and cost-per-lead metrics with custom PDF exports.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Automated Weekly &amp; Monthly Performance PDFs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Multi-channel campaign ROAS attribution
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Audience demographic &amp; sentiment breakdown
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary" colorTheme="violet" className="w-fit">
                      View Sample Report →
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 bg-gradient-to-br from-[#6D28D9] to-[#9333EA] rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                  <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                      <span className="font-extrabold text-sm text-slate-900">Campaign Growth Analytics</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                        Q2 Growth Pass: +315%
                      </span>
                    </div>
                    <div className="h-40 bg-purple-50/70 rounded-xl p-4 flex items-end justify-between gap-3 border border-purple-100">
                      {[40, 55, 65, 80, 70, 95, 120].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                          <div
                            className="w-full bg-[#7C3AED] rounded-t-md transition-all"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[10px] font-bold text-slate-400">M{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "collaborate" && (
              <motion.div
                key="collaborate"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-5 flex flex-col gap-6 bg-white p-8 rounded-3xl border border-purple-100 shadow-xl shadow-purple-900/5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center border border-purple-100">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Seamless Client &amp; Team Approval Portal
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Collaborate effortlessly. Share draft posts with your team or clients for instant feedback, edit requests, and one-click approvals.
                  </p>
                  <ul className="flex flex-col gap-2.5 text-xs text-slate-700 font-semibold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> One-Click Draft Approval Workflow
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Granular role-based user permissions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" /> Internal thread comments on post drafts
                    </li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary" colorTheme="violet" className="w-fit">
                      Try Workflow →
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-7 bg-gradient-to-br from-[#6D28D9] to-[#9333EA] rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                  <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                      <span className="font-extrabold text-sm text-slate-900">Post Draft Approval Pipeline</span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold">
                        Approved by Client
                      </span>
                    </div>
                    <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs">
                          REEL
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900">Summer D2C Product Launch Reel</span>
                          <span className="text-[10px] text-slate-500">Scheduled for Tomorrow at 5:00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ══ 4. FEATURE SHOWCASE GRID (Alternating Cards Layout) ══════════════ */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Growth Services"
            title="End-to-End Social Operations"
            description="Our specialized engineering and creative teams manage every layer of your digital marketing stack."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialData.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-purple-100 p-8 rounded-3xl shadow-xl shadow-purple-900/5 hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7C3AED] flex items-center justify-center font-bold text-sm border border-purple-100 font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-display">
                    {feature}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Designed to eliminate friction, elevate brand authority, and turn organic impressions into measurable revenue.
                  </p>
                </div>
                <div className="pt-4 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-[#7C3AED]">
                  <span>Explore Deliverable</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CLIENT REVIEWS & METRICS BAND ═════════════════════════════════ */}
      <section className="py-12 md:py-20 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#2E1065] to-[#0F172A] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <Badge colorTheme="white">Validated Social Outcome</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight">
                1,200+ High-Ticket B2B Leads Generated with a 55% Lower Cost-Per-Acquisition
              </h2>
              <p className="text-purple-200 text-sm md:text-base leading-relaxed max-w-2xl">
                See how our hybrid technical SEO and social media lead gen campaigns cut CPA and boosted qualified pipeline volume.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <Link href="/portfolio/b2b-saas-lead-generation-seo">
                <Button variant="primary" colorTheme="white" className="!py-3.5 !px-8">
                  Read Case Study →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. CTA BANNER & FAQS ═════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-purple-100/90 via-fuchsia-50/60 to-cyan-100/90 border border-purple-200/80 p-10 md:p-16 text-slate-900 shadow-xl shadow-purple-900/5 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
            <Badge colorTheme="navy">Ready to Scale Social?</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Start Scaling Your Social Presence &amp; Lead Engine Today
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Get in touch for a custom social media strategy audit and content calendar preview.
            </p>
            <Link href="/contact">
              <Button variant="primary" colorTheme="violet" className="!py-3.5 !px-8 text-base shadow-lg">
                Book a Strategy Call →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="border-t border-purple-100">
        <FAQSection
          items={socialFAQs}
          eyebrow="Got Questions?"
          title="Social Media Management — FAQs"
          description="Common questions about our social media management, content creation, and performance marketing."
        />
      </div>

    </div>
  );
}
