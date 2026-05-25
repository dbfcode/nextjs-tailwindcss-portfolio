"use client";

import { useSound } from "@/contexts/SoundContext";

export function useSoundInteraction() {
  const { playHover, playClick } = useSound();

  return {
    soundProps: {
      onMouseEnter: playHover,
      onFocus: playHover,
      onClick: () => playClick(),
    },
    playHover,
    playClick,
  };
}
