import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      company: "CVS Health",
      title: "AI Support Bot Development",
      period: "2024 - Present",
      description:
        "Developed an internal AI assistant using OpenAI's GPT-4 to support pharmacy staff and customer service agents, reducing ticket volume by 40%.",
      responsibilities: [
        "Integrated LangChain's RetrievalQA chain with FAISS vector database for semantic search across internal documentation",
        "Engineered automated data pipelines for document ingestion and embedding",
        "Designed Streamlit-based UI with JWT authentication and role-based access",
        "Deployed on AWS Lambda and EC2 for scalable, HIPAA-compliant access",
        "Configured CloudWatch for monitoring usage metrics and system reliability",
      ],
      tech: [
        "OpenAI GPT-4",
        "LangChain",
        "FAISS",
        "AWS",
        "Streamlit",
        "Python",
      ],
    },
    {
      company: "University of Louisiana",
      title: "AI-Powered Learning Platform",
      period: "2023 - 2024",
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
      period: "2021 - 2022",
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
