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
    : enabled
      ? isPlaying
        ? "Som ambiente ligado"
        : "Som ligado"
      : "Som desligado";

  return (
    <>
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none fixed left-1/2 top-20 z-[60] -translate-x-1/2"
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => {
          if (needsUnlock) void unlock();
          else toggle();
        }}
        className={cn(
          "fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full glass px-3.5 py-2.5 text-xs font-medium shadow-lg transition-colors",
          enabled && isPlaying
            ? "text-cyan-300/90 border-cyan-500/20"
            : "text-muted",
        )}
        aria-label={label}
        title={label}
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
          {enabled && isPlaying ? (
            <>
              <Volume2 size={16} className="relative z-10" />
              <span className="sound-bar sound-bar-1 absolute bottom-2 left-1.5 h-2 w-0.5 rounded-full bg-cyan-400/80" />
              <span className="sound-bar sound-bar-2 absolute bottom-2 left-2.5 h-3 w-0.5 rounded-full bg-violet-400/80" />
              <span className="sound-bar sound-bar-3 absolute bottom-2 left-3.5 h-1.5 w-0.5 rounded-full bg-cyan-400/80" />
            </>
          ) : (
            <VolumeX size={16} />
          )}
        </span>
        <span className="hidden sm:inline max-w-[9rem] leading-tight text-left">
          {label}
        </span>
      </motion.button>
    </>
  );
}
