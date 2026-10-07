import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, Cpu, Tag } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";
import { getPublicContent } from "@/lib/supabase-store";

export const dynamic = "force-dynamic";

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
  const project = (await getPublicContent()).portfolios.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | KK Next Tech Solution",
    };
  }

  return {
    title: `${project.metaTitle || project.title} | KK Next Tech Solution`,
    description: project.metaDescription || project.description,
    keywords: project.keywords?.join(", "),
    openGraph: {
      title: project.metaTitle || project.title,
      description: project.metaDescription || project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const content = await getPublicContent();
  const project = content.portfolios.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Next case study calculation
  const projectIdx = content.portfolios.findIndex((p) => p.slug === slug);
  const nextProject = content.portfolios[(projectIdx + 1) % content.portfolios.length];

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
        
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0A2540] w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        {/* Hero header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-slate-200">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Badge colorTheme="navy">{project.category}</Badge>
              <span className="text-xs font-semibold text-slate-500">
                Client: {project.client}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink font-display">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs font-mono font-bold bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-[32px] bg-slate-950/80 backdrop-blur-2xl text-white border border-white/20 flex flex-col gap-4 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full filter blur-[60px] pointer-events-none" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Validated Metric Outcome
            </span>
            <span className="text-3xl md:text-4xl font-black text-white font-display">
              {project.resultMetric}
            </span>
          </div>
        </section>

        {/* Big Banner Image */}
        <section className="relative w-full h-[340px] md:h-[500px] rounded-[32px] overflow-hidden border border-purple-200/60 bg-slate-900 shadow-2xl group">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-200 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-400/30 backdrop-blur-md">
              {project.category} · {project.client}
            </span>
            <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md hidden sm:inline-block">
              {project.resultMetric}
            </span>
          </div>
        </section>

        {/* ── PAIN POINTS & OUR SOLUTION ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          
          {/* Pain Points */}
          <div className="p-8 md:p-10 rounded-[32px] bg-white/50 backdrop-blur-2xl border border-white/60 flex flex-col gap-6 shadow-xs">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">The Pain Points</span>
            </div>
            <h2 className="text-2xl font-bold text-ink tracking-tight font-display">
              Operational Challenges Before Engagement
            </h2>
            <ul className="flex flex-col gap-3">
              {(project.painPoints || []).map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solution */}
          <div className="p-8 md:p-10 rounded-[32px] bg-white/50 backdrop-blur-2xl border border-white/60 flex flex-col gap-6 shadow-xs">
            <div className="flex items-center gap-2 text-[#0A2540]">
              <Cpu className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">Our Solution</span>
            </div>
            <h2 className="text-2xl font-bold text-ink tracking-tight font-display">
              Strategic &amp; Technical Execution
            </h2>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </p>

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="flex flex-col gap-3 pt-2 border-t border-slate-200/60">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables</span>
                <ul className="flex flex-col gap-2">
                  {project.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="w-1 h-1 rounded-full bg-[#0A2540]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </section>

        {/* ── MEASURABLE RESULTS ── */}
        <section className="p-8 md:p-12 rounded-[36px] bg-slate-950/80 backdrop-blur-2xl text-white border border-white/20 shadow-xl flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-300">Measured Impact</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
              The Results Achieved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-bold text-white leading-relaxed">{res}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Keywords section */}
        {project.keywords && project.keywords.length > 0 && (
          <div className="py-6 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Tag className="w-3.5 h-3.5" /> Target Keywords &amp; Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((kw) => (
                <span 
                  key={kw} 
                  className="text-xs font-medium bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 shadow-2xs"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Link: Next project */}
        <section className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-xs">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Next Case Study
            </span>
            <h3 className="font-bold text-lg text-ink font-display">
              {nextProject.title}
            </h3>
          </div>
          <Link href={`/portfolio/${nextProject.slug}`}>
            <Button variant="primary" colorTheme="navy" className="flex items-center gap-2 !py-2.5">
              Read Next Case Study <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}
