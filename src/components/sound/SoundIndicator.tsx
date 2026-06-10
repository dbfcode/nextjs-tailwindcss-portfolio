"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/contexts/SoundContext";
import { cn } from "@/lib/utils";

export function SoundIndicator() {
  const { enabled, isPlaying, needsUnlock, showHint, toggle, unlock } =
    useSound();

  const label = needsUnlock
    ? "Toque para ativar o som"
    : enabled && isPlaying
      ? "Som ambiente ligado"
      : enabled
        ? "Som ligado"
        : "Som desligado";

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (needsUnlock) await unlock();
    else await toggle();
  };

  return (
    <>
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none fixed left-1/2 top-20 z-40 -translate-x-1/2"
          >
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Experiência sonora ativa — ambiente suave desde o início
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        data-sound-control
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        onClick={handleClick}
        className={cn(
          "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-background/75 px-3 py-2 text-xs font-medium text-muted shadow-md backdrop-blur-md transition-colors hover:border-white/20",
          enabled && isPlaying && "border-cyan-500/15",
        )}
        aria-label={label}
        aria-pressed={enabled && isPlaying}
        title={label}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
          {enabled && isPlaying ? (
            <Volume2 size={15} className="text-cyan-400/80" />
          ) : (
            <VolumeX size={15} />
          )}
        </span>
        <span className="hidden max-w-[7rem] leading-tight sm:inline">{label}</span>
      </motion.button>
    </>
  );
}
