import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Laptop,
  Database,
  List,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/data/blog";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | KK Next Tech Solutions",
    };
  }

  const pageUrl = `https://www.kknexttech.com/blog/${post.slug}`;
  const title = post.metaTitle
    ? `${post.metaTitle} | KK Next Tech Solutions`
    : `${post.title} | KK Next Tech Solutions`;
  const description = post.metaDescription || post.summary;

  return {
    title,
    description,
    keywords: post.keywords?.join(", "),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "KK Next Tech Solutions",
      type: "article",
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.imageUrl],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts calculation (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Dynamic Table of Contents extraction from HTML content
  const headingRegex = /<h([23])>(.*?)<\/h\1>/g;
  const toc: { level: string; text: string; id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    const level = match[1];
    const text = match[2].replace(/<[^>]*>?/gm, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    toc.push({ level, text, id });
  }

  // Inject ID attributes into HTML content for TOC anchor links
  let processedContent = post.content;
  toc.forEach(({ text, id, level }) => {
    processedContent = processedContent.replace(
      `<h${level}>${text}</h${level}>`,
      `<h${level} id="${id}" class="scroll-mt-28">${text}</h${level}>`
    );
  });

  // Structured JSON-LD Schema: BlogPosting & BreadcrumbList
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.imageUrl,
        "datePublished": post.date,
        "dateModified": post.date,
        "description": post.metaDescription || post.summary,
        "author": {
          "@type": "Person",
          "name": post.author?.name || "KK Next Tech Solutions Team",
          "jobTitle": post.author?.role || "Tech Lead",
          "worksFor": {
            "@type": "Organization",
            "name": "KK Next Tech Solutions",
            "url": "https://www.kknexttech.com",
          },
        },
        "publisher": {
          "@type": "Organization",
          "name": "KK Next Tech Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.kknexttech.com/logo.png",
          },
        },
        "mainEntityOfPage": `https://www.kknexttech.com/blog/${post.slug}`,
        "keywords": post.keywords?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.kknexttech.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.kknexttech.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.kknexttech.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="relative overflow-hidden w-full bg-white text-slate-900 py-8 md:py-14 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-10">

        {/* ── BREADCRUMB & BACK LINK ── */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-purple-700 w-fit transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Guides</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-purple-700 font-bold">{post.category}</span>
          </div>
        </div>

        {/* ── POST HEADER SECTION ── */}
        <section className="flex flex-col gap-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full font-mono">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono font-semibold">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 font-display">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {post.summary}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-purple-100">
            <Avatar name={post.author.name} className="w-11 h-11 text-xs shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900">
                {post.author.name}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {post.author.role} @ KK Next Tech Solutions
              </span>
            </div>
          </div>
        </section>

        {/* ── COVER IMAGE ── */}
        <div className="relative w-full aspect-[16/9] max-h-[520px] rounded-[32px] overflow-hidden border border-purple-100 bg-slate-900 shadow-2xl group">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ── MAIN READING LAYOUT: SIDEBAR (TOC + CTAS) + ARTICLE CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">

          {/* LEFT STICKY SIDEBAR: TABLE OF CONTENTS & QUICK SERVICE CTAS */}
          <aside className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                  <List className="w-4 h-4 text-purple-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={cn(
                        "text-xs transition-colors hover:text-purple-700 font-medium leading-normal",
                        item.level === "3" ? "pl-3 text-slate-500" : "text-slate-800 font-bold"
                      )}
                    >
                      • {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Contextual Internal Linking / Solution Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 text-white border border-purple-500/30 shadow-xl flex flex-col gap-4">
              <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Engineering Practice
              </span>
              <h3 className="text-lg font-black font-display leading-tight">
                Facing a Similar Tech or Growth Bottleneck?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our solutions architects audit legacy codebases, design headless Shopify stores, and configure custom ERP workflows.
              </p>
              <Link href="/contact" className="pt-2">
                <Button variant="primary" colorTheme="violet" className="w-full !py-2.5 !text-xs font-bold">
                  Book Technical Consultation →
                </Button>
              </Link>
            </div>

            {/* Direct Service Cross-Links */}
            <div className="p-6 rounded-3xl bg-white border border-purple-100 shadow-xs flex flex-col gap-3 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-400">
                Core Services Referenced:
              </span>
              <Link
                href="/services/web-development"
                className="flex items-center justify-between text-slate-700 hover:text-purple-700 py-1.5 border-b border-slate-100 font-semibold transition-colors"
              >
                <span>Web Development &amp; Shopify</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
              </Link>
              <Link
                href="/services/crm-erp"
                className="flex items-center justify-between text-slate-700 hover:text-purple-700 py-1.5 border-b border-slate-100 font-semibold transition-colors"
              >
                <span>Enterprise CRM &amp; ERP Solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
              </Link>
              <Link
                href="/services/socials"
                className="flex items-center justify-between text-slate-700 hover:text-purple-700 py-1.5 border-b border-slate-100 font-semibold transition-colors"
              >
                <span>Performance Marketing &amp; Socials</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-between text-slate-700 hover:text-purple-700 py-1.5 font-semibold transition-colors"
              >
                <span>Client Case Studies &amp; Results</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-500" />
              </Link>
            </div>
          </aside>

          {/* RIGHT: ARTICLE CONTENT WITH INLINE ARCHITECTURE CALLOUT */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Formatted HTML Article Content */}
            <article
              className="prose prose-slate max-w-none text-base leading-relaxed text-slate-700
                prose-headings:font-display prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-purple-950
                prose-p:mb-5 prose-p:leading-relaxed
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5
                prose-li:mb-1.5
                prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50/50 prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-slate-800 prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* INLINE LEAD-CAPTURE BANNER */}
            <div className="p-8 rounded-3xl bg-purple-50/80 border-2 border-purple-300/80 flex flex-col sm:flex-row items-center justify-between gap-6 my-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                  Ready to Implement These Findings?
                </span>
                <h4 className="text-xl font-black text-slate-900 font-display">
                  Book a Free Technical Scope Review
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Our senior engineering leads will assess your tech stack, page speed, or lead pipeline with zero obligation.
                </p>
              </div>
              <Link href="/contact" className="shrink-0">
                <Button variant="primary" colorTheme="violet" className="!py-3 !px-7 text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30">
                  Schedule Review →
                </Button>
              </Link>
            </div>

            {/* Target Keywords / Topics Badges */}
            {post.keywords && post.keywords.length > 0 && (
              <div className="py-6 border-t border-slate-200 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  <Tag className="w-3.5 h-3.5" /> Target Keywords &amp; Architecture Topics
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs font-mono font-medium bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-slate-700"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── RELATED ARTICLES CROSS-LINK ── */}
        {relatedPosts.length > 0 && (
          <section className="py-12 border-t border-slate-200 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest">
                Keep Reading
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                Related Engineering &amp; Growth Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <div
                  key={p.slug}
                  className="p-6 bg-white rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between gap-4 hover:border-purple-300 transition-all group"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono text-purple-700 font-bold uppercase">
                      {p.category} · {p.readTime}
                    </span>
                    <h4 className="font-bold text-base text-slate-900 font-display line-clamp-2 group-hover:text-purple-700 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── BOTTOM CTA BANNER ── */}
        <CTABanner
          title="Looking to Scale Your Tech Infrastructure or ROAS?"
          description="Schedule a technical scope consultation with KK Next Tech Solutions. We engineer custom web applications, headless stores, and enterprise automation systems that convert."
          buttonText="Schedule Technical Consultation →"
          buttonLink="/contact"
        />

      </div>
    </div>
  );
}
