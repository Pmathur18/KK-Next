"use client";

import React from "react";
import Badge from "@/components/ui/Badge";

export default function TermsAndConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "intellectual", title: "2. Intellectual Property" },
    { id: "usage", title: "3. Permissible Usage" },
    { id: "accounts", title: "4. Account Guidelines" },
    { id: "limits", title: "5. Disclaimers & Limits" },
    { id: "law", title: "6. Governing Law" },
    { id: "contact", title: "7. Contact Legal Team" },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-transparent py-12 md:py-20">
      <div className="max-w-7xl px-6 md:px-8 mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <section className="flex flex-col gap-4 pb-8 border-b border-slate-200">
          <Badge colorTheme="navy" className="w-fit">Legal Documentation</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: August 28, 2026 · 6 min read
          </p>
        </section>

        {/* Layout: Sidebar + Document */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:flex flex-col gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink pb-2 border-b border-slate-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-2.5 text-xs font-semibold text-slate-600">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="hover:text-[#0A2540] transition-colors hover:translate-x-0.5 duration-200"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Documentation content */}
          <main className="lg:col-span-8 flex flex-col gap-10 text-zinc-650 text-sm md:text-base leading-relaxed">
            
            <p>
              Please read these Terms & Conditions carefully before navigating our website or commissioning software development services from KK NEX TECH SOLUTION.
            </p>

            <hr className="border-zinc-200/50" />

            {/* Sec 1 */}
            <div id="acceptance" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">1. Acceptance of Terms</h2>
              <p>
                By using our portals or booking consulting calls, you agree to comply with the terms outlined here. If you do not accept these rules, you must discontinue platform usage immediately.
              </p>
            </div>

            {/* Sec 2 */}
            <div id="intellectual" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">2. Intellectual Property</h2>
              <p>
                All UI designs, custom illustrations, code structures, and text markings published on this site are the exclusive property of KK NEX TECH SOLUTION. Reproducing or copying these files without authorization is strictly prohibited.
              </p>
            </div>

            {/* Sec 3 */}
            <div id="usage" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">3. Permissible Usage</h2>
              <p>
                You agree not to run automated scripts or security tests (pen-testing, scrapers) against our servers, or use portal inputs to distribute malicious programs.
              </p>
            </div>

            {/* Sec 4 */}
            <div id="accounts" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">4. Account Guidelines</h2>
              <p>
                If you establish service account credentials during custom ERP setups, you are responsible for securing passwords and access tokens. KK NEX TECH is not liable for data loss arising from negligent credential sharing.
              </p>
            </div>

            {/* Sec 5 */}
            <div id="limits" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">5. Disclaimers & Limits</h2>
              <p>
                KK NEX TECH SOLUTION delivers software assets &ldquo;as is&rdquo; without implied performance guarantees. We are not liable for direct, indirect, or operational profit losses resulting from server offline periods.
              </p>
            </div>

            {/* Sec 6 */}
            <div id="law" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">6. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any legal disputes, inquiries, or claims arising from service agreements will be handled exclusively in Noida courts.
              </p>
            </div>

            {/* Sec 7 */}
            <div id="contact" className="flex flex-col gap-3 scroll-mt-24">
              <h2 className="text-xl font-bold text-ink">7. Contact Legal Team</h2>
              <p>
                For legal inquiries, terms reviews, or clarification requests, please write to info@kknexttech.com with the subject line &ldquo;Terms Query.&rdquo;
              </p>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
