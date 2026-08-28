"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import { blogPosts, BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug);

  const filteredPosts = regularPosts.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      
      {/* Header */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-6 pb-12 border-b border-zinc-200/50">
        <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-accent-primary">
          Our Blog
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-ink max-w-3xl">
          KK Insights & Technology Guides
        </h1>
        <p className="text-lg text-zinc-650 leading-relaxed max-w-2xl">
          We share research summaries, design systems tips, and automated script snippets to keep product engineering teams ahead of the curve.
        </p>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="py-12 max-w-7xl px-6 md:px-8 mx-auto">
          <div className="rounded-[32px] overflow-hidden border border-zinc-200/50 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full rounded-2xl overflow-hidden border border-zinc-250/20 bg-zinc-100">
              <GraphicPlaceholder type="blog" slug={featuredPost.slug} />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Badge colorTheme="violet">Featured Post</Badge>
                  <span className="text-xs text-zinc-400 font-medium">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ink leading-snug hover:text-accent-primary transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-xs md:text-sm text-zinc-550 leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>

              {/* Author Meta */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={featuredPost.author.name} className="w-10 h-10 text-xs shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-ink">{featuredPost.author.name}</span>
                    <span className="text-[10px] text-zinc-400">{featuredPost.author.role}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-ink hover:text-accent-primary transition-colors"
                >
                  Read Post <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-6 max-w-7xl px-6 md:px-8 mx-auto flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer",
              selectedCategory === cat
                ? "bg-ink text-white border-ink shadow-sm"
                : "bg-white text-zinc-650 border-zinc-200 hover:bg-zinc-50"
            )}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Regular Posts Grid */}
      <section className="py-12 max-w-7xl px-6 md:px-8 mx-auto min-h-[300px]">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.slug} className="flex flex-col justify-between group bg-white border border-zinc-200/50 p-5 rounded-3xl hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200/50 bg-zinc-150">
                    <GraphicPlaceholder type="blog" slug={post.slug} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge colorTheme={post.category === "Websites" ? "sky" : (post.category === "Mobile Apps" ? "peach" : (post.category === "Social Media" ? "mint" : "yellow"))}>
                      {post.category}
                    </Badge>
                    <span className="text-[10px] text-zinc-400 font-medium">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-ink group-hover:text-accent-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-ink hover:text-accent-primary transition-colors mt-6 pt-4 border-t border-zinc-100"
                >
                  Read Post <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-zinc-500 text-sm">
            No articles found inside this category.
          </div>
        )}
      </section>

      {/* Newsletter Block (Apple Glass Design) */}
      <section className="max-w-7xl px-6 md:px-8 mx-auto py-12">
        <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/15 rounded-[36px] p-8 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-[0_25px_60px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full filter blur-[90px] pointer-events-none" />
          <div className="flex flex-col gap-3 relative z-10">
            <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
              Newsletter
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-display">
              Get technical insights straight to your inbox
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md">
              We compile solutions updates, design tokens, and automation advice. Sent once a month. No spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto md:max-w-md">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-zinc-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-zinc-400 placeholder-zinc-400 text-ink w-full min-w-[240px]"
            />
            <Button type="submit" variant="primary" colorTheme="ink" className="flex items-center justify-center gap-2 whitespace-nowrap">
              <Mail className="w-4 h-4 shrink-0" /> Subscribe
            </Button>
            {subscribed && (
              <span className="text-xs text-accent-primary font-bold block mt-2 sm:absolute sm:mt-14">
                Thank you for subscribing!
              </span>
            )}
          </form>
        </div>
      </section>

    </div>
  );
}
