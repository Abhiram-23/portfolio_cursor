import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhirampaidimarri/",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/Abhiram-23",
    },
    {
      icon: <FaInstagram className="h-5 w-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/abhiram_paidimarri/",
    },
  ];

  return (
    <footer className="border-t border-light-border py-10 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-5">
          <Logo />

          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-cyan dark:text-dark-secondary"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center font-fira-code text-xs text-light-muted dark:text-dark-secondary">
            <p className="flex items-center justify-center gap-1.5">
              Made with <FaHeart className="h-3 w-3 text-accent-pink" /> by
              Abhiram Paidimarri
            </p>
            <p className="mt-1.5">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
