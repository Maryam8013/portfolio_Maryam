"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences, education, certifications } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const allExperiences = [...experiences];

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <span className="section-number">03.</span>
          Where I&apos;ve Worked
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience - Tab style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex lg:flex-row flex-col">
              {/* Tab list */}
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-[var(--border)]">
                {allExperiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all relative
                      ${
                        activeTab === index
                          ? "text-[var(--accent)] bg-[var(--background-light)]"
                          : "text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:bg-[var(--background-light)]/50"
                      }`}
                  >
                    {exp.company}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-0.5 bottom-0 left-0 right-0 lg:right-auto h-0.5 lg:h-auto bg-[var(--accent)]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="flex-1 p-6 min-h-[300px]">
                {allExperiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: activeTab === index ? 1 : 0,
                      y: activeTab === index ? 0 : 10,
                    }}
                    className={activeTab === index ? "block" : "hidden"}
                  >
                    <h3 className="text-xl text-[var(--white)] font-medium mb-1">
                      {exp.role}{" "}
                      <span className="text-[var(--accent)]">@ {exp.company}</span>
                    </h3>
                    <p className="text-sm font-mono text-[var(--foreground-muted)] mb-1">
                      {exp.period}
                    </p>
                    <p className="text-sm text-[var(--foreground-muted)] mb-4">
                      {exp.location}
                    </p>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[var(--foreground-muted)] text-sm"
                        >
                          <span className="text-[var(--accent)] mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--white)] mb-4 flex items-center gap-2">
                <span className="text-[var(--accent)]">▹</span>
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card p-5 mb-4"
                >
                  <h4 className="text-[var(--white)] font-medium mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-[var(--accent)] text-sm font-mono mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--foreground-muted)] mb-3">
                    {edu.period}
                  </p>
                  {edu.achievements && (
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span key={i} className="tag text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--white)] mb-4 flex items-center gap-2">
                <span className="text-[var(--accent)]">▹</span>
                Certifications
              </h3>
              <div className="card p-5">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-[var(--foreground-muted)]"
                    >
                      <span className="text-[var(--accent)]">▹</span>
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
