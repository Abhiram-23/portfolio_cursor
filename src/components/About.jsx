import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import pic from "../assets/profile.jpg";
import { FaLinkedin, FaEnvelope, FaTerminal, FaTrophy } from "react-icons/fa";

const focus = [
  "GenAI & Agentic Frameworks — Microsoft Agent Framework, LangChain, LangGraph",
  "LLMs — GPT-4/3.5, Claude, Gemini, Groq + Retrieval-Augmented Generation",
  "Vector & Graph Databases — Pinecone, Qdrant, FAISS, Neo4j",
  "Full-stack — React, TypeScript, Node.js, FastAPI, AWS, Azure",
];

const achievements = [
  "Architected multi-agent orchestration systems (ARIA) at Microsoft",
  "50% reduction in content review time via AI pipelines",
  "Enhanced 30,000+ business listings with intelligent scraping",
  "30% increase in student engagement with AI-powered learning tools",
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <p className="section-kicker mb-2">01. about</p>
            <h2 className="section-title">About Me</h2>
          </div>
        </ScrollAnimation>

        <div className="mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="grid items-center gap-12 lg:grid-cols-5">
              {/* Profile picture */}
              <div className="order-first flex justify-center lg:order-last lg:col-span-2">
                <div className="group relative">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-pink opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-90" />
                  <img
                    src={pic}
                    alt="Abhiram Paidimarri"
                    className="relative h-64 w-64 rounded-3xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] md:h-80 md:w-80"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <a
                    href="mailto:abhirampaidimarri23@gmail.com"
                    className="group flex items-center gap-2 text-light-muted transition-colors hover:text-accent-cyan dark:text-dark-secondary"
                  >
                    <FaEnvelope className="transition-transform group-hover:scale-110" />
                    abhirampaidimarri23@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhirampaidimarri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-light-muted transition-colors hover:text-accent-cyan dark:text-dark-secondary"
                  >
                    <FaLinkedin className="transition-transform group-hover:scale-110" />
                    LinkedIn
                  </a>
                </div>

                <p className="text-lg leading-relaxed text-light-muted dark:text-dark-secondary">
                  Software Engineer with 5+ years of experience delivering
                  full-stack solutions and advanced GenAI/ML systems across
                  enterprise environments. Specialized in designing and
                  deploying multi-agent architectures, RAG systems, and
                  autonomous workflows using Microsoft Agent Framework,
                  LangChain, and Azure AI Foundry.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="card card-hover">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-light-primary dark:text-white">
                      <FaTerminal className="text-accent-cyan" />
                      Technical Focus
                    </h3>
                    <ul className="space-y-3">
                      {focus.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-light-muted dark:text-dark-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card card-hover">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-light-primary dark:text-white">
                      <FaTrophy className="text-accent-violet" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-light-muted dark:text-dark-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
