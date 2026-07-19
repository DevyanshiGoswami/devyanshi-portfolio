import { motion } from "framer-motion";
import { experienceItems } from "../data/experience";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        04 · Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Where I've put the skills to work.
      </motion.h2>

      <div className="mt-10 max-w-2xl">
        <Timeline items={experienceItems} />
      </div>
    </section>
  );
}
