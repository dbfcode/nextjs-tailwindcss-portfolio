"use client";

import { Play } from "lucide-react";

export function PlayButton({
  label = "Confira o projeto",
  onClick,
  className = "",
  icon = <Play size={18} />,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-md font-general-medium min-w-24 bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 ${className}`}
      aria-label={label}
    >
      {icon}
      {label}
    </button>
  );
}
