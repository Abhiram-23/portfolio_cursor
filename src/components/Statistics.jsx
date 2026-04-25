import React, { useState, useEffect } from "react";
import { FaCode, FaProjectDiagram, FaLightbulb, FaUsers } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Statistics = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    clients: 0,
  });

  useEffect(() => {
    const targets = {
      experience: 5,
      projects: 25,
      technologies: 40,
      clients: 15,
    };

    const intervals = {};
    Object.keys(targets).forEach((key) => {
      intervals[key] = setInterval(() => {
        setCounters((prev) => {
          if (prev[key] < targets[key]) {
            return { ...prev, [key]: prev[key] + 1 };
          } else {
            clearInterval(intervals[key]);
            return prev;
          }
        });
      }, 30);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: <FaCode className="w-12 h-12" />,
      label: "Years of Experience",
      value: counters.experience,
      suffix: "+",
      color: "text-blue-500",
    },
    {
      icon: <FaProjectDiagram className="w-12 h-12" />,
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      color: "text-purple-500",
    },
    {
      icon: <FaLightbulb className="w-12 h-12" />,
      label: "Technologies Mastered",
      value: counters.technologies,
      suffix: "+",
      color: "text-yellow-500",
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      label: "Collaborations & Clients",
      value: counters.clients,
      suffix: "+",
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-16 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="section-title">Career Highlights</h2>
            <p className="text-light-muted dark:text-dark-secondary max-w-2xl mx-auto">
              A glimpse of my professional journey and achievements
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index}>
              <div className="group relative bg-light-card dark:bg-dark-card rounded-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: "2px" }}
                >
                  <div className="h-full w-full bg-light-card dark:bg-dark-card rounded-lg"></div>
                </div>

                <div className="relative">
                  <div className={`${stat.color} mb-4 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2 group-hover:text-light-secondary dark:group-hover:text-dark-highlight transition-colors duration-300">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="text-light-muted dark:text-dark-secondary font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
