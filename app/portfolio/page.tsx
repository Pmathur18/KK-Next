"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

/* ─── Single Project Grid Card ────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-[28px] overflow-hidden bg-gradient-to-br from-[#050B14] via-[#0A2540] to-[#050B14] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5"
    >
      {/* Glow highlight background */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

      {/* Top Media / Graphic Preview */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden bg-slate-900/80 border-b border-white/10 flex items-center justify-center">
        {/* Results metric badge floating top right */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/30">
          <span className="text-xs font-extrabold text-blue-300 uppercase tracking-wide">
            {project.resultMetric}
          </span>
        </div>

        {/* Category badge floating top left */}
        <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
          <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 pt-10">
          <GraphicPlaceholder type="project" slug={project.slug} />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6 relative z-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-blue-300/70 tracking-wide uppercase">
            {project.client}
          </span>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-200 transition-colors leading-tight font-display">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Results bullets */}
        {project.results && project.results.length > 0 && (
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            {project.results.slice(0, 2).map((res, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-xs font-medium text-zinc-300 line-clamp-1">
                  {res}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-300 transition-colors"
          >
            View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Get similar <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
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
    <div className="relative w-full bg-transparent min-h-screen">
      {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink max-w-4xl"
          >
            Case Studies &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#0A2540]">Client Wins</span>
              <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#EBF3FC] -z-10 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-zinc-500 leading-relaxed max-w-2xl"
          >
            Real outcomes from real projects. Explore our client case studies below to see the impact, technology, and results we deliver.
          </motion.p>

          {/* ══ FILTER TABS ══════════════════════════════════════════════════ */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 overflow-x-auto pt-4 pb-2 no-scrollbar"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border cursor-pointer",
                  selectedFilter === filter
                    ? "bg-[#0A2540] text-white border-[#0A2540] shadow-md shadow-blue-900/20"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══ PROJECT GRID ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center text-zinc-400 text-lg font-medium"
            >
              No projects found in this category.
            </motion.div>
          ) : (
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

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

