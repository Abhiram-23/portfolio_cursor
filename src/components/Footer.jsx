import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhirampaidimarri/",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/Abhiram-23",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/abhiram_paidimarri/",
    },
  ];

  return (
    <footer className="bg-light-card dark:bg-dark-card py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted dark:text-dark-secondary hover:text-light-secondary dark:hover:text-dark-primary transition-colors duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-light-muted dark:text-dark-secondary text-sm">
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <FaHeart className="text-red-500 w-4 h-4" />
              <span>by Abhiram Paidimarri</span>
            </p>
            <p className="mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
