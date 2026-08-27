"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import Badge from "@/components/ui/Badge";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import { projects, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/* ─── FAQ data ──────────────────────────────────────────────────────────────── */
const portfolioFAQs: FAQItem[] = [
  {
    q: "Do all projects include a live URL I can visit?",
    a: "Most projects include a live demo or production URL. Some enterprise projects are under NDA and show only screenshots and metrics by client permission. Every case study includes the challenge, our approach, the tech stack used, and the measurable results delivered.",
  },
  {
    q: "Are these results real or fabricated for the portfolio?",
    a: "Every metric shown (conversion rates, organic reach numbers, revenue lifts) is real and pulled from client analytics dashboards with explicit permission. We never inflate or fabricate numbers. Clients can verify the data during a discovery call if needed.",
  },
  {
    q: "Do you only show full-scale projects, or do you also take smaller builds?",
    a: "Our portfolio showcases a range of scopes — from fast MVPs and landing pages to full enterprise systems. We work on projects of all sizes, provided they meet our minimum engagement thresholds. The complexity of execution matters more than the budget size.",
  },
  {
    q: "Can I request a project similar to one I see in the portfolio?",
    a: "Absolutely. If a specific case study resonates with your business, mention it when you contact us and say 'I want something like [Project Name].' We'll use it as a reference point during the discovery call to scope your project accurately and share relevant process insights.",
  },
  {
    q: "Do you work on the full project (design + dev + marketing) or just parts?",
    a: "Both. Many clients engage us for the full stack — design, development, and growth marketing. Others come to us for a specific layer, like redesigning an existing site or running ads for an already-built product. We can plug in at any stage of your digital journey.",
  },
];

/* ─── Color palettes per project ────────────────────────────────────────────── */
const cardPalettes: Record<
  string,
  { bg: string; accent: string; text: string; badge: string; metric: string; visual: string }
> = {
  "aurora-boutique": {
    bg: "from-[#1a0a3c] via-[#2d1065] to-[#1a0a3c]",
    accent: "#a78bfa",
    text: "text-white",
    badge: "bg-violet-500/20 text-violet-200 border-violet-500/30",
    metric: "text-violet-300",
    visual: "bg-violet-900/40 border-violet-500/20",
  },
  "fitquest-app": {
    bg: "from-[#0a2618] via-[#0d3d22] to-[#0a2618]",
    accent: "#34d399",
    text: "text-white",
    badge: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
    metric: "text-emerald-300",
    visual: "bg-emerald-900/40 border-emerald-500/20",
  },
  "nexus-social-scale": {
    bg: "from-[#0f1a3d] via-[#1a2d6b] to-[#0f1a3d]",
    accent: "#60a5fa",
    text: "text-white",
    badge: "bg-blue-500/20 text-blue-200 border-blue-500/30",
    metric: "text-blue-300",
    visual: "bg-blue-900/40 border-blue-500/20",
  },
  "apex-erp-pipeline": {
    bg: "from-[#2d1a00] via-[#4a2c00] to-[#2d1a00]",
    accent: "#fb923c",
    text: "text-white",
    badge: "bg-orange-500/20 text-orange-200 border-orange-500/30",
    metric: "text-orange-300",
    visual: "bg-orange-900/40 border-orange-500/20",
  },
};

const fallbackPalette = {
  bg: "from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]",
  accent: "#818cf8",
  text: "text-white",
  badge: "bg-indigo-500/20 text-indigo-200 border-indigo-500/30",
  metric: "text-indigo-300",
  visual: "bg-indigo-900/40 border-indigo-500/20",
};

/* ─── Single stacked card ──────────────────────────────────────────────────── */
function StackCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const palette = cardPalettes[project.slug] ?? fallbackPalette;

  /* Sticky offset: each card is 24px lower than the previous */
  const stickyTop = 88 + index * 24;

  /* Scroll-linked scale: cards behind shrink slightly as new cards stack on top */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: stickyTop }}
    >
      <motion.div
        style={{ scale: cardScale, opacity: cardOpacity, y: cardY }}
        className={cn(
          "relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br shadow-2xl",
          palette.bg
        )}
      >
        {/* Decorative glow orbs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: palette.accent }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: palette.accent }}
        />

        {/* Card number watermark */}
        <span className="absolute top-8 right-10 text-[120px] font-black leading-none opacity-[0.04] text-white select-none font-display pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ── Card content ── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[560px]">

          {/* Left: Text side */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 md:p-12 lg:p-14 gap-8">

            {/* Top meta */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border",
                    palette.badge
                  )}
                >
                  {project.category}
                </span>
                <span className="text-xs text-white/40 font-medium">
                  {project.client}
                </span>
              </div>

              {/* Big result metric */}
              <div className="flex flex-col gap-1">
                <span
                  className={cn(
                    "text-sm font-semibold uppercase tracking-widest opacity-60",
                    palette.text
                  )}
                >
                  Key Result
                </span>
                <p
                  className={cn(
                    "text-3xl md:text-4xl font-black font-display leading-tight",
                    palette.metric
                  )}
                >
                  {project.resultMetric}
                </p>
              </div>

              {/* Title */}
              <h2
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]",
                  palette.text
                )}
              >
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                {project.description}
              </p>
            </div>

            {/* Bottom: tags + CTA */}
            <div className="flex flex-col gap-5">
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95",
                    "bg-white text-ink hover:bg-white/90"
                  )}
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors"
                >
                  Get similar results <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Visual side */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-8 md:p-10 lg:p-12">
            {/* Visual card frame */}
            <div
              className={cn(
                "w-full h-full min-h-[280px] lg:min-h-[420px] rounded-[24px] overflow-hidden border relative",
                palette.visual
              )}
            >
              {/* Results overlay pills */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-col gap-2">
                {project.results.slice(0, 3).map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
                    className="flex items-start gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                      style={{ background: palette.accent }}
                    />
                    <span className="text-[11px] text-white/80 leading-tight font-medium">
                      {result}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Project graphic */}
              <div className="absolute inset-0 top-[140px]">
                <GraphicPlaceholder type="project" slug={project.slug} />
              </div>
            </div>

            {/* Index pill */}
            <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-sm font-black text-white">
                {index + 1}/{total}
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = ["All", "Websites", "Mobile Apps", "Social Media", "CRM/ERP"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return project.category === selectedFilter;
  });

  return (
    <div className="relative w-full bg-bg-base">

      {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-accent-primary"
          >
            Our Work
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink max-w-4xl"
          >
            Case Studies &{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Client Wins</span>
              <span className="absolute bottom-1.5 left-0 w-full h-3 bg-pastel-peach -z-10 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-zinc-500 leading-relaxed max-w-2xl"
          >
            Real outcomes from real projects. Scroll through our client case studies below — each card tells the full story.
          </motion.p>
        </motion.div>
      </section>

      {/* ══ FILTER TABS ══════════════════════════════════════════════════════ */}
      <section className="sticky top-0 z-40 bg-bg-base/90 backdrop-blur-md border-b border-zinc-200/50 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              id={`filter-${filter.toLowerCase().replace(/\s+/g, "-").replace("/", "-")}`}
              onClick={() => setSelectedFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer",
                selectedFilter === filter
                  ? "bg-ink text-white border-ink shadow-sm"
                  : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-100"
              )}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto text-xs text-zinc-400 font-medium self-center hidden sm:block">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ══ STACKED CARDS ════════════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {filteredProjects.length === 0 ? (
            <div className="py-32 text-center text-zinc-400 text-lg font-medium">
              No projects found in this category.
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
              {/* Stack container — each card is sticky */}
              <div
                className="flex flex-col gap-6"
                style={{
                  /* Total scroll height: enough room for all cards */
                  paddingBottom: `${filteredProjects.length * 32}px`,
                }}
              >
                {filteredProjects.map((project, index) => (
                  <StackCard
                    key={project.slug}
                    project={project}
                    index={index}
                    total={filteredProjects.length}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ══ SCROLL HINT ══════════════════════════════════════════════════════ */}
      {filteredProjects.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-6 -mt-4">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-5 h-8 rounded-full border-2 border-zinc-300 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-zinc-400" />
            </div>
            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
              Scroll
            </span>
          </motion.div>
        </div>
      )}

      {/* ══ FAQs ════════════════════════════════════════════════════════════ */}
      <div className="border-t border-zinc-200/50 mt-16">
        <FAQSection
          items={portfolioFAQs}
          eyebrow="Got Questions?"
          title="Portfolio — FAQs"
          description="Common questions about our work, results, and how we approach client projects."
        />
      </div>

    </div>
  );
}
