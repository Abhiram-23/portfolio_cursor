import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const ROLES = [
  "AI Engineer",
  "Full-Stack Developer",
  "GenAI & Multi-Agent Specialist",
  "Cloud Solutions Builder",
];

const useTypewriter = (words, typeSpeed = 65, deleteSpeed = 35, pause = 1700) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? word.substring(0, text.length - 1)
              : word.substring(0, text.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 animate-float rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 animate-float-slow rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 animate-float rounded-full bg-pink-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 animate-fade-up font-fira-code text-sm text-accent-cyan">
            $ whoami
          </p>

          <h1
            className="animate-fade-up text-5xl font-bold tracking-tight text-light-primary dark:text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Abhiram
            <br />
            <span className="gradient-text">Paidimarri</span>
          </h1>

          <p
            className="mt-6 h-8 animate-fade-up font-fira-code text-lg text-light-primary dark:text-slate-200 sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            {role}
            <span className="ml-0.5 animate-blink text-accent-cyan">▍</span>
          </p>

          <p
            className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-light-muted dark:text-dark-secondary"
            style={{ animationDelay: "300ms" }}
          >
            5+ years building intelligent multi-agent systems and GenAI
            solutions — autonomous workflows, RAG pipelines, LLM orchestration,
            and enterprise AI deployments at scale.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="/resume_abhiram_paidimarri.pdf"
              download="Abhiram_Paidimarri_Resume.pdf"
              className="btn-primary"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn-ghost"
            >
              View My Work
              <FaArrowDown className="w-4 h-4" />
            </ScrollLink>
          </div>

          {/* Socials */}
          <div
            className="mt-14 flex animate-fade-up items-center gap-5"
            style={{ animationDelay: "500ms" }}
          >
            <span className="font-fira-code text-xs text-light-muted dark:text-slate-500">
              find me on
            </span>
            <span className="h-px w-10 bg-light-border dark:bg-white/15" />
            <a
              href="https://github.com/Abhiram-23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-light-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-cyan dark:text-dark-secondary"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhirampaidimarri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-light-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-cyan dark:text-dark-secondary"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/abhiram_paidimarri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-light-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-cyan dark:text-dark-secondary"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-60px] left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
          <FaArrowDown className="h-5 w-5 text-accent-cyan/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
