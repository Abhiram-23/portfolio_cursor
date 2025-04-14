import React from "react";
import { FaCode } from "react-icons/fa";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
          <FaCode className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-light-highlight dark:bg-dark-highlight rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight bg-clip-text text-transparent">
          Abhiram
        </span>
        <span className="text-sm text-light-muted dark:text-dark-secondary">
          Full Stack Developer
        </span>
      </div>
    </div>
  );
};

export default Logo;
