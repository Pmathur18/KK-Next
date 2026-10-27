"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
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
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import ParticleField from "@/components/ui/ParticleField";
import CTABanner from "@/components/ui/CTABanner";

import { projects } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Section 7: FAQs from user spec
const homeFAQs: FAQItem[] = [
  {
    q: "Do you work with startups and small businesses?",
    a: "We partner with businesses of all sizes, from early-stage startups and small businesses to established enterprises. For startups and growing businesses, we build lean MVPs and agile digital marketing strategies. For established companies, we deliver secure software modernizations, API integrations, and scalable infrastructure.",
  },
  {
    q: "How long does a website project usually take?",
    a: "Development timelines vary based on project requirements and system integrations. Typically, custom full-stack web builds take 4 to 12 weeks from initial architectural mapping to production deployment.",
  },
  {
    q: "How can CRM or ERP solutions help my business?",
    a: "CRM and ERP solutions eliminate operational friction, automate repetitive manual workflows, organize client and inventory records, and unlock actionable business intelligence through custom integrations.",
  },
  {
    q: "Do you provide support after a website launches?",
    a: "Every delivery includes dedicated post-launch support and training. We also provide retainer models covering 24/7 infrastructure monitoring, security updates, continuous SEO optimization, and feature enhancements.",
  },
  {
    q: "How do I get started with KK Next Tech?",
    a: "You can schedule a free Tech & Growth consultation directly on our website. We analyze your goals and digital presence, outline recommended technical architectures, and deliver a detailed project roadmap within 48 hours.",
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

// Section 5: Why Partner With Us?
const differentiators = [
  {
    capability: "One Team for Your Projects",
    badge: "Coordinated Delivery",
    impact: "Manage your website, software development and digital marketing with one team, making communication and coordination easier.",
    icon: Layers,
    color: "border-purple-200 bg-purple-50/50 text-purple-700",
  },
  {
    capability: "Solutions Built Around Your Needs",
    badge: "Custom Development",
    impact: "We develop solutions based on your business requirements, without adding unnecessary features or generic templates.",
    icon: Cpu,
    color: "border-blue-200 bg-blue-50/50 text-blue-700",
  },
  {
    capability: "Decisions Guided by Data",
    badge: "Data-Informed Strategy",
    impact: "We use performance data to understand what's working and identify areas for improvement.",
    icon: BarChart3,
    color: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
  },
  {
    capability: "Solutions That Can Grow With You",
    badge: "Scalable Technology",
    impact: "We plan and build technology that can adapt as your business needs change.",
    icon: Shield,
    color: "border-amber-200 bg-amber-50/50 text-amber-700",
  },
];

// Section 6: Our Proven Growth Process
const growthProcessSteps = [
  {
    title: "Discovery & Technical Audit",
    desc: "We perform a deep-dive technical audit of your existing software architecture, operational bottlenecks, and market competitive landscape.",
    icon: Zap,
    color: "bg-violet-600 text-white border-violet-500 shadow-purple-500/30",
  },
  {
    title: "Strategy & System Architecture",
    desc: "We map out wireframes, user journeys, software architecture, and full-funnel marketing strategies designed to meet your target KPIs.",
    icon: Workflow,
    color: "bg-blue-600 text-white border-blue-500 shadow-blue-500/30",
  },
  {
    title: "Agile Engineering & Execution",
    desc: "Our developers and digital strategists build out your solution using clean code, rapid sprints, and continuous quality testing.",
    icon: Code,
    color: "bg-purple-600 text-white border-purple-500 shadow-purple-500/30",
  },
  {
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
  { name: "Next.js", type: "Web Architecture" },
  { name: "AWS Cloud", type: "Infrastructure" },
  { name: "Meta Business", type: "Paid Media" },
  { name: "Google Cloud", type: "Enterprise Cloud" },
  { name: "PostgreSQL", type: "Data Layer" },
  { name: "Node.js", type: "API Backend" },
  { name: "Stripe", type: "Payments Engine" },
];

const heroPillars = [
  {
    id: "shopify",
    label: "Scale Shopify / E-Commerce",
    icon: ShoppingBag,
    highlight: "+315% Revenue Lift",
    description: "Headless Shopify builds, 1-page checkout flows, and sub-1.2s load speeds to eradicate cart abandonment.",
    serviceQuery: "Web Development",
    ctaLabel: "Audit My E-Commerce Store",
  },
  {
    id: "crm-erp",
    label: "Automate Ops with CRM/ERP",
    icon: Database,
    highlight: "Cut 40%+ Manual Hours",
    description: "Centralized inventory, automated dispatch sync, and custom Salesforce / Odoo integrations.",
    serviceQuery: "CRM & ERP Integrations",
    ctaLabel: "Audit My Operations & Systems",
  },
  {
    id: "performance",
    label: "Boost Ad ROAS & Funnels",
    icon: LineChart,
    highlight: "3.4x Average ROAS",
    description: "Eliminate wasted spend with high-intent Meta/Google acquisition and technical SEO funnels.",
    serviceQuery: "Performance Media",
    ctaLabel: "Audit My Ad ROAS & Growth",
  },
  {
    id: "custom-web",
    label: "Custom Web & Mobile App",
    icon: Laptop,
    highlight: "99.9% Uptime & Sub-100ms",
    description: "Full-stack React, Next.js, and Flutter engineering tailored to your proprietary business logic.",
    serviceQuery: "Web Development",
    ctaLabel: "Audit My Web Architecture",
  },
];

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedPillar, setSelectedPillar] = useState(heroPillars[0]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-white font-sans">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: HERO AREA (THE HOOK)
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16"
        style={{ background: "linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #fdf4ff 100%)" }}
      >
        <ParticleField count={40} color="124, 58, 237" opacity={0.25} />

        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] mesh-blob-1 opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] mesh-blob-2 opacity-50 pointer-events-none" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] mesh-blob-3 opacity-40 pointer-events-none" />

        <GlowingOrb className="top-[-5%] left-[10%]" color="#7C3AED" size={350} opacity={0.12} duration={10} />
        <GlowingOrb className="bottom-[10%] right-[15%]" color="#38bdf8" size={280} opacity={0.1} duration={12} />

        <div className="relative z-10 max-w-5xl px-6 md:px-8 w-full flex flex-col items-center text-center mx-auto">
          {/* Centered Hero Content */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
            className="flex flex-col items-center text-center gap-6 max-w-4xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 font-display"
            >
              Web Development, Digital Marketing &amp;{" "}
              <AnimatedGradientText from="#6D28D9" via="#9333EA" to="#38bdf8">
                Business Automation for Growing Businesses
              </AnimatedGradientText>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal mx-auto"
            >
              We help businesses build websites and web applications, reach more customers through digital marketing, and simplify everyday work with CRM and ERP solutions. Our team works with you to understand your goals and find the right solution for your business.
            </motion.p>

            {/* Interactive 2-Step Micro-Conversion Audit Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-3xl mt-4 p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-purple-200 shadow-2xl shadow-purple-900/10 flex flex-col gap-4 text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-purple-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5 font-display">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" /> Choose Your Primary Growth Objective:
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  Step 1 of 2 • Customized Strategy Scope
                </span>
              </div>

              {/* Pill Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroPillars.map((p) => {
                  const Icon = p.icon;
                  const isActive = selectedPillar.id === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPillar(p)}
                      className={cn(
                        "p-3 rounded-2xl border text-xs font-bold flex flex-col items-start gap-2 transition-all text-left cursor-pointer",
                        isActive
                          ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30 scale-[1.02]"
                          : "bg-slate-50/70 hover:bg-purple-50/80 text-slate-700 border-slate-200/80 hover:border-purple-200"
                      )}
                    >
                      <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-purple-600")} />
                      <span className="leading-tight font-display">{p.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Focus Details & CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 bg-purple-50/40 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 sm:p-5 rounded-b-3xl border-t border-purple-100/60">
                <div className="flex flex-col gap-1 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100/80 border border-emerald-300/80 px-2.5 py-0.5 rounded-full">
                      {selectedPillar.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {selectedPillar.description}
                  </p>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(selectedPillar.serviceQuery)}`}
                  className="shrink-0"
                >
                  <Button
                    variant="primary"
                    colorTheme="violet"
                    className="!py-3.5 !px-6 !text-xs sm:!text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 w-full sm:w-auto"
                  >
                    {selectedPillar.ctaLabel} <ArrowRight className="inline-block w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: TRUST & CREDIBILITY BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-gradient-to-r from-purple-50/50 via-white to-sky-50/50 border-y border-purple-100/70 relative">
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
      <section className="py-12 md:py-16 relative overflow-hidden bg-white">
        <GlowingOrb className="top-10 left-[-5%]" color="#7C3AED" size={350} opacity={0.07} blur={100} />
        <GlowingOrb className="bottom-10 right-[-5%]" color="#38bdf8" size={300} opacity={0.07} blur={90} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <ScrollReveal direction="left" className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                Your Next-Generation Technology &amp;{" "}
                <AnimatedGradientText from="#7C3AED" via="#9333EA" to="#38bdf8">
                  Revenue Growth Partner
                </AnimatedGradientText>
              </h2>

              <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-slate-900">
                  At <strong className="text-purple-700 font-bold">KK Next Tech Solutions</strong>, we go beyond writing code and running ad campaigns, we build integrated, resilient digital ecosystems engineered to deliver predictable revenue.
                </p>
                <p className="font-normal text-slate-600">
                  Whether you are an agile startup looking to capture market share or an established enterprise modernizing legacy architecture, we deploy targeted technology stacks and precision marketing frameworks aligned directly with your bottom-line business objectives.
                </p>
              </div>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Predictable Revenue Focus", desc: "Digital ecosystems built around bottom-line growth" },
                  { title: "Agile & Enterprise Ready", desc: "From fast startup MVPs to secure enterprise modernization" },
                  { title: "Integrated Tech & Growth", desc: "No silos: engineering and marketing work in sync" },
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
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Integrated Growth Ecosystem</span>
                    <h3 className="text-2xl font-black font-display leading-tight">
                      Engineering + Performance Marketing = Unstoppable Scale
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We unify custom web architecture, e-commerce infrastructure, CRM automation, and performance marketing under one accountable agency roof.
                    </p>
                  </div>

                  {/* Visual Dashboard Snippet */}
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 group/img">
                    <img
                      src="/images/hero_dashboard.jpg"
                      alt="KK Next Tech Architecture & Growth Dashboard"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
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
      <section id="services" className="py-12 md:py-16 bg-slate-50/60 relative overflow-hidden border-y border-purple-100/60">
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
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <GlowingOrb className="top-1/2 left-[-10%]" color="#7C3AED" size={450} opacity={0.06} blur={120} />

        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <ScrollReveal>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200">
                Why Partner With Us
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight max-w-2xl">
                Why Partner With Us?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 max-w-2xl leading-relaxed text-base">
                We bring web development, software solutions and digital marketing together to help businesses work more efficiently and reach their goals.
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
      <section className="py-12 md:py-16 relative overflow-hidden bg-slate-50/60 border-t border-purple-100">
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
            {growthProcessSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
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
                            {Icon && <Icon className="w-6 h-6 stroke-[2.5]" />}
                          </div>
                          <span className="text-2xl font-black font-display text-purple-300 group-hover:text-purple-600 transition-colors">
                            {`0${idx + 1}`}
                          </span>
                        </div>

                        <div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURED PORTFOLIO & CASE STUDIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <Badge colorTheme="navy" className="w-fit !bg-purple-100 !text-purple-700 !border-purple-200">
                  Case Studies
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                  <AnimatedGradientText>Client Success Stories</AnimatedGradientText>
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
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-purple-50/30 to-slate-50/40 relative overflow-hidden border-t border-purple-100/60">
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
                      {/* Metric Badge & Stars */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                          {t.metric}
                        </span>
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-700 text-sm leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-purple-50 flex flex-col gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-slate-900 font-display leading-tight">{t.clientName}</p>
                        <p className="text-xs text-purple-700 font-bold">{t.role}</p>
                        <p className="text-[11px] text-slate-500 font-semibold">{t.company}</p>
                      </div>

                      {t.caseStudySlug && (
                        <Link
                          href={`/portfolio/${t.caseStudySlug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-0.5 transition-all"
                        >
                          Read Verified Case Study <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
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
          title="Questions About Our Services?"
          description="Learn how KK Next Tech Solutions works with startups and established businesses to deliver web development, software and digital marketing services."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 8: CONVERSION FOOTER (FINAL CALL-TO-ACTION)
      ═══════════════════════════════════════════════════════════════════ */}
      <CTABanner
        badge="Ready to Build Your Win?"
        title={
          <>
            Let&apos;s Build Your Next{" "}
            <AnimatedGradientText>Digital Project.</AnimatedGradientText>
          </>
        }
        description="Let's discuss your business goals and explore how our team can help with your website, software or digital marketing needs."
        buttonText="Schedule Your Strategy Call →"
        buttonLink="/contact"
      />
    </div>
  );
}
