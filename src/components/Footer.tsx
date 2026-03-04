"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="container">
        {/* Social Links - Mobile only */}
        <div className="flex justify-center gap-6 mb-6 lg:hidden">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Credit */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#"
            className="inline-flex flex-col items-center gap-3 text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <div className="w-8 h-8 rounded border border-[var(--accent)] flex items-center justify-center">
              <span className="text-[var(--accent)] font-bold text-sm">M</span>
            </div>
            <p className="font-mono text-xs">
              Designed & Built by {personalInfo.name}
            </p>
            <p className="font-mono text-xs text-[var(--foreground-muted)]/50">
              &copy; {currentYear} All Rights Reserved
            </p>
          </a>
        </motion.div>
      </div>

      {/* Fixed Social Links - Desktop */}
      <div className="hidden lg:block fixed bottom-0 left-10 z-40">
        <div className="flex flex-col items-center gap-6">
          {[
            { icon: Linkedin, url: personalInfo.social.linkedin },
            { icon: Mail, url: `mailto:${personalInfo.email}` },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
          <div className="w-px h-24 bg-[var(--foreground-muted)]" />
        </div>
      </div>

      {/* Fixed Email - Desktop */}
      <div className="hidden lg:block fixed bottom-0 right-10 z-40">
        <div className="flex flex-col items-center gap-6">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-xs tracking-widest"
            style={{ writingMode: "vertical-rl" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {personalInfo.email}
          </motion.a>
          <div className="w-px h-24 bg-[var(--foreground-muted)]" />
        </div>
      </div>
    </footer>
  );
}
