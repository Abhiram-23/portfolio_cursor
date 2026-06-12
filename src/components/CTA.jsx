import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ScrollAnimation from "./ScrollAnimation";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-light-border bg-light-card p-10 text-center dark:border-white/10 dark:bg-white/[0.03] md:p-14">
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <p className="section-kicker mb-3">{"// let's build"}</p>
              <h2 className="text-3xl font-bold text-light-primary dark:text-white md:text-4xl">
                Ready to Work <span className="gradient-text">Together?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-light-muted dark:text-dark-secondary">
                Explore my projects, check out my resume, or reach out to
                discuss collaboration opportunities.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/resume_abhiram_paidimarri.pdf"
                  download="Abhiram_Paidimarri_Resume.pdf"
                  className="btn-primary"
                >
                  <FaDownload className="h-4 w-4" />
                  Download Resume
                </a>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="btn-ghost"
                >
                  Get In Touch
                  <FaArrowRight className="h-4 w-4" />
                </ScrollLink>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTA;
