"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Monitor, ShoppingBag, Terminal, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";

const webFAQs: FAQItem[] = [
  {
    q: "How long does it take to build a website or e-commerce store?",
    a: "A Starter Site typically takes 3–4 weeks. A Growth Engine headless Shopify build takes 6–8 weeks. Enterprise custom projects are scoped individually but typically run 10–16 weeks. We provide a detailed project timeline before any code is written."
  },
  {
    q: "Should I choose Shopify or a custom Next.js build for my store?",
    a: "Shopify is ideal if you need to launch fast, manage products easily, and leverage its app ecosystem. A headless Next.js build gives you complete design freedom, maximum performance scores (Core Web Vitals), and advanced custom logic. We'll recommend the right one after understanding your catalogue size, traffic expectations, and budget."
  },
  {
    q: "Will my website be optimized for SEO?",
    a: "Absolutely. Every project includes structured meta tags, semantic HTML, Open Graph tags, canonical URLs, sitemap.xml generation, robots.txt configuration, and Core Web Vitals optimization. SEO isn’t an add-on — it’s baked in from day one."
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. All packages include a maintenance window post-launch. Our Growth Engine and Enterprise plans come with extended engineering support (3–6 months). We also offer dedicated retainer agreements for ongoing feature development, performance audits, and 24/7 uptime monitoring."
  },
  {
    q: "What is the tech stack you use?",
    a: "Our primary stack is Next.js 15 (App Router), React, TypeScript, Tailwind CSS, and Framer Motion on the frontend. For backends we use Node.js, PostgreSQL, Supabase, Prisma, and AWS/Vercel for deployment. For e-commerce, we use Shopify Liquid and the Storefront API."
  },
  {
    q: "Can you redesign my existing website instead of building from scratch?",
    a: "Yes — redesigns are one of our most common engagements. We start with a performance audit of your current site, identify bottlenecks (slow load times, poor conversion flows, outdated UI), then rebuild the parts that matter most. We can migrate your data, preserve your SEO rankings, and relaunch with zero downtime."
  },
];

export default function WebsitesService() {
  const serviceData = services.find((s) => s.id === "websites")!;
  const webProjects = projects.filter((p) => p.category === "Websites");

  const packages = [
    {
      name: "Starter Site",
      price: "$2,499",
      desc: "Perfect for emerging brands validating product ideas.",
      features: [
        "Standard Shopify or Next.js Setup",
        "5 Custom Design Templates",
        "Fully Mobile Responsive",
        "SEO Foundation Meta Tags",
        "1 Month Maintenance Support"
      ],
      color: "bg-white",
    },
    {
      name: "Growth Engine",
      price: "$5,499",
      desc: "Our most popular package for high-growth businesses.",
      features: [
        "Decoupled Headless Shopify Frontends",
        "Custom Checkout & Inventory APIs",
        "Advanced SEO & Analytics Setup",
        "Interactive Motion animations",
        "3 Months Engineering Support",
        "CRM Sync Webhooks"
      ],
      color: "bg-pastel-sky border-2 border-accent-primary/20",
    },
    {
      name: "Enterprise Custom",
      price: "Custom Quote",
      desc: "Tailored code architectures for heavy industrial scales.",
      features: [
        "Custom Database Integrations",
        "Multi-region CDN edge replication",
        "Strict typescript codebase structure",
        "Penetration testing & Security seals",
        "Dedicated account engineers",
        "24/7 Operations Monitoring"
      ],
      color: "bg-white",
    }
  ];

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      
      {/* Sub-Hero */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-16 border-b border-zinc-200/50">
        <div className="flex items-center gap-2">
          <Link href="/services" className="text-xs font-semibold text-zinc-400 hover:text-ink">
            Services
          </Link>
          <span className="text-xs text-zinc-400">/</span>
          <span className="text-xs font-semibold text-accent-primary">Websites</span>
        </div>
        <Badge colorTheme="sky" className="w-fit">
          {serviceData.badge}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          {serviceData.title}
        </h1>
        <p className="text-lg text-zinc-650 leading-relaxed max-w-2xl">
          {serviceData.longDescription}
        </p>
      </section>

      {/* Two-Column split split */}
      <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-zinc-200/50">
        
        {/* Shopify */}
        <div className="flex flex-col gap-6 p-8 md:p-12 rounded-[32px] bg-pastel-peach/40 border border-orange-250/20">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent-secondary shadow-sm">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-ink">Shopify Development</h2>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            Accelerate your e-commerce operations. We design fast, customized Shopify Liquid templates and develop headless storefront architectures utilizing the Shopify Storefront API.
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {serviceData.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-ink">
                <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Custom Web Dev */}
        <div className="flex flex-col gap-6 p-8 md:p-12 rounded-[32px] bg-pastel-sky/40 border border-blue-250/20">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent-primary shadow-sm">
            <Terminal className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-ink">Custom Web Development</h2>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
            Bespoke web applications built using React, Next.js, and TypeScript. We construct custom backends, design API layers, and optimize rendering performance.
          </p>
          <ul className="flex flex-col gap-3 mt-4">
            {serviceData.features.slice(3).map((f) => (
              <li key={f} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-ink">
                <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Tech Stack strip */}
      <section className="py-12 bg-white border-b border-zinc-200/50">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">
            Tech stack we trust:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {serviceData.techStack.map((tech) => (
              <span key={tech} className="text-xs md:text-sm font-mono bg-zinc-50 border border-zinc-200/60 px-4 py-1.5 rounded-full text-ink font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 md:py-28 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="flex flex-col gap-12 md:gap-16">
          <SectionHeading
            eyebrow="Pricing Teaser"
            title="Sleek packages for every scale"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                colorBg={pkg.color as any}
                hoverEffect
                className="flex flex-col justify-between min-h-[450px]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-ink">{pkg.name}</h3>
                  <span className="text-3xl md:text-4xl font-black text-ink font-display">
                    {pkg.price}
                  </span>
                  <p className="text-xs text-zinc-500 leading-normal">
                    {pkg.desc}
                  </p>
                  <ul className="flex flex-col gap-3 mt-6 border-t border-zinc-100 pt-6">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-650 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="w-full block">
                    <Button variant="outline" className="w-full text-xs py-2.5">
                      Get Custom Quote
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio */}
      {webProjects.length > 0 && (
        <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent web achievements"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webProjects.map((p) => (
                <Card key={p.slug} colorBg={p.color as any} className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <Badge colorTheme="ink">{p.category}</Badge>
                    <h3 className="text-xl font-bold text-ink mt-2">{p.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-ink hover:text-accent-primary hover:translate-x-1 transition-all mt-6 pt-4 border-t border-zinc-950/5"
                  >
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <div className="border-t border-zinc-200/50">
        <FAQSection
          items={webFAQs}
          eyebrow="Got Questions?"
          title="Web Development — FAQs"
          description="Everything you need to know about building your website or store with us."
        />
      </div>

    </div>
  );
}
