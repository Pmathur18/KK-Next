"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "1. Information Collection" },
    { id: "cookies", title: "2. Cookies & Tracking" },
    { id: "sharing", title: "3. Third-Party Services" },
    { id: "rights", title: "4. User Rights & Data Keys" },
    { id: "security", title: "5. Information Safeguards" },
    { id: "changes", title: "6. Changes to Policy" },
    { id: "contact", title: "7. Contact Legal Team" },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-bg-base py-12 md:py-20">
      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <section className="flex flex-col gap-4 pb-8 border-b border-zinc-200/50">
          <Badge colorTheme="violet" className="w-fit">Legal Documentation</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-400">
            Last Updated: August 28, 2026 · 6 min read
          </p>
        </section>

        {/* Layout: Sidebar + Document */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:flex flex-col gap-4 bg-white border border-zinc-250/50 p-6 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink pb-2 border-b border-zinc-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-2.5 text-xs font-semibold text-zinc-500">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="hover:text-accent-primary transition-colors hover:translate-x-0.5 duration-200"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Documentation content */}
          <main className="lg:col-span-8 flex flex-col gap-10 text-zinc-650 text-sm md:text-base leading-relaxed">
            
            <p>
              At KK NEX TECH SOLUTION, we prioritize the protection of your digital information. This document outlines how we collect, store, and leverage analytical logs across our platforms.
            </p>

            <hr className="border-zinc-200/50" />

            {/* Sec 1 */}
            <div id="collection" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">1. Information Collection</h2>
              <p>
                We capture personal information (such as names, phone logs, and email domains) that you provide directly via contact portals, project estimators, and vacancy registrations. This data is utilized solely for validation checks, candidate screenings, and service deliveries.
              </p>
            </div>

            {/* Sec 2 */}
            <div id="cookies" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">2. Cookies & Tracking</h2>
              <p>
                Our platforms leverage cookies to analyze page rendering performance, compile session clicks, and log layout dimensions. These tracking pixels are aggregated into anonymous statistic figures and do not trace back to individual credentials.
              </p>
            </div>

            {/* Sec 3 */}
            <div id="sharing" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">3. Third-Party Services</h2>
              <p>
                We do not sell client files to corporate advertising agencies. Information is shared only with certified cloud databases (such as AWS and Firebase storage units) and analytical monitoring tools necessary to evaluate code bases and operations metrics.
              </p>
            </div>

            {/* Sec 4 */}
            <div id="rights" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">4. User Rights & Data Keys</h2>
              <p>
                You retain complete rights to audit, transfer, or permanently delete personal records stored in our servers. You may submit verification audits or database deletion requests at any time by contacting our legal team.
              </p>
            </div>

            {/* Sec 5 */}
            <div id="security" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">5. Information Safeguards</h2>
              <p>
                We execute periodic SSL evaluations and utilize end-to-end data encryption modules across our API layers. While we safeguard our pipelines, no digital sync sequence remains completely immune to server attacks.
              </p>
            </div>

            {/* Sec 6 */}
            <div id="changes" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">6. Changes to Policy</h2>
              <p>
                We reserve the right to revise this document to reflect software integrations or regulatory upgrades. Updates will be highlighted on this page with modified timestamps.
              </p>
            </div>

            {/* Sec 7 */}
            <div id="contact" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">7. Contact Legal Team</h2>
              <p>
                For questions regarding data protection, legal compliance, or database inquiries, please contact hello@kknextech.com with the subject line "Legal Query."
              </p>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
