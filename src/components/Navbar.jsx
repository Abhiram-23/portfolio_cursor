import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-light-border dark:border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-accent-cyan"
                className="group cursor-pointer text-sm font-medium text-light-muted hover:text-light-primary dark:text-dark-secondary dark:hover:text-white transition-colors duration-300"
              >
                <span className="mr-1 font-fira-code text-xs text-accent-cyan">
                  0{i + 1}.
                </span>
                {link.label}
              </Link>
            ))}

            <a
              href="/resume_abhiram_paidimarri.pdf"
              download="Abhiram_Paidimarri_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Resume
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-light-muted transition-colors duration-300 hover:border-accent-cyan hover:text-accent-cyan dark:border-white/10 dark:text-dark-secondary dark:hover:border-accent-cyan/60 dark:hover:text-accent-cyan"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-light-muted dark:border-white/10 dark:text-dark-secondary"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-light-border text-light-muted dark:border-white/10 dark:text-dark-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-1 pt-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block cursor-pointer rounded-lg px-3 py-2 text-light-primary hover:bg-light-card dark:text-dark-secondary dark:hover:bg-white/5 dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2 font-fira-code text-xs text-accent-cyan">0{i + 1}.</span>
                {link.label}
              </Link>
            ))}
            <a
              href="/resume_abhiram_paidimarri.pdf"
              download="Abhiram_Paidimarri_Resume.pdf"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
