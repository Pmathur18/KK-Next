"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Zap, Lightbulb, Compass, Award, Heart, Users } from "lucide-react";
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
import { fadeUp, staggerContainer, scaleUp } from "@/lib/animations";
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

  // Parallax scroll effects for Hero blobs
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const blobRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

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
    { num: "01", title: "Audit", desc: "Evaluating current performance metrics and code bottlenecks.", color: "bg-[#0A2540] text-white" },
    { num: "02", title: "Design", desc: "Architecting visual wireframes and high-fidelity UX prototypes.", color: "bg-[#1E40AF] text-white" },
    { num: "03", title: "Develop", desc: "Bespoke clean code development (Next.js, Tailwind, APIs) with responsive testing.", color: "bg-[#050B14] text-white" },
    { num: "04", title: "Deploy", desc: "Safe database migrations, zero-downtime launches, and edge optimization.", color: "bg-[#EBF3FC] text-[#0A2540]" },
    { num: "05", title: "Support", desc: "24/7 server monitoring, performance audits, and software upgrades.", color: "bg-slate-100 text-[#050B14]" },
  ];

  const clientLogos = [
    "Codecraft", "CoreOS", "Frequencii", "Kintsugi", "Helix", "Symmetric",
    "Codecraft", "CoreOS", "Frequencii", "Kintsugi", "Helix", "Symmetric"
  ];

  const solutions = [
    {
      id: "brand",
      title: "Web Development",
      tech: "NEXT.JS · SHOPIFY · HEADLESS",
      desc: "We provide customized commerce portals, Shopify/Next.js store engines, and high-conversion landing systems to scale your presence.",
      link: "/services#websites",
      clients: ["TATA", "Britannia", "Eureka Forbes", "Kérastase", "Crompton", "Birla Opus"],
      color: "bg-[#EBF3FC]",
      textColor: "text-[#0A2540]",
      borderColor: "border-blue-200/80"
    },
    {
      id: "media",
      title: "Socials",
      tech: "META ADS · SEO · ANALYTICS",
      desc: "We drive performance marketing campaigns, paid ad strategy, organic search engine optimization, and growth scaling pipelines.",
      link: "/services#social-media",
      clients: ["Swiggy", "Imagine Meats", "iQOO", "Mia by Tanishq", "Happydent"],
      color: "bg-[#F1F5F9]",
      textColor: "text-[#050B14]",
      borderColor: "border-slate-200"
    },
    {
      id: "tech",
      title: "CRM / ERP Automation",
      tech: "ZOHO · SALESFORCE · ODOO",
      desc: "We optimize People, Processes and Technology by building high-performance APIs, database architectures, and customized CRM/ERP setups.",
      link: "/services/crm-erp",
      clients: ["L'Oreal", "Dove", "CeraVe", "GAIN", "Titan", "Saint-Gobain"],
      color: "bg-[#F8FAFC]",
      textColor: "text-[#1E40AF]",
      borderColor: "border-slate-200"
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

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full bg-transparent">

      {/* 1. HERO SECTION (Schbang Centered Style) */}
      <section className="relative pt-20 pb-28 overflow-hidden flex flex-col items-center justify-center text-center">

        <div className="relative z-10 max-w-5xl px-6 md:px-8 w-full flex flex-col items-center gap-8">

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >


            <motion.h1
              variants={fadeUp()}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-ink font-display"
            >
              Your Creative, Media & <br />
              <span className="bg-gradient-to-r from-[#050B14] via-[#0A2540] to-[#1E40AF] bg-clip-text text-transparent">
                Technology Engineering Partner
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-zinc-650 leading-relaxed max-w-2xl text-center"
            >
              We're a team of software engineers delivering award-winning web platforms, high-performance mobile applications, and customized business automation pipelines globally.
            </motion.p>

            <motion.div variants={fadeUp()} className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Link href="/contact">
                <Button variant="primary" colorTheme="navy">
                  IT'S TIME TO CREATE A TECH EVOLUTION →
                </Button>
              </Link>
            </motion.div>

            {/* Stars row */}
            <motion.div variants={fadeUp()} className="flex items-center gap-5 mt-6 pt-6 border-t border-zinc-200/50 w-full justify-center">
              <div className="flex -space-x-2">
                {["Ananya Sen", "Dr. Rohan Joshi", "Amit Mehra", "Neha Nair"].map((name, idx) => (
                  <Avatar
                    key={idx}
                    name={name}
                    className="w-8 h-8 text-[9px] border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-0.5 text-left">
                <div className="flex text-[#0A2540]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-ink/80">
                  4.9/5 stars based on 120+ client reviews
                </span>
              </div>
            </motion.div>
            {/* Hero Dashboard Showcase Visual */}
            <motion.div
              variants={fadeUp()}
              className="w-full max-w-5xl mt-12 relative rounded-[32px] overflow-hidden border border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.15)] bg-slate-950/80 backdrop-blur-2xl p-2 md:p-3 group"
            >
              <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-900">
                <img
                  src="/images/hero_dashboard.jpg"
                  alt="KK Next Tech Solution Dashboard Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Hero Bottom Ticker (Schbang-style) */}
        <div className="w-full mt-16 py-4 bg-white/25 backdrop-blur-xl border-y border-white/40 overflow-hidden relative z-10">
          <div className="animate-marquee gap-8 pr-8 items-center text-xs font-extrabold uppercase tracking-widest text-zinc-400 font-mono">
            {[...Array(4)].map((_, r) => (
              <React.Fragment key={r}>
                <span>IT'S TIME TO EVOLVE WITH KK NEX TECH</span>
                <span className="text-[#0A2540] text-sm">✦</span>
                <span>CODE QUALITY FIRST</span>
                <span className="text-[#1E40AF] text-sm">★</span>
                <span>PREMIUM USER AESTHETICS</span>
                <span className="text-[#0A2540] text-sm">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (Apple Glass Design) */}
      <section className="py-20 md:py-28 bg-white/20 backdrop-blur-xl border-y border-white/30 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28 h-fit">
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-accent-primary">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight font-display">
              Integrated Tech & <br />Marketing Solutions
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We unify creative web architecture, performance engineering, and growth channels to deliver tangible business scale.
            </p>

            {/* Switching buttons */}
            <div className="flex flex-col gap-3 mt-4">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolution(sol.id)}
                  className={cn(
                    "w-full text-left px-5 py-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer backdrop-blur-md",
                    activeSolution === sol.id
                      ? `${sol.color} ${sol.borderColor} shadow-md`
                      : "bg-white/40 border-white/50 hover:bg-white/60 text-ink"
                  )}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-500 font-mono tracking-wider">{sol.tech}</span>
                    <span className="text-sm font-bold text-ink group-hover:text-accent-primary transition-colors">{sol.title}</span>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
                    activeSolution === sol.id ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white/80 border-white/60 text-ink"
                  )}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {solutions.map((sol) => sol.id === activeSolution && (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={cn("p-8 md:p-12 rounded-[32px] border flex flex-col justify-between min-h-[400px]", sol.color, sol.borderColor)}
                >
                  <div className="flex flex-col gap-6">
                    <Badge colorTheme="ink">KK Nex Tech Solution</Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-ink leading-tight">{sol.title}</h3>
                    <p className="text-zinc-650 text-sm md:text-base leading-relaxed">{sol.desc}</p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-950/10 flex flex-col gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Trusted Partner Brands</span>
                    <div className="flex flex-wrap gap-2">
                      {sol.clients.map((client) => (
                        <span key={client} className="text-xs font-bold font-mono bg-white/70 px-3 py-1.5 rounded-xl border border-zinc-200/50 text-ink">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={sol.link} className="mt-8">
                    <Button variant="primary" colorTheme="violet" className="w-fit">
                      Read Strategy Insights →
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US / STATS BAND (Apple Glass Design) */}
      <section className="py-8 md:py-12 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-[32px] md:rounded-[36px] bg-slate-950/75 backdrop-blur-2xl border border-white/15 p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden">
          {/* Glass light reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center text-center lg:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Projects Delivered
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={98} suffix="%" />
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Client Satisfaction
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Team Experts
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black text-white font-display flex items-baseline justify-center lg:justify-start">
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                Support Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PORTFOLIO */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Case Studies"
              title="See tangible outcomes"
              description="Explore our portfolio of applications designed to optimize workflows and drive bottom-line revenue."
            />
            <Link href="/portfolio">
              <Button variant="outline" className="shrink-0">
                All Case Studies
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <Card
                key={project.slug}
                colorBg={project.color as any}
                className="flex flex-col justify-between min-h-[420px] group overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge colorTheme="ink">{project.category}</Badge>
                    <span className="text-xs font-bold font-mono bg-white px-3 py-1 rounded-full text-ink border border-zinc-200">
                      {project.resultMetric}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mt-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mt-6 border border-zinc-200/50 bg-zinc-100">
                  <GraphicPlaceholder type="project" slug={project.slug} />
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-955/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-white/70 px-2 py-0.5 rounded text-ink border border-zinc-200/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex items-center gap-1 text-sm font-bold text-ink hover:text-accent-primary hover:translate-x-1 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. METRIC CARDS / TRUST PROOF (Workflow Steps - Apple Glass) */}
      <section className="py-20 md:py-28 bg-white/20 backdrop-blur-xl border-y border-white/30 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-16">
          <SectionHeading
            eyebrow="Our Workflow"
            title="How we deploy success"
            description="We follow a systematic engineering pipeline ensuring strict layout responsiveness and compilation speed."
            align="center"
          />

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-6 relative">
            {/* Connector Line */}
            <div className="absolute top-[35px] left-[10%] right-[10%] h-0.5 bg-slate-300/60" />

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className={cn("w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-lg border-2 border-white shadow-md text-ink backdrop-blur-md", step.color)}>
                  {step.num}
                </div>
                <h3 className="font-bold text-lg text-ink">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="flex lg:hidden flex-col gap-8 pl-4 border-l-2 border-slate-300/60">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-2 relative">
                <div className={cn("absolute -left-[37px] top-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-xs border border-white text-ink", step.color)}>
                  {step.num}
                </div>
                <h3 className="font-bold text-base text-ink pl-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS CAROUSEL */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say"
              description="Learn how KK NEX TECH helps teams solve engineering challenges and hit KPI goals."
            />
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white/70 transition-colors cursor-pointer text-ink shadow-xs"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white/70 transition-colors cursor-pointer text-ink shadow-xs"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial slider track */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-3"
                >
                  <div className="bg-white/45 backdrop-blur-xl rounded-[28px] p-8 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between h-full min-h-[300px]">
                    <div className="flex flex-col gap-4">
                      <div className="flex text-[#0A2540]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-ink font-medium text-sm md:text-base leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-slate-200/50">
                      <Avatar name={t.name} className="w-10 h-10 border border-white shadow-xs text-xs" />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-ink">{t.name}</span>
                        <span className="text-xs text-slate-500 font-medium">{t.role}, {t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. BLOG / INSIGHTS CAROUSEL */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Trending now"
              description="Learn tips, guides, and engineering patterns from our software experts."
            />
            <div className="flex items-center gap-2">
              <button
                onClick={scrollBlogPrev}
                className="w-11 h-11 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white/70 transition-colors cursor-pointer text-ink shadow-xs"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollBlogNext}
                className="w-11 h-11 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white/70 transition-colors cursor-pointer text-ink shadow-xs"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaBlogRef}>
            <div className="flex">
              {blogPosts.map((post) => (
                <div key={post.slug} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-4 group">
                  <div className="flex flex-col gap-4 bg-white/45 backdrop-blur-xl border border-white/60 p-5 rounded-[28px] h-full justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/40 bg-slate-100">
                        <GraphicPlaceholder type="blog" slug={post.slug} />
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-lg text-ink group-hover:text-[#0A2540] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-[#0A2540] hover:translate-x-1 transition-all mt-4 pt-4 border-t border-slate-200/50"
                    >
                      Read Post <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARTNERS SLIDER (Apple Glass Design) */}
      <section className="py-16 bg-white/20 backdrop-blur-xl border-t border-white/30 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center flex flex-col gap-2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Integrations Network</span>
          <h3 className="text-xl font-bold text-ink">Technology &amp; Platform Partners</h3>
        </div>

        <div className="w-full relative flex overflow-hidden">
          <div className="animate-marquee gap-8 pr-8 items-center flex">
            {partners.map((pt, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 p-5 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md min-w-[240px] max-w-[280px] shadow-xs"
              >
                <span className="text-xs font-bold text-ink font-display">{pt.name}</span>
                <span className="text-[10px] text-slate-600 leading-normal">{pt.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA BANNER (Apple Glass Design) */}
      <section className="py-12 md:py-20 max-w-7xl px-6 md:px-8 mx-auto relative z-10">
        <div className="rounded-[36px] bg-slate-950/80 backdrop-blur-2xl border border-white/15 p-10 md:p-16 text-white shadow-[0_25px_60px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
            <SectionHeading
              eyebrow="Start Today"
              title="Ready to build something great?"
              description="Get in touch for a custom engineering estimate or layout consultation. Let's make your digital vision a reality."
              align="center"
              theme="dark"
            />

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="primary" colorTheme="navy">
                  Contact Us
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">
                  View Showcase
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={homeFAQs}
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you want to know about working with KK NEX TECH SOLUTION, answered directly."
        />
      </div>

    </div>
  );
}
