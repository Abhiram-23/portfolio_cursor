import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      company: "BayouHub",
      title: "AI Engineer",
      period: "January 2025 - Present",
      description:
        "Developed an intelligent scraping system to enhance 30,000+ business listings for SEO purposes by automating the extraction of official emails, websites, and detailed descriptions. Implemented advanced deduplication and city/state-based filtering to avoid redundant data.",
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
      company: "University of Louisiana",
      title: "Software Engineer",
      period: "September 2023 - December 2024",
      description:
        "Built an AI summarization tool using Whisper and GPT-3.5, integrated with Moodle, reducing lecture review time by 50%.",
      responsibilities: [
        "Developed transcription-to-summary pipeline using OpenAI Whisper",
        "Implemented LangChain-based summarization system with GPT-3.5",
        "Created responsive ReactJS UI component for the Ellucian Experience platform",
        "Integrated with Moodle's backend using REST APIs and PostgreSQL",
        "Enabled faculty to export summaries and question sets for assessments",
      ],
      tech: ["OpenAI Whisper", "GPT-3.5", "React", "PostgreSQL", "Moodle API"],
    },
    {
      company: "Valuebound",
      title: "Full-Stack Development",
      period: "September 2021 - July 2023",
      description:
        "Worked on MindTickle integration and ERP system enhancement projects, improving system performance by 50%.",
      responsibilities: [
        "Integrated third-party dialers and CRMs using OAuth 2.0",
        "Designed microservices architecture using Kafka and RabbitMQ",
        "Built and optimized ReactJS components for the ERP system",
        "Developed Node.js REST APIs with JWT authentication",
        "Implemented Redis caching, reducing database load by 50%",
      ],
      tech: ["React", "Node.js", "Kafka", "Redis", "OAuth 2.0", "JWT"],
    },
    {
      company: "ParamLogic Pvt Ltd",
      title: "Software Trainee",
      period: "August 2020 - August 2021",
      description:
        "Built a serverless automation tool using Python and AWS Lambda, implemented web scraping with BeautifulSoup, integrated Google Sheets API, and deployed solutions on AWS, improving efficiency and accuracy.",
      responsibilities: [
        "Developed and maintained serverless applications using AWS Lambda",
        "Implemented web scraping solutions using BeautifulSoup",
        "Integrated Google Sheets API for data management",
        "Deployed and monitored applications on AWS",
      ],
      tech: ["Python", "AWS Lambda", "BeautifulSoup", "Google Sheets API"],
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
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-light-muted dark:text-dark-secondary"
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
