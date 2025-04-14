import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm border-b border-light-border dark:border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-primary cursor-pointer transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-light-card dark:bg-dark-card text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-light-card dark:bg-dark-card text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2 rounded-lg bg-light-card dark:bg-dark-card text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-primary cursor-pointer transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
