"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Zap, Lightbulb, Compass, Award, Heart, Users, CheckCircle2, Sparkles, Shield, Laptop, Share2, Database, Code } from "lucide-react";
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
  const [activeSolution, setActiveSolution] = useState("brand");
  const [emailInput, setEmailInput] = useState("");

  // Embla setup for Testimonials
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Embla setup for Trending (Blogs) Carousel
  const [emblaBlogRef, emblaBlogApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollBlogPrev = () => emblaBlogApi && emblaBlogApi.scrollPrev();
  const scrollBlogNext = () => emblaBlogApi && emblaBlogApi.scrollNext();

  const steps = [
    { num: "01", title: "Audit", desc: "Evaluating current performance metrics and code bottlenecks.", color: "bg-purple-100 text-purple-700" },
    { num: "02", title: "Design", desc: "Architecting visual wireframes and high-fidelity UX prototypes.", color: "bg-purple-600 text-white" },
    { num: "03", title: "Develop", desc: "Bespoke clean code development (Next.js, Tailwind, APIs) with responsive testing.", color: "bg-[#7C3AED] text-white" },
    { num: "04", title: "Deploy", desc: "Safe database migrations, zero-downtime launches, and edge optimization.", color: "bg-cyan-100 text-cyan-800" },
    { num: "05", title: "Support", desc: "24/7 server monitoring, performance audits, and software upgrades.", color: "bg-[#0F172A] text-white" },
  ];

  const solutions = [
    {
      id: "brand",
      title: "Web Development",
      tech: "NEXT.JS · SHOPIFY · HEADLESS",
      desc: "We provide customized commerce portals, Shopify/Next.js store engines, and high-conversion landing systems to scale your presence.",
      link: "/services#websites",
      clients: ["TATA", "Britannia", "Eureka Forbes", "Kérastase", "Crompton", "Birla Opus"],
      color: "bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-cyan-500/10",
      borderColor: "border-purple-200/80",
      icon: Laptop,
    },
    {
      id: "media",
      title: "Socials",
      tech: "META ADS · SEO · ANALYTICS",
      desc: "We drive performance marketing campaigns, paid ad strategy, organic search engine optimization, and growth scaling pipelines.",
      link: "/services#social-media",
      clients: ["Swiggy", "Imagine Meats", "iQOO", "Mia by Tanishq", "Happydent"],
      color: "bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-pink-500/10",
      borderColor: "border-fuchsia-200/80",
      icon: Share2,
    },
    {
      id: "tech",
      title: "CRM / ERP Automation",
      tech: "ZOHO · SALESFORCE · ODOO",
      desc: "We optimize People, Processes and Technology by building high-performance APIs, database architectures, and customized CRM/ERP setups.",
      link: "/services/crm-erp",
      clients: ["L'Oreal", "Dove", "CeraVe", "GAIN", "Titan", "Saint-Gobain"],
      color: "bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10",
      borderColor: "border-cyan-200/80",
      icon: Database,
    }
  ];

  const partners = [
    { name: "Shopify Premium", desc: "Leverage standard commerce headless tools for quick checkouts." },
    { name: "Zoho Premium", desc: "Empower leads processing with customized automated workflows." },
    { name: "Node.js", desc: "Deploy high-performance APIs and scalable database instances." },
    { name: "Google Premier", desc: "Scale campaigns CTR using data audits and smart keyword triggers." },
    { name: "MoEngage Partner", desc: "Boost direct customer retention with automated marketing flows." },
    { name: "Odoo Integration", desc: "Integrate ERP records with websites automatically using webhooks." }
  ];

  // 4 Feature Preview Cards (matching reference image below hero)
  const heroFeatureCards = [
    {
      title: "Web Engine",
      subtitle: "Shopify & Next.js Headless Apps",
      desc: "Fast, custom storefronts & web platforms engineered for maximum conversion.",
      icon: Laptop,
      badge: "Websites",
    },
    {
      title: "Mobile Native",
      subtitle: "iOS & Android Applications",
      desc: "Intuitive mobile apps built for seamless UX and customer retention.",
      icon: Code,
      badge: "Mobile Apps",
    },
    {
      title: "Growth Socials",
      subtitle: "Meta Ads & SEO Campaigns",
      desc: "Data-driven creative scaling campaigns that turn searchers into buyers.",
      icon: Share2,
      badge: "Social Media",
    },
    {
      title: "Custom CRM/ERP",
      subtitle: "Enterprise Database Systems",
      desc: "Complete ERP solutions for efficient operations & automated workflows.",
      icon: Database,
      badge: "CRM/ERP",
    },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-transparent">

      {/* ══ 1. HERO SECTION (Onesoft SaaS Centered Style) ════════════════════ */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="relative z-10 max-w-5xl px-6 md:px-8 w-full flex flex-col items-center gap-8">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Top Pill Badge */}
            <motion.div variants={fadeUp()}>
              <Badge colorTheme="navy" className="!bg-purple-100 !text-purple-700 !border-purple-200/80 shadow-xs">
                ✨ Next-Gen Tech &amp; Growth Studio
              </Badge>
            </motion.div>

            {/* Large Hero Headline */}
            <motion.h1
              variants={fadeUp()}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 font-display"
            >
              Your Creative, Media &amp; <br />
              <span className="bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Technology Engineering Partner
              </span>
            </motion.h1>

            {/* Subheading text */}
            <motion.p
              variants={fadeUp()}
              className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl text-center font-normal"
            >
              We're a team of software engineers delivering award-winning web platforms, high-performance mobile applications, and customized business automation pipelines globally.
            </motion.p>

            {/* Combined Pill-Shaped Input & CTA Bar (Matching Onesoft reference image) */}
            <motion.div variants={fadeUp()} className="w-full max-w-xl mt-2">
              <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-full p-2 shadow-2xl shadow-purple-900/10 flex items-center justify-between gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-transparent border-none px-4 py-2 text-sm text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
                />
                <Link href="/contact" className="shrink-0">
                  <Button variant="primary" colorTheme="violet" className="!py-3 !px-6 !text-sm whitespace-nowrap shadow-md">
                    Book a Call →
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stars & Social Proof Rating */}
            <motion.div variants={fadeUp()} className="flex items-center gap-4 mt-4 pt-4 border-t border-purple-100/60 w-full justify-center">
              <div className="flex -space-x-2">
                {["Ananya Sen", "Dr. Rohan Joshi", "Amit Mehra", "Neha Nair"].map((name, idx) => (
                  <Avatar
                    key={idx}
                    name={name}
                    className="w-8 h-8 text-[9px] border-2 border-white shadow-xs"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-0.5 text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  4.9/5 stars based on 120+ client reviews
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ══ 4 PRODUCT/FEATURE PREVIEW CARDS ROW (Matching Onesoft Reference) ══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-6 text-left"
          >
            {heroFeatureCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-purple-100/80 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <card.icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between text-xs font-bold text-[#7C3AED] group-hover:translate-x-1 transition-transform">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 2. SOLUTIONS / CAPABILITIES SECTION (Onesoft Tabbed Layout) ══════ */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
          {/* Centered Heading with Purple Tag */}
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Explore Our Complete Range of Solutions"
            description="We unify creative web architecture, performance engineering, and growth channels to deliver tangible business scale."
            align="center"
          />

          {/* Solution Selector Tabs (Pill Buttons) */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolution(sol.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border",
                  activeSolution === sol.id
                    ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-purple-500/20"
                    : "bg-white text-slate-600 border-purple-100 hover:border-purple-200 hover:text-slate-900"
                )}
              >
                {sol.title}
              </button>
            ))}
          </div>

          {/* Active Solution Showcase Block */}
          <AnimatePresence mode="wait">
            {solutions.map((sol) => sol.id === activeSolution && (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Text Card */}
                <div className="lg:col-span-5 bg-white border border-purple-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-purple-900/5 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <Badge colorTheme="navy">{sol.tech}</Badge>
                    <h3 className="text-3xl font-extrabold text-slate-900 leading-tight font-display">
                      {sol.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-purple-50">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Trusted Client Partners
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.clients.map((client) => (
                        <span key={client} className="text-xs font-bold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={sol.link} className="pt-2">
                    <Button variant="primary" colorTheme="violet">
                      Get Started →
                    </Button>
                  </Link>
                </div>

                {/* Right Visual Dashboard Mockup Frame */}
                <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-purple-200/80 shadow-2xl bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#9333EA] p-6 md:p-8 min-h-[380px] flex items-center justify-center">
                  <div className="w-full bg-white rounded-2xl shadow-2xl p-4 overflow-hidden border border-purple-100">
                    <GraphicPlaceholder type="project" slug={sol.id} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ 3. INTEGRATED TOOLS BAR (White Card Pill Container) ══════════════ */}
      <section className="py-12 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-purple-900/5 text-center flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Badge colorTheme="sky">Integrations Network</Badge>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
              Your Essential Integrated Tools
            </h3>
          </div>

          <div className="w-full relative flex overflow-hidden pt-2">
            <div className="animate-marquee gap-8 pr-8 items-center flex">
              {partners.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 p-4 rounded-2xl border border-purple-100 bg-purple-50/50 backdrop-blur-md min-w-[240px] max-w-[280px] text-left"
                >
                  <span className="text-xs font-bold text-slate-900 font-display">{pt.name}</span>
                  <span className="text-[11px] text-slate-500 leading-normal">{pt.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. STATS BAND ════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-12 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#2E1065] to-[#0F172A] border border-purple-500/20 p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Projects Delivered
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={98} suffix="%" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Client Satisfaction
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-purple-200 font-bold">
                Team Experts
              </span>
            </div>

            <div className="flex flex-col gap-2">
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

      {/* ══ 5. FEATURED PORTFOLIO ═════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative z-10 bg-white">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Case Studies"
              title="See Tangible Client Outcomes"
              description="Explore our portfolio of applications designed to optimize workflows and drive bottom-line revenue."
            />
            <Link href="/portfolio">
              <Button variant="outline" className="shrink-0">
                All Case Studies →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-purple-100 rounded-3xl p-8 shadow-xl shadow-purple-900/5 flex flex-col justify-between gap-6 hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge colorTheme="navy">{project.category}</Badge>
                    <span className="text-xs font-extrabold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                      {project.resultMetric}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#7C3AED] transition-colors leading-tight font-display">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-purple-100 bg-slate-50">
                  <GraphicPlaceholder type="project" slug={project.slug} />
                </div>

                <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex items-center gap-1 text-sm font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. WORKFLOW STEPS ═════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-purple-50/50 border-y border-purple-100 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <SectionHeading
            eyebrow="Our Workflow"
            title="How We Deploy Success"
            description="We follow a systematic engineering pipeline ensuring strict layout responsiveness and compilation speed."
            align="center"
          />

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-purple-200" />

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center font-display font-black text-lg border-4 border-white shadow-lg shrink-0", step.color)}>
                  {step.num}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="flex lg:hidden flex-col gap-8 pl-4 border-l-2 border-purple-200">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-2 relative">
                <div className={cn("absolute -left-[37px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-xs border border-white", step.color)}>
                  {step.num}
                </div>
                <h3 className="font-extrabold text-base text-slate-900 pl-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. TESTIMONIALS SECTION (Matching Onesoft Reference Layout) ═════ */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Discover How Our Clients Achieve Success with Us"
            description="Learn how KK NEX TECH helps teams solve engineering challenges and hit KPI goals."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Featured Purple Gradient Testimonial Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col justify-between gap-8 relative overflow-hidden">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                  "{testimonials[0].quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/20 relative z-10">
                <Avatar name={testimonials[0].name} className="w-12 h-12 border-2 border-white text-sm" />
                <div className="flex flex-col">
                  <span className="font-bold text-base text-white">{testimonials[0].name}</span>
                  <span className="text-xs text-purple-200 font-medium">{testimonials[0].role}, {testimonials[0].company}</span>
                </div>
              </div>
            </div>

            {/* Right Column Stacked Testimonial Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(1, 3).map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-purple-100 rounded-3xl p-6 shadow-lg shadow-purple-900/5 flex flex-col justify-between gap-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                    <Avatar name={t.name} className="w-9 h-9 border border-purple-100 text-xs" />
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

      {/* ══ 8. BLOG / INSIGHTS SECTION ════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-purple-50/30 border-t border-purple-100 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Get Ready for What's Unfolding Around the World"
              description="Learn tips, guides, and engineering patterns from our software experts."
            />
            <Link href="/blog">
              <Button variant="outline" className="shrink-0">
                All Posts →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.slug} className="group bg-white border border-purple-100 p-6 rounded-3xl flex flex-col justify-between shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-purple-100">
                    <GraphicPlaceholder type="blog" slug={post.slug} />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#7C3AED] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] mt-6 pt-4 border-t border-purple-50 group-hover:translate-x-1 transition-all"
                >
                  Read Post <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA BANNER (Bottom Newsletter / Contact Bar) ═══════════════════ */}
      <section className="py-12 md:py-20 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-purple-100/90 via-fuchsia-50/60 to-cyan-100/90 border border-purple-200/80 p-10 md:p-16 text-slate-900 shadow-xl shadow-purple-900/5 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
            <Badge colorTheme="navy">Experience Integrated Solutions</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Experience Integrated Solutions for Your Team's Needs
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Get in touch for a custom engineering estimate or layout consultation. Let's make your digital vision a reality.
            </p>

            <div className="w-full max-w-md bg-white border border-purple-200/80 rounded-full p-1.5 shadow-lg shadow-purple-900/5 flex items-center justify-between gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full bg-transparent border-none px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
              />
              <Link href="/contact" className="shrink-0">
                <Button variant="primary" colorTheme="violet" className="!py-2.5 !px-6 !text-sm whitespace-nowrap shadow-md">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. FAQs ═════════════════════════════════════════════════════════ */}
      <div className="border-t border-purple-100">
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

