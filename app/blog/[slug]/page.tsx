import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
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
      title: "Article Not Found | KK Next Tech Solution",
    };
  }

  return {
    title: `${post.metaTitle || post.title} | KK Next Tech Solution`,
    description: post.metaDescription || post.summary,
    keywords: post.keywords?.join(", "),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      type: "article",
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
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      <div className="max-w-4xl px-6 md:px-8 mx-auto flex flex-col gap-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0A2540] w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog Insights
        </Link>

        {/* Post Meta Header */}
        <section className="flex flex-col gap-6">
          <Badge colorTheme="navy" className="w-fit">
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-ink font-display">
            {post.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 mt-2 border-y border-slate-200 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2.5 ml-auto">
              <Avatar name={post.author.name} className="w-8 h-8 text-[9px]" />
              <div className="flex flex-col">
                <span className="font-bold text-ink text-[11px]">{post.author.name}</span>
                <span className="text-slate-400 text-[9px]">{post.author.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-purple-100/80 bg-slate-900 shadow-xl mt-4 group">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Article Body */}
        <article
          className="prose prose-slate max-w-none py-8 text-sm sm:text-base leading-relaxed text-slate-700
            prose-headings:font-display prose-headings:font-bold prose-headings:text-ink prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:mb-5
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5
            prose-blockquote:border-l-4 prose-blockquote:border-[#0A2540] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:my-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords / Tags section */}
        {post.keywords && post.keywords.length > 0 && (
          <div className="py-6 border-y border-slate-200 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Tag className="w-3.5 h-3.5" /> Target Keywords &amp; Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
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

        {/* Related Articles Cross-Link */}
        {relatedPosts.length > 0 && (
          <section className="py-8 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-ink tracking-tight font-display">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <div key={p.slug} className="p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 flex flex-col justify-between shadow-xs">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{p.category}</span>
                    <h4 className="font-bold text-base text-ink line-clamp-2">{p.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{p.summary}</p>
                  </div>
                  <Link href={`/blog/${p.slug}`} className="text-xs font-bold text-[#0A2540] hover:underline mt-4">
                    Read Article →
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
