"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Zap,
  BarChart2,
  Award,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Lock,
  GitBranch,
  Cpu,
  Layers,
} from "lucide-react";
import { Linkedin } from "@/components/ui/BrandIcons";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { milestones, values, teamMembers, technicalStandards } from "@/data/team";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

const aboutFAQs: FAQItem[] = [
  {
    q: "What exactly does KK Next Tech Solutions do?",
    a: "We are a hybrid tech and growth agency. We build software — websites, mobile apps, CRM/ERP systems — and simultaneously run the marketing strategy that drives traffic and revenue to those products. Most agencies do one or the other. We do both, which means no gaps between your product and your growth."
  },
  {
    q: "How long has KK Next Tech Solutions been operating?",
    a: "We were founded in 2020 and have been growing ever since. In that time we've delivered 100+ projects, scaled 50+ e-commerce stores, and maintained a 98% client retention rate — which is something we're extremely proud of."
  },
  {
    q: "Where is your team based?",
    a: "Our core team is based in Delhi/NCR, India, with a remote-first culture that lets us work across time zones. We have clients across India, Southeast Asia, and the Middle East."
  },
  {
    q: "What does your Zero Fluff Policy actually mean?",
    a: "It means we never hide deliverables behind vanity metrics or confusing jargon. Every report, every status call, every strategy is framed in terms of business outcomes — leads generated, revenue earned, costs reduced. If it doesn't move the needle, we don't talk about it."
  },
  {
    q: "How big is your team?",
    a: "We have 25+ full-time engineers, strategists, and designers. Rather than growing headcount for optics, we stay lean and hire specialists. Every client gets senior-level attention — not handoffs to junior staff."
  },
  {
    q: "How do I start working with you?",
    a: "Head to our Contact page and fill out a quick brief about your project. We'll schedule a discovery call within 24 hours, audit your current situation, and put together a tailored proposal. No pressure, no sales pitch — just a straight conversation about your goals."
  },
];


// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) { setDisplay(end); clearInterval(timer); }
      else setDisplay(start);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// ─── Value Icon Map ──────────────────────────────────────────────────────────
const valueIconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  zap: Zap,
  "bar-chart": BarChart2,
  award: Award,
};

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { num: 100, suffix: "+", label: "Projects Successfully Delivered" },
  { num: 50, suffix: "+", label: "E-commerce Stores Scaled" },
  { num: 98, suffix: "%", label: "Client Retention Rate" },
  { num: 24, suffix: "/7", label: "Technical Support & Monitoring" },
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* ── SEO Meta (App Router: export const metadata in layout / server component) */}
      <div className="relative overflow-hidden w-full bg-transparent">

        {/* ════════════════════════════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.12, 0.1)}
            >
              <motion.span
                variants={fadeUp(0)}
                className="text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200 w-fit"
              >
                Our Identity &amp; Philosophy
              </motion.span>

              <motion.h1
                variants={fadeUp(0.05)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink font-display"
              >
                Bridging the Gap Between{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-purple-700">Deep Engineering</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-100 -z-10 rounded-sm" />
                </span>{" "}
                and Revenue Growth.
              </motion.h1>

              <motion.p
                variants={fadeUp(0.1)}
                className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal"
              >
                Most agencies are either good at writing code or good at running ads—rarely both. <strong className="text-slate-900 font-bold">KK Next Tech Solutions</strong> was built to bridge that gap. We engineer high-performance web applications and scale them with data-driven performance marketing under one accountable roof.
              </motion.p>

              <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact">
                  <Button variant="primary" colorTheme="violet" className="gap-2 flex items-center shadow-lg shadow-purple-500/25">
                    Talk to an Engineer <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" className="gap-2 flex items-center">
                    Explore Case Studies
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Visual card */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              {/* Mission card with workspace image background */}
              <div className="relative rounded-[32px] bg-[#050B14] text-white p-8 md:p-10 pb-20 sm:pb-20 md:pb-24 shadow-2xl overflow-hidden border border-white/20 group">
                <img
                  src="/images/tech_team_workspace.jpg"
                  alt="KK Next Tech Team & Engineering Studio"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/90 to-[#050B14]/80 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-purple-400">
                    Why We Exist
                  </span>
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    Dev agencies build code with zero commercial awareness. Ad agencies burn budgets driving traffic to slow, broken websites.
                  </p>
                  <hr className="border-white/10" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                    Our Operating Promise
                  </span>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    We eliminate the friction between product development and revenue acquisition. Clean, documented code that scales, backed by ruthless ROAS-first campaigns.
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3.5 z-20">
                <div className="w-10 h-10 rounded-full bg-[#EBF3FC] flex items-center justify-center border border-blue-200 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0A2540]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink">98% Client Retention</p>
                  <p className="text-[11px] text-slate-500 font-medium">Since 2020</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            2. STATS BAR (Apple Glass Design)
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-8 md:py-12 max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-[32px] md:rounded-[36px] bg-slate-950/75 backdrop-blur-2xl border border-white/15 p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden">
            {/* Subtle glass reflection gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <span className="text-4xl md:text-5xl font-black text-white font-display">
                    <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs md:text-sm text-slate-300 font-medium max-w-[150px]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. THE STORY
        ════════════════════════════════════════════════════════════════════ */}
        <section
          ref={storyRef}
          className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Visual Studio & Quote */}
            <motion.div
              className="lg:col-span-5 relative"
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={slideInLeft(0)}
            >
              <div className="relative rounded-[32px] overflow-hidden border border-purple-200 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/agency_story_tech_studio.jpg"
                  alt="KK Next Tech Solutions Engineering & Design Studio"
                  className="w-full h-[440px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Floating quote badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-md p-6 border border-white/60 shadow-xl flex flex-col gap-2">
                  <div className="text-2xl text-purple-600 font-black font-display leading-none">&ldquo;</div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    Dev agencies build code with zero marketing sense. Marketing agencies run ads to crashing sites.
                  </p>
                  <p className="text-xs text-purple-700 font-semibold italic">
                    — We built KK Next Tech Solutions to bridge that exact gap.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Story text */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-6"
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={staggerContainer(0.12, 0.15)}
            >
              <motion.span
                variants={fadeUp(0)}
                className="text-xs font-bold tracking-[0.18em] uppercase text-accent-primary"
              >
                The Story Behind KK Next Tech Solutions
              </motion.span>
              <motion.h2
                variants={fadeUp(0.05)}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight"
              >
                Every great company starts with a frustration.
              </motion.h2>
              <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-4 text-base text-zinc-600 leading-relaxed">
                <p>
                  We noticed a massive disconnect in the digital agency space:{" "}
                  <strong className="text-ink">Dev agencies would build great code</strong> but had zero
                  understanding of how to market the product.{" "}
                  <strong className="text-ink">Marketing agencies would run great ads</strong>, but send
                  traffic to slow, crashing websites.
                </p>
                <p>
                  We built KK Next Tech Solutions to{" "}
                  <span className="font-semibold text-accent-primary">bridge that exact gap.</span> We
                  are a hybrid powerhouse — fusing{" "}
                  <strong className="text-ink">bleeding-edge software engineering</strong> with{" "}
                  <strong className="text-ink">ruthless, data-driven marketing</strong> to make sure your
                  brand not only functions flawlessly but{" "}
                  <span className="font-semibold text-accent-primary">dominates its market.</span>
                </p>
              </motion.div>

              <motion.div variants={fadeUp(0.15)} className="flex flex-col gap-3 mt-2">
                {[
                  "Full-stack engineering meets performance marketing",
                  "No handoffs between dev and marketing silos",
                  "One team. One accountability. Your growth.",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink">{pt}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            4. CORE VALUES — The KK Next DNA
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
          <div className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="The KK Next DNA"
              title="Our Core Values"
              description="These aren't values we wrote for a pitch deck. They're how we actually operate — every sprint, every campaign, every client call."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((val, idx) => {
                const Icon: React.ElementType = (valueIconMap[val.icon] ?? Award) as React.ElementType;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Card colorBg={val.color as Parameters<typeof Card>[0]["colorBg"]} className="flex flex-col gap-5 h-full group hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-accent-primary shrink-0">
                          {React.createElement(Icon as React.FC<{ className?: string }>, { className: "w-6 h-6" })}
                        </div>
                        <span className="text-3xl font-black text-ink/5 font-display select-none">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-extrabold text-ink tracking-tight">
                          {val.title}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-accent-primary">
                          {val.tagline}
                        </p>
                        <p className="text-sm text-zinc-600 leading-relaxed mt-1">
                          {val.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            5. HISTORY TIMELINE
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Sticky left */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit flex flex-col gap-6">
              <SectionHeading
                eyebrow="Our History"
                title="From frustration to 100+ wins."
                description="A timeline of the milestones that shaped who we are today — and where we're headed."
              />
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:gap-3 transition-all">
                Start your project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-8 relative flex flex-col gap-10 pl-8 border-l-2 border-zinc-200">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                >
                  {/* Node */}
                  <div className="absolute -left-[37px] top-1 w-5 h-5 rounded-full bg-accent-primary border-4 border-bg-base shadow-md" />

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold bg-accent-primary text-white px-3 py-1 rounded-full font-mono">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-ink tracking-tight mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>



        {/* ════════════════════════════════════════════════════════════════════
            6. LEADERSHIP & CORE ENGINEERING TEAM
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="The People Behind the Code"
              title="Leadership &amp; Technical Architects"
              description="No anonymous freelancers or offshore middlemen. Your project is architected and steered by senior engineers and growth leaders with a stake in your success."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl border border-purple-100 bg-white p-6 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between gap-6 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-purple-100">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn Profile`}
                        className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-purple-200 flex items-center justify-center text-purple-700 hover:bg-purple-600 hover:text-white transition-all shadow-md"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-purple-50 text-[11px] font-semibold text-slate-500">
                    <span className="text-purple-600 font-bold block mb-0.5">Core Focus:</span>
                    {member.specialty}
                  </div>
                </div>
              ))}
            </div>

            {/* In-House Engineering & Standards Banner */}
            <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-12 border border-purple-500/20 relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  Our In-House Technical Guarantee
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-display text-white tracking-tight">
                  We Don&apos;t Outsource Critical Code to Anonymous Freelancers.
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Every software architecture, checkout flow, API sync, and ad campaign is managed in-house by our salaried team. You get direct Slack channels, version-controlled git ownership, and zero agency markups on outsourced labor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {technicalStandards.map((std) => (
                    <div key={std.title} className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {std.title}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">{std.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            7. HOW WE OPERATE: THE ACCOUNTABILITY FRAMEWORK
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="The Execution Model"
              title="Our Engineering &amp; Communication Promises"
              description="Clients are terrified of hiring an agency that ghosts them, misses deadlines, or leaves them with unmaintainable code. Here is how our culture protects your investment:"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-900/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Transparent Sprints</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Weekly milestone tracking and continuous staging demos. You get direct Slack and project management access to your actual engineers—no defensive account managers in between.
                </p>
                <div className="pt-3 border-t border-purple-50 text-xs font-semibold text-purple-700">
                  ✓ 14-Day Staging Deployments
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-900/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Clean Code Guarantee</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Modular, TypeScript-strict, well-documented codebases that any future developer or in-house team can easily manage. You own 100% of your Git repositories with zero vendor lock-in.
                </p>
                <div className="pt-3 border-t border-purple-50 text-xs font-semibold text-blue-700">
                  ✓ Zero Vendor Lock-In
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-lg shadow-purple-900/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">No Vanity Metrics</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We don&apos;t celebrate superficial impressions or pageviews. Our sole commitment is tracking net revenue, cart conversion rate, and sub-100ms app latency that drives client profitability.
                </p>
                <div className="pt-3 border-t border-purple-50 text-xs font-semibold text-emerald-700">
                  ✓ Revenue &amp; Latency Focused
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            8. FINAL CTA TAILORED FOR ABOUT AUDIENCE
        ════════════════════════════════════════════════════════════════════ */}
        <CTABanner
          badge="Zero Friction Partnership"
          title={
            <>
              Ready to work with a tech partner who{" "}
              <AnimatedGradientText>understands code and revenue?</AnimatedGradientText>
            </>
          }
          description="Let's talk about your project architecture, growth roadmap, and exact milestones. No sales scripts, just senior engineers."
          buttonText="Schedule Technical Discovery Call →"
          buttonLink="/contact"
        />

        {/* ════ FAQs ════ */}
        <div className="border-t border-zinc-200/50">
          <FAQSection
            items={aboutFAQs}
            eyebrow="Got Questions?"
            title="About Us — FAQs"
            description="Everything you've wondered about working with KK Next Tech Solutions, answered directly."
          />
        </div>

      </div>
    </>
  );
}
