"use client";

import { ChevronDown } from "lucide-react";

export function ScrollDownIndicator({ className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <ChevronDown
        size={40}
        className="text-indigo-500 animate-bounce drop-shadow-md"
      />
      <span className="mt-2 text-sm text-indigo-500 animate-pulse">
        Role para baixo
      </span>
    </div>
  );
}
