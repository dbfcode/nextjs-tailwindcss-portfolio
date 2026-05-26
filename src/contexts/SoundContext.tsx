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
  toggle: () => Promise<void>;
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
  const enabledRef = useRef(true);

  const enableSound = useCallback(async () => {
    const ok = await audioEngine.init();
    if (!ok) {
      setNeedsUnlock(true);
      setIsPlaying(false);
      return false;
    }
    audioEngine.setMuted(false);
    audioEngine.startAmbient();
    setIsPlaying(true);
    setNeedsUnlock(false);
    return true;
  }, []);

  const disableSound = useCallback(() => {
    audioEngine.setMuted(true);
    audioEngine.stopAmbient();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    enabledRef.current = enabled;
  }, [enabled]);

  useEffect(() => {
    void enableSound();

    const hintTimer = setTimeout(() => setShowHint(false), 5000);

    const unlockOnGesture = async (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-sound-control]")) return;

      await audioEngine.resume();
      if (enabledRef.current) {
        await enableSound();
      }
    };

    window.addEventListener("pointerdown", unlockOnGesture);
    window.addEventListener("keydown", unlockOnGesture);

    return () => {
      clearTimeout(hintTimer);
      window.removeEventListener("pointerdown", unlockOnGesture);
      window.removeEventListener("keydown", unlockOnGesture);
      audioEngine.dispose();
    };
  }, [enableSound]);

  const toggle = useCallback(async () => {
    setShowHint(false);
    const next = !enabledRef.current;

    if (next) {
      setEnabled(true);
      enabledRef.current = true;
      await enableSound();
    } else {
      setEnabled(false);
      enabledRef.current = false;
      disableSound();
    }
  }, [enableSound, disableSound]);

  const unlock = useCallback(async () => {
    setShowHint(false);
    setEnabled(true);
    enabledRef.current = true;
    await enableSound();
  }, [enableSound]);

  const playHover = useCallback(() => {
    if (enabledRef.current && audioEngine.isRunning) audioEngine.playHover();
  }, []);

  const playClick = useCallback(() => {
    if (enabledRef.current && audioEngine.isRunning) audioEngine.playClick();
  }, []);

  const playNavigate = useCallback(() => {
    if (enabledRef.current && audioEngine.isRunning) audioEngine.playNavigate();
  }, []);

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
