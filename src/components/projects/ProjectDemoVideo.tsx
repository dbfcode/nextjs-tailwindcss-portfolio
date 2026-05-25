"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import type { ProjectVideo } from "@/types/portfolio";
import { cn } from "@/lib/utils";

type ProjectDemoVideoProps = {
  video: ProjectVideo;
};

export function ProjectDemoVideo({ video }: ProjectDemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="mb-14">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
            Demo em vídeo
          </p>
          <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{video.title}</h2>
        </div>
        <span className="glass rounded-full px-3 py-1 text-xs text-muted">
          Gravação real da aplicação rodando
        </span>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-500/10">
        <video
          ref={ref}
          className="aspect-video w-full bg-black object-cover"
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {video.webm && <source src={video.webm} type="video/webm" />}
          <source src={video.src} type="video/mp4" />
        </video>

        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity"
            aria-label="Reproduzir vídeo"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg">
              <Play size={28} className="ml-1 text-white" fill="white" />
            </span>
          </button>
        )}

        <div
          className={cn(
            "pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
            playing
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-white/10 text-muted",
          )}
        >
          <span
            className={cn(
              "h-2 w-2 rounded-full",
              playing ? "animate-pulse bg-emerald-400" : "bg-muted",
            )}
          />
          {playing ? "Rodando" : "Pausado"}
        </div>
      </div>
    </section>
  );
}
