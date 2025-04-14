import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg"
    >
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight bg-clip-text text-transparent">
              Abhiram Paidimarri
            </h1>
            <p className="text-xl md:text-2xl text-light-muted dark:text-dark-secondary mb-8">
              Full-Stack Developer & AI Engineer
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
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-light-muted dark:text-dark-secondary leading-relaxed">
                Building innovative solutions with cutting-edge technologies.
                Specialized in web development, AI integration, and cloud
                solutions.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
