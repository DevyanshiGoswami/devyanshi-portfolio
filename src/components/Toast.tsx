import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

export interface ToastState {
  type: "success" | "error";
  message: string;
}

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -16, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -16, x: "-50%" }}
          className={`glass-card fixed left-1/2 top-6 z-[80] flex items-center gap-3 px-5 py-3 ${
            toast.type === "success"
              ? "border-accent-cyan/40"
              : "border-red-400/40"
          }`}
        >
          {toast.type === "success" ? (
            <FiCheckCircle className="text-accent-cyan" />
          ) : (
            <FiAlertCircle className="text-red-400" />
          )}
          <span className="text-sm text-ink">{toast.message}</span>
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="text-ink-faint hover:text-ink"
          >
            <FiX size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
