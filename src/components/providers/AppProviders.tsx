"use client";

import { SoundProvider } from "@/contexts/SoundContext";
import { SoundBoot } from "@/components/sound/SoundBoot";
import { SoundIndicator } from "@/components/sound/SoundIndicator";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider>
      <SoundBoot />
      <SoundIndicator />
      {children}
    </SoundProvider>
  );
}
