"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Layers,
  ChevronRight,
  RotateCcw,
  MousePointerClick,
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
import BeamBorder from "@/components/ui/BeamBorder";
import CTABanner from "@/components/ui/CTABanner";
import NumberTicker from "@/components/ui/NumberTicker";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { projects, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/* ─── FAQ Data ──────────────────────────────────────────────────────────────── */
const portfolioFAQs: FAQItem[] = [
  {
    q: "Do all projects include a live URL I can visit?",
    a: "Most projects include a live demo or production URL. Some enterprise projects are under NDA and show only screenshots and metrics by client permission. Every case study includes the challenge, our approach, the tech stack used, and the measurable results delivered."
  },
  {
    q: "Are these results real or fabricated for the portfolio?",
    a: "Every metric shown (conversion rates, organic reach numbers, revenue lifts) is real and pulled from client analytics dashboards with explicit permission. We never inflate or fabricate numbers. Clients can verify the data during a discovery call if needed."
  },
  {
    q: "Do you only show full-scale projects, or do you also take smaller builds?",
    a: "Our portfolio showcases a range of scopes — from fast MVPs and landing pages to full enterprise systems. We work on projects of all sizes, provided they meet our minimum engagement thresholds. The complexity of execution matters more than the budget size."
  },
  {
    q: "Can I request a project similar to one I see in the portfolio?",
    a: "Absolutely. If a specific case study resonates with your business, mention it when you contact us and say 'I want something like [Project Name].' We'll use it as a reference point during the discovery call to scope your project accurately and share relevant process insights."
  },
  {
    q: "Do you work on the full project (design + dev + marketing) or just parts?",
    a: "Both. Many clients engage us for the full stack — design, development, and growth marketing. Others come to us for a specific layer, like redesigning an existing site or running ads for an already-built product. We can plug in at any stage of your digital journey."
  },
];

/* ─── Value Props (Upload Digital Why-Us Style) ─────────────────────────────── */
const whyUsBlocks = [
  {
    title: "We are B2B & Enterprise domain experts",
    desc: "We take the time to understand your commercial goals & operational challenges, deploying tailored engineering patterns that guarantee return on investment.",
    icon: Shield,
    color: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    title: "We believe in collaboration & agile delivery",
    desc: "We get creative to solve complex bottlenecks. We believe in providing real-time data & rapid feedback cycles to optimize your targets continuously.",
    icon: Clock,
    color: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    title: "We always hit our conversion KPIs",
    desc: "Our engineering impact is directly measurable. We build long-term commercial partnerships, cheering your team on at every stage of scale.",
    icon: TrendingUp,
    color: "from-fuchsia-500/10 via-fuchsia-500/5 to-transparent",
  },
  {
    title: "We've got your back post-launch",
    desc: "Even after we deploy your application or campaign, our engineering team provides 24/7 SLAs, security patches, and continuous feature updates.",
    icon: Zap,
    color: "from-cyan-500/10 via-cyan-500/5 to-transparent",
  },
];

/* ─── Interactive 3D Service Flip Cards Data ───────────────────────────────── */
const flipCardsData = [
  {
    no: "01",
    frontTitle: "Outbound & Performance Media",
    frontSub: "meta.ads / google.search",
    backTitle: "High-Ticket Lead Generation",
    backSub: "3.5x ROAS Guarantee",
    frontIcon: Zap,
  },
  {
    no: "02",
    frontTitle: "Brand System & Identity",
    frontSub: "kknextech.com/branding",
    backTitle: "Global Market Recognition",
    backSub: "Distinctive Visual Edge",
    frontIcon: Sparkles,
  },
  {
    no: "03",
    frontTitle: "Social Media Growth",
    frontSub: "instagram / linkedin / x",
    backTitle: "Massive Audience Engagement",
    backSub: "+180% Avg Organic CTR",
    frontIcon: TrendingUp,
  },
  {
    no: "04",
    frontTitle: "Web & Mobile Engineering",
    frontSub: "nextjs / react native / shopify",
    backTitle: "Sub-Second Speed & UX",
    backSub: "Zero Mobile Friction",
    frontIcon: Layers,
  },
  {
    no: "05",
    frontTitle: "CRM & ERP Automation",
    frontSub: "hubspot / salesforce / odoo",
    backTitle: "Autonomous Ops Pipelines",
    backSub: "100+ Hours Saved/Mo",
    frontIcon: CheckCircle2,
  },
];

/* ─── Testimonials Data (Upload Digital Style Switcher) ──────────────────────── */
const clientTestimonials = [
  {
    role: "Co-Founder",
    quote: "Working with KK Next Tech Solutions has been a transformative experience. Over the past three years, they have played a pivotal role in shaping our brand identity and ecommerce tech. Their speed, strategic approach, and attention to detail ensured our brand resonates strongly with our audience.",
    metric: "+315% Ecommerce Growth",
  },
  {
    role: "Founder",
    quote: "The team went above and beyond to build a custom CRM and tracking dashboard that is visually striking and user-friendly. Their use of modern templates and automated webhooks brought our ops to life. Highly recommended!",
    metric: "120+ Hrs Saved Weekly",
  },
  {
    role: "Founder",
    quote: "KK NEX TECH has truly delivered. The platform they built for us is visually appealing and highly functional, catering specifically to climate tech. Every element is designed to engage visitors and drive our mission forward.",
    metric: "58% Completion Lift",
  },
  {
    role: "CEO & Founder",
    quote: "We started working with KK NEX TECH right from the pre-launch days. They helped us set up our digital presence and conceptualized communication narratives for our audiences. Execution was flawlesly executed.",
    metric: "1,200+ Qualified Leads",
  },
  {
    role: "Head of Marketing",
    quote: "Their work has significantly reduced my stress in having to imagine, design, and implement a new design language. Having worked with them for over two years, we greatly value their dedication and consistent performance.",
    metric: "3.1x Return on Ad Spend",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-x-clip font-sans">
      <ParticleField count={45} color="124, 58, 237" opacity={0.15} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[40%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display text-slate-900 uppercase">
              Proven Projects. <br />
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Measurable Commercial Wins.
              </AnimatedGradientText>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We empower companies with high-performance software, 3D web applications, and data-driven marketing strategies that dominate search and drive revenue.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. ALL CASE STUDIES - INTERACTIVE SCROLL STACK (React Bits)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col gap-8 md:gap-10">
          <SectionHeading
            eyebrow="Commercial Implementations"
            title="Recent Client Case Studies"
            description="Explore our high-impact engineering builds across ecommerce, logistics, SaaS, and operations automation."
          />

          {/* Full Page Flow ScrollStack */}
          <div className="w-full relative">
            <ScrollStack
              useWindowScroll={true}
              stackPosition="95px"
              itemDistance={90}
              itemStackDistance={24}
              itemScale={0.035}
              baseScale={0.88}
              dimAmount={0.12}
              blurAmount={0.4}
              tiltAmount={1}
              rotationAmount={0.6}
              holdDistance={160}
              smoothScroll={false}
              snap={false}
            >
              {projects.map((project: Project, idx: number) => (
                <ScrollStackItem
                  key={project.slug}
                  itemClassName="!h-auto min-h-[380px] md:!h-[24rem] lg:!h-[22rem] !p-6 sm:!p-8 !bg-white !text-slate-900 border border-purple-100/90 shadow-2xl shadow-purple-950/10 rounded-3xl"
                >
                  <div className="flex flex-col md:flex-row items-stretch gap-6 h-full">
                    {/* Left Column: Case Study Details */}
                    <div className="flex-1 flex flex-col justify-between gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200/80 px-2.5 py-1 rounded-full font-display">
                              {project.category}
                            </span>
                            <span className="text-xs font-bold text-slate-400 font-mono">
                              {project.client}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full font-mono">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            {project.resultMetric}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-black text-xl sm:text-2xl text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 md:line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-purple-50 text-[11px] font-semibold text-purple-700">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-100/80 text-[11px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-100/70 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-extrabold transition-all shadow-md shadow-purple-600/25 hover:shadow-lg hover:shadow-purple-600/35 group cursor-pointer"
                        >
                          View Full Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-purple-600 transition-colors"
                        >
                          Start Similar Project <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: High-Fidelity Project Graphic Preview */}
                    <div className="w-full md:w-[42%] lg:w-[40%] shrink-0">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="group/img block relative w-full h-48 md:h-full rounded-2xl overflow-hidden bg-slate-900 border border-purple-100/80 shadow-inner"
                      >
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 group-hover/img:opacity-50 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[11px] font-mono font-bold text-white/90 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                            Case #{String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] font-bold text-white bg-purple-600/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-purple-400/40">
                            Read Study <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. WHY WORK WITH US / VALUE PROPS (Upload Digital why-us Section)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-slate-950 text-white border-y border-purple-500/20 relative overflow-hidden">
        <ParticleField count={30} color="147, 51, 234" opacity={0.2} />
        <GlowingOrb className="top-[-20%] left-[-10%]" color="#7C3AED" size={500} opacity={0.15} blur={140} />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <Badge colorTheme="navy" className="!bg-purple-900/60 !text-purple-300 !border-purple-700">
              Why Partner With Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              Domain Expertise &amp;{" "}
              <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                Execution Guarantee
              </AnimatedGradientText>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We take the time to deeply understand your commercial goals before writing code, ensuring every sprint yields measurable ROI.
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
          6. INTERACTIVE 3D SERVICE FLIP CARDS (Upload Digital Flipping Cards Section)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 border-b border-purple-100 relative">
        <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.08)" size={700}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
            <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Core Capabilities
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900">
                Imagine What Being Digitally Active Could Do For Your Business?
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
          8. CTA BANNER & FAQS
      ════════════════════════════════════════════════════════════════════ */}
      <CTABanner />

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
