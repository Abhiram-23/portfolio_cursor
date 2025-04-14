import React, { useState } from "react";
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

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories = [
    {
      id: "languages",
      name: "Programming Languages",
      icon: <FaCode className="w-5 h-5" />,
      skills: [
        { name: "Python", level: 90, icon: <FaPython className="w-5 h-5" /> },
        {
          name: "JavaScript",
          level: 85,
          icon: <FaJs className="w-5 h-5" />,
        },
        { name: "Java", level: 80, icon: <FaJava className="w-5 h-5" /> },
        { name: "SQL", level: 85, icon: <FaDatabase className="w-5 h-5" /> },
        { name: "R", level: 75, icon: <FaRProject className="w-5 h-5" /> },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Development",
      icon: <FaReact className="w-5 h-5" />,
      skills: [
        { name: "React", level: 90, icon: <FaReact className="w-5 h-5" /> },
        { name: "HTML5", level: 95, icon: <FaHtml5 className="w-5 h-5" /> },
        { name: "CSS3", level: 90, icon: <FaCss3Alt className="w-5 h-5" /> },
        { name: "JavaScript", level: 85, icon: <FaJs className="w-5 h-5" /> },
        {
          name: "TypeScript",
          level: 75,
          icon: <SiTypescript className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: <FaNodeJs className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs className="w-5 h-5" /> },
        {
          name: "Express.js",
          level: 75,
          icon: <SiExpress className="w-5 h-5" />,
        },
        {
          name: "RESTful APIs",
          level: 85,
          icon: <FaDatabase className="w-5 h-5" />,
        },
        { name: "GraphQL", level: 70, icon: <SiGraphql className="w-5 h-5" /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb className="w-5 h-5" /> },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <FaCloud className="w-5 h-5" />,
      skills: [
        { name: "AWS", level: 85, icon: <FaAws className="w-5 h-5" /> },
        { name: "Docker", level: 75, icon: <FaDocker className="w-5 h-5" /> },
        {
          name: "Kubernetes",
          level: 70,
          icon: <SiKubernetes className="w-5 h-5" />,
        },
        { name: "CI/CD", level: 75, icon: <FaTools className="w-5 h-5" /> },
        {
          name: "Serverless",
          level: 80,
          icon: <FaCloud className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: <FaBrain className="w-5 h-5" />,
      skills: [
        {
          name: "TensorFlow",
          level: 75,
          icon: <SiTensorflow className="w-5 h-5" />,
        },
        { name: "PyTorch", level: 70, icon: <SiPytorch className="w-5 h-5" /> },
        {
          name: "Scikit-learn",
          level: 80,
          icon: <SiScikitlearn className="w-5 h-5" />,
        },
        { name: "NLP", level: 75, icon: <FaBrain className="w-5 h-5" /> },
        {
          name: "Computer Vision",
          level: 70,
          icon: <FaBrain className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "llms",
      name: "Large Language Models",
      icon: <FaRobot className="w-5 h-5" />,
      skills: [
        {
          name: "OpenAI GPT-4",
          level: 85,
          icon: <SiOpenai className="w-5 h-5" />,
        },
        {
          name: "OpenAI GPT-3.5",
          level: 90,
          icon: <SiOpenai className="w-5 h-5" />,
        },
        { name: "Claude 3", level: 80, icon: <FaRobot className="w-5 h-5" /> },
        {
          name: "Gemini Pro",
          level: 75,
          icon: <FaRobot className="w-5 h-5" />,
        },
        { name: "DeepSeek", level: 70, icon: <FaRobot className="w-5 h-5" /> },
        { name: "LangChain", level: 85, icon: <FaRobot className="w-5 h-5" /> },
        {
          name: "LlamaIndex",
          level: 75,
          icon: <FaRobot className="w-5 h-5" />,
        },
        {
          name: "Hugging Face",
          level: 80,
          icon: <SiHuggingface className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "tools",
      name: "Tools & Others",
      icon: <FaTools className="w-5 h-5" />,
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt className="w-5 h-5" /> },
        { name: "JIRA", level: 80, icon: <SiJira className="w-5 h-5" /> },
        { name: "Postman", level: 85, icon: <SiPostman className="w-5 h-5" /> },
        { name: "Linux", level: 80, icon: <SiLinux className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-4 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="flex justify-center mb-4">
            <h2 className="section-title">Skills</h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === category.id
                        ? "bg-light-secondary dark:bg-dark-primary text-light-bg dark:text-dark-bg"
                        : "bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary hover:text-light-bg dark:hover:text-dark-bg"
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories
                  .find((cat) => cat.id === activeTab)
                  ?.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-light-bg dark:bg-dark-bg p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 text-light-secondary dark:text-dark-primary">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-light-primary dark:text-dark-primary">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-light-muted dark:text-dark-secondary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2">
                        <div
                          className="bg-light-secondary dark:bg-dark-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
