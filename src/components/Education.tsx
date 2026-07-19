import { motion } from "framer-motion";
import { educationItems } from "../data/experience";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        05 · Education
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Academic foundation.
      </motion.h2>

      <div className="mt-10 max-w-2xl">
        <Timeline items={educationItems} />
      </div>
    </section>
  );
}
