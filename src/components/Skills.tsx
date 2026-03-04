"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="relative bg-[var(--background-secondary)]" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] font-medium">What I work with</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Skills & Technologies</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] card-hover"
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-[var(--foreground-muted)]"
        >
          <p className="text-sm">
            ...and always learning more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
