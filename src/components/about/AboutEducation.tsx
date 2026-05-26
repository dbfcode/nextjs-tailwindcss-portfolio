"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio";

export function AboutEducation() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold">
        Formação <span className="gradient-text">acadêmica</span>
      </h2>
      <ul className="mt-8 space-y-4">
        {education.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass flex gap-4 rounded-xl p-4"
          >
            <GraduationCap className="mt-0.5 shrink-0 text-cyan-400" size={22} />
            <div>
              <p className="font-medium">{item.course}</p>
              <p className="text-sm text-violet-300">{item.institution}</p>
              <p className="mt-1 text-xs text-muted">{item.period}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
