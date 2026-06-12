import React from "react";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaBrain,
  FaRobot,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaRProject,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiKubernetes,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiHuggingface,
  SiJira,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import ScrollAnimation from "./ScrollAnimation";

const skillCategories = [
  {
    name: "GenAI & Agentic Frameworks",
    icon: <FaBrain className="h-5 w-5" />,
    accent: "text-accent-cyan",
    skills: [
      { name: "LangChain", icon: <FaRobot /> },
      { name: "LangGraph", icon: <FaRobot /> },
      { name: "Microsoft Agent Framework", icon: <FaBrain /> },
      { name: "AutoGen", icon: <FaRobot /> },
      { name: "Crew AI", icon: <FaRobot /> },
      { name: "RAG", icon: <FaBrain /> },
      { name: "Mem0 (Memory-Aware Agents)", icon: <FaRobot /> },
    ],
  },
  {
    name: "Large Language Models",
    icon: <FaRobot className="h-5 w-5" />,
    accent: "text-accent-violet",
    skills: [
      { name: "GPT-4 / GPT-3.5", icon: <SiOpenai /> },
      { name: "Claude", icon: <FaRobot /> },
      { name: "Gemini Pro", icon: <FaRobot /> },
      { name: "Groq", icon: <FaRobot /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: <FaBrain className="h-5 w-5" />,
    accent: "text-accent-pink",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NLP", icon: <FaBrain /> },
      { name: "Computer Vision", icon: <FaBrain /> },
    ],
  },
  {
    name: "Programming Languages",
    icon: <FaCode className="h-5 w-5" />,
    accent: "text-accent-cyan",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "R", icon: <FaRProject /> },
    ],
  },
  {
    name: "Frontend Development",
    icon: <FaReact className="h-5 w-5" />,
    accent: "text-accent-violet",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    name: "Backend Development",
    icon: <FaNodeJs className="h-5 w-5" />,
    accent: "text-accent-pink",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <FaPython /> },
      { name: "Flask", icon: <FaPython /> },
      { name: "RESTful APIs", icon: <FaDatabase /> },
      { name: "GraphQL", icon: <SiGraphql /> },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <FaCloud className="h-5 w-5" />,
    accent: "text-accent-cyan",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "CI/CD", icon: <FaTools /> },
      { name: "Serverless", icon: <FaCloud /> },
    ],
  },
  {
    name: "Databases & Storage",
    icon: <FaDatabase className="h-5 w-5" />,
    accent: "text-accent-violet",
    skills: [
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <FaDatabase /> },
      { name: "Neo4j", icon: <FaDatabase /> },
      { name: "Pinecone", icon: <FaDatabase /> },
      { name: "Qdrant", icon: <FaDatabase /> },
      { name: "FAISS", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Tools & Others",
    icon: <FaTools className="h-5 w-5" />,
    accent: "text-accent-pink",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "JIRA", icon: <SiJira /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Linux", icon: <SiLinux /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <p className="section-kicker mb-2">02. skills</p>
            <h2 className="section-title">Tech Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-light-muted dark:text-dark-secondary">
              The tools and technologies I use to build intelligent,
              production-grade systems.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <ScrollAnimation key={category.name} className="h-full">
              <div className="card card-hover h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className={category.accent}>{category.icon}</span>
                  <h3 className="font-semibold text-light-primary dark:text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="chip">
                      <span className="text-sm">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
