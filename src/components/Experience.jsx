import React from "react";
import { FaBriefcase, FaChartLine } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const experiences = [
  {
    company: "Microsoft (Contract)",
    title: "AI Engineer",
    period: "June 2025 — Present",
    description:
      "GenAI engineer on Project CAIN and Project ARIA, redesigning enterprise AI applications with multi-agent orchestration using Microsoft Agent Framework and Azure AI Foundry.",
    impact: [
      "Architected multi-agent system reducing response latency by 60%",
      "Processed 100K+ complex ICM queries with 95% accuracy",
      "Integrated 3+ enterprise systems with zero downtime",
    ],
    responsibilities: [
      "Redesigned the CAIN front-end with TypeScript and Fluent UI, creating an interface similar to Microsoft 365 Copilot.",
      "Architected ARIA, a multi-agent orchestration system automating complex ICM query analysis with hierarchical workflows.",
      "Designed hierarchical analysis, review, and validation agents enabling nested reasoning and cross-verification.",
      "Built Python/FastAPI backend APIs integrating multi-agent systems into the enterprise ecosystem.",
      "Fine-tuned prompts and implemented RAG to ground search results in authoritative data sources.",
    ],
    tech: [
      "TypeScript",
      "Fluent UI",
      "Python",
      "FastAPI",
      "Microsoft Agent Framework",
      "Azure AI Foundry",
      "RAG",
      "Multi-Agent Orchestration",
    ],
  },
  {
    company: "BayouHub",
    title: "GenAI Developer",
    period: "January 2025 — May 2025",
    description:
      "Built an intelligent scraping system enriching 30,000+ business listings for SEO — automating extraction of emails, websites, and descriptions with advanced deduplication.",
    impact: [
      "Enriched 30,000+ business listings improving SEO readiness",
      "Reduced redundant scraping by 70% with intelligent deduplication",
      "Processed 500K+ web records with 85% accuracy",
    ],
    responsibilities: [
      "Built a browser automation agent with custom prompts and multi-LLM support (OpenAI, Gemini, Groq) to autonomously navigate websites.",
      "Leveraged RAG with Pinecone and a Neo4j knowledge graph to reuse semantically similar business data across listings.",
      "Integrated LangChain to manage prompt templates and ensure consistent data formatting across records.",
      "Enabled real-time collection with error handling and checkpoints for resumable scraping workflows.",
    ],
    tech: [
      "Browser Automation",
      "OpenAI",
      "Gemini",
      "Groq",
      "LangChain",
      "Pinecone",
      "Neo4j",
    ],
  },
  {
    company: "University of Louisiana at Lafayette",
    title: "AI Engineer",
    period: "September 2023 — December 2024",
    description:
      "Developed an AI-powered summarization pipeline using Whisper and GPT-3.5 integrated with Moodle LMS.",
    impact: [
      "Reduced content review time by 50% (200+ hours saved annually)",
      "Increased student engagement by 30% with AI-powered learning tools",
      "Served 5,000+ students across multiple courses",
    ],
    responsibilities: [
      "Built a summarization pipeline with OpenAI Whisper and GPT-3.5 transcribing lectures into time-stamped text and summaries.",
      "Implemented LangChain pipelines generating contextual quizzes and key learning outcomes.",
      "Integrated the solution into Moodle LMS with real-time access for students and faculty.",
      "Designed a filter-based React UI for navigating content by course, topic, and date.",
      "Enabled educators to export auto-generated questions and summaries for test creation.",
    ],
    tech: ["OpenAI Whisper", "GPT-3.5", "React", "LangChain", "Moodle API", "PostgreSQL"],
  },
  {
    company: "Valuebound",
    title: "Software Engineer",
    period: "September 2021 — July 2023",
    description:
      "Led integration of third-party systems using microservices architecture with Kafka, RabbitMQ, and Redis caching.",
    impact: [
      "Reduced API response time by 50% through Redis caching",
      "Processed 10M+ call records daily with 99.9% uptime",
      "Achieved 95% test coverage with CI/CD automation",
    ],
    responsibilities: [
      "Led integration of third-party dialers and CRMs into enterprise platforms using OAuth 2.0.",
      "Designed microservices with Kafka and RabbitMQ for real-time ingestion of high-volume call data.",
      "Built secure REST APIs with Node.js and Express, protected by JWT authentication.",
      "Implemented Redis caching, reducing database load by 50%.",
      "Developed reusable React UI components improving consistency across the ERP interface.",
    ],
    tech: ["React", "Node.js", "Express", "Kafka", "RabbitMQ", "Redis", "OAuth 2.0", "JWT", "GitLab CI/CD"],
  },
  {
    company: "ParamLogic Pvt Ltd",
    title: "Software Trainee",
    period: "May 2020 — August 2021",
    description:
      "Built serverless automation tooling with Python and AWS Lambda — web scraping, Google Sheets integration, and scheduled cloud deployments.",
    impact: [
      "Improved data entry efficiency by 100% through automation",
      "Processed 50K+ records monthly with 99.9% accuracy",
      "Reduced manual workload by 40 hours per week",
    ],
    responsibilities: [
      "Built a serverless automation tool with Python and AWS Lambda for scheduled data extraction.",
      "Scraped target websites with BeautifulSoup and organized results into structured datasets.",
      "Integrated Google Sheets API for real-time updates, replacing manual entry.",
      "Scheduled executions with AWS CloudWatch Events and stored dependencies in S3.",
    ],
    tech: ["Python", "AWS Lambda", "BeautifulSoup", "Google Sheets API", "AWS S3"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-14 text-center">
            <p className="section-kicker mb-2">03. experience</p>
            <h2 className="section-title">Where I've Worked</h2>
          </div>
        </ScrollAnimation>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-pink md:left-1/2" />

          {experiences.map((exp, index) => (
            <ScrollAnimation key={index}>
              <div
                className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-1 left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent-cyan/40 bg-light-bg dark:bg-dark-bg ${
                    index % 2 === 0 ? "md:left-full" : "md:left-0"
                  }`}
                >
                  <FaBriefcase className="h-3.5 w-3.5 text-accent-cyan" />
                </div>

                <div className="card card-hover">
                  <p className="font-fira-code text-xs text-accent-cyan">{exp.period}</p>
                  <h3 className="mt-2 text-xl font-bold text-light-primary dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="mb-3 font-medium text-light-secondary dark:text-accent-violet">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-light-muted dark:text-dark-secondary">
                    {exp.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 p-3.5">
                    <h4 className="mb-2 flex items-center gap-2 font-fira-code text-xs font-semibold text-accent-cyan">
                      <FaChartLine /> key impact
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.impact.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-secondary"
                        >
                          <span className="mt-0.5 text-accent-cyan">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <details className="group/details mb-4">
                    <summary className="cursor-pointer select-none font-fira-code text-xs text-light-muted transition-colors hover:text-accent-cyan dark:text-dark-secondary">
                      <span className="group-open/details:hidden">+ show details</span>
                      <span className="hidden group-open/details:inline">− hide details</span>
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-secondary"
                        >
                          <span className="mt-0.5 text-accent-violet">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span key={idx} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
