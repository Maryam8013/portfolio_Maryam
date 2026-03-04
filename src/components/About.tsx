"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutMe, skills, awards } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-number">01.</span>
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              {/* Profile Image Placeholder */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                {/* Border frame */}
                <div className="absolute inset-0 border-2 border-[var(--accent)] rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                {/* Image container */}
                <div className="relative w-full h-full bg-[var(--background-light)] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--accent)]/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-[var(--accent)]">
                    {aboutMe.summary.charAt(0)}M
                  </div>
                </div>
              </div>

              {/* Name & Socials below image */}
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-[var(--white)] mb-2">
                  Maryam Irfan
                </h3>
                <p className="text-[var(--accent)] font-mono text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-[var(--white)] text-lg font-semibold mb-4">
                Get to know me
              </h3>
              <div className="space-y-4 text-[var(--foreground-muted)]">
                <p>{aboutMe.summary}</p>
                <p>
                  I enjoy creating things that live on the internet, whether that be websites,
                  applications, or anything in between. My goal is to always build products that
                  provide <span className="text-[var(--accent)]">pixel-perfect</span>,{" "}
                  <span className="text-[var(--accent)]">performant</span> experiences.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mb-8">
              <h3 className="text-[var(--white)] text-lg font-semibold mb-4">
                Technologies I work with
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + groupIndex * 0.1 }}
                    className="card p-4"
                  >
                    <h4 className="text-[var(--accent)] font-mono text-xs mb-3 uppercase tracking-wider">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-1.5">
                      {skillGroup.items.slice(0, 4).map((skill, index) => (
                        <li
                          key={index}
                          className="text-sm text-[var(--foreground-muted)] flex items-center gap-2"
                        >
                          <span className="text-[var(--accent)]">▹</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-[var(--white)] text-lg font-semibold mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[var(--background-light)]/50 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors"
                  >
                    <span className="text-[var(--accent)] mt-0.5">★</span>
                    <div>
                      <h4 className="text-[var(--white)] text-sm font-medium">
                        {award.title}
                      </h4>
                      <p className="text-xs text-[var(--foreground-muted)]">
                        {award.description}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--accent)] font-mono ml-auto">
                      {award.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
