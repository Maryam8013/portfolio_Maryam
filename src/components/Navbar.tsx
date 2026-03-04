"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about", number: "01" },
  { name: "Projects", href: "#projects", number: "02" },
  { name: "Experience", href: "#experience", number: "03" },
  { name: "Contact", href: "#contact", number: "04" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[var(--background)]/90 backdrop-blur-md shadow-lg shadow-[var(--background)]/50"
          : "py-6"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg border-2 border-[var(--accent)] flex items-center justify-center bg-transparent group-hover:bg-[var(--accent)]/10 transition-colors">
              <span className="text-[var(--accent)] font-bold text-xl">M</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <a
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="text-[var(--accent)] font-mono text-xs">
                    {link.number}.
                  </span>
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="../../Maryam_Resume.pdf"
                target="_blank"
                className="btn-primary text-sm py-2 px-4"
              >
                Resume
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[var(--accent)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[var(--background-light)] shadow-2xl flex flex-col items-center justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="flex flex-col items-center gap-1 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-[var(--accent)] font-mono text-sm">
                        {link.number}.
                      </span>
                      <span className="text-lg">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <a href="/resume.pdf" target="_blank" className="btn-primary">
                    Resume
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
