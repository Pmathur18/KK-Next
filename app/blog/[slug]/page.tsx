import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import GraphicPlaceholder from "@/components/ui/GraphicPlaceholder";
import { blogPosts } from "@/data/blog";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts calculation (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      <div className="max-w-4xl px-6 md:px-8 mx-auto flex flex-col gap-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-ink w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog Insights
        </Link>

        {/* Post Meta Header */}
        <section className="flex flex-col gap-6">
          <Badge
            colorTheme={
              post.category === "Websites"
                ? "sky"
                : post.category === "Mobile Apps"
                ? "peach"
                : post.category === "Social Media"
                ? "mint"
                : "yellow"
            }
            className="w-fit"
          >
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-ink">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-650 leading-relaxed font-medium">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 mt-2 border-y border-zinc-200/50 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2.5 ml-auto">
              <Avatar name={post.author.name} className="w-8 h-8 text-[9px]" />
              <div className="flex flex-col">
                <span className="font-bold text-ink text-[11px]">{post.author.name}</span>
                <span className="text-zinc-400 text-[9px]">{post.author.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-zinc-200/50 bg-zinc-100 mt-4">
          <GraphicPlaceholder type="blog" slug={post.slug} />
        </div>

        {/* Article Body */}
        <article
          className="prose prose-zinc max-w-none py-8 border-b border-zinc-200/50 text-sm sm:text-base leading-relaxed text-zinc-700
            prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:mb-5
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5
            prose-blockquote:border-l-4 prose-blockquote:border-accent-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-600 prose-blockquote:my-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Articles Cross-Link */}
        {relatedPosts.length > 0 && (
          <section className="py-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-ink tracking-tight">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <div key={p.slug} className="p-6 bg-white rounded-3xl border border-zinc-200/50 flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase">{p.category}</span>
                    <h4 className="font-bold text-sm sm:text-base text-ink line-clamp-2 hover:text-accent-primary">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h4>
                  </div>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-accent-primary hover:underline mt-4"
                  >
                    Read Article <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
