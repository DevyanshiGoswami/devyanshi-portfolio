import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import { skillCategories } from "../data/skills";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  tool: FiTool,
  cpu: FiCpu,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        02 · Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        A toolkit built for full-stack delivery.
      </motion.h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, ci) => {
          const Icon = ICONS[category.icon] ?? FiCode;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
              className="glass-card p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-indigo/25 to-accent-violet/25 text-accent-violet">
                  <Icon size={16} />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="font-mono text-xs text-ink-muted">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-accent-cyan">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
