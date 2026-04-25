import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ScrollAnimation from "./ScrollAnimation";

const CTA = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-light-secondary/10 to-light-highlight/10 dark:from-dark-primary/10 dark:to-dark-highlight/10">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-primary dark:text-dark-primary">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-light-muted dark:text-dark-secondary mb-8">
              Let's build something amazing. Explore my projects, check out my
              resume, or reach out to discuss collaboration opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Download Resume Button */}
              <a
                href="/resume_abhiram_paidimarri.pdf"
                download="Abhiram_Paidimarri_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 bg-light-secondary dark:bg-dark-primary text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload className="w-5 h-5" />
                Download Resume
              </a>

              {/* View Projects Button */}
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={500}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-light-secondary dark:border-dark-primary text-light-secondary dark:text-dark-primary font-semibold rounded-lg hover:bg-light-secondary/10 dark:hover:bg-dark-primary/10 transition-all duration-300 cursor-pointer"
              >
                View My Work
                <FaArrowRight className="w-5 h-5" />
              </ScrollLink>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTA;
