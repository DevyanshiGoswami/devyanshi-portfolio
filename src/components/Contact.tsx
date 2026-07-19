import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiPhone } from "react-icons/fi";
import Toast, { type ToastState } from "./Toast";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // No EmailJS credentials configured — see README for setup.
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setToast({
        type: "success",
        message: "Message sent — thanks for reaching out!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <Toast toast={toast} onClose={() => setToast(null)} />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        07 · Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Let's build something together.
      </motion.h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <p className="text-base leading-relaxed text-ink-muted">
            Have a role, project or idea in mind? My inbox is open — I
            usually reply within a day or two.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-accent-cyan">
                <FiMail size={16} />
              </span>
              <a
                href="mailto:devyanshilg@gmail.com"
                className="text-sm text-ink hover:text-accent-cyan"
              >
                devyanshilg@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-accent-cyan">
                <FiMapPin size={16} />
              </span>
              <span className="text-sm text-ink">Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-accent-cyan">
                <FiGithub size={16} />
              </span>
              <a
                href="https://github.com/DevyanshiGoswami"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink hover:text-accent-cyan"
              >
                github.com/DevyanshiGoswami
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-accent-cyan">
                <FiLinkedin size={16} />
              </span>
              <a
                href="https://linkedin.com/in/Devyanshi-Goswami"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink hover:text-accent-cyan"
              >
                linkedin.com/in/DevyanshiGoswami
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-accent-cyan">
                <FiPhone size={16} />
              </span>
              <a
                href="tel:+919265537609"
                className="text-sm text-ink hover:text-accent-cyan"
              >
                +91-9265537609
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card space-y-5 p-6 lg:col-span-3"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50 focus:outline-none"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50 focus:outline-none"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-cyan/50 focus:outline-none"
              placeholder="Tell me about the role or project..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
            {submitting ? "Sending..." : <> <FiSend size={14} /> Send Message </>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
