// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils";
import React from "react";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300", className)}>
      {children}
    </span>
  );
}