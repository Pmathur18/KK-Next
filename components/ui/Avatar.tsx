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
    "bg-pastel-sky border-blue-200/50 text-blue-700",
    "bg-pastel-peach border-orange-200/50 text-orange-700",
    "bg-pastel-mint border-green-200/50 text-green-700",
    "bg-pastel-lilac border-purple-200/50 text-purple-700",
    "bg-pastel-yellow border-yellow-200/50 text-yellow-700",
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
