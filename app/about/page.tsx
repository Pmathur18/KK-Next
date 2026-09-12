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
  Mail,
} from "lucide-react";
import { Linkedin } from "@/components/ui/BrandIcons";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Tilt3DCard from "@/components/ui/Tilt3DCard";
import GlowingOrb from "@/components/ui/GlowingOrb";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import GlassCard from "@/components/ui/GlassCard";
import { milestones, values, teamMembers } from "@/data/team";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

const aboutFAQs: FAQItem[] = [
  {
    q: "What exactly does KK NEX TECH SOLUTION do?",
    a: "We are a hybrid tech and growth agency. We build software — websites, mobile apps, CRM/ERP systems — and simultaneously run the marketing strategy that drives traffic and revenue to those products. Most agencies do one or the other. We do both, which means no gaps between your product and your growth."
  },
  {
    q: "How long has KK NEX TECH SOLUTION been operating?",
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
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
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
                className="text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-[#0A2540]"
              >
                Who We Are
              </motion.span>

              <motion.h1
                variants={fadeUp(0.05)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink font-display"
              >
                The Tech Partners Who{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#0A2540]">Care About</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#EBF3FC] -z-10 rounded-sm" />
                </span>{" "}
                Your Bottom Line.
              </motion.h1>

              <motion.p
                variants={fadeUp(0.1)}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
              >
                We are a collective of developers, strategists, and problem-solvers who{" "}
                <strong className="text-ink font-semibold">hate boring tech</strong> and love{" "}
                <strong className="text-[#0A2540] font-semibold">massive ROI</strong>.
              </motion.p>

              <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4 mt-2">
                <Link href="/contact">
                  <Button variant="primary" colorTheme="navy" className="gap-2 flex items-center">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="secondary" className="gap-2 flex items-center">
                    See Our Work
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
              <div className="relative rounded-[32px] bg-[#050B14] text-white p-8 md:p-10 shadow-2xl overflow-hidden border border-white/20 group">
                <img
                  src="/images/tech_team_workspace.jpg"
                  alt="KK Next Tech Team & Engineering Studio"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/90 to-[#050B14]/80 pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                    Our Mission
                  </span>
                  <p className="text-xl md:text-2xl font-bold leading-snug">
                    Empower businesses with cutting-edge digital solutions and aggressive marketing that{" "}
                    <span className="text-blue-300">eliminates friction</span> and drives{" "}
                    <span className="text-white font-black underline decoration-blue-500">exponential growth.</span>
                  </p>
                  <hr className="border-white/10" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                    Our Vision
                  </span>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    To be the most trusted, results-oriented tech and growth agency globally —
                    known for building products that actually matter.
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 bg-white border border-slate-200 rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBF3FC] flex items-center justify-center border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0A2540]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink">98% Client Retention</p>
                  <p className="text-[11px] text-slate-500">Since 2020</p>
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
          className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Visual */}
            <motion.div
              className="lg:col-span-5 relative"
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={slideInLeft(0)}
            >
              {/* Stacked quote cards */}
              <div className="relative h-[400px] md:h-[480px]">
                {/* Card 3 — farthest */}
                <div className="absolute top-8 left-4 right-4 bottom-0 rounded-[28px] bg-slate-100 border border-slate-200 rotate-3" />
                {/* Card 2 */}
                <div className="absolute top-4 left-2 right-2 bottom-0 rounded-[28px] bg-[#EBF3FC] border border-blue-200/70 rotate-1" />
                {/* Card 1 — front */}
                <div className="absolute inset-0 rounded-[28px] bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between p-8 md:p-10">
                  <div className="text-5xl text-[#0A2540]/20 font-black font-display select-none">&ldquo;</div>
                  <div className="flex flex-col gap-4">
                    <p className="text-lg md:text-xl font-semibold text-ink leading-snug">
                      Dev agencies build great code but have zero marketing sense.
                      Marketing agencies run great ads but send traffic to slow, crashing websites.
                    </p>
                    <p className="text-sm text-slate-500 font-medium italic">
                      — The exact problem that built KK NEX TECH SOLUTION.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-[#0A2540] flex items-center justify-center text-white text-sm font-black">K</div>
                    <div>
                      <p className="text-sm font-bold text-ink">Kartik Krishnan</p>
                      <p className="text-xs text-slate-500">Founder &amp; CEO</p>
                    </div>
                  </div>
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
                The Story Behind KK Next Tech Solution
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
                  We built KK NEX TECH SOLUTION to{" "}
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
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
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
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
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
            6. TEAM GRID
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8 border-b border-zinc-200/50">
          <div className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="Leadership"
              title="Meet the experts behind your growth."
              description="A tight-knit team of engineers, strategists, and designers who are obsessively focused on your results — not billable hours."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <ScrollReveal key={member.name} delay={idx * 0.1}>
                  <Tilt3DCard intensity={8} className="h-full">
                    <div className="flex flex-col gap-4 group h-full bg-white p-4 rounded-3xl border border-purple-100/80 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-300 transition-all">
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-purple-100 bg-slate-900 shadow-xs">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-50/50 to-indigo-50/50 flex items-center justify-center">
                            <Avatar name={member.name} className="w-24 h-24 text-2xl border-4 border-white shadow-lg" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-purple-950/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4 text-center">
                          <p className="text-white text-xs font-semibold leading-relaxed">
                            Passionate about building digital products that drive real business results.
                          </p>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-700 hover:scale-110 transition-transform shadow-md"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 px-1 pb-1">
                        <h3 className="font-black text-lg text-slate-900 font-display tracking-tight">{member.name}</h3>
                        <span className="text-xs text-purple-600 font-bold uppercase tracking-wider">{member.role}</span>
                      </div>
                    </div>
                  </Tilt3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            7. FINAL CTA
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Work With Us (Apple Glass Design) */}
            <motion.div
              className="relative overflow-hidden rounded-[36px] bg-slate-950/80 backdrop-blur-2xl p-10 md:p-12 flex flex-col gap-6 text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 opacity-40 blur-3xl pointer-events-none" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-slate-300">
                Work With Us
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug font-display">
                Ready to build something that actually moves the needle?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                No fluff. No jargon. Just a straight conversation about your goals and how we can exceed them.
              </p>
              <Link href="/contact" className="mt-2 w-fit">
                <Button variant="primary" colorTheme="navy" className="flex items-center gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Join the Team */}
            <motion.div
              className="relative overflow-hidden rounded-[32px] bg-[#EBF3FC] border border-blue-200 p-10 md:p-12 flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#0A2540]">
                Join the Team
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-ink tracking-tight leading-snug font-display">
                Looking for your next big engineering or growth challenge?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are constantly seeking remote-friendly developers, designers, and data architects who obsess over results as much as we do.
              </p>
              <Link href="/career" className="mt-2 w-fit">
                <Button variant="primary" colorTheme="ink" className="flex items-center gap-2">
                  Explore Openings <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ════ FAQs ════ */}
        <div className="border-t border-zinc-200/50">
          <FAQSection
            items={aboutFAQs}
            eyebrow="Got Questions?"
            title="About Us — FAQs"
            description="Everything you've wondered about working with KK NEX TECH SOLUTION, answered directly."
          />
        </div>

      </div>
    </>
  );
}
