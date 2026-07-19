import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiStar } from "react-icons/fi";
import { achievements } from "../data/achievements";
import type { Achievement } from "../types";

const CATEGORY_META: Record<
  Achievement["category"],
  { icon: React.ComponentType<{ size?: number }>; label: string }
> = {
  competition: { icon: FiAward, label: "Competition" },
  certification: { icon: FiCheckCircle, label: "Certification" },
  academic: { icon: FiStar, label: "Academic" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        06 · Achievements
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Recognition along the way.
      </motion.h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const meta = CATEGORY_META[item.category];
          const Icon = meta.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5"
              onClick={() => window.open(item.link, "_blank")}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-amber/20 to-accent-violet/20 text-accent-amber">
                  <Icon size={16} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  {meta.label}
                </span>
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent-cyan">
                {item.issuer} · {item.date}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
