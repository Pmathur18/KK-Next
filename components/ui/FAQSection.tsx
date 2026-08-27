"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

/* ─── Single accordion item ─────────────────────────────────────────────── */
function FAQAccordionItem({
  item,
  idx,
  colId,
  open,
  setOpen,
}: {
  item: FAQItem;
  idx: number;
  colId: string;
  open: number | null;
  setOpen: (v: number | null) => void;
}) {
  const isOpen = open === idx;
  const btnId = `faq-btn-${colId}-${idx}`;
  const answerId = `faq-answer-${colId}-${idx}`;

  return (
    <motion.div
      initial={false}
      className={cn(
        "rounded-2xl border overflow-hidden transition-colors duration-200",
        isOpen
          ? "bg-white border-accent-primary/25 shadow-md"
          : "bg-white border-zinc-200/70 hover:border-zinc-300"
      )}
    >
      <button
        id={btnId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setOpen(isOpen ? null : idx)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <span
          className={cn(
            "text-sm md:text-base font-semibold leading-snug transition-colors",
            isOpen
              ? "text-accent-primary"
              : "text-ink group-hover:text-accent-primary"
          )}
        >
          {item.q}
        </span>
        <span
          className={cn(
            "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors mt-0.5",
            isOpen
              ? "bg-accent-primary text-white"
              : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
          )}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={btnId}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 border-t border-zinc-100 pt-4">
              <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function FAQSection({
  items,
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  description,
  className,
}: FAQSectionProps) {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  /* Split into two columns: left = even indices (0,2,4…), right = odd (1,3,5…) */
  const leftItems = items.filter((_, i) => i % 2 === 0);
  const rightItems = items.filter((_, i) => i % 2 !== 0);

  return (
    <section
      className={cn(
        "py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8",
        className
      )}
    >
      <div className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        {/* Two-column grid — left & right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftItems.map((item, i) => (
              <FAQAccordionItem
                key={i}
                item={item}
                idx={i}
                colId="left"
                open={openLeft}
                setOpen={setOpenLeft}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightItems.map((item, i) => (
              <FAQAccordionItem
                key={i}
                item={item}
                idx={i}
                colId="right"
                open={openRight}
                setOpen={setOpenRight}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
