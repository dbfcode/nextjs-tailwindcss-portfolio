"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { audioEngine } from "@/lib/audio-engine";

type SoundContextValue = {
  enabled: boolean;
  isPlaying: boolean;
  needsUnlock: boolean;
  showHint: boolean;
  toggle: () => void;
  unlock: () => Promise<void>;
  playHover: () => void;
  playClick: () => void;
  playNavigate: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsUnlock, setNeedsUnlock] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const startedRef = useRef(false);

  const startAudio = useCallback(async () => {
    const ok = await audioEngine.init();
    if (!ok) {
      setNeedsUnlock(true);
      return false;
    }
    audioEngine.setMuted(!enabled);
    if (enabled) {
      audioEngine.startAmbient();
      setIsPlaying(true);
      setNeedsUnlock(false);
    }
    return true;
  }, [enabled]);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    void (async () => {
      const ok = await startAudio();
      if (!ok) setNeedsUnlock(true);
    })();

    const hintTimer = setTimeout(() => setShowHint(false), 5000);

    const unlockOnGesture = async () => {
      await audioEngine.resume();
      const running = await startAudio();
      if (running) {
        setNeedsUnlock(false);
        window.removeEventListener("pointerdown", unlockOnGesture);
        window.removeEventListener("keydown", unlockOnGesture);
      }
    };

    window.addEventListener("pointerdown", unlockOnGesture, { once: false });
    window.addEventListener("keydown", unlockOnGesture, { once: false });

    return () => {
      clearTimeout(hintTimer);
      window.removeEventListener("pointerdown", unlockOnGesture);
      window.removeEventListener("keydown", unlockOnGesture);
      audioEngine.dispose();
    };
  }, [startAudio]);

  useEffect(() => {
    audioEngine.setMuted(!enabled);
    if (enabled && audioEngine.isRunning && !isPlaying) {
      audioEngine.startAmbient();
      setIsPlaying(true);
    }
    if (!enabled) {
      audioEngine.stopAmbient();
      setIsPlaying(false);
    }
  }, [enabled, isPlaying]);

  const unlock = useCallback(async () => {
    await audioEngine.resume();
    await startAudio();
  }, [startAudio]);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
    setShowHint(false);
  }, []);

  const playHover = useCallback(() => {
    if (enabled && audioEngine.isRunning) audioEngine.playHover();
  }, [enabled]);

  const playClick = useCallback(() => {
    if (enabled && audioEngine.isRunning) audioEngine.playClick();
  }, [enabled]);

  const playNavigate = useCallback(() => {
    if (enabled && audioEngine.isRunning) audioEngine.playNavigate();
  }, [enabled]);

  const value = useMemo(
    () => ({
      enabled,
      isPlaying,
      needsUnlock,
      showHint,
      toggle,
      unlock,
      playHover,
      playClick,
      playNavigate,
    }),
    [
      enabled,
      isPlaying,
      needsUnlock,
      showHint,
      toggle,
      unlock,
      playHover,
      playClick,
      playNavigate,
    ],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound deve ser usado dentro de SoundProvider");
  }
  return ctx;
}
