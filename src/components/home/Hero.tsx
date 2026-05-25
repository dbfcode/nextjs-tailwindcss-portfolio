"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center gap-12 pt-24 lg:flex-row lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
          Olá, eu sou
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">{profile.name.toUpperCase()}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Button href="/projects">Ver projetos</Button>
          <Button href={profile.resumePath} variant="secondary" external>
            <Download size={18} />
            Baixar currículo
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex-1"
      >
        <div className="relative mx-auto aspect-square w-64 max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-violet-500/20 sm:w-80 lg:w-96">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 320px, 384px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
        <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/20 blur-3xl" />
      </motion.div>

      <motion.a
        href="#projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground"
        aria-label="Rolar para projetos"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
