"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { projects, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Featured projects (first 2)
  const featuredProjects = projects.slice(0, 3);
  // Other projects
  const otherProjects = projects.slice(3);

  return (
    <>
      <section id="projects" className="py-24 lg:py-32" ref={ref}>
        <div className="container">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            <span className="section-number">02.</span>
            Some Things I&apos;ve Built
          </motion.h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  } relative group cursor-pointer`}
                  onClick={() => openProject(project)}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="aspect-video bg-[var(--background-light)] relative">
                      <div className="absolute inset-0 bg-[var(--accent)]/10 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[120px] font-bold text-[var(--accent)]/10 group-hover:text-[var(--accent)]/20 transition-colors">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1
                      ? "md:col-start-1 md:row-start-1"
                      : "md:col-start-6"
                  } relative z-10`}
                >
                  <p className="text-[var(--accent)] font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3
                    className="text-2xl font-bold text-[var(--white)] mb-4 hover:text-[var(--accent)] transition-colors cursor-pointer"
                    onClick={() => openProject(project)}
                  >
                    {project.title}
                  </h3>
                  <div className="bg-[var(--background-light)] p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 text-sm font-mono text-[var(--foreground-muted)] mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <li key={i} className="text-xs">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.liveUrl && (
                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Header */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold text-[var(--white)] text-center mb-12"
          >
            Other Noteworthy Projects
          </motion.h3>

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card p-6 cursor-pointer group flex flex-col h-full"
                onClick={() => openProject(project)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <Folder
                    size={40}
                    className="text-[var(--accent)]"
                    strokeWidth={1}
                  />
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-[var(--white)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-[var(--foreground-muted)] mb-6 line-clamp-3 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[var(--foreground-muted)] mt-auto">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProject}
      />
    </>
  );
}
