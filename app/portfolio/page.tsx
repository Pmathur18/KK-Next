"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Play,
  VolumeX,
  Volume2,
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
import NumberTicker from "@/components/ui/NumberTicker";
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
    color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
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
    frontSub: "zoho / salesforce / odoo",
    backTitle: "Autonomous Ops Pipelines",
    backSub: "100+ Hours Saved/Mo",
    frontIcon: CheckCircle2,
  },
];

/* ─── Testimonials Data (Upload Digital Style Switcher) ──────────────────────── */
const clientTestimonials = [
  {
    role: "Co-Founder",
    quote: "Working with KK NEX TECH SOLUTION has been a transformative experience. Over the past three years, they have played a pivotal role in shaping our brand identity and ecommerce tech. Their speed, strategic approach, and attention to detail ensured our brand resonates strongly with our audience.",
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
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filters = ["All", "Websites", "Mobile Apps", "Social Media", "CRM/ERP"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.category === selectedFilter;
  });

  const featuredProjects = filteredProjects.slice(0, 4);
  const secondaryProjects = filteredProjects.slice(4);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full bg-white text-slate-900 min-h-screen overflow-hidden font-sans">
      <ParticleField count={45} color="124, 58, 237" opacity={0.15} />
      <GlowingOrb className="top-[-10%] right-[-5%]" color="#7C3AED" size={450} opacity={0.1} blur={120} />
      <GlowingOrb className="top-[40%] left-[-10%]" color="#38bdf8" size={380} opacity={0.08} blur={100} />

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO HEADER (Upload Digital Style)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
              Our Showcase &amp; Client Outcomes
            </Badge>
          </ScrollReveal>

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

          {/* Filter Pills */}
          <ScrollReveal delay={0.3} className="w-full pt-4">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {filters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all border cursor-pointer select-none",
                    selectedFilter === cat
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25 scale-105"
                      : "bg-white text-slate-700 border-purple-100 hover:bg-purple-50 hover:border-purple-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. INTERACTIVE 3D TABLET SHOWREEL SECTION (Upload Digital Tablet Mockup)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center flex flex-col items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest text-purple-600">
                Visual Experience
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 tracking-tight">
                It is Showreel Time!
              </h2>
            </div>

            {/* 3D Perspective Tablet Device Frame */}
            <Tilt3DCard intensity={5} className="w-full max-w-5xl">
              <div className="relative w-full rounded-[36px] bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 p-4 md:p-6 border border-purple-500/30 shadow-[0_30px_90px_rgba(124,58,237,0.2)]">
                {/* Tablet Frame Header Dots */}
                <div className="flex items-center justify-between pb-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-300/70 font-semibold">
                    kknextech-showreel-2026.mp4
                  </span>
                </div>

                {/* Video Screen */}
                <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-900 shadow-inner group">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    poster="/images/hero_dashboard.jpg"
                  >
                    <source src="/videos/showreel.webm" type="video/webm" />
                    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Video Control Buttons */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                    <button
                      onClick={togglePlay}
                      className="px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-purple-600 transition-colors cursor-pointer shadow-lg"
                    >
                      {isPlaying ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPlaying ? "Pause" : "Play"}</span>
                    </button>
                    <button
                      onClick={toggleMute}
                      className="px-4 py-2 rounded-full bg-purple-600 backdrop-blur-xl border border-purple-400 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-purple-700 transition-colors cursor-pointer shadow-lg"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isMuted ? "Unmute Sound" : "Mute Sound"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. FEATURED CASE STUDIES GRID (Upload Digital 2-Column Showcase Cards)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Featured Implementations"
            title="Deep-dive enterprise case studies"
            description="Explore our high-impact builds across ecommerce, logistics, SaaS, and healthcare."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 0.1}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="group relative flex flex-col justify-between rounded-[32px] overflow-hidden bg-white border border-purple-100/90 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 h-full">

                    {/* Top Graphic Showcase */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-purple-100 flex items-center justify-center">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Result metric floating badge top right */}
                      <div className="absolute top-4 right-4 z-20 bg-purple-950/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-400/40 shadow-md">
                        <span className="text-xs font-black text-purple-300 font-mono tracking-wide">
                          {project.resultMetric}
                        </span>
                      </div>

                      {/* Category floating badge top left */}
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 shadow-xs">
                        <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {/* Client title floating bottom left */}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="text-xs font-bold text-purple-300 uppercase tracking-widest block mb-1">
                          {project.client}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-white font-display leading-tight line-clamp-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Sub-tags separated by | (Upload Digital Style) */}
                      <div className="flex flex-wrap items-center gap-2 py-3 border-y border-purple-50 text-xs font-semibold text-purple-800">
                        {project.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {tIdx < project.tags.length - 1 && (
                              <span className="text-purple-300 font-bold">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-purple-700 hover:text-purple-900 transition-colors group-hover:translate-x-1"
                        >
                          View Full Case Study <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-purple-600 transition-colors"
                        >
                          Get Similar Build <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. ALL CASE STUDIES GRID (Upload Digital 3-Column Grid)
      ════════════════════════════════════════════════════════════════════ */}
      {secondaryProjects.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="More Work"
              title="All client deployments &amp; deliverables"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {secondaryProjects.map((project, idx) => (
                <ScrollReveal key={project.slug} delay={idx * 0.08}>
                  <Tilt3DCard intensity={6} className="h-full">
                    <div className="group flex flex-col justify-between rounded-3xl bg-white border border-purple-100/80 p-6 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all h-full">
                      <div className="flex flex-col gap-4">
                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-purple-100">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-purple-300 border border-purple-400/30">
                            {project.resultMetric}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                            {project.client}
                          </span>
                          <h3 className="font-black text-lg text-slate-900 font-display group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-50">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 overflow-hidden line-clamp-1">
                          {project.tags.slice(0, 2).join(" | ")}
                        </div>
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-black uppercase text-purple-700 hover:text-purple-900 transition-all shrink-0"
                        >
                          VIEW MORE <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          5. WHY WORK WITH US / VALUE PROPS (Upload Digital why-us Section)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-950 text-white border-y border-purple-500/20 relative overflow-hidden">
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
      <section className="py-24 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 border-b border-purple-100 relative">
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
          7. CLIENT TESTIMONIALS (Upload Digital Style Switcher)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say about us"
            description="Read verified feedback from brand founders and enterprise leaders."
            align="center"
          />

          {/* Testimonial Tabs Switcher */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clientTestimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border transition-all cursor-pointer text-xs font-bold",
                    activeTestimonial === idx
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                      : "bg-white text-slate-600 border-purple-100 hover:border-purple-300"
                  )}
                >
                  <span>{t.role}</span>
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-mono",
                    activeTestimonial === idx ? "bg-purple-800 text-purple-200" : "bg-purple-50 text-purple-700"
                  )}>
                    {t.metric}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Testimonial Card */}
            <ScrollReveal key={activeTestimonial} className="w-full max-w-3xl">
              <Tilt3DCard intensity={4}>
                <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-purple-50 via-white to-cyan-50 border border-purple-200/80 shadow-2xl flex flex-col gap-6 text-center items-center relative overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-black text-2xl font-display shadow-md">
                    &ldquo;
                  </div>

                  <p className="text-base md:text-xl font-medium text-slate-800 leading-relaxed font-display">
                    {clientTestimonials[activeTestimonial].quote}
                  </p>

                  <div className="flex flex-col items-center gap-2 pt-4 border-t border-purple-200/60">
                    <span className="text-sm font-bold text-purple-700 uppercase tracking-wide font-display">
                      {clientTestimonials[activeTestimonial].role}
                    </span>
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-mono">
                      {clientTestimonials[activeTestimonial].metric}
                    </span>
                  </div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          8. CTA BANNER & FAQS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.12)" size={500}>
            <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={4} borderRadius="2rem">
              <div className="bg-gradient-to-r from-purple-50 via-white to-cyan-50 rounded-[1.875rem] p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden">
                <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                  Ready to Build Your Win?
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                  Let&apos;s Build Your Next{" "}
                  <AnimatedGradientText>Case Study Together</AnimatedGradientText>
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                  Book a free 30-minute discovery call to discuss your web application, mobile product, or CRM automation goals.
                </p>
                <Link href="/contact">
                  <Button variant="primary" colorTheme="violet" className="!py-4 !px-8 !text-base shadow-xl shadow-purple-500/25">
                    Schedule Free Discovery Call →
                  </Button>
                </Link>
              </div>
            </BeamBorder>
          </SpotlightSection>
        </ScrollReveal>
      </section>

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
