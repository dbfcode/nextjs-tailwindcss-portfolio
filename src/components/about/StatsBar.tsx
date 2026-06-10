"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/portfolio";

export function StatsBar() {
  return (
    <div className="glass mt-16 grid grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="text-center"
        >
          <p className="text-3xl font-bold gradient-text sm:text-4xl">
            {stat.value}
            {stat.suffix}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
