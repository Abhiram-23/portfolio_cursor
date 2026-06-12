import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-fira-code text-xl font-bold text-light-primary dark:text-white">
        <span className="text-accent-cyan">&lt;</span>
        AP
        <span className="text-accent-cyan">/&gt;</span>
      </span>
    </div>
  );
};

export default Logo;
