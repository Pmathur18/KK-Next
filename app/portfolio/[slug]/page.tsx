import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Cpu,
  Tag,
  TrendingUp,
  Globe,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sparkles,
  BarChart3,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import { projects } from "@/data/portfolio";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | KK Next Tech Solutions",
    };
  }

  const pageUrl = `https://www.kknexttech.com/portfolio/${project.slug}`;
  const title = project.metaTitle
    ? `${project.metaTitle} | KK Next Tech Solutions`
    : `Case Study: ${project.title} | KK Next Tech Solutions`;
  const description =
    project.metaDescription ||
    `Discover how KK Next Tech Solutions solved critical bottlenecks for ${project.client} (${project.industry}), resulting in ${project.resultMetric}.`;

  return {
    title,
    description,
    keywords: project.keywords?.join(", "),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Case Study: How We Scaled ${project.client} | KK Next Tech Solutions`,
      description,
      url: pageUrl,
      siteName: "KK Next Tech Solutions",
      type: "article",
      images: [
        {
          url: project.imageUrl.startsWith("http")
            ? project.imageUrl
            : `https://www.kknexttech.com${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study by KK Next Tech Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        project.imageUrl.startsWith("http")
          ? project.imageUrl
          : `https://www.kknexttech.com${project.imageUrl}`,
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Next case study calculation
  const projectIdx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIdx + 1) % projects.length];

  // Enhanced JSON-LD Structured Data Schema for Search Engines
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Case Study: ${project.title}`,
    "alternativeHeadline": project.metaTitle || project.title,
    "description": project.metaDescription || project.description,
    "image": project.imageUrl.startsWith("http")
      ? project.imageUrl
      : `https://www.kknexttech.com${project.imageUrl}`,
    "author": {
      "@type": "Organization",
      "name": "KK Next Tech Solutions",
      "url": "https://www.kknexttech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KK Next Tech Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.kknexttech.com/logo.png"
      }
    },
    "mainEntityOfPage": `https://www.kknexttech.com/portfolio/${project.slug}`,
    "articleSection": project.filterCategory,
    "keywords": project.keywords?.join(", ")
  };

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-8 md:py-14">
      {/* Search Engine Rich Snippet JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-14">

        {/* ── BREADCRUMB & BACK LINK ── */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-purple-700 w-fit transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Portfolio</span>
            <span>/</span>
            <span>{project.filterCategory}</span>
            <span>/</span>
            <span className="text-purple-700 font-bold">{project.client}</span>
          </div>
        </div>

        {/* ── 1. HERO SECTION (ABOVE THE FOLD) ── */}
        <section className="flex flex-col gap-8 pb-10 border-b border-slate-200">
          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full font-mono">
              {project.industry}
            </span>
            <span className="text-xs font-bold text-slate-500 font-mono">
              Category: {project.filterCategory}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">
              Client: {project.client}
            </span>
          </div>

          {/* Primary H1 Heading */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 font-display">
              Case Study: {project.title} for {project.client}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Meta Overview Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
            <div>
              <span className="block text-[11px] font-mono uppercase text-slate-400 font-bold">Client</span>
              <span className="font-bold text-slate-900">{project.client}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-slate-400 font-bold">Industry</span>
              <span className="font-bold text-slate-900">{project.industry}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-slate-400 font-bold">Service Line</span>
              <span className="font-bold text-slate-900">{project.filterCategory}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase text-slate-400 font-bold">Primary Outcome</span>
              <span className="font-extrabold text-emerald-700">{project.resultMetric}</span>
            </div>
          </div>

          {/* 3 BIG METRICS BAR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.statsBar.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white border border-purple-500/30 shadow-xl flex flex-col gap-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-xs uppercase tracking-wider font-mono font-bold text-purple-300">
                  {stat.label}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. HERO VISUAL / INTERACTIVE DEVICE PREVIEW ── */}
        <section className="relative w-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex flex-col">
          {/* Simulated Browser Bar */}
          <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
              kknexttech.com/portfolio/{project.slug}
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">
              ● Production Verified
            </span>
          </div>

          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] overflow-hidden group">
            <img
              src={project.imageUrl}
              alt={`${project.title} - Live Architecture Showcase`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200 bg-purple-950/85 px-4 py-1.5 rounded-full border border-purple-400/30 backdrop-blur-md font-mono">
                  {project.client} · {project.industry}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white bg-slate-900/80 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  Outcome: {project.resultMetric}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. H2: THE CHALLENGE & INITIAL BOTTLENECKS ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-rose-600">
              <AlertCircle className="w-5 h-5" />
              <span className="text-xs font-extrabold tracking-wider uppercase font-mono">The Initial Challenge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              Commercial &amp; Architectural Bottlenecks Before Engagement
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When {project.client} first approached KK Next Tech Solutions, their existing systems were struggling to support business scale, causing severe drop-offs in customer experience and conversion efficiency.
            </p>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-200/60 flex flex-col gap-4 shadow-xs">
            <h3 className="text-sm font-extrabold text-rose-950 uppercase tracking-wide font-mono">
              Key Roadblocks Identified During Audit
            </h3>
            <ul className="flex flex-col gap-3.5">
              {(project.painPoints || []).map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. H2: THE ENGINEERING & GROWTH STRATEGY ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-purple-700">
              <Cpu className="w-5 h-5" />
              <span className="text-xs font-extrabold tracking-wider uppercase font-mono">Strategic Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              The Engineering &amp; Growth Strategy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our engineering team re-architected the stack from the ground up to guarantee high speed, seamless operational workflows, and maximum ROAS efficiency.
            </p>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-purple-50/50 border border-purple-200/70 flex flex-col gap-6 shadow-xs">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-extrabold text-purple-950 uppercase tracking-wide font-mono">
                Technical Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="flex flex-col gap-3 pt-4 border-t border-purple-200/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-900 font-mono">
                  Delivered Workstreams
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── 5. H2: TECH STACK & SYSTEM ARCHITECTURE ── */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-purple-500/20 shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-wider font-mono">System Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                Technologies &amp; Architecture Integrated
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Modern Cloud-Native Tech Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex flex-col items-center text-center justify-center gap-2"
              >
                <span className="text-xs font-mono font-bold text-purple-200">{tech}</span>
                <span className="text-[10px] text-slate-400 font-mono">Enterprise Ready</span>
              </div>
            ))}
          </div>

          {project.keywords && project.keywords.length > 0 && (
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-2 font-mono uppercase flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Domain Topics:
              </span>
              {project.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs font-medium bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full font-mono"
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* ── 6. H2: THE RESULTS & COMMERCIAL ROI IMPACT ── */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 text-white border border-purple-500/30 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-extrabold uppercase tracking-wider font-mono">Commercial Impact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
              The Results &amp; Commercial ROI Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Post-deployment analytics measured across 90 days of live production traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3.5 hover:border-emerald-400/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  {res}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. NEXT CASE STUDY NAVIGATION ── */}
        <section className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400">
              Next Case Study
            </span>
            <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 font-display">
              {nextProject.title} ({nextProject.client})
            </h3>
          </div>
          <Link href={`/portfolio/${nextProject.slug}`}>
            <Button variant="primary" colorTheme="navy" className="flex items-center gap-2 !py-2.5 !px-6 cursor-pointer">
              Read Next Case Study <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>

        {/* ── 8. BOTTOM CTA (CALLOUT FOR TECHNICAL CONSULTATION) ── */}
        <CTABanner
          title="Facing a Similar Tech or Growth Bottleneck?"
          description={`Whether you need a high-speed headless rebuild, custom SaaS architecture, or a high-ticket acquisition campaign like ${project.client}, our engineering and marketing experts are ready to audit your roadmap.`}
          buttonText="Book Technical Consultation →"
          buttonLink="/contact"
        />

      </div>
    </div>
  );
}
