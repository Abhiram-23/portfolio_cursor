import React from "react";
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const education = [
  {
    degree: "Master of Science (Informatics)",
    school: "University of Louisiana at Lafayette, USA",
    period: "2023 — 2024",
    coursework: ["Computer Networks", "R Programming", "Database Management Systems"],
  },
  {
    degree: "B.Tech (Electronics & Computer Engineering)",
    school: "JB Institute of Engineering and Technology, Hyderabad, India",
    period: "2017 — 2021",
    coursework: [
      "Python Programming",
      "Web Development",
      "Software Development Life Cycle",
      "Neural Networks",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    validationId: "8ecffdbbe84e48788641de7d0815d111",
    validationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    details: [
      "Expertise in AWS cloud architecture and services",
      "Proficient in serverless computing and microservices",
      "Experience with AWS Lambda, S3, and CloudWatch",
    ],
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validationId: "WSF102Y2TJ1EQBCB",
    validationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    details: [
      "Fundamental understanding of AWS Cloud concepts",
      "Knowledge of AWS security, compliance, and pricing models",
      "Experience with core AWS services and use cases",
    ],
  },
  {
    name: "Data Science Orientation",
    issuer: "Coursera",
    validationUrl:
      "https://www.credly.com/badges/3df79242-860c-4a82-992d-720b7e8a8c26/print",
    details: [
      "Introduction to data science methodologies",
      "Understanding of data analysis techniques",
      "Familiarity with data visualization tools",
    ],
  },
  {
    name: "LeetCode Top 50 SQL Badge",
    issuer: "LeetCode",
    validationUrl: "https://leetcode.com/u/abhiram_paidimarri/",
    details: [
      "Advanced SQL query optimization",
      "Complex database problem solving",
      "Efficient data manipulation techniques",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <p className="section-kicker mb-2">05. background</p>
            <h2 className="section-title">Education & Certifications</h2>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-xl font-bold text-light-primary dark:text-white">
              <FaGraduationCap className="text-accent-cyan" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <ScrollAnimation key={index}>
                  <div className="card card-hover">
                    <p className="font-fira-code text-xs text-accent-cyan">{edu.period}</p>
                    <h4 className="mt-2 text-lg font-bold text-light-primary dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="mb-4 text-sm text-light-muted dark:text-dark-secondary">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span key={idx} className="chip">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-xl font-bold text-light-primary dark:text-white">
              <FaAward className="text-accent-violet" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <ScrollAnimation key={index}>
                  <div className="card card-hover">
                    <h4 className="text-lg font-bold text-light-primary dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-sm font-medium text-light-secondary dark:text-accent-violet">
                      {cert.issuer}
                    </p>
                    {cert.validationId && (
                      <p className="mt-1 font-fira-code text-xs text-light-muted dark:text-dark-secondary">
                        ID: {cert.validationId}
                      </p>
                    )}
                    <ul className="mt-3 space-y-1.5">
                      {cert.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-light-muted dark:text-dark-secondary"
                        >
                          <span className="mt-0.5 text-accent-violet">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {cert.validationUrl && (
                      <a
                        href={cert.validationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-light-secondary transition-colors hover:text-accent-cyan dark:text-slate-300 dark:hover:text-accent-cyan"
                      >
                        Verify Certificate
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
