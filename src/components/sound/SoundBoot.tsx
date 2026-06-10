"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSound } from "@/contexts/SoundContext";

export function SoundBoot() {
  const pathname = usePathname();
  const { playNavigate } = useSound();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    playNavigate();
  }, [pathname, playNavigate]);

  return null;
}
