import React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

export default function Avatar({ name, className }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-[#0A2540] border-[#0A2540] text-white",
    "bg-[#1E40AF] border-[#1E40AF] text-white",
    "bg-[#050B14] border-[#050B14] text-white",
    "bg-[#EBF3FC] border-blue-200 text-[#0A2540]",
    "bg-slate-100 border-slate-200 text-[#050B14]",
  ];

  const charCode = name.charCodeAt(0) || 0;
  const colorClass = colors[charCode % colors.length];

  return (
    <div
      className={cn(
        "rounded-full border flex items-center justify-center font-bold font-display select-none",
        colorClass,
        className
      )}
    >
      {initials}
    </div>
  );
}
