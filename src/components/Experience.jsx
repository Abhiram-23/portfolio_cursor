import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      company: "Microsoft (Contract)",
      title: "AI Engineer",
      period: "June 2025 - Present",
      description:
        "Advanced GenAI engineer working on Project CAIN and Project ARIA, redesigning enterprise AI applications with multi-agent orchestration systems. Architected autonomous workflows using Microsoft Agent Framework and Azure AI Foundry.",
      impact: [
        "Architected multi-agent system reducing response latency by 60%",
        "Processed 100K+ complex ICM queries with 95% accuracy",
        "Integrated 3+ enterprise systems with zero downtime",
      ],
      responsibilities: [
        "Redesigned and implemented the front-end of the CAIN application using TypeScript and Fluent UI, creating an intuitive interface similar to Microsoft 365 Copilot.",
        "Architected ARIA, a multi-agent orchestration system using Microsoft Agent Framework to automate complex ICM (Incident and Case Management) query analysis with hierarchical workflows.",
        "Designed hierarchical workflow of analysis agents, review agents, and validation agents enabling nested reasoning and cross-verification of outputs.",
        "Developed Python-based backend logic and APIs on FastAPI to integrate multi-agent systems into enterprise ecosystem enabling reliable multi-step reasoning.",
        "Fine-tuned AI prompts and implemented Retrieval-Augmented Generation (RAG) framework to enhance accuracy and relevance of search results grounded in authoritative data sources.",
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
      period: "January 2025 - May 2025",
      description:
        "Developed an intelligent scraping system to enhance 30,000+ business listings for SEO purposes by automating the extraction of official emails, websites, and detailed descriptions. Implemented advanced deduplication and city/state-based filtering to avoid redundant data.",
      impact: [
        "Enriched 30,000+ business listings improving SEO readiness",
        "Reduced redundant scraping by 70% with intelligent deduplication",
        "Processed 500K+ web records with 85% accuracy",
      ],
      responsibilities: [
        "Built a browser automation agent using custom prompts and multi-LLM support (OpenAI, Gemini, Groq) to autonomously navigate websites and collect data.",
        "Leveraged Retrieval-Augmented Generation (RAG) with Pinecone vector database and Neo4j knowledge graph to identify and reuse semantically similar business data, reducing redundant scraping across listings (e.g., Subway in multiple cities).",
        "Integrated LangChain to manage prompt templates and structure agent responses, ensuring consistent data formatting across records.",
        "Enabled real-time data collection with error handling and progress checkpoints, supporting resumable scraping workflows.",
        "Output structured results in enriched CSVs, aiding in SEO optimization and content completeness.",
      ],
      tech: [
        "Browser Automation",
        "OpenAI",
        "Gemini",
        "Groq",
        "LangChain",
        "Pinecone",
        "Neo4j",
        "CSV Processing",
      ],
    },
    {
      company: "University of Louisiana at Lafayette",
      title: "AI Engineer",
      period: "September 2023 - December 2024",
      description:
        "Developed an AI-powered summarization pipeline using Whisper and GPT-3.5 integrated with Moodle LMS. Achieved 50% reduction in content review time and 30% increase in student engagement.",
      impact: [
        "Reduced content review time by 50% (200+ hours saved annually)",
        "Increased student engagement by 30% with AI-powered learning tools",
        "Served 5,000+ students across multiple courses",
      ],
      responsibilities: [
        "Developed an AI-powered summarization pipeline using OpenAI Whisper and GPT-3.5 to transcribe lecture recordings into accurate, time-stamped text and concise summaries.",
        "Implemented LangChain pipelines to generate contextual multiple-choice quizzes and highlight key learning outcomes, improving academic engagement.",
        "Integrated the solution into the Moodle LMS, enabling real-time access for students and faculty.",
        "Designed a filter-based UI using React to allow users to navigate content by course, topic, and date.",
        "Enabled educators to export auto-generated questions and summaries, supporting test creation and planning.",
        "Achieved a 50% reduction in content review time and a 30% increase in student engagement based on analytics.",
      ],
      tech: [
        "OpenAI Whisper",
        "GPT-3.5",
        "React",
        "LangChain",
        "Moodle API",
        "PostgreSQL",
      ],
    },
    {
      company: "Valuebound",
      title: "Software Engineer",
      period: "September 2021 - July 2023",
      description:
        "Led integration of third-party systems using advanced microservices architecture. Designed and deployed robust solutions using Kafka, RabbitMQ, and Redis caching, improving performance by 50%.",
      impact: [
        "Reduced API response time by 50% through Redis caching",
        "Processed 10M+ call records daily with 99.9% uptime",
        "Achieved 95% test coverage with CI/CD automation",
      ],
      responsibilities: [
        "Led the integration of third-party dialers and CRMs into enterprise platforms using OAuth2.0 authentication.",
        "Designed and deployed a robust microservices architecture with Kafka and RabbitMQ for real-time ingestion and processing of high-volume call data.",
        "Built secure, scalable REST APIs using Node.js and Express, protected by JWT-based user authentication.",
        "Implemented Redis caching to improve API performance and reduce database load by 50%.",
        "Developed and optimized reusable UI components in ReactJS, improving consistency across the ERP interface.",
        "Achieved 95% test coverage enforced quality through continuous integration pipelines with GitLab CI/CD.",
      ],
      tech: [
        "React",
        "Node.js",
        "Express",
        "Kafka",
        "RabbitMQ",
        "Redis",
        "OAuth 2.0",
        "JWT",
        "GitLab CI/CD",
      ],
    },
    {
      company: "ParamLogic Pvt Ltd",
      title: "Software Trainee",
      period: "May 2020 - August 2021",
      description:
        "Built a serverless automation tool using Python and AWS Lambda, implemented web scraping with BeautifulSoup, integrated Google Sheets API, and deployed solutions on AWS, improving efficiency and accuracy.",
      impact: [
        "Improved data entry efficiency by 100% through automation",
        "Processed 50K+ records monthly with 99.9% accuracy",
        "Reduced manual workload by 40 hours per week",
      ],
      responsibilities: [
        "Built a serverless automation tool using Python and AWS Lambda to extract and process data on a daily schedule.",
        "Used BeautifulSoup to scrape relevant information from target websites, organized it using Python datasets.",
        "Integrated Google Sheets API to update in real-time, replacing manual entry and improving efficiency by 100%.",
        "Deployed the solution on AWS Lambda and scheduled executions using AWS CloudWatch Events (cron jobs).",
        "Stored script dependencies securely in AWS S3 to ensure modularity and maintainability of the Lambda function.",
      ],
      tech: [
        "Python",
        "AWS Lambda",
        "BeautifulSoup",
        "Google Sheets API",
        "AWS S3",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <h2 className="section-title">Experience</h2>
            </div>
            <p className="text-light-muted dark:text-dark-secondary max-w-2xl mx-auto">
              My professional journey and work experience in software
              development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={index}>
              <div className="group relative bg-light-card dark:bg-dark-card rounded-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: "2px" }}
                >
                  <div className="h-full w-full bg-light-card dark:bg-dark-card rounded-lg"></div>
                </div>

                <div className="relative">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="w-6 h-6 text-light-highlight dark:text-dark-highlight mr-3" />
                    <h3 className="text-xl font-semibold text-light-primary dark:text-dark-primary group-hover:text-light-highlight dark:group-hover:text-dark-highlight transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-light-secondary dark:text-dark-secondary font-medium">
                      {exp.company}
                    </p>
                    <p className="text-light-muted dark:text-dark-muted text-sm">
                      {exp.period}
                    </p>
                  </div>

                  {/* Impact Section */}
                  {exp.impact && (
                    <div className="mb-4 p-3 bg-light-secondary/10 dark:bg-dark-primary/10 rounded-lg border-l-4 border-light-secondary dark:border-dark-highlight">
                      <h4 className="text-sm font-semibold text-light-secondary dark:text-dark-highlight mb-2">
                        📊 Key Impact
                      </h4>
                      <ul className="space-y-1">
                        {exp.impact.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-light-muted dark:text-dark-secondary"
                          >
                            ✓ {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-light-muted dark:text-dark-secondary text-sm"
                      >
                        <span className="mr-3 text-light-highlight dark:text-dark-highlight">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
