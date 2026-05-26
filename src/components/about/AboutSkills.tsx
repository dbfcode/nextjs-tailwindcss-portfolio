"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio";

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.02 }}
        >
          <span className="glass inline-block rounded-full px-3 py-1.5 text-sm text-muted">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export function AboutSkills() {
  return (
    <div className="mt-16 space-y-12">
      <section>
        <h2 className="text-2xl font-bold">
          Principais <span className="gradient-text">competências</span>
        </h2>
        <p className="mt-2 text-sm text-muted">
          Java Spring Boot Developer · APIs REST · microsserviços · mobile web ·
          cloud
        </p>
        <div className="mt-6">
          <TagList items={skills.competencies} />
        </div>
      </section>

      {skills.softSkills && skills.softSkills.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold">
            Soft skills <span className="gradient-text">& idiomas</span>
          </h2>
          <div className="mt-6">
            <TagList items={skills.softSkills} />
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold">
          O que <span className="gradient-text">entrego</span>
        </h2>
        <div className="mt-6">
          <TagList items={skills.deliverables} />
        </div>
      </section>

      {skills.certifications && skills.certifications.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold">
            Certificações <span className="gradient-text">& formações</span>
          </h2>
          <div className="mt-6">
            <TagList items={skills.certifications} />
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold">
          Atuação <span className="gradient-text">profissional</span>
        </h2>
        <div className="mt-6">
          <TagList items={skills.roles} />
        </div>
      </section>
    </div>
  );
}
