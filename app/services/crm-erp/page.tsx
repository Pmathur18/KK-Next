"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BarChart3, Database, Workflow, ShieldAlert } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";

const crmFAQs: FAQItem[] = [
  {
    q: "Which CRM and ERP platforms do you work with?",
    a: "Our primary platforms are Zoho CRM, Zoho One, Salesforce, Odoo, and HubSpot. For custom ERP builds we use Node.js + PostgreSQL backends with React admin dashboards. We choose the platform based on your team size, budget, and existing infrastructure — not based on commission."
  },
  {
    q: "Can you migrate our data from an existing CRM?",
    a: "Yes. Data migration is a core part of every CRM implementation. We audit your existing data, clean duplicates, map field structures to the new system, and run parallel testing before the final cutover. You don't lose a single lead record."
  },
  {
    q: "How much customization is possible with an off-the-shelf CRM like Zoho or Odoo?",
    a: "Quite a lot. Both Zoho and Odoo support custom modules, workflow automations, webhook integrations, and custom dashboards. For 80% of businesses, a well-configured Zoho or Odoo setup handles everything. If your processes are truly unique, we build custom modules or a fully bespoke system on top."
  },
  {
    q: "How long does a typical CRM/ERP implementation take?",
    a: "A standard Zoho CRM setup with custom pipelines and automation takes 3–5 weeks. A full Odoo ERP implementation (inventory, accounting, HR, sales) typically takes 8–16 weeks depending on module count and data complexity. We give you a fixed-scope timeline in writing before kickoff."
  },
  {
    q: "Do you provide training for our team after implementation?",
    a: "Yes — every implementation includes user training sessions tailored to each department (sales team, finance team, operations). We provide recorded walkthroughs, documentation, and a post-launch support window where your team can ask questions as real workflows begin."
  },
  {
    q: "Can the CRM integrate with our website, WhatsApp, and other tools?",
    a: "Absolutely. We connect your CRM to your website contact forms, WhatsApp Business API, email (Gmail/Outlook), payment gateways, inventory systems, and marketing tools. Our integrations use webhooks, Zapier, or direct API connections to ensure real-time data sync across all your tools."
  },
];

export default function CrmErpService() {
  const serviceData = services.find((s) => s.id === "crm-erp")!;
  const crmProjects = projects.filter((p) => p.category === "CRM/ERP");

  const erpFeatures = [
    {
      title: "Sales Pipelines",
      desc: "Connect lead capture scripts to customer folders, tracking communication timelines and deals values.",
      icon: BarChart3,
    },
    {
      title: "Inventory & ERP Core",
      desc: "Synchronize raw material logs, supply orders, and invoice details in unified ledger databases.",
      icon: Database,
    },
    {
      title: "Workflow Automation",
      desc: "Replace administration work hours with automatic webhooks, validation scripts, and custom alerts.",
      icon: Workflow,
    },
    {
      title: "Custom Dashboards",
      desc: "Build simple data portals displaying operational indicators, sales margins, and staff performance metrics.",
      icon: ShieldAlert,
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
          <span className="text-xs font-semibold text-accent-primary">CRM & ERP</span>
        </div>
        <Badge colorTheme="yellow" className="w-fit">
          {serviceData.badge}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          {serviceData.title}
        </h1>
        <p className="text-lg text-zinc-650 leading-relaxed max-w-2xl">
          {serviceData.longDescription}
        </p>
      </section>

      {/* Grid of features */}
      <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="flex flex-col gap-12 md:gap-16">
          <SectionHeading
            eyebrow="Capabilities"
            title="Tailored platforms & integrations"
            description="We build bespoke operations databases and set up configurations for top ERP suites like Zoho, Salesforce, and Odoo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {erpFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="flex gap-6 p-8 rounded-3xl bg-white border border-zinc-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-pastel-yellow flex items-center justify-center text-ink shadow-sm shrink-0">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-ink">{feat.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Tools */}
      <section className="py-16 bg-white border-b border-zinc-200/50">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">
            Database Integrations:
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

      {/* Related Portfolio */}
      {crmProjects.length > 0 && (
        <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent enterprise automation projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {crmProjects.map((p) => (
                <Card key={p.slug} colorBg={p.color as any} className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <Badge colorTheme="ink">{p.category}</Badge>
                    <h3 className="text-xl font-bold text-ink mt-2">{p.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-665 leading-relaxed">
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
          items={crmFAQs}
          eyebrow="Got Questions?"
          title="CRM & ERP — FAQs"
          description="Common questions about our CRM implementation and ERP automation services."
        />
      </div>

    </div>
  );
}
