import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import { projects } from "@/data/portfolio";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
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

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
        
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-ink w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        {/* Hero header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-zinc-200/50">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Badge colorTheme="ink">{project.category}</Badge>
              <span className="text-xs font-semibold text-zinc-400">
                Client: {project.client}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-650 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>
          </div>

          <div className="lg:col-span-4 p-8 rounded-[24px] bg-white border border-zinc-200/50 flex flex-col gap-4 text-center">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
              Validated Metric Outcome
            </span>
            <span className="text-3xl font-black text-accent-primary font-display">
              {project.resultMetric}
            </span>
          </div>
        </section>

        {/* Big Banner Image */}
        <section className="relative w-full h-[320px] md:h-[480px] rounded-[32px] overflow-hidden border border-zinc-200/50 bg-zinc-100">
          <GraphicPlaceholder type="project" slug={project.slug} />
        </section>

        {/* Split Details: Challenge & Solution */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 py-8 border-b border-zinc-200/50">
          
          {/* Challenge */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-secondary">
              The Challenge
            </span>
            <h2 className="text-2xl font-bold text-ink tracking-tight">
              Operational bottlenecks impact performance
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-primary">
              Our Solution
            </span>
            <h2 className="text-2xl font-bold text-ink tracking-tight">
              Bespoke architecture optimized for speed
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-4">
              {project.solution}
            </p>
            <ul className="flex flex-col gap-3">
              {project.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-semibold text-ink leading-tight">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-primary shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* Cross-Link: Next project */}
        <section className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl p-8 border border-zinc-250/50 mt-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
              Next Case Study
            </span>
            <h3 className="font-bold text-lg text-ink">
              {nextProject.title}
            </h3>
          </div>
          <Link href={`/portfolio/${nextProject.slug}`}>
            <Button variant="primary" colorTheme="violet" className="flex items-center gap-2 !py-2.5">
              Read Next <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}
