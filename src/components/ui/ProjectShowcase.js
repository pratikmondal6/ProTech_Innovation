import Image from "next/image";
import React from "react";
import styles from "./ProjectShowcaseSection.module.css";

const projects = [
  {
    title: "Multivendor E-commerce App",
    description: "A scalable e-commerce app supporting multiple vendors, product categories, and secure transactions. Features a clean interface and robust admin tools.",
    image: "/ProjectImages/DevPOS-Favicon.svg",
    link: "https://www.behance.net/gallery/225973179/Multivendor-E-commerce-App"
  },
  {
    title: "Aptitudo AI Hiring Platform",
    description: "Aptitudo is an AI-powered hiring platform with customizable skill assessments, bias-free and data-driven recruitment, ATS integration, and real-time analytics. It supports startups and enterprises with scalable plans and a seamless user experience.",
    image: "/ProjectImages/DM-Favicon.svg",
    link: "https://www.aptitudo.ca/"
  },
  {
    title: "🚨 Enterprise Emergency Service Platform",
    description: "Enterprise emergency services mapping platform for improved user engagement (+40% MAU). Reliable, real-time coordination and analytics for critical response teams.",
    image: "/ProjectImages/Technado-Favicon.svg",
    link: "https://shongjog.brac.net/"
  },
  // Behance projects
  {
    title: "E-commerce Dashboard",
    description: "A modern, data-driven dashboard for e-commerce businesses, featuring analytics, sales tracking, and user management. Designed for clarity and actionable insights.",
    image: "/ProjectImages/DevPOS-Favicon.svg",
    link: "https://www.behance.net/gallery/230685641/E-commerce-Dashboard"
  },
  {
    title: "Instagram Re-design Case Study",
    description: "A creative reimagining of the Instagram app UI, focusing on improved usability, accessibility, and visual appeal. Includes research, wireframes, and final designs.",
    image: "/ProjectImages/DM-Favicon.svg",
    link: "https://www.behance.net/gallery/186193329/Instagram-Re-design-Case-Study"
  },
  {
    title: "Digital Agency Landing Page",
    description: "A visually engaging landing page for a digital agency, highlighting services, portfolio, and contact options. Optimized for conversion and brand impact.",
    image: "/ProjectImages/Technado-Favicon.svg",
    link: "https://www.behance.net/gallery/223649563/Digital-Agency-Landing-Page"
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className={styles.showcaseSection}>
      {/* Background blobs for vibrancy */}
      <div className={`${styles.bgBlob} ${styles.bgBlob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob2}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob3}`}></div>
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Projects
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          Explore our portfolio of innovative solutions, crafted for impact and excellence. Each project reflects our commitment to creativity, technology, and client success.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <Image src={project.image} alt={project.title} width={400} height={192} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description}</p>
            {project.link !== '#' ? (
              <button
                type="button"
                className={styles.btnOutline}
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              >
                View Details
              </button>
            ) : (
              <span className="text-blue-500">View Details</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
