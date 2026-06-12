import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "./ScrollAnimation";

const inputClasses =
  "w-full rounded-xl border border-light-border bg-light-bg px-4 py-3 text-light-primary placeholder-light-muted/60 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder-slate-500";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .send("service_t5lvw63", "template_i5s7v2p", formData, "RYRCyllNQMIU77ZS_")
      .then(
        () => {
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          setTimeout(() => setSubmitSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setSubmitError("An error occurred, please try again");
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-4 w-4" />,
      title: "Email",
      value: "abhirampaidimarri23@gmail.com",
      link: "mailto:abhirampaidimarri23@gmail.com",
    },
    {
      icon: <FaPhone className="h-4 w-4" />,
      title: "Phone",
      value: "+1 (337) 554-2418",
      link: "tel:+13375542418",
    },
    {
      icon: <FaMapMarkerAlt className="h-4 w-4" />,
      title: "Location",
      value: "Bellevue, WA 98007, USA",
      link: "https://maps.google.com/?q=Bellevue,WA,98007,USA",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhiram-paidimarri/",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/Abhiram-23",
    },
    {
      icon: <SiLeetcode className="h-5 w-5" />,
      name: "LeetCode",
      url: "https://leetcode.com/u/abhiram_paidimarri/",
    },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/abhiram_paidimarri/",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="mb-12 text-center">
            <p className="section-kicker mb-2">06. contact</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="mx-auto mt-4 max-w-2xl text-light-muted dark:text-dark-secondary">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <ScrollAnimation className="lg:col-span-2">
            <div className="space-y-6">
              <div className="card">
                <h3 className="mb-5 text-xl font-bold text-light-primary dark:text-white">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                      className="group flex items-center gap-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan transition-transform duration-300 group-hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-fira-code text-xs text-light-muted dark:text-slate-500">
                          {info.title}
                        </p>
                        <p className="text-sm font-medium text-light-primary transition-colors group-hover:text-accent-cyan dark:text-slate-200">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="mb-5 text-xl font-bold text-light-primary dark:text-white">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-border text-light-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan hover:text-accent-cyan dark:border-white/10 dark:text-dark-secondary"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Form */}
          <ScrollAnimation className="lg:col-span-3">
            <div className="card h-full">
              <h3 className="mb-6 text-xl font-bold text-light-primary dark:text-white">
                Send Me a Message
              </h3>

              {submitSuccess ? (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                  <p className="font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Your name"
                      aria-label="Your name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Your email"
                      aria-label="Your email"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Subject"
                    aria-label="Subject"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`${inputClasses} resize-none`}
                    placeholder="Your message..."
                    aria-label="Your message"
                  />

                  {submitError && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                      <p>{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full justify-center ${
                      isSubmitting ? "cursor-not-allowed opacity-60" : ""
                    }`}
                  >
                    <FaPaperPlane className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
