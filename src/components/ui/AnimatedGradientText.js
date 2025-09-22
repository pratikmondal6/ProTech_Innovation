import React from "react";

export default function AnimatedGradientText({ children, className = "" }) {
  return (
    <span
      className={
        `animated-gradient-text ${className}`
      }
      style={{
        background: "linear-gradient(270deg, #14b8a6, #2563eb, #7c3aed, #14b8a6)",
        backgroundSize: "600% 600%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        animation: "fluidGradient 4s ease-in-out infinite"
      }}
    >
      {children}
    </span>
  );
}

// Add this to your global CSS or ServicesSection.module.css:
// @keyframes fluidGradient {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
