"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Laptop, Share2, Database, Smartphone, Sparkles, Calendar as CalendarIcon, MessageSquare, BarChart3, TrendingUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const homeFAQs: FAQItem[] = [
  {
    q: "What does KK NEX TECH SOLUTION actually do?",
    a: "We are a hybrid tech and growth agency. We build software products (websites, mobile apps, CRM/ERP systems) and simultaneously run the marketing strategy that drives traffic and revenue to them. Instead of hiring separate dev and marketing agencies that blame each other, you get one team fully accountable for your digital growth."
  },
  {
    q: "How much do your services cost?",
    a: "Web development projects start from ₹2.5 lakhs. Mobile apps start from ₹4 lakhs. CRM/ERP implementations from ₹3.5 lakhs. Social media management retainers start at ₹25,000/month. Every project is scoped individually — we provide a fixed-price quote after a free discovery call, with no hidden fees."
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience in e-commerce (Shopify, D2C brands), real estate, healthcare, SaaS, education, and FMCG/consumer goods. That said, our methodology is industry-agnostic — we study your market deeply before building or marketing anything, and our results speak regardless of vertical."
  },
  {
    q: "Do you offer ongoing support after a project is delivered?",
    a: "Yes. Every delivery includes a post-launch support window (duration varies by package). Beyond that, we offer monthly retainer agreements for ongoing development, performance monitoring, and marketing. 98% of our clients renew — that retention rate is our best reference."
  },
  {
    q: "How do I get started?",
    a: "Simple: go to our Contact page, fill in a quick brief about your project (2 minutes), and we’ll book a free 30-minute discovery call within 24 hours. No pitch decks, no sales pressure — just a direct conversation about your goals and whether we're the right fit."
  },
  {
    q: "Are you a freelancer or a full agency?",
    a: "We are a full agency with 25+ in-house specialists — not a one-person shop that outsources to Fiverr. Every project is executed by a dedicated team of senior engineers, designers, and growth strategists. You get a single point of contact but the full horsepower of a specialist team behind every deliverable."
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroEmail, setHeroEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [activeSolution, setActiveSolution] = useState("websites");

  // Embla setup for Testimonials
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Embla setup for Blog Carousel
  const [emblaBlogRef, emblaBlogApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollBlogPrev = () => emblaBlogApi && emblaBlogApi.scrollPrev();
  const scrollBlogNext = () => emblaBlogApi && emblaBlogApi.scrollNext();

  const solutions = [
    {
      id: "websites",
      title: "Calendar",
      displayTitle: "Web Development",
      subtitle: "Effortless Scheduling & Engineering at Your Fingertips",
      desc: "We provide customized commerce portals, Shopify/Next.js store engines, and high-conversion landing systems to scale your presence.",
      link: "/services#websites",
      clients: ["TATA", "Britannia", "Eureka Forbes", "Kérastase", "Crompton", "Birla Opus"],
    },
    {
      id: "socials",
      title: "Chat",
      displayTitle: "Socials & Marketing",
      subtitle: "Intuitive Conversational AI & Growth Scaling Pipelines",
      desc: "We drive performance marketing campaigns, paid ad strategy, organic search engine optimization, and growth scaling pipelines.",
      link: "/services#social-media",
      clients: ["Swiggy", "Imagine Meats", "iQOO", "Mia by Tanishq", "Happydent"],
    },
    {
      id: "crm",
      title: "CRM",
      displayTitle: "CRM Automation",
      subtitle: "Streamlined CRM for Sales, Marketing & Customer Success",
      desc: "We optimize People, Processes and Technology by building high-performance APIs, database architectures, and customized CRM/ERP setups.",
      link: "/services/crm-erp",
      clients: ["L'Oreal", "Dove", "CeraVe", "GAIN", "Titan", "Saint-Gobain"],
    },
    {
      id: "erp",
      title: "ERP",
      displayTitle: "One Soft ERP",
      subtitle: "Complete Enterprise Operations & Financial Management",
      desc: "Integrate ERP records with real-time analytics, automated purchase orders, and inventory ledgers.",
      link: "/services/crm-erp",
      clients: ["TATA", "Titan", "Saint-Gobain", "L'Oreal", "Dove"],
    },
  ];

  const partners = [
    { name: "Shopify Premium", desc: "Headless commerce architecture & checkouts" },
    { name: "Zoho Premium", desc: "Automated leads processing & workflows" },
    { name: "Node.js", desc: "Scalable APIs & database infrastructure" },
    { name: "Google Premier", desc: "High-intent search & conversion tracking" },
    { name: "MoEngage Partner", desc: "Automated retention & lifecycle marketing" },
    { name: "Odoo Integration", desc: "Real-time ERP webhooks & inventory sync" },
  ];

  const activeSolutionData = solutions.find((s) => s.id === activeSolution) || solutions[0];

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-transparent">

      {/* ══ 1. HERO SECTION (Matching Reference Image) ════════════════════════ */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center justify-center text-center">
        <div className="relative z-10 max-w-5xl px-6 md:px-8 w-full flex flex-col items-center gap-8">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Top Eyebrow Tag */}
            <motion.div variants={fadeUp()} className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-200/80 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-bold text-purple-900 tracking-wide">
                All-in-One Software &amp; Tech Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp()}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 font-display max-w-4xl"
            >
              Boost Business <br />
              <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                All-in-One Software
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp()}
              className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl text-center font-normal"
            >
              Boost your business with our integrated software, combining essential tools into one powerful platform for greater efficiency.
            </motion.p>

            {/* Inline Email Input + Pill CTA Bar (Reference Image Style) */}
            <motion.div
              variants={fadeUp()}
              className="w-full max-w-lg mt-2 bg-white/90 backdrop-blur-xl p-2 rounded-full border border-purple-200/90 shadow-xl shadow-purple-950/10 flex items-center justify-between gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
              <Link href="/contact">
                <Button variant="primary" colorTheme="violet" className="!py-3 !px-6 !text-sm whitespace-nowrap">
                  Request Demo
                </Button>
              </Link>
            </motion.div>

            {/* Rating Stars row */}
            <motion.div variants={fadeUp()} className="flex items-center gap-4 mt-2 text-left">
              <div className="flex -space-x-2">
                {["Ananya Sen", "Dr. Rohan Joshi", "Amit Mehra", "Neha Nair"].map((name, idx) => (
                  <Avatar key={idx} name={name} className="w-8 h-8 text-[9px] border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-600">
                  4.9/5 stars based on 120+ client reviews
                </span>
              </div>
            </motion.div>

            {/* 4 Hero Cards (Matching Reference Visual Layout Pixel-for-Pixel) */}
            <motion.div
              variants={fadeUp()}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-10"
            >
              {/* Card 1: Calendar */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-purple-100/90 shadow-xl shadow-purple-950/5 flex flex-col justify-between items-start text-left gap-4 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-full h-24 rounded-2xl bg-purple-50/80 border border-purple-100 p-3 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                    <span>&lt; August 2026 &gt;</span>
                  </div>
                  <div className="bg-white rounded-xl p-2 shadow-xs border border-purple-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-800 truncate">Meeting with John</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                    One Soft Calendar
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Effortless Calendar Management for Teams, Professionals, and Busy Entrepreneurs
                  </p>
                </div>
              </div>

              {/* Card 2: Chat */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-purple-100/90 shadow-xl shadow-purple-950/5 flex flex-col justify-between items-start text-left gap-4 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-full h-24 rounded-2xl bg-violet-50/80 border border-violet-100 p-3 flex flex-col justify-center gap-2 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-violet-600 text-white text-[8px] font-bold flex items-center justify-center">A</div>
                    <div className="bg-white rounded-lg px-2 py-1 text-[9px] text-slate-600 border border-violet-100 shadow-xs">Hello, how can I help?</div>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <div className="bg-violet-600 text-white rounded-lg px-2 py-1 text-[9px] font-medium shadow-xs">Let's build an app!</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                    One Soft Chat
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Intuitive Chatbot for Customer Support, Lead Generation, and Enhanced Engagement
                  </p>
                </div>
              </div>

              {/* Card 3: CRM */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-purple-100/90 shadow-xl shadow-purple-950/5 flex flex-col justify-between items-start text-left gap-4 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-full h-24 rounded-2xl bg-indigo-50/80 border border-indigo-100 p-3 flex flex-col justify-center gap-2 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-700">08:30</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[8px] font-extrabold px-2 py-0.5 rounded-full">ACTIVE</span>
                  </div>
                  <div className="w-full bg-white rounded-lg h-3 border border-indigo-100 overflow-hidden p-0.5">
                    <div className="bg-indigo-600 h-full rounded-md w-[75%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                    One Soft CRM
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Streamlined CRM for Sales Teams, Marketers, and Customer Success Managers
                  </p>
                </div>
              </div>

              {/* Card 4: ERP Chart */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-purple-100/90 shadow-xl shadow-purple-950/5 flex flex-col justify-between items-start text-left gap-4 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-full h-24 rounded-2xl bg-fuchsia-50/80 border border-fuchsia-100 p-3 flex flex-col justify-between overflow-hidden">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-400 font-semibold">Total Revenue</span>
                    <span className="text-xs font-black text-slate-900">$570.80</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-8 pt-1">
                    {[40, 65, 30, 90, 50, 75].map((h, i) => (
                      <div key={i} className="w-full bg-purple-600/80 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">
                    One Soft ERP
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Complete ERP Solution for Efficient Operations, Financial Management, and Growth
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. SOLUTIONS SHOWCASE SECTION (Matching Reference "Explore Range") ══ */}
      <section className="py-20 md:py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-10">
          
          <div className="flex flex-col items-center gap-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-700 bg-purple-100/80 px-4 py-1 rounded-full border border-purple-200">
              Features
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
              Explore Our Complete Range of Solutions
            </h2>
          </div>

          {/* Category Tabs Bar */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-purple-200/80 shadow-md">
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolution(sol.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer",
                  activeSolution === sol.id
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-purple-50/50"
                )}
              >
                {sol.title}
              </button>
            ))}
          </div>

          {/* Interactive Split Layout Card */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            
            {/* Left Card: Text info */}
            <div className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-[32px] p-8 md:p-12 border border-purple-100/80 shadow-xl shadow-purple-950/5 flex flex-col justify-between items-start text-left gap-6 min-h-[380px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight font-display">
                  {activeSolutionData.subtitle}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {activeSolutionData.desc}
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full pt-4 border-t border-purple-50">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Trusted By Leading Brands
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSolutionData.clients.map((c) => (
                    <span key={c} className="text-xs font-bold font-mono bg-purple-50 text-purple-900 px-3 py-1 rounded-lg border border-purple-100">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={activeSolutionData.link} className="mt-2">
                <Button variant="primary" colorTheme="violet" className="!py-3 !px-6 !text-sm">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Right Card: Radiant Purple/Blue Gradient Box with Calendar UI Mockup (Exact Reference Style) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-[32px] p-6 md:p-10 shadow-2xl shadow-purple-950/20 relative overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[420px]">
              <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
              
              <div className="w-full rounded-[24px] overflow-hidden bg-white/95 backdrop-blur-2xl p-6 shadow-2xl border border-white/50 flex flex-col md:flex-row gap-6 items-center">
                {/* Left Side: Meeting details card */}
                <div className="flex flex-col gap-4 text-left w-full md:w-1/2">
                  <div className="flex items-center gap-2">
                    <Avatar name="Sebastian Moran" className="w-7 h-7 text-[9px]" />
                    <span className="text-xs font-bold text-slate-700">Sebastian Moran</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg leading-snug">
                    Daily follow-up meeting with designer
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {["A", "B", "C", "D"].map((n, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-purple-600 text-white text-[8px] font-bold flex items-center justify-center border border-white">
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold pt-2">
                    <span>🕒 11:00 - 12:00</span>
                    <span>🎥 Zoom</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Review design updates, align on creative direction, and address any challenges.
                  </p>
                </div>

                {/* Right Side: Mini Calendar Grid */}
                <div className="w-full md:w-1/2 bg-slate-50 rounded-2xl p-4 border border-purple-100 flex flex-col gap-3 text-center">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>&lt;</span>
                    <span>November 2026</span>
                    <span>&gt;</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-slate-400">
                    <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-[11px] font-semibold text-slate-700">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center mx-auto text-[10px]",
                          day === 18
                            ? "bg-purple-600 text-white font-bold shadow-md"
                            : "hover:bg-purple-100"
                        )}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══ 3. INTEGRATED TOOLS / PROCESS (Matching Reference Section) ═════════ */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-[36px] p-10 md:p-16 border border-purple-100 shadow-xl shadow-purple-950/5 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-100/80 px-4 py-1 rounded-full">
            Integrations Network
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 max-w-lg font-display">
            Your Essential Integrated Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-4">
            {partners.map((pt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm flex flex-col items-center justify-center text-center gap-2 hover:shadow-md hover:border-purple-200 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs font-mono">
                  {pt.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-900 font-display">{pt.name}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{pt.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. STATS COUNTER BAND ═════════════════════════════════════════════ */}
      <section className="py-8 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-[32px] bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 text-white p-8 md:p-12 shadow-2xl border border-purple-500/20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center lg:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Projects Delivered
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={98} suffix="%" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Client Retention Rate
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Team Experts
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Support Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. TESTIMONIALS SECTION (Matching Reference "Discover How Clients Achieve") ══ */}
      <section className="py-20 md:py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-12">
          
          <div className="flex flex-col items-center gap-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-700 bg-purple-100/80 px-4 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
              Discover How Our Clients Achieve Success with Us
            </h2>
          </div>

          {/* Split Grid: Left Featured Purple Card + Right 2 White Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Left Featured Card (Solid Purple Gradient) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-purple-700 via-violet-700 to-indigo-800 text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-8">
              <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-xl" />
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-base md:text-lg font-medium leading-relaxed italic text-white/95">
                  "{testimonials[0].quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/20 relative z-10">
                <Avatar name={testimonials[0].name} className="w-12 h-12 text-sm border-2 border-white shadow-md" />
                <div className="flex flex-col">
                  <span className="font-bold text-base text-white">{testimonials[0].name}</span>
                  <span className="text-xs text-purple-200 font-medium">{testimonials[0].role}, {testimonials[0].company}</span>
                </div>
              </div>
            </div>

            {/* Right Cards Column (2 Floating White Cards) */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
              {testimonials.slice(1, 3).map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md rounded-[28px] p-8 border border-purple-100 shadow-xl shadow-purple-950/5 flex flex-col justify-between gap-6"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                    <Avatar name={t.name} className="w-9 h-9 border border-purple-100 text-xs shadow-xs" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-slate-900">{t.name}</span>
                      <span className="text-xs text-slate-500 font-medium">{t.role}, {t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ══ 6. BLOG / CASE STUDIES SECTION (Matching Reference "Get Ready Around World") ══ */}
      <section className="py-20 md:py-28 relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-12">
          
          <div className="flex flex-col items-center gap-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-700 bg-purple-100/80 px-4 py-1 rounded-full">
              Latest Insights
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
              Get Ready for What's Unfolding Around the World
            </h2>
          </div>

          {/* 3-Column Floating Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                className="bg-white/90 backdrop-blur-md rounded-[32px] p-6 border border-purple-100/80 shadow-xl shadow-purple-950/5 flex flex-col justify-between gap-6 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900">
                    <GraphicPlaceholder type="blog" slug={post.slug} />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <Badge colorTheme="lilac">{post.category}</Badge>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors pt-4 border-t border-purple-50"
                >
                  Read Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 7. CTA BANNER (Matching Reference Bottom Banner) ══════════════════ */}
      <section className="py-12 md:py-20 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-[36px] bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white p-10 md:p-16 shadow-2xl border border-purple-500/20 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              Experience Integrated Solutions for Your Team's Needs
            </h2>
            <p className="text-sm md:text-base text-purple-200 leading-relaxed">
              Get in touch for a custom engineering estimate or layout consultation. Let's make your digital vision a reality.
            </p>

            {/* Inline Email Input + Pill CTA Bar */}
            <div className="w-full max-w-md mt-2 bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20 flex items-center justify-between gap-2 shadow-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-slate-300 focus:outline-none font-medium"
              />
              <Link href="/contact">
                <Button variant="primary" colorTheme="violet" className="!py-3 !px-6 !text-sm whitespace-nowrap">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ SECTION (Matching Reference "Get Answers to Your Top Questions") ══ */}
      <div className="border-t border-purple-100/60">
        <FAQSection
          items={homeFAQs}
          eyebrow="Got Questions?"
          title="Get Answers to Your Top Questions"
          description="Everything you want to know about working with KK NEX TECH SOLUTION, answered directly."
        />
      </div>

    </div>
  );
}


