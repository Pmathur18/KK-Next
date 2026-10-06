"use client";

import React, { useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Zap,
  Laptop,
  Database,
  Code,
  CheckCircle2,
  BarChart3,
  Shield,
  Workflow,
  TrendingUp,
  ChevronRight,
  Check,
  Cpu,
  LineChart,
  ShoppingBag,
  Layers,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import SpotlightSection from "@/components/ui/SpotlightSection";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import ParticleField from "@/components/ui/ParticleField";
import BeamBorder from "@/components/ui/BeamBorder";

import { projects } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Lazy load GlobeOrb (heavy Three.js)
const GlobeOrb = React.lazy(() => import("@/components/ui/GlobeOrb"));

// Section 7: FAQs from user spec
const homeFAQs: FAQItem[] = [
  {
    q: "Do you work exclusively with enterprise brands or startups as well?",
    a: "We partner with both. For early-stage startups, we build lean MVPs and agile go-to-market strategies. For mid-market and enterprise clients, we deliver secure software modernizations, API integrations, and scalable infrastructure.",
  },
  {
    q: "What is the typical timeline for a custom web development project?",
    a: "Development cycles vary based on technical requirements and system integrations. Typically, custom full-stack web builds take 4 to 12 weeks from initial architectural mapping to production deployment.",
  },
  {
    q: "How does your CRM/ERP consultation optimize business operations?",
    a: "We assess your operational bottlenecks, select the optimal platform (such as HubSpot, Salesforce, or custom systems), and map customized automation flows across your sales, HR, and inventory channels to lower operational overhead.",
  },
  {
    q: "What ongoing technical support and maintenance do you offer after launch?",
    a: "Every delivery includes dedicated post-launch support. We also provide retainer models covering 24/7 infrastructure monitoring, security updates, continuous SEO optimization, and feature enhancements.",
  },
  {
    q: "How do we kick off a new engagement with KK Next Tech Solution?",
    a: "You can schedule a free Tech & Growth Audit directly on our website. We analyze your digital presence, outline recommended technical architectures, and deliver a detailed project roadmap within 48 hours.",
  },
];

// Section 4: Core Solutions (Service Offerings)
const coreSolutions = [
  {
    id: "web-arch",
    icon: Laptop,
    badge: "Custom Web",
    title: "Custom Web Architecture & Application Development",
    desc: "Robust, secure, and scalable custom web applications engineered to handle high-concurrency traffic without performance latency. Built on modern tech stacks tailored to your proprietary business logic.",
    color: "from-violet-500/15 via-purple-500/10 to-indigo-500/5",
    iconColor: "text-violet-600 bg-violet-50 border-violet-200",
    link: "/services#websites",
    highlights: ["React / Next.js Stack", "High Concurrency", "Zero Latency Architecture"],
    stat: "Sub-100ms API Response",
  },
  {
    id: "shopify-ecom",
    icon: ShoppingBag,
    badge: "E-Commerce",
    title: "High-Converting Shopify & E-Commerce Infrastructure",
    desc: "Custom-built, conversion-optimized Shopify storefronts designed to minimize cart abandonment, reduce bounce rates, and turn top-of-funnel traffic into repeat revenue.",
    color: "from-emerald-500/15 via-teal-500/10 to-cyan-500/5",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    link: "/services#websites",
    highlights: ["Custom Theme Dev", "Conversion Rate Optimization", "Checkout API Flow"],
    stat: "+45% Avg Conversion",
  },
  {
    id: "wordpress-eng",
    icon: Code,
    badge: "Headless CMS",
    title: "High-Speed WordPress Engineering",
    desc: "Flexible, headless, and SEO-fortified WordPress websites built for lightning-fast page speed scores, zero-bloat functionality, and effortless content management.",
    color: "from-blue-500/15 via-sky-500/10 to-indigo-500/5",
    iconColor: "text-blue-600 bg-blue-50 border-blue-200",
    link: "/services#websites",
    highlights: ["Headless WordPress", "100/100 PageSpeed", "Zero Bloat Codebase"],
    stat: "99+ Performance Score",
  },
  {
    id: "perf-marketing",
    icon: LineChart,
    badge: "Growth Engine",
    title: "Data-Driven Performance Marketing & Full-Funnel Growth",
    desc: "From technical SEO and search engine marketing (SEM) to hyper-targeted paid social campaigns, we position your brand directly in front of high-intent buyers to maximize ROAS.",
    color: "from-fuchsia-500/15 via-pink-500/10 to-rose-500/5",
    iconColor: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
    link: "/services/social-media-management",
    highlights: ["Technical & On-Page SEO", "Paid Social & SEM", "ROAS Optimization"],
    stat: "340% Avg ROAS Impact",
  },
  {
    id: "crm-erp-integration",
    icon: Database,
    badge: "Enterprise Tech",
    title: "Enterprise CRM & ERP Consultation & Integration",
    desc: "Eliminate operational friction, automate manual workflows, and unlock actionable business intelligence through custom Salesforce, HubSpot, and ERP implementations.",
    color: "from-amber-500/15 via-orange-500/10 to-yellow-500/5",
    iconColor: "text-amber-600 bg-amber-50 border-amber-200",
    link: "/services/crm-erp",
    highlights: ["Salesforce & HubSpot", "Workflow Automation", "Bi-directional Sync"],
    stat: "60% Ops Time Saved",
  },
];

// Section 5: Why Partner With Us? (The Differentiators)
const differentiators = [
  {
    capability: "End-to-End Execution",
    badge: "Unified Delivery",
    impact: "Eliminates vendor fragmentation by providing a single point of accountability for design, engineering, and marketing.",
    icon: Layers,
    color: "border-purple-200 bg-purple-50/50 text-purple-700",
  },
  {
    capability: "Bespoke Architecture",
    badge: "Zero Bloat",
    impact: "Zero bloated templates. We build lean, modular code environments engineered specifically for speed and security.",
    icon: Cpu,
    color: "border-blue-200 bg-blue-50/50 text-blue-700",
  },
  {
    capability: "Data-Backed Strategy",
    badge: "Analytics Validated",
    impact: "Eliminates guesswork. Every UI/UX decision, technical deployment, and ad spend is validated by real-time analytics.",
    icon: BarChart3,
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
  },
  {
    capability: "Engineered Scalability",
    badge: "Peak Ready",
    impact: "Modern infrastructure built to handle hyper-growth and peak traffic loads smoothly.",
    icon: Shield,
    color: "border-amber-200 bg-amber-50/50 text-amber-700",
  },
];

// Section 6: Our Proven Growth Process
const growthProcessSteps = [
  {
    stepNum: "01",
    phase: "Discovery & Audit",
    title: "Discovery & Technical Audit",
    desc: "We perform a deep-dive technical audit of your existing software architecture, operational bottlenecks, and market competitive landscape.",
    icon: Zap,
    color: "bg-violet-600 text-white border-violet-500 shadow-purple-500/30",
  },
  {
    stepNum: "02",
    phase: "Architecture Mapping",
    title: "Strategy & System Architecture",
    desc: "We map out wireframes, user journeys, software architecture, and full-funnel marketing strategies designed to meet your target KPIs.",
    icon: Workflow,
    color: "bg-blue-600 text-white border-blue-500 shadow-blue-500/30",
  },
  {
    stepNum: "03",
    phase: "Agile Development",
    title: "Agile Engineering & Execution",
    desc: "Our developers and digital strategists build out your solution using clean code, rapid sprints, and continuous quality testing.",
    icon: Code,
    color: "bg-purple-600 text-white border-purple-500 shadow-purple-500/30",
  },
  {
    stepNum: "04",
    phase: "Launch & Growth",
    title: "Deployment, Optimization & Scaling",
    desc: "We launch your product, execute real-time conversion rate optimization (CRO), monitor infrastructure health, and provide ongoing strategic support.",
    icon: TrendingUp,
    color: "bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/30",
  },
];

// Section 2: Trust Marquee Logos & Partner Badges
const partnerLogos = [
  { name: "Shopify Plus", type: "E-Commerce Partner" },
  { name: "Salesforce", type: "Enterprise CRM" },
  { name: "HubSpot", type: "Growth CRM" },
  { name: "WordPress Headless", type: "CMS Platform" },
  { name: "Next.js 16", type: "Web Architecture" },
  { name: "AWS Cloud", type: "Infrastructure" },
  { name: "Meta Business", type: "Paid Media" },
  { name: "Google Cloud", type: "Enterprise Cloud" },
  { name: "PostgreSQL", type: "Data Layer" },
  { name: "Node.js", type: "API Backend" },
  { name: "Stripe", type: "Payments Engine" },
];

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-white font-sans">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO AREA (THE HOOK)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
        style={{ background: "linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #fdf4ff 100%)" }}
      >
        <ParticleField count={50} color="124, 58, 237" opacity={0.25} />

        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] mesh-blob-1 opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] mesh-blob-2 opacity-50 pointer-events-none" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] mesh-blob-3 opacity-40 pointer-events-none" />

        <GlowingOrb className="top-[-5%] left-[10%]" color="#7C3AED" size={350} opacity={0.12} duration={10} />
        <GlowingOrb className="bottom-[10%] right-[15%]" color="#38bdf8" size={280} opacity={0.1} duration={12} />

        <div className="relative z-10 max-w-7xl px-6 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Hero Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="flex-1 flex flex-col gap-6 text-left lg:max-w-[58%]"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={3} borderRadius="999px" className="inline-block">
                <div className="bg-white px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-purple-700 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-purple-600" />
                    Custom Web Development &amp; Performance Marketing Agency
                  </span>
                </div>
              </BeamBorder>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 font-display"
            >
              Transforming Complex Ideas Into{" "}
              <AnimatedGradientText from="#6D28D9" via="#9333EA" to="#38bdf8">
                High-Yield Digital Realities.
              </AnimatedGradientText>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              We architect enterprise-grade custom web solutions, execute high-ROI performance marketing, and streamline operations through targeted CRM &amp; ERP consultations.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
            >
              <Link href="/contact">
                <Button
                  variant="primary"
                  colorTheme="violet"
                  className="!py-4 !px-8 !text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Get a Free Tech &amp; Growth Audit <ArrowRight className="inline-block w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  variant="outline"
                  className="!py-4 !px-8 !text-base hover:bg-purple-50/80 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Our Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-purple-100/80 mt-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["Ananya Sen", "Dr. Rohan Joshi", "Amit Mehra", "Neha Nair"].map((name, idx) => (
                    <Avatar
                      key={idx}
                      name={name}
                      className="w-9 h-9 text-[10px] border-2 border-white shadow-md"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">4.9/5 Rating across 150+ Enterprises</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-bold text-slate-500 divide-x divide-slate-200">
                <span className="pr-4">Custom Architectures</span>
                <span className="px-4">Full-Funnel ROAS</span>
                <span className="pl-4">Enterprise CRM</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Graphic: 3D Interactive Globe */}
          <motion.div
            style={{ scale: globeScale, opacity: heroOpacity }}
            className="flex-1 flex items-center justify-center relative w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-80 h-80 rounded-full animate-float-slow"
                style={{
                  background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(147,51,234,0.08) 50%, transparent 80%)",
                  filter: "blur(30px)",
                }}
              />
            </div>

            <div className="animate-float-slow">
              <Suspense
                fallback={
                  <div className="w-[380px] h-[380px] rounded-full border-2 border-purple-200/40 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-purple-300/60 animate-ping" />
                  </div>
                }
              >
                <GlobeOrb size={440} />
              </Suspense>
            </div>

            {/* Floating Live Stat Badges */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[8%] left-[2%] bg-white/90 backdrop-blur-xl border border-purple-100 rounded-2xl px-4 py-2.5 shadow-lg shadow-purple-900/10 flex items-center gap-2.5 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-semibold">Growth Benchmark</p>
                <p className="text-sm font-black text-slate-900">High-ROI ROAS</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[12%] right-[2%] bg-white/90 backdrop-blur-xl border border-purple-100 rounded-2xl px-4 py-2.5 shadow-lg shadow-purple-900/10 flex items-center gap-2.5 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-semibold">PageSpeed Index</p>
                <p className="text-sm font-black text-slate-900">100/100 Fortified</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: TRUST & CREDIBILITY BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-r from-purple-50/50 via-white to-sky-50/50 border-y border-purple-100/70 relative">
        <div className="max-w-7xl px-6 md:px-8 mx-auto text-center mb-6">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 font-display">
              Empowering Ambitious Startups &amp; Global Enterprises to Scale Predictably.
            </p>
          </ScrollReveal>
        </div>

        {/* Horizontal Scrolling Carousel of Client & Tech Partner Badges */}
        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6 pr-6">
            {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-purple-100/90 bg-white/90 backdrop-blur-sm shadow-sm hover:border-purple-300 transition-all shrink-0"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-extrabold text-slate-800 leading-tight">{partner.name}</span>
                  <span className="text-[10px] text-purple-600 font-semibold uppercase tracking-wider">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: WHO WE ARE (THE VALUE PROPOSITION)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <GlowingOrb className="top-10 left-[-5%]" color="#7C3AED" size={350} opacity={0.07} blur={100} />
        <GlowingOrb className="bottom-10 right-[-5%]" color="#38bdf8" size={300} opacity={0.07} blur={90} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <ScrollReveal direction="left" className="lg:col-span-7 flex flex-col gap-6">
              <Badge colorTheme="navy" className="w-fit !bg-purple-100 !text-purple-700 !border-purple-200">
                The Value Proposition
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Your Next-Generation Technology &amp;{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Revenue Growth Partner
                </AnimatedGradientText>
              </h2>

              <div className="flex flex-col gap-4 text-base md:text-lg text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-700">
                  At <strong className="text-purple-700 font-bold">KK Next Tech Solution</strong>, we go beyond writing code and running ad campaigns—we build integrated, resilient digital ecosystems engineered to deliver predictable revenue.
                </p>
                <p>
                  Whether you are an agile startup looking to capture market share or an established enterprise modernizing legacy architecture, we deploy targeted technology stacks and precision marketing frameworks aligned directly with your bottom-line business objectives.
                </p>
              </div>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Predictable Revenue Focus", desc: "Digital ecosystems built around bottom-line growth" },
                  { title: "Agile & Enterprise Ready", desc: "From fast startup MVPs to secure enterprise modernization" },
                  { title: "Integrated Tech & Growth", desc: "No silos—engineering and marketing work in sync" },
                  { title: "Bespoke Modern Stacks", desc: "Zero bloat, sub-second load times & hardened security" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                    <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column: Visual Feature Showcase Card */}
            <ScrollReveal direction="right" className="lg:col-span-5">
              <Tilt3DCard intensity={6}>
                <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border border-purple-500/20 shadow-2xl relative overflow-hidden flex flex-col gap-6">
                  <GlowingOrb className="-top-20 -right-20" color="#7C3AED" size={250} opacity={0.3} blur={60} />

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-purple-300">kknextech.system.v2</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Integrated Growth Ecosystem</span>
                    <h3 className="text-2xl font-black font-display leading-tight">
                      Engineering + Performance Marketing = Unstoppable Scale
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We unify custom web architecture, e-commerce infrastructure, CRM automation, and performance marketing under one accountable agency roof.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Average Growth Rate</p>
                      <p className="text-xl font-extrabold text-emerald-400">+240% YoY Revenue</p>
                    </div>
                    <Link href="/contact">
                      <Button variant="primary" colorTheme="violet" className="!py-2.5 !px-5 !text-xs">
                        Start Audit
                      </Button>
                    </Link>
                  </div>
                </div>
              </Tilt3DCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: CORE SOLUTIONS (SERVICE OFFERINGS)
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32 bg-slate-50/60 relative overflow-hidden border-y border-purple-100/60">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Core Solutions
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-3xl">
                High-Performance Solutions Engineered for{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Bottom-Line Growth
                </AnimatedGradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-base">
                Discover our specialized capabilities across custom web development, e-commerce, headless CMS, performance marketing, and enterprise CRM/ERP integration.
              </p>
            </ScrollReveal>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSolutions.map((sol, idx) => (
              <ScrollReveal key={sol.id} delay={idx * 0.08} direction="up">
                <Tilt3DCard intensity={6} className="h-full">
                  <Link href={sol.link} className="block h-full">
                    <div
                      className={cn(
                        "h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-lg shadow-purple-900/5",
                        "hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group flex flex-col justify-between gap-6"
                      )}
                    >
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                          <div className={cn("w-13 h-13 rounded-2xl flex items-center justify-center border p-3.5", sol.iconColor)}>
                            <sol.icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-extrabold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                            {sol.stat}
                          </span>
                        </div>

                        <div className="flex flex-col gap-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">{sol.badge}</span>
                          <h3 className="text-xl font-extrabold text-slate-900 font-display leading-tight group-hover:text-purple-700 transition-colors">
                            {sol.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed font-normal">
                            {sol.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-4 border-t border-purple-100/80">
                        <div className="flex flex-wrap gap-1.5">
                          {sol.highlights.map((h, i) => (
                            <span key={i} className="text-[11px] font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs font-bold text-slate-700 group-hover:text-purple-700 transition-colors">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: WHY PARTNER WITH US? (THE DIFFERENTIATORS)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <GlowingOrb className="top-1/2 left-[-10%]" color="#7C3AED" size={450} opacity={0.06} blur={120} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                The Differentiators
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                Why Partner With Us?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-xl leading-relaxed text-base">
                Discover the strategic advantages that separate KK Next Tech Solution from conventional software shops and disconnected marketing vendors.
              </p>
            </ScrollReveal>
          </div>

          {/* Differentiators Matrix / Styled Comparison Table */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-purple-200 shadow-xl shadow-purple-900/5 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white font-display">
                  <th className="py-5 px-8 text-base font-extrabold w-1/3">Core Capability</th>
                  <th className="py-5 px-8 text-base font-extrabold w-2/3">Strategic Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {differentiators.map((diff, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/40 transition-colors">
                    <td className="py-6 px-8 align-top">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2.5 rounded-xl border", diff.color)}>
                          <diff.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-base font-extrabold text-slate-900 font-display block">{diff.capability}</span>
                          <span className="text-xs font-semibold text-purple-600">{diff.badge}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-8 align-top">
                      <p className="text-slate-600 leading-relaxed font-medium text-base">
                        {diff.impact}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Version for Differentiators */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {differentiators.map((diff, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} direction="up">
                <div className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2.5 rounded-xl border", diff.color)}>
                      <diff.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 font-display">{diff.capability}</h4>
                      <span className="text-xs font-bold text-purple-600">{diff.badge}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{diff.impact}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: OUR PROVEN GROWTH PROCESS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50/60 border-t border-purple-100">
        <GlowingOrb className="top-0 left-[20%]" color="#7C3AED" size={400} opacity={0.08} blur={120} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16 relative z-10">
          <div className="text-center flex flex-col items-center gap-4">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Proven Methodology
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                Our Proven Growth Process
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-xl leading-relaxed text-base">
                A structured 4-step execution framework designed to transition your vision from technical audit to predictable scaling.
              </p>
            </ScrollReveal>
          </div>

          {/* 4-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthProcessSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <Tilt3DCard intensity={8} className="h-full">
                  <div className="h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-lg shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between gap-6 group">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg font-display font-black text-lg",
                            step.color
                          )}
                        >
                          <step.icon className="w-6 h-6 stroke-[2.5]" />
                        </div>
                        <span className="text-2xl font-black font-display text-purple-300 group-hover:text-purple-600 transition-colors">
                          {step.stepNum}
                        </span>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest block mb-1">
                          Step {step.stepNum} — {step.phase}
                        </span>
                        <h3 className="font-extrabold text-lg text-slate-900 font-display leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-100/80 flex items-center gap-2 text-xs font-bold text-purple-600">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                      Milestone Verified
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PORTFOLIO & CASE STUDIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <Badge colorTheme="navy" className="w-fit !bg-purple-100 !text-purple-700 !border-purple-200">
                  Case Studies
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                  Realized Client Outcomes &amp;<br />
                  <AnimatedGradientText>Measurable ROI</AnimatedGradientText>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/portfolio">
                <Button variant="outline" className="shrink-0">
                  All Case Studies <ArrowRight className="inline w-4 h-4 ml-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 0.1} direction={idx === 0 ? "left" : "right"}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="h-full rounded-3xl p-8 border border-purple-100 bg-white shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <Badge colorTheme="navy">{project.category}</Badge>
                      <span className="text-xs font-extrabold bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-700 px-3 py-1.5 rounded-full border border-purple-200">
                        {project.resultMetric}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors leading-tight font-display mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="relative w-full h-[230px] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 group/img">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-800 group-hover:translate-x-1 transition-all"
                      >
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6.5: CLIENT TESTIMONIALS & TRUST PROOF
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-purple-50/30 to-slate-50/40 relative overflow-hidden border-t border-purple-100/60">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Client Testimonials
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Trusted by Forward-Thinking Brands &amp;{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Enterprise Leaders
                </AnimatedGradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Read how our custom development, performance marketing, and operational CRM automations have delivered measurable business ROI.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 0.08}>
                <Tilt3DCard intensity={6} className="h-full">
                  <div className="h-full p-6 rounded-3xl bg-white border border-purple-100/80 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between gap-6 group">
                    <div className="flex flex-col gap-4">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                      <span className="text-xs text-purple-700 font-bold uppercase tracking-wider font-display">
                        {t.role}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Verified Client
                      </span>
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 7: FREQUENTLY ASKED QUESTIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-purple-100 bg-slate-50/40">
        <FAQSection
          items={homeFAQs}
          eyebrow="Frequently Asked Questions"
          title="Clear Answers to Your Key Questions"
          description="Learn how KK Next Tech Solution partners with startups and enterprise clients to engineer high-yield web and digital growth solutions."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: CONVERSION FOOTER (FINAL CALL-TO-ACTION)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 max-w-7xl px-6 md:px-8 mx-auto">
        <ScrollReveal>
          <SpotlightSection spotlightColor="rgba(124, 58, 237, 0.12)" size={600}>
            <BeamBorder colorFrom="#7C3AED" colorTo="#38bdf8" duration={5} borderRadius="2.5rem">
              <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-[2.35rem] p-10 md:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden shadow-2xl">
                <GlowingOrb className="top-0 left-0" color="#7C3AED" size={350} opacity={0.25} blur={90} />
                <GlowingOrb className="bottom-0 right-0" color="#38bdf8" size={300} opacity={0.2} blur={90} />
                <ParticleField count={40} color="168, 85, 247" opacity={0.3} speed={0.3} />

                <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
                  <Badge colorTheme="navy" className="!bg-purple-900/60 !text-purple-200 !border-purple-500/30">
                    🚀 Next Step
                  </Badge>

                  {/* Section 8 Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
                    Ready to Engineer Your Next Phase of{" "}
                    <AnimatedGradientText from="#A855F7" via="#EC4899" to="#38BDF8">
                      Digital Growth?
                    </AnimatedGradientText>
                  </h2>

                  {/* Section 8 Sub-headline */}
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
                    Schedule a strategic consultation with our lead technical architects and performance strategists today.
                  </p>

                  {/* Primary CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <Link href="/contact">
                      <Button
                        variant="primary"
                        colorTheme="violet"
                        className="!py-4 !px-9 !text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
                      >
                        Schedule Your Strategy Call <ArrowRight className="inline-block w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </BeamBorder>
          </SpotlightSection>
        </ScrollReveal>
      </section>
    </div>
  );
}
