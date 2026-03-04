"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--accent)] font-mono mb-5"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--white)] mb-4"
          >
            {personalInfo.name}.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground-muted)] mb-6"
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[var(--foreground-muted)] text-lg max-w-xl mb-8 leading-relaxed"
          >
            I&apos;m a{" "}
            <span className="text-[var(--accent)]">Full Stack Developer</span>{" "}
            specializing in building exceptional digital experiences. Currently
            focused on creating accessible, user-friendly web applications.
          </motion.p>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="status-dot" />
            <span className="text-sm text-[var(--foreground-muted)]">
              Available for freelance projects
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-filled"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="../../Maryam_Resume.pdf"
              target="_blank"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-5"
          >
            {[
              {
                icon: Linkedin,
                url: personalInfo.social.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Mail,
                url: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
            <div className="h-px w-24 bg-[var(--foreground-muted)]" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            className="w-px h-12 bg-[var(--accent)]"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
