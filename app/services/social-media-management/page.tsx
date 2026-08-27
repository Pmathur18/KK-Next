"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Instagram, Linkedin, Twitter, Facebook } from "@/components/ui/BrandIcons";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";

const socialFAQs: FAQItem[] = [
  {
    q: "Which social media platforms do you manage?",
    a: "We manage LinkedIn, Instagram, Facebook, X (Twitter), YouTube Shorts, Pinterest, and Google Business Profiles. We assign platform priorities based on where your specific target audience is most active and which channels drive the best ROI for your industry."
  },
  {
    q: "How soon will I see results from social media management?",
    a: "Organic growth typically takes 60–90 days to build meaningful momentum. Paid social campaigns can start generating leads within the first 7–14 days. We set realistic KPIs upfront and send weekly performance snapshots so you're never in the dark."
  },
  {
    q: "Do you create the content (graphics, videos, captions)?",
    a: "Yes — our team handles full content production including graphic design, short-form video editing, caption copywriting, and hashtag strategy. You review and approve before anything goes live. You never need to write a single caption."
  },
  {
    q: "What's your minimum ad budget for paid social campaigns?",
    a: "We recommend a minimum media spend of ₹30,000/month for Meta (Facebook/Instagram) ads to allow the algorithm enough data to optimize. For LinkedIn B2B campaigns, a minimum of ₹50,000/month is more effective. Our management fee is separate from the ad spend."
  },
  {
    q: "How do you measure campaign success? What reports do I get?",
    a: "We track Reach, Impressions, Engagement Rate, Click-Through Rate (CTR), Cost Per Lead (CPL), and Return on Ad Spend (ROAS). You receive a branded monthly performance report with trend graphs, competitor benchmarks, and our next-month strategy recommendations."
  },
  {
    q: "Can you take over my existing accounts or do we start fresh?",
    a: "Both. We can audit and take over your existing accounts, cleaning up the bio, highlights, and past content strategy. Or we can set up new professional accounts from scratch. Either way, we start with a full brand audit before publishing a single post."
  },
];

export default function SocialMediaService() {
  const serviceData = services.find((s) => s.id === "social-media")!;
  const socialProjects = projects.filter((p) => p.category === "Social Media");

  const channels = [
    { name: "LinkedIn", icon: Linkedin, color: "text-[#0077B5]" },
    { name: "Instagram", icon: Instagram, color: "text-[#E1306C]" },
    { name: "Twitter / X", icon: Twitter, color: "text-ink" },
    { name: "Facebook", icon: Facebook, color: "text-[#1877F2]" }
  ];

  const results = [
    { title: "+180%", metric: "Conversion CTR Growth" },
    { title: "-42%", metric: "Cost per Lead (CPL) Decrease" },
    { title: "650k+", metric: "Organic Monthly Reach" },
    { title: "3.5x", metric: "ROI Boost on Paid Campaigns" }
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
          <span className="text-xs font-semibold text-accent-primary">Social Media</span>
        </div>
        <Badge colorTheme="mint" className="w-fit">
          {serviceData.badge}
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          {serviceData.title}
        </h1>
        <p className="text-lg text-zinc-650 leading-relaxed max-w-2xl">
          {serviceData.longDescription}
        </p>
      </section>

      {/* Platform Channels */}
      <section className="py-16 bg-white border-b border-zinc-200/50">
        <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-450 shrink-0">
            Channels we scale:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
            {channels.map((chan) => {
              const Icon = chan.icon;
              return (
                <div key={chan.name} className="flex items-center gap-2.5 px-6 py-3 border border-zinc-200 rounded-2xl bg-zinc-50/50 font-bold text-sm text-ink shrink-0 justify-center">
                  <Icon className={`w-5 h-5 ${chan.color}`} />
                  {chan.name}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Statistics Mockup Cards */}
      <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto border-b border-zinc-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Key Metrics"
              title="Creative strategy driving concrete ROI"
              description="We avoid vanity metrics like likes and instead focus campaigns on customer acquisition costs and direct user conversions."
            />
            <ul className="flex flex-col gap-3 mt-4">
              {serviceData.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-xs md:text-sm font-semibold text-ink leading-tight">
                  <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {results.map((res) => (
              <div key={res.metric} className="p-6 rounded-[24px] bg-white border border-zinc-250/50 flex flex-col gap-2">
                <span className="text-2xl sm:text-3xl font-black text-accent-primary font-display">
                  {res.title}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {res.metric}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Related Portfolio */}
      {socialProjects.length > 0 && (
        <section className="py-20 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent growth projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {socialProjects.map((p) => (
                <Card key={p.slug} colorBg={p.color as any} className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <Badge colorTheme="ink">{p.category}</Badge>
                    <h3 className="text-xl font-bold text-ink mt-2">{p.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-660 leading-relaxed">
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
          items={socialFAQs}
          eyebrow="Got Questions?"
          title="Social Media Management — FAQs"
          description="Common questions about our social media growth services, answered straight."
        />
      </div>

    </div>
  );
}
