import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-secondary/5 to-transparent dark:from-dark-primary/5 dark:to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight bg-clip-text text-transparent">
              Abhiram Paidimarri
            </h1>
            <p className="text-xl md:text-2xl text-light-muted dark:text-dark-secondary mb-4">
              AI Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-light-muted dark:text-dark-secondary mb-8 font-semibold">
              5+ Years | GenAI Specialist | Enterprise Solutions
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/Abhiram-23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-highlight transition-colors duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhirampaidimarri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-highlight transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://leetcode.com/u/abhiram_paidimarri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-primary dark:text-dark-primary hover:text-light-secondary dark:hover:text-dark-highlight transition-colors duration-300 transform hover:scale-110"
              >
                <SiLeetcode className="w-8 h-8" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/resume_abhiram_paidimarri.pdf"
                download="Abhiram_Paidimarri_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 bg-light-secondary dark:bg-dark-primary text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload className="w-5 h-5" />
                Download Resume
              </a>
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-light-secondary dark:border-dark-primary text-light-secondary dark:text-dark-primary font-semibold rounded-lg hover:bg-light-secondary/10 dark:hover:bg-dark-primary/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                View My Work
                <FaArrowDown className="w-5 h-5" />
              </ScrollLink>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-light-muted dark:text-dark-secondary leading-relaxed">
                Designing intelligent multi-agent systems and GenAI solutions
                using autonomous workflows, RAG, and agentic frameworks. Expert
                in LLM orchestration, vector search, and enterprise AI
                deployments.
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex justify-center animate-bounce">
              <FaArrowDown className="w-6 h-6 text-light-secondary dark:text-dark-highlight" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
