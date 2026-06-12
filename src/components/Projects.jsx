import React from "react";
import { FaGithub, FaExternalLinkAlt, FaRobot } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import webScrapping from "../assets/web_scrapping.png";
import chatWithPdf from "../assets/chat_with_pdf.png";
import videoStreaming from "../assets/react_video_streaming.png";
import drowsinessDetection from "../assets/drowsiness_detection.png";
import SmartCoderAI from "../assets/SmartCoderAI.png";

const projectsData = [
  {
    title: "SmartCoder AI — LLM-Powered Code & Test Generator",
    description:
      "Interactive Streamlit app that turns natural-language queries into optimized code and unit tests using multiple LLMs (Gemini, ChatGPT, Claude, Groq) — with multi-step reasoning, tool-based execution, live logging, and dynamic provider selection.",
    technologies: ["Python", "Streamlit", "OpenAI SDK", "REST APIs", "GitHub Actions"],
    image: SmartCoderAI,
    link: "https://github.com/Abhiram-23/SmartCoderAI",
    link2: "https://smartcoder-ai.streamlit.app/",
    featured: true,
  },
  {
    title: "BraedenBot — Website-Integrated AI Chatbot",
    description:
      "End-to-end RAG pipeline that crawls websites, embeds content via Gemini, and orchestrates conversational retrieval with LangChain agents and LangGraph — served through FastAPI + Streamlit with session memory, rate-limiting, and Prometheus/Grafana observability.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "Google Gemini",
      "Docker",
      "Prometheus",
    ],
    link: "https://github.com/Abhiram-23/BraedenBot",
    featured: true,
  },
  {
    title: "Chat with PDF — Gemini AI + LangChain",
    description:
      "Web app for uploading PDFs and asking questions about their content. Uses Google Gemini with LangChain for context-aware answers and a FAISS vector store for fast, accurate document search.",
    technologies: ["React", "Google Gemini", "LangChain", "FAISS", "Python"],
    image: chatWithPdf,
    link: "https://github.com/Abhiram-23/genAI_Gemini",
  },
  {
    title: "Automated Web Scraping & Data Integration on AWS",
    description:
      "Python + BeautifulSoup scraper handling dynamic content, scheduled via AWS Lambda and CloudWatch cron jobs, with real-time reporting through the Google Sheets API — 99.9% extraction reliability.",
    technologies: ["Python", "BeautifulSoup", "AWS Lambda", "CloudWatch", "Google Sheets API"],
    image: webScrapping,
    link: "https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing",
  },
  {
    title: "React Video Streaming Application",
    description:
      "Modern, responsive video streaming app with adaptive playback, progress tracking, speed control, and fullscreen mode — optimized with lazy loading and efficient state management.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Web APIs"],
    image: videoStreaming,
    link: "https://github.com/Abhiram-23/video_streaming",
  },
  {
    title: "Drowsiness Detection with OpenCV",
    description:
      "Real-time driver drowsiness detection using Eye Aspect Ratio tracking with visual and audio alerts — reliable across lighting conditions and face angles on standard hardware.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
    image: drowsinessDetection,
    link: "https://github.com/Abhiram-23/drowsiness_detection",
  },
];

const ProjectCard = ({ project }) => (
  <div className="card card-hover group flex h-full flex-col !p-0 overflow-hidden">
    {/* Image / placeholder */}
    <div className="relative h-48 overflow-hidden border-b border-light-border dark:border-white/10">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/15 via-violet-500/15 to-pink-500/15">
          <FaRobot className="h-14 w-14 text-accent-violet/70 transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}
      {project.featured && (
        <span className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 font-fira-code text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
          Featured
        </span>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col p-6">
      <h3 className="mb-3 text-lg font-bold leading-snug text-light-primary transition-colors duration-300 group-hover:text-accent-cyan dark:text-white">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-light-muted dark:text-dark-secondary">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-light-secondary transition-colors hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan"
        >
          <FaGithub className="h-4 w-4" />
          Code
        </a>
        {project.link2 && (
          <a
            href={project.link2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-light-secondary transition-colors hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan"
          >
            <FaExternalLinkAlt className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <p className="section-kicker mb-2">04. projects</p>
            <h2 className="section-title">Things I've Built</h2>
            <p className="mx-auto mt-4 max-w-2xl text-light-muted dark:text-dark-secondary">
              A selection of projects spanning GenAI, automation, and
              full-stack development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ScrollAnimation key={index} className="h-full">
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
