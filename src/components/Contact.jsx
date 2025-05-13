import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .send(
        "service_t5lvw63",
        "template_i5s7v2p",
        formData,
        "RYRCyllNQMIU77ZS_"
      )
      .then(
        (result) => {
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
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
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: "abhirampaidimarri23@gmail.com",
      link: "mailto:abhirampaidimarri23@gmail.com",
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (337) 257-XXXX",
      link: "tel:+13372551901",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      value: "Lafayette, Louisiana, USA",
      link: "https://maps.google.com/?q=Lafayette,Louisiana,USA",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhiram-paidimarri/",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/abhirampaidimarri",
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      name: "LeetCode",
      url: "https://leetcode.com/u/abhiram_paidimarri/",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/abhiram_paidimarri/",
    },
  ];

  return (
    <section id="contact" className="py-10 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6">
                  Get In Touch
                </h3>
                <p className="text-light-muted dark:text-dark-secondary mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="flex items-start group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-light-secondary dark:bg-dark-primary flex items-center justify-center text-light-bg dark:text-dark-bg mr-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light-primary dark:text-dark-primary">
                          {info.title}
                        </h4>
                        <p className="text-light-muted dark:text-dark-secondary group-hover:text-light-secondary dark:group-hover:text-dark-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-light-bg dark:bg-dark-bg flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-secondary dark:hover:bg-dark-primary hover:text-light-bg dark:hover:text-dark-bg transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6">
                Send Me a Message
              </h3>

              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-lg mb-6">
                  <p className="font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-light-primary dark:text-dark-primary mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-secondary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-light-primary dark:text-dark-primary mb-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-secondary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-light-primary dark:text-dark-primary mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-secondary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-light-primary dark:text-dark-primary mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-secondary dark:focus:ring-dark-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 p-4 rounded-lg">
                      <p>{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium text-light-bg dark:text-dark-bg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-light-muted dark:bg-dark-secondary cursor-not-allowed"
                        : "bg-light-secondary dark:bg-dark-primary hover:bg-light-highlight dark:hover:bg-dark-highlight transform hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
