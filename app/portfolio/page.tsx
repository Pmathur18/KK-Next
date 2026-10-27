"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Layers,
  ChevronRight,
  Globe,
  Laptop,
  Layers3,
  Cpu,
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
import { projects, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/* ─── FAQ Data ──────────────────────────────────────────────────────────────── */
const portfolioFAQs: FAQItem[] = [
  {
    q: "Do all projects include a live URL or demo I can explore?",
    a: "Yes. Every project includes an in-depth case study detailing architecture, pain points, and results. Where client confidentiality permits, we provide live production links or interactive walkthroughs. For enterprise systems under NDA, we show sanitized workflows and verified metrics."
  },
  {
    q: "Are the performance and revenue metrics real?",
    a: "Every metric shown (e.g. +315% ROAS, 1.2s page speeds, +38% conversion lift) is verified through client analytics platforms (Google Analytics 4, Shopify Dashboard, Stripe, or Meta Ads Manager). We never use fabricated numbers."
  },
  {
    q: "Can you build a similar custom solution for my brand?",
    a: "Absolutely. When you book a technical consultation, you can reference any case study (e.g., 'I want a headless Shopify build like Aurora Boutique'). We will assess your existing architecture and provide a tailored engineering and marketing roadmap."
  },
  {
    q: "Do you offer full-stack delivery (Design + Dev + Growth) or modular work?",
    a: "Both. While many clients hire us for complete end-to-end execution—from UX wireframes to Next.js development and ad scaling—we also accept modular engagements such as headless rebuilds, API integrations, or CRO audits."
  },
  {
    q: "What SLAs and post-launch maintenance do you provide?",
    a: "All production deployments include 30-90 days of hyper-care warranty, real-time monitoring, security patches, and 99.9% uptime SLAs with dedicated engineering support."
  },
];

/* ─── Value Props ───────────────────────────────────────────────────────────── */
const whyUsBlocks = [
  {
    title: "B2B & Enterprise Domain Experts",
    desc: "We understand commercial objectives and operational bottlenecks, designing software architecture that guarantees measurable return on investment.",
    icon: Shield,
    color: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    title: "Agile Sprints & Rapid Turnaround",
    desc: "Direct communication with senior engineers and sprint-based bi-weekly deployments with real-time feedback loops.",
    icon: Clock,
    color: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    title: "Guaranteed Commercial KPIs",
    desc: "Our engineering impact is directly tied to business results—faster load times, higher checkout conversion, and scalable backend infrastructure.",
    icon: TrendingUp,
    color: "from-fuchsia-500/10 via-fuchsia-500/5 to-transparent",
  },
  {
    title: "24/7 Post-Launch Hyper-Care",
    desc: "After deployment, our engineering team manages 24/7 uptime monitoring, Core Web Vitals maintenance, and continuous optimization.",
    icon: Zap,
    color: "from-cyan-500/10 via-cyan-500/5 to-transparent",
  },
];

/* ─── Interactive 3D Service Flip Cards Data ───────────────────────────────── */
const flipCardsData = [
  {
    no: "01",
    frontTitle: "Outbound & Performance Media",
    frontSub: "Meta Ads · Google Search",
    backTitle: "High-Ticket Lead Generation",
    backSub: "3.5x+ ROAS Scaling",
    frontIcon: Zap,
  },
  {
    no: "02",
    frontTitle: "Headless E-Commerce",
    frontSub: "Shopify API · Next.js 15",
    backTitle: "Sub-Second Page Loads",
    backSub: "+38% Mobile Checkout Lift",
    frontIcon: Globe,
  },
  {
    no: "03",
    frontTitle: "Custom Web Applications",
    frontSub: "React · TypeScript · Cloud",
    backTitle: "Interactive 3D / SaaS",
    backSub: "High-Converting UX Systems",
    frontIcon: Laptop,
  },
  {
    no: "04",
    frontTitle: "ERP & Workflow Automation",
    frontSub: "Microservices · Webhooks",
    backTitle: "Operational Efficiency",
    backSub: "120+ Hours Saved Weekly",
    frontIcon: Cpu,
  },
  {
    no: "05",
    frontTitle: "Growth CRO & SEO Strategy",
    frontSub: "Technical SEO · Core Vitals",
    backTitle: "Dominant Search Visibility",
    backSub: "+180% Organic Inbound Traffic",
    frontIcon: TrendingUp,
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      <ParticleField count={40} color="124, 58, 237" opacity={0.12} />
      <GlowingOrb className="top-[-8%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[35%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-12 pb-6 md:pt-16 md:pb-10 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-5 max-w-4xl mx-auto">
          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase">
              Proven Projects. <br />
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Measurable Commercial Wins.
              </AnimatedGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              We engineer high-performance web applications, headless e-commerce storefronts, and automated enterprise software designed to eliminate bottlenecks and scale revenue.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. PORTFOLIO SHOWCASE: INTERACTIVE DEVICE FRAMES & STAR FRAMEWORK
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Engineered For Growth"
              title="Technical Case Studies & Client ROI"
              description="Detailed breakdowns of client bottlenecks, architecture deliverables, and verified commercial impact."
            />
          </div>

          {/* Grid of Case Studies */}
          <div className="grid grid-cols-1 gap-12">
            <AnimatePresence mode="wait">
              {projects.map((project: Project, idx: number) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-950/5 hover:border-purple-300 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row group"
                >
                  {/* Left Column: Details, Industry, STAR Framework, CTAs */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 order-2 lg:order-1">
                    <div className="flex flex-col gap-4">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Industry Badge */}
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200/80 px-3 py-1 rounded-full font-mono">
                            {project.industry}
                          </span>
                          {/* Client / Category */}
                          <span className="text-xs font-bold text-slate-500 font-mono">
                            {project.client} · {project.filterCategory}
                          </span>
                        </div>

                      </div>

                      {/* Title */}
                      <Link href={`/portfolio/${project.slug}`}>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors cursor-pointer">
                          {project.title}
                        </h2>
                      </Link>

                      {/* Brief description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      {/* STAR / PDR Framework Box */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-3 my-1">
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                          STAR / PDR Executive Snapshot
                        </div>

                        <div className="flex flex-col gap-2.5 text-xs sm:text-[13px] leading-relaxed">
                          <div className="flex items-start gap-2.5">
                            <span className="shrink-0 px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-extrabold text-[10px] tracking-wide uppercase font-mono mt-0.5">
                              Problem
                            </span>
                            <span className="text-slate-700 font-medium">
                              {project.starFramework.problem}
                            </span>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <span className="shrink-0 px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-extrabold text-[10px] tracking-wide uppercase font-mono mt-0.5">
                              Deliverable
                            </span>
                            <span className="text-slate-700 font-medium">
                              {project.starFramework.deliverable}
                            </span>
                          </div>

                          <div className="flex items-start gap-2.5">
                            <span className="shrink-0 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-extrabold text-[10px] tracking-wide uppercase font-mono mt-0.5">
                              Result
                            </span>
                            <span className="text-slate-900 font-bold">
                              {project.starFramework.result}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase font-mono">
                          Core Stack:
                        </span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-purple-50/70 border border-purple-100 text-[11px] font-semibold text-purple-700 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-black transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 cursor-pointer group/btn"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(project.filterCategory)}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-purple-700 transition-colors cursor-pointer"
                      >
                        <span>Start Similar Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Interactive Device Mockup Frame (MacBook/Browser Frame with Hover Effects) */}
                  <div className="w-full lg:w-[48%] xl:w-[46%] bg-slate-900 p-4 sm:p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-800">
                    <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                      {/* Browser / Laptop Frame Header */}
                      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                        {/* 3 Window Dots */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>

                        {/* Simulated Browser Address Pill */}
                        <div className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 truncate max-w-[220px] sm:max-w-[280px]">
                          kknexttech.com/portfolio/{project.slug}
                        </div>

                        <div className="w-10 flex justify-end">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                      </div>

                      {/* Device Screen with Hover Tech Badges Overlay */}
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="relative block w-full h-[220px] sm:h-[280px] lg:h-[320px] overflow-hidden group/screen cursor-pointer bg-slate-950"
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/screen:scale-108 group-hover/screen:-translate-y-2"
                        />

                        {/* Permanent Gradient Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover/screen:opacity-40 transition-opacity" />

                        {/* Hover Overlay: Tech Stack Floating Badges */}
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center items-center text-center gap-3">
                          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                            Interactive Architecture Preview
                          </span>
                          <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-mono font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-bold mt-2 shadow-lg shadow-purple-600/40">
                            Explore Case Architecture <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Fixed bottom badges when not hovered */}
                        <div className="absolute bottom-3 left-3 pointer-events-none group-hover/screen:opacity-0 transition-opacity">
                          <span className="text-[11px] font-mono font-bold text-white/90 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                            {project.client}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. WHY WORK WITH US / VALUE PROPS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-slate-950 text-white border-y border-purple-500/20 relative overflow-hidden">
        <ParticleField count={30} color="147, 51, 234" opacity={0.2} />
        <GlowingOrb className="top-[-20%] left-[-10%]" color="#7C3AED" size={500} opacity={0.15} blur={140} />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col gap-14">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              Domain Expertise &amp;{" "}
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Execution Guarantee
              </AnimatedGradientText>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We take the time to understand your commercial goals before writing code, ensuring every sprint yields measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsBlocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <ScrollReveal key={block.title} delay={idx * 0.1}>
                  <Tilt3DCard intensity={8} className="h-full">
                    <div className={cn("h-full p-8 rounded-3xl bg-gradient-to-br border border-purple-500/20 backdrop-blur-xl flex flex-col justify-between gap-6 shadow-2xl hover:border-purple-400/50 transition-all", block.color)}>
                      <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700 flex items-center justify-center text-purple-300 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-extrabold text-white font-display leading-snug">
                          {block.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {block.desc}
                        </p>
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. INTERACTIVE 3D SERVICE FLIP CARDS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 border-b border-purple-100 relative">
        <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.08)" size={700}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-14">
            <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
                What Can Scaled Digital Engineering Do For Your Brand?
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Hover or tap any card below to flip and see the business outcomes we deliver for each engineering pillar.
              </p>
            </div>

            {/* 3D Flip Card Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {flipCardsData.map((card, idx) => (
                <ScrollReveal key={card.no} delay={idx * 0.1}>
                  <div className="group h-[260px] [perspective:1000px] cursor-pointer">
                    <div className="relative h-full w-full rounded-3xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl shadow-purple-900/5 border border-purple-100">

                      {/* FRONT FACE */}
                      <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-6 flex flex-col justify-between [backface-visibility:hidden]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black font-mono text-purple-600">
                            {card.no}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
                            <card.frontIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-slate-900 font-display mb-1">
                            {card.frontTitle}
                          </h3>
                          <span className="text-[11px] font-mono text-slate-400 font-medium">
                            {card.frontSub}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs font-extrabold text-purple-600 pt-2 border-t border-purple-50">
                          <span>Hover to see impact</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 p-6 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black font-mono text-purple-300">
                            IMPACT
                          </span>
                          <Sparkles className="w-4 h-4 text-purple-300" />
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-white font-display mb-1">
                            {card.backTitle}
                          </h3>
                          <span className="text-[11px] font-mono text-purple-300 font-bold">
                            {card.backSub}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs font-extrabold text-white pt-2 border-t border-purple-500/30">
                          <span>Proven Outcome</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </SpotlightSection>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. CTA BANNER & FAQS
      ════════════════════════════════════════════════════════════════════ */}
      <CTABanner
        title="Facing a Similar Tech or Growth Bottleneck?"
        description="Schedule a technical discovery call with our engineering and growth specialists. We'll audit your current stack and present a verified roadmap."
        buttonText="Book Technical Consultation →"
        buttonLink="/contact"
      />

      {/* FAQs */}
      <div className="border-t border-purple-100">
        <FAQSection
          items={portfolioFAQs}
          eyebrow="Got Questions?"
          title="Portfolio &amp; Outcomes — FAQs"
          description="Everything you need to know about our project deliverables and case studies."
        />
      </div>

    </div>
  );
}
