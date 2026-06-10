"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio";

export function AboutExperience() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold">
        Experiência <span className="gradient-text">profissional</span>
      </h2>
      <ol className="mt-8 space-y-8">
        {experience.map((job, index) => (
          <motion.li
            key={job.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="glass relative rounded-2xl p-6 pl-12"
          >
            <span className="absolute left-4 top-6 text-cyan-400">
              <Briefcase size={20} />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                {job.company}
              </h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-violet-300">
              {job.role}
            </p>
            <p className="mt-1 text-xs text-muted">{job.location}</p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
