import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import pic from "../assets/profile.jpg";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-10 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="flex justify-center mb-12">
            <h2 className="section-title">About Me</h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="card">
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
                {/* Profile Picture Section */}
                <div className="md:w-2/5 flex justify-center">
                  <div className="relative group">
                    {/* Animated Background Ring */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>

                    {/* Profile Picture Container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={pic}
                        alt="Abhiram Paidimarri"
                        className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-card shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5">
                  <div className="text-center md:text-left mb-8">
                    <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-4">
                      Abhiram Paidimarri
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-light-muted dark:text-dark-secondary">
                      <a
                        href="mailto:abhirampaidimarri23@gmail.com"
                        className="flex items-center gap-2 hover:text-light-secondary dark:hover:text-dark-primary transition-colors group"
                      >
                        <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                        <span>abhirampaidimarri23@gmail.com</span>
                      </a>
                      <span className="hidden md:inline text-light-border dark:text-dark-border">
                        |
                      </span>

                      <a
                        href="https://www.linkedin.com/in/abhirampaidimarri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-light-secondary dark:hover:text-dark-primary transition-colors group"
                      >
                        <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6 text-light-muted dark:text-dark-secondary leading-relaxed">
                    <p className="text-lg">
                      Software Engineer with 5+ years of experience delivering
                      full-stack solutions and advanced GenAI/ML systems across
                      enterprise environments. Specialized in designing and
                      deploying multi-agent architectures, RAG systems, and
                      autonomous workflows using Microsoft Agent Framework,
                      LangChain, and Azure AI Foundry.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-light-bg dark:bg-dark-bg rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-light-primary dark:text-dark-primary mb-3">
                          Technical Focus
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            GenAI & Agentic Frameworks (Microsoft Agent
                            Framework, LangChain, LangGraph)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            LLMs: GPT-4/3.5, Claude, Gemini, Groq,
                            Retrieval-Augmented Generation (RAG)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            Vector Databases (Pinecone, Qdrant, FAISS) & Graph
                            Databases (Neo4j)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            Full-stack: React, TypeScript, Node.js, FastAPI,
                            AWS, Azure
                          </li>
                        </ul>
                      </div>

                      <div className="bg-light-bg dark:bg-dark-bg rounded-lg p-4">
                        <h3 className="text-xl font-semibold text-light-primary dark:text-dark-primary mb-3">
                          Key Achievements
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            Architected multi-agent orchestration systems (ARIA)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            50% reduction in content review time via AI
                            pipelines
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            Enhanced 30,000+ business listings with intelligent
                            scraping
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-light-highlight dark:bg-dark-highlight rounded-full"></span>
                            30% increase in student engagement with AI-powered
                            learning tools
                          </li>
                        </ul>
                      </div>
                    </div>
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
