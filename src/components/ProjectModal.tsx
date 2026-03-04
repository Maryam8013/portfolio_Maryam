"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--background)]/95 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 z-50 overflow-hidden"
          >
            <div className="h-full bg-[var(--background-light)] rounded-lg border border-[var(--border)] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative p-6 border-b border-[var(--border)] flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[var(--accent)] font-mono text-sm mb-2">
                      {project.category}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--white)]">
                      {project.title}
                    </h2>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:bg-[var(--background)] transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="max-w-3xl">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="mb-10">
                    <h3 className="text-[var(--white)] font-semibold mb-4 flex items-center gap-2">
                      <span className="text-[var(--accent)]">▹</span>
                      Overview
                    </h3>
                    <p className="text-[var(--foreground-muted)] leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-10">
                    <h3 className="text-[var(--white)] font-semibold mb-4 flex items-center gap-2">
                      <span className="text-[var(--accent)]">▹</span>
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 text-[var(--foreground-muted)] text-sm"
                        >
                          <span className="text-[var(--accent)] mt-1">▹</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  {project.liveUrl && (
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border)]">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-filled"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
