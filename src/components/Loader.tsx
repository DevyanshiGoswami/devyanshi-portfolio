import { motion } from "framer-motion";

/**
 * Boot-sequence style loader that echoes the terminal signature
 * used in the Hero section, so the very first frame of the site
 * already speaks in the portfolio's voice.
 */
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
      exit={{ opacity: 0 }}
    >
      <div className="font-mono text-sm text-accent-cyan sm:text-base">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-ink-muted">$</span> booting portfolio.exe
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-1 text-ink-muted"
        >
          loading modules: react, spring-boot, ml <span className="animate-blink">▍</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
