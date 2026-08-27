"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Laptop, Smartphone, Share2, Database } from "lucide-react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const servicesFAQs: FAQItem[] = [
  {
    q: "How do I know which service is right for my business?",
    a: "Start with a discovery call — it’s free and no-pressure. We'll ask about your current situation, growth goals, and biggest pain points. From there, we recommend the exact combination of services that will move the needle for your specific business, not a generic package."
  },
  {
    q: "Can I bundle multiple services together?",
    a: "Yes, and we recommend it. Our most successful engagements combine web development with social media and performance marketing. When your site, app, and growth strategy are built by the same team, there are no communication gaps, no blaming each other for underperformance — just unified execution."
  },
  {
    q: "Do you work on a project basis or a retainer?",
    a: "Both. Web development, app builds, and CRM implementations are typically fixed-scope projects. Social media management, SEO, and maintenance are monthly retainers. We structure the engagement model to suit your needs and can combine both in one master agreement."
  },
  {
    q: "How quickly can you get started on my project?",
    a: "After signing the contract and receiving the first milestone payment, we can typically begin within 3–5 business days. We keep limited spots open to ensure existing clients always get full-bandwidth attention. If you have a hard launch deadline, mention it during the discovery call."
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We operate on Extreme Ownership — if something isn't working, we take full responsibility and fix it. Every engagement includes a defined scope, success metrics agreed upfront, and a revision/feedback cycle. If results fall short of agreed KPIs, we work at no additional cost until they're met."
  },
];

export default function Services() {
  const serviceIcons = [Laptop, Smartphone, Share2, Database];

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      
      {/* Hero section */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-16 border-b border-zinc-200/50">
        <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-accent-primary">
          What We Do
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          Core service offerings engineered to scale your digital presence.
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
          We blend design aesthetics with technical code structures. Select a service category below to view specific platform capabilities, technology stacks, and related case studies.
        </p>
      </section>

      {/* Services grid */}
      <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <Card
                key={service.id}
                colorBg={service.color as any}
                className="flex flex-col justify-between min-h-[350px]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-ink shadow-sm border border-zinc-200/50">
                      <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
                    </div>
                    <Badge colorTheme={service.id === "social-media" ? "ink" : (service.id === "websites" ? "violet" : service.id as any)}>
                      {service.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-ink tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-base text-zinc-650 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-950/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono bg-white/70 px-2 py-0.5 rounded text-ink border border-zinc-200/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-1 text-sm font-bold text-ink hover:text-accent-primary hover:translate-x-1 transition-all shrink-0"
                  >
                    View Details & Projects <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto py-12">
        <div className="bg-dark-panel text-white rounded-[32px] p-8 md:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent-primary/10 rounded-full filter blur-[80px]" />
          <SectionHeading
            eyebrow="Get Consultation"
            title="Unsure which stack fits your project?"
            description="Our solutions architects are available to run a full operations and technical code audit."
            align="center"
            theme="dark"
          />
          <Link href="/contact">
            <Button variant="primary" colorTheme="violet">
              Schedule Free Call
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={servicesFAQs}
          eyebrow="Got Questions?"
          title="Services — FAQs"
          description="Common questions about how we work, how to choose a service, and what to expect."
        />
      </div>

    </div>
  );
}
