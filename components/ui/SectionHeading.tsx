import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl flex flex-col gap-3 md:gap-4",
        isCenter ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      <span
        className={cn(
          "text-xs md:text-sm font-bold tracking-[0.15em] uppercase",
          isDark ? "text-purple-300" : "text-accent-primary font-semibold"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl font-normal",
            isDark ? "text-slate-300" : "text-zinc-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
