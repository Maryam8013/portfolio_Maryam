"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title justify-center"
          style={{ maxWidth: "none" }}
        >
          <span className="section-number">04.</span>
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto text-center">
          {/* Main message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--foreground-muted)] text-lg mb-8 leading-relaxed"
          >
            I&apos;m currently looking for new opportunities. Whether you have a question,
            want to work together, or just want to say hi, feel free to reach out and
            I&apos;ll try my best to get back to you!
          </motion.p>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="card p-4 flex flex-col items-center gap-2 group"
            >
              <Mail size={24} className="text-[var(--accent)]" />
              <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-colors">
                Email
              </span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="card p-4 flex flex-col items-center gap-2 group"
            >
              <Phone size={24} className="text-[var(--accent)]" />
              <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--accent)] transition-colors">
                Phone
              </span>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary inline-flex text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              Say Hello
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
