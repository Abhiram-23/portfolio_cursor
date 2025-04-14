import React from "react";
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Master of Science (Informatics)",
      school: "University of Louisiana at Lafayette, USA",
      period: "2023 - 2024",
      coursework: [
        "Computer Networks",
        "R Programming",
        "Database Management Systems",
      ],
      icon: <FaGraduationCap className="w-6 h-6" />,
    },
    {
      degree: "Bachelor of Technology (Electronics & Computer Engineering)",
      school:
        "JB Institute of Engineering and Technology, Hyderabad- Telangana, India",
      period: "2017 - 2021",
      coursework: [
        "Python Programming",
        "Web Development",
        "Software Development Life Cycle",
        "Neural Networks",
      ],
      icon: <FaGraduationCap className="w-6 h-6" />,
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",

      validationId: "8ecffdbbe84e48788641de7d0815d111",
      validationUrl:
        "https://cp.certmetrics.com/amazon/en/public/verify/credential",
      details: [
        "Expertise in AWS cloud architecture and services",
        "Proficient in serverless computing and microservices",
        "Experience with AWS Lambda, S3, and CloudWatch",
      ],
      icon: <FaAward className="w-6 h-6" />,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",

      validationId: "WSF102Y2TJ1EQBCB",
      validationUrl:
        "https://cp.certmetrics.com/amazon/en/public/verify/credential",
      details: [
        "Fundamental understanding of AWS Cloud concepts",
        "Knowledge of AWS security, compliance, and pricing models",
        "Experience with core AWS services and use cases",
      ],
      icon: <FaAward className="w-6 h-6" />,
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
      icon: <FaAward className="w-6 h-6" />,
    },
    {
      name: "Leetcode Top 50 SQL Badge",
      issuer: "Leetcode",

      validationUrl: "https://leetcode.com/u/abhiram_paidimarri/",
      details: [
        "Advanced SQL query optimization",
        "Complex database problem solving",
        "Efficient data manipulation techniques",
      ],
      icon: <FaAward className="w-6 h-6" />,
    },
  ];

  return (
    <section id="education" className="py-10 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6 flex items-center">
              <FaGraduationCap className="mr-2 text-light-secondary dark:text-dark-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-light-card dark:bg-dark-card rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: "2px" }}
                  >
                    <div className="h-full w-full bg-light-card dark:bg-dark-card rounded-lg"></div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary">
                          {edu.degree}
                        </h4>
                        <p className="text-light-secondary dark:text-dark-primary">
                          {edu.school}
                        </p>
                      </div>
                      <span className="text-light-muted dark:text-dark-secondary">
                        {edu.period}
                      </span>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-lg font-semibold text-light-primary dark:text-dark-primary mb-2">
                        Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-light-bg dark:bg-dark-bg rounded-full text-sm text-light-primary dark:text-dark-secondary border border-light-border dark:border-dark-border group-hover:border-light-secondary dark:group-hover:border-dark-primary transition-colors duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6 flex items-center">
              <FaAward className="mr-2 text-light-secondary dark:text-dark-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-light-card dark:bg-dark-card rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: "2px" }}
                  >
                    <div className="h-full w-full bg-light-card dark:bg-dark-card rounded-lg"></div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary">
                          {cert.name}
                        </h4>
                        <p className="text-light-secondary dark:text-dark-primary">
                          {cert.issuer}
                        </p>
                        {cert.validationId && (
                          <p className="text-sm text-light-muted dark:text-dark-secondary mt-1">
                            Validation ID: {cert.validationId}
                          </p>
                        )}
                      </div>
                      <span className="text-light-muted dark:text-dark-secondary">
                        {cert.date}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-light-muted dark:text-dark-secondary ml-4">
                      {cert.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {cert.validationUrl && (
                      <a
                        href={cert.validationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-light-secondary dark:text-dark-primary hover:text-light-highlight dark:hover:text-dark-highlight transition-colors duration-300"
                      >
                        <span className="mr-1">Verify Certificate</span>
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
