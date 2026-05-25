"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/portfolio";

export function AboutBio() {
  return (
    <div className="space-y-6">
      {about.map((item, index) => (
        <motion.p
          key={item.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-lg leading-relaxed text-muted"
        >
          {item.bio}
        </motion.p>
      ))}
    </div>
  );
}
