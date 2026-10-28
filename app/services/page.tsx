"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Share2,
  Database,
  Receipt,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Cpu,
  Code2,
  Rocket,
  Users,
  Layers,
  ChevronRight,
  BarChart3,
  Check,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SpotlightSection from "@/components/ui/SpotlightSection";
import GlowingOrb from "@/components/ui/GlowingOrb";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import CTABanner from "@/components/ui/CTABanner";
import { cn } from "@/lib/utils";

/* ─── Service Schema JSON-LD (Search Engines) ─────────────────────────────── */
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Software Development and Growth Marketing",
  "provider": {
    "@type": "Organization",
    "name": "KK Next Tech Solutions",
    "url": "https://www.kknexttech.com",
    "logo": "https://www.kknexttech.com/logo.png",
  },
  "areaServed": {
    "@type": "Country",
    "name": "India",
  },
  "description":
    "Custom web application development, headless Shopify architecture, cross-platform mobile apps, enterprise ERP/CRM integrations, and high-ROAS performance marketing.",
};

/* ─── FAQs Data ───────────────────────────────────────────────────────────── */
const allServicesFAQs: FAQItem[] = [
  {
    q: "How do you structure engagements between software engineering and marketing?",
    a: "We believe code and growth should never be siloed. For engineering projects (custom web, mobile apps, ERP), we deploy sprint-based pods. For marketing and customer acquisition, we work on KPI-aligned monthly retainers. Clients can hire us for either pillar individually or as an integrated full-stack growth partner.",
  },
  {
    q: "How fast can you deploy our MVP or new feature sprint?",
    a: "Our High-Velocity Sprint model delivers production-ready MVPs or headless storefronts within 2 to 4 weeks. Full enterprise ERP integrations or custom mobile apps range from 6 to 10 weeks depending on custom API scope.",
  },
  {
    q: "Do you build fully custom designs or adapt existing templates?",
    a: "Every engagement starts with bespoke Figma design systems engineered around your exact audience and conversion funnels. We write clean, modern code (Next.js, TypeScript, Tailwind) with zero template bloat to ensure 100/100 Core Web Vitals.",
  },
  {
    q: "Can I hire a dedicated engineering pod rather than fixed-scope projects?",
    a: "Yes. Our Dedicated Tech Partner model embeds senior full-stack developers, a solutions architect, and a QA engineer directly into your workflow with daily async standups and bi-weekly release cycles.",
  },
  {
    q: "What SLAs and post-launch maintenance guarantees do you provide?",
    a: "All production deployments include 30 to 90 days of hyper-care warranty, real-time error logging, Core Web Vitals maintenance, and 99.9% uptime SLAs with dedicated emergency response channels.",
  },
];

/* ─── Engagement Models Data ──────────────────────────────────────────────── */
const engagementModels = [
  {
    tier: "Model 01",
    name: "High-Velocity Sprints",
    subtitle: "2 – 4 Week Turnaround",
    desc: "Fixed-scope, rapid engineering sprints for startups and fast-moving brands validating new products, migrating to headless, or building specific custom modules.",
    highlights: [
      "Fixed scope, fixed budget guarantee",
      "Bi-weekly staging deployment demos",
      "Direct Slack/Discord access to senior engineers",
      "Production-ready handover with full IP ownership",
    ],
    recommendedFor: "MVPs, Headless Rebuilds, Feature Additions",
    badge: "Fastest Time-to-Market",
    color: "border-purple-200 bg-purple-50/50",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    tier: "Model 02",
    name: "Dedicated Tech Partner",
    subtitle: "Dedicated Engineering Pod",
    desc: "Long-term architectural stewardship and continuous feature delivery. We embed senior engineers, cloud architects, and QA leads directly into your operations.",
    highlights: [
      "Dedicated senior developers & solution architect",
      "Agile bi-weekly sprint planning & backlog grooming",
      "24/7 uptime monitoring & security patch SLAs",
      "Enterprise CRM/ERP integration and middleware",
    ],
    recommendedFor: "Scaling Scale-ups, Mid-Market, Enterprises",
    badge: "Most Popular for Scale",
    color: "border-purple-500/50 bg-gradient-to-b from-purple-50/80 to-white shadow-xl shadow-purple-950/5",
    badgeColor: "bg-purple-600 text-white",
  },
  {
    tier: "Model 03",
    name: "Growth & CRO Retainer",
    subtitle: "Monthly Revenue Retainer",
    desc: "Full-funnel customer acquisition and conversion optimization engineered to scale paid return on ad spend (ROAS) and dominate organic search visibility.",
    highlights: [
      "Omnichannel media management (Meta, Google, LinkedIn)",
      "Continuous A/B multivariate CRO testing",
      "Complete creative studio (video reels, copy, banners)",
      "Real-time attribution & custom GA4 dashboards",
    ],
    recommendedFor: "D2C Brands, B2B SaaS, High-Ticket Lead Gen",
    badge: "Predictable ROAS Scaling",
    color: "border-blue-200 bg-blue-50/40",
    badgeColor: "bg-blue-100 text-blue-700",
  },
];

/* ─── Service Cards Data (Problem vs Solution Framework) ──────────────────── */
const buildServices = [
  {
    id: "web-development",
    slug: "web-development",
    title: "High-Performance Custom Web Apps & Headless Commerce",
    h2: "Custom Software & Web Application Development",
    h3: "Headless CMS & API Integrations",
    badge: "Web Engineering",
    problem:
      "Legacy Liquid templates and bloated monolithic websites taking 4.5+ seconds to load, causing 60%+ mobile drop-offs and capping checkout conversion.",
    solution:
      "Sub-second Next.js 15 headless architecture connected to Shopify Storefront API or custom microservices, slashing load times to < 0.8s and lifting conversion by up to 38%.",
    metric: "< 0.8s Load Time · +38% Checkout Lift",
    techStack: ["Next.js 15", "React 19", "Shopify Plus API", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel Edge"],
    image: "/images/web_architecture_showcase.jpg",
    route: "/services/web-development",
    serviceParam: "web-development",
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Cross-Platform Mobile Apps Engineered for 60fps Native Retention",
    h2: "Cross-Platform Mobile Applications (iOS & Android)",
    h3: "Offline-First Synchronization & Push Pipelines",
    badge: "Mobile Engineering",
    problem:
      "Maintaining two isolated native iOS (Swift) and Android (Kotlin) codebases doubles development budgets, delays feature rollouts, and leads to inconsistent UI bugs.",
    solution:
      "Single cross-platform codebase built with React Native and Flutter delivering native 60fps gesture fluidity, offline-first SQLite sync, and guaranteed App Store approvals.",
    metric: "50% Faster Delivery · 100% Store Approval",
    techStack: ["React Native", "Flutter", "TypeScript", "iOS / Swift", "Android / Kotlin", "Firebase", "Fastlane"],
    image: "/images/mobile_app_showcase.jpg",
    route: "/services/mobile-apps",
    serviceParam: "mobile-apps",
  },
  {
    id: "crm-erp",
    slug: "crm-erp",
    title: "Enterprise CRM & ERP Automation Engineered to Eliminate Silos",
    h2: "Enterprise CRM & ERP Workflow Automation",
    h3: "Bi-Directional Database Sync & Webhook Connectors",
    badge: "Enterprise Automation",
    problem:
      "Operations teams spending 20+ hours weekly manually syncing sales leads, inventory records, and invoicing across disconnected spreadsheets and legacy software.",
    solution:
      "Custom webhook middleware and bi-directional API pipelines unifying HubSpot, Salesforce, and Odoo ERP into automated real-time executive dashboards.",
    metric: "120+ Hours Saved Weekly · Zero Dropped Leads",
    techStack: ["HubSpot CRM", "Salesforce API", "Odoo ERP", "Python", "Node.js", "PostgreSQL", "AWS Lambda"],
    image: "/images/crm_erp_dashboard.jpg",
    route: "/services/crm-erp",
    serviceParam: "crm-erp",
  },
  {
    id: "expense-management",
    slug: "expense-management",
    title: "Corporate Expense Management Cloud & Real-Time Ledger Sync",
    h2: "Automated Expense Management Cloud Solutions",
    h3: "Neural OCR Receipt Capture & Accounting Feeds",
    badge: "Spend Automation",
    problem:
      "Lost paper receipts, delayed manual reimbursement approvals, out-of-policy spending leaks, and tedious month-end GST ledger entry into Tally and QuickBooks.",
    solution:
      "AI receipt autoscan OCR (99.2% accuracy), automated multi-tier Slack/WhatsApp approval bots, GPS mileage calculation, and 1-click ledger synchronization.",
    metric: "85% Faster Reimbursements · 100% GST Compliance",
    techStack: ["Next.js", "AI OCR Neural Engine", "Tally Prime API", "QuickBooks", "RazorpayX", "PostgreSQL"],
    image: "/images/expense_management_platform.jpg",
    route: "/services/expense-management",
    serviceParam: "expense-management",
  },
];

const growthServices = [
  {
    id: "socials",
    slug: "socials",
    title: "Full-Funnel Performance Marketing Engineered to Scale ROAS Predictably",
    h2: "Performance Marketing & ROAS Optimization",
    h3: "Precision Paid Acquisition & Organic Authority Scaling",
    badge: "Commercial Growth",
    problem:
      "Burning ad spend on generic boosting and vanity clicks with soaring customer acquisition costs (CAC) and zero attribution to actual pipeline revenue.",
    solution:
      "Data-driven omnichannel acquisition (Meta Ads, Google Search, LinkedIn Ads) fused with high-velocity creative testing and conversion rate optimization (CRO).",
    metric: "3.5x+ Average ROAS · -42% Lower CPL",
    techStack: ["Meta Ads Manager", "Google Ads API", "LinkedIn Campaign Mgr", "GA4 Attribution", "Figma Creative Studio"],
    image: "/images/social_marketing_showcase.jpg",
    route: "/services/socials",
    serviceParam: "socials",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "build" | "scale">("all");

  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      {/* Schema Markup for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <ParticleField count={35} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase">
              Engineering &amp; Growth Services <br />
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Built to Scale Your Business.
              </AnimatedGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Most agencies write code or run ads—rarely both. We bridge the gap by pairing robust, sub-second software architecture with aggressive performance marketing that fuels predictable commercial ROI.
            </p>
          </ScrollReveal>

          {/* Quick Nav Pills (Clean Full URLs with Zero # Fragments) */}
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <Link
                href="/services/web-development"
                className="px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white text-xs font-bold transition-all border border-purple-200 hover:border-purple-600 flex items-center gap-1.5 shadow-xs hover:shadow-md"
              >
                <Laptop className="w-3.5 h-3.5" /> Web Apps &amp; Shopify
              </Link>
              <Link
                href="/services/mobile-apps"
                className="px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-bold transition-all border border-blue-200 hover:border-blue-600 flex items-center gap-1.5 shadow-xs hover:shadow-md"
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile Apps (iOS/Android)
              </Link>
              <Link
                href="/services/crm-erp"
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-purple-700 text-slate-800 hover:text-white text-xs font-bold transition-all border border-slate-200 hover:border-purple-600 flex items-center gap-1.5 shadow-xs hover:shadow-md"
              >
                <Database className="w-3.5 h-3.5" /> CRM &amp; ERP Automation
              </Link>
              <Link
                href="/services/socials"
                className="px-4 py-2 rounded-full bg-fuchsia-50 hover:bg-fuchsia-600 text-fuchsia-700 hover:text-white text-xs font-bold transition-all border border-fuchsia-200 hover:border-fuchsia-600 flex items-center gap-1.5 shadow-xs hover:shadow-md"
              >
                <Share2 className="w-3.5 h-3.5" /> Performance Ads &amp; Socials
              </Link>
              <Link
                href="/services/expense-management"
                className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-bold transition-all border border-emerald-200 hover:border-emerald-600 flex items-center gap-1.5 shadow-xs hover:shadow-md"
              >
                <Receipt className="w-3.5 h-3.5" /> Expense Management
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. TWO STRATEGIC PILLARS TOGGLE (BUILD VS SCALE)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="sticky top-[64px] z-30 bg-white/85 backdrop-blur-xl border-y border-purple-100 py-3 px-6 md:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase mr-1 hidden sm:inline">
              Filter Pillar:
            </span>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer",
                activeTab === "all"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-700"
              )}
            >
              All Capabilities (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("build")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "build"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-700"
              )}
            >
              <Code2 className="w-3.5 h-3.5" /> Pillar 1: Build &amp; Engineer
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("scale")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "scale"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-700"
              )}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Pillar 2: Scale &amp; Market
            </button>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <span>Need Custom Architecture?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. MODULAR PROBLEM VS SOLUTION SERVICE CARDS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col gap-16">

          {/* ── PILLAR 1: BUILD & ENGINEER ── */}
          {(activeTab === "all" || activeTab === "build") && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-100 text-purple-800 text-xs font-mono font-bold uppercase tracking-wider w-fit">
                  <Code2 className="w-3.5 h-3.5" /> Pillar 1: Software Architecture &amp; Engineering
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                  Custom Software, Mobile Apps &amp; Enterprise Automations
                </h2>
                <p className="text-sm sm:text-base text-slate-500 max-w-2xl">
                  We write modern, type-safe, cloud-native code engineered for sub-second speeds, zero-downtime scalability, and seamless backend data flows.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {buildServices.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 hover:border-purple-300 transition-all overflow-hidden flex flex-col lg:flex-row group"
                  >
                    {/* Left: Problem vs Solution Details */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 order-2 lg:order-1">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full font-mono">
                            {service.badge}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors">
                            {service.h2}
                          </h2>
                          <h3 className="text-xs sm:text-sm font-semibold text-purple-700 font-mono mt-1">
                            {service.h3}
                          </h3>
                        </div>

                        {/* PROBLEM VS SOLUTION COMPARISON GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                          {/* Problem Column */}
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase font-mono tracking-wider">
                              <AlertCircle className="w-4 h-4 text-rose-600" /> The Bottleneck
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                              {service.problem}
                            </p>
                          </div>

                          {/* Solution Column */}
                          <div className="flex flex-col gap-2 sm:border-l sm:border-slate-200 sm:pl-4">
                            <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase font-mono tracking-wider">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Our Solution
                            </div>
                            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                              {service.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase font-mono">
                            Core Stack:
                          </span>
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-purple-50/70 border border-purple-100 text-[11px] font-semibold text-purple-700 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href={service.route}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-black transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 cursor-pointer group/btn"
                        >
                          Explore Dedicated Platform
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>

                        <Link
                          href={`/contact?service=${service.serviceParam}`}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-500 hover:text-purple-700 transition-colors cursor-pointer"
                        >
                          <span>Book Technical Scope Review</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Graphic Preview */}
                    <div className="w-full lg:w-[42%] bg-slate-900 relative overflow-hidden order-1 lg:order-2">
                      <Link href={service.route} className="block w-full h-[240px] sm:h-[300px] lg:h-full group/img">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-mono font-bold text-white/90 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            Enterprise Ready
                          </span>
                          <span className="text-[11px] font-bold text-white bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-purple-400/40">
                            View Deep Dive <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── PILLAR 2: SCALE & MARKET ── */}
          {(activeTab === "all" || activeTab === "scale") && (
            <div className="flex flex-col gap-10 pt-6">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fuchsia-100 text-fuchsia-800 text-xs font-mono font-bold uppercase tracking-wider w-fit">
                  <TrendingUp className="w-3.5 h-3.5" /> Pillar 2: Growth Engineering &amp; Media Scaling
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display">
                  Performance Marketing &amp; ROAS Optimization
                </h2>
                <p className="text-sm sm:text-base text-slate-500 max-w-2xl">
                  We turn high-performance web products into predictable revenue engines through full-funnel paid media acquisition and technical search dominance.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {growthServices.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 hover:border-purple-300 transition-all overflow-hidden flex flex-col lg:flex-row group"
                  >
                    {/* Left: Problem vs Solution Details */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 order-2 lg:order-1">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-3 py-1 rounded-full font-mono">
                            {service.badge}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors">
                            {service.h2}
                          </h2>
                          <h3 className="text-xs sm:text-sm font-semibold text-fuchsia-700 font-mono mt-1">
                            {service.h3}
                          </h3>
                        </div>

                        {/* PROBLEM VS SOLUTION COMPARISON GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                          {/* Problem Column */}
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase font-mono tracking-wider">
                              <AlertCircle className="w-4 h-4 text-rose-600" /> The Bottleneck
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                              {service.problem}
                            </p>
                          </div>

                          {/* Solution Column */}
                          <div className="flex flex-col gap-2 sm:border-l sm:border-slate-200 sm:pl-4">
                            <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase font-mono tracking-wider">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Our Solution
                            </div>
                            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                              {service.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase font-mono">
                            Tools &amp; APIs:
                          </span>
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-fuchsia-50/70 border border-fuchsia-100 text-[11px] font-semibold text-fuchsia-700 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href={service.route}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-black transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 cursor-pointer group/btn"
                        >
                          Explore Growth Platform
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>

                        <Link
                          href={`/contact?service=${service.serviceParam}`}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-500 hover:text-purple-700 transition-colors cursor-pointer"
                        >
                          <span>Request Paid Audit &amp; Strategy</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Graphic Preview */}
                    <div className="w-full lg:w-[42%] bg-slate-900 relative overflow-hidden order-1 lg:order-2">
                      <Link href={service.route} className="block w-full h-[240px] sm:h-[300px] lg:h-full group/img">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-mono font-bold text-white/90 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            Omnichannel Strategy
                          </span>
                          <span className="text-[11px] font-bold text-white bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-purple-400/40">
                            Explore Socials <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. HOW WE ENGAGE (CLEAR SERVICE TIERS & ENGAGEMENT MODELS)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-slate-950 text-white border-y border-purple-500/20 relative overflow-hidden">
        <ParticleField count={30} color="147, 51, 234" opacity={0.2} />
        <GlowingOrb className="top-[-20%] left-[-10%]" color="#7C3AED" size={500} opacity={0.15} blur={140} />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col gap-14">
          <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <Badge colorTheme="navy" className="!bg-purple-900/60 !text-purple-300 !border-purple-700">
              Clear Engagement Models
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              How We Partner With Your Team
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Transparent, flexible collaboration models designed to fit your roadmap, stage of growth, and internal engineering velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {engagementModels.map((model, idx) => (
              <ScrollReveal key={model.name} delay={idx * 0.1}>
                <Tilt3DCard intensity={8} className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-xl flex flex-col justify-between gap-8 relative overflow-hidden shadow-2xl hover:border-purple-400/60 transition-all">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                          {model.tier}
                        </span>
                        <span className={cn("text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider", model.badgeColor)}>
                          {model.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-white font-display">
                          {model.name}
                        </h3>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {model.subtitle}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                          {model.desc}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2.5 pt-4 border-t border-purple-500/20">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300">
                          What&apos;s Included:
                        </span>
                        <ul className="flex flex-col gap-2 text-xs text-slate-300">
                          {model.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-purple-500/20 flex flex-col gap-3">
                      <span className="text-[11px] font-mono text-slate-400">
                        <strong className="text-purple-300">Best For:</strong> {model.recommendedFor}
                      </span>
                      <Link href={`/contact?model=${encodeURIComponent(model.name)}`}>
                        <Button
                          variant="primary"
                          colorTheme="violet"
                          className="w-full !py-3 text-xs font-bold shadow-lg shadow-purple-500/25"
                        >
                          Select {model.name} →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. TECHNICAL SCOPE & ARCHITECTURE REVIEW CTA BANNER
      ════════════════════════════════════════════════════════════════════ */}
      <CTABanner
        badge="Direct Engineer Access"
        title={
          <>
            Book a Technical Scope &amp;{" "}
            <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
              Architecture Review
            </AnimatedGradientText>
          </>
        }
        description="Facing a complex engineering challenge, slow storefront, or scaling bottleneck? Book a 30-minute discovery session with our senior solutions architects. We'll audit your current stack and provide an actionable roadmap."
        buttonText="Book Technical Scope & Architecture Review →"
        buttonLink="/contact"
      />

      {/* ════════════════════════════════════════════════════════════════════
          6. COMPREHENSIVE FAQS
      ════════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-purple-100">
        <FAQSection
          items={allServicesFAQs}
          eyebrow="Got Questions?"
          title="Engineering &amp; Growth Services — FAQs"
          description="Everything you need to know about our code architectures, sprint deliveries, and growth retainers."
        />
      </div>

    </div>
  );
}
