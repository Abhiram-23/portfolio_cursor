import React, { useState, useEffect, useRef } from "react";
import { FaCode, FaProjectDiagram, FaLightbulb, FaUsers } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const Statistics = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    clients: 0,
  });
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  // Start counting when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const targets = { experience: 5, projects: 25, technologies: 40, clients: 15 };
    const intervals = {};
    Object.keys(targets).forEach((key) => {
      intervals[key] = setInterval(() => {
        setCounters((prev) => {
          if (prev[key] < targets[key]) {
            return { ...prev, [key]: prev[key] + 1 };
          }
          clearInterval(intervals[key]);
          return prev;
        });
      }, 40);
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, [started]);

  const stats = [
    {
      icon: <FaCode className="h-6 w-6" />,
      label: "Years of Experience",
      value: counters.experience,
    },
    {
      icon: <FaProjectDiagram className="h-6 w-6" />,
      label: "Projects Completed",
      value: counters.projects,
    },
    {
      icon: <FaLightbulb className="h-6 w-6" />,
      label: "Technologies Mastered",
      value: counters.technologies,
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      label: "Collaborations & Clients",
      value: counters.clients,
    },
  ];

  return (
    <section ref={sectionRef} className="py-14">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="card mx-auto max-w-5xl !p-0 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-light-border dark:divide-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-2 px-6 py-8 text-center transition-colors duration-300 hover:bg-light-bg/60 dark:hover:bg-white/[0.03]"
                >
                  <div className="text-accent-cyan transition-transform duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="font-fira-code text-4xl font-bold gradient-text">
                    {stat.value}+
                  </div>
                  <p className="text-sm font-medium text-light-muted dark:text-dark-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Statistics;
