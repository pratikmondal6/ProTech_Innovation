import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import AnimatedGradientText from "./AnimatedGradientText";
import solutions from "@/data/objects/Solutions";
import styles from "./ServicesSection.module.css";

export default function TechnologySolutions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section id="services" className={styles.servicesSection}>
      {/* Vibrant background blobs */}
      <div className={`${styles.bgBlob} ${styles.bgBlob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob2}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob3}`}></div>
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
        Driving Industries Forward with Innovation
      </h2>
      <p className="2xl:text-lg mb-8 text-center bg-gradient-to-r from-blue-600 via-teal-500 to-blue-400 bg-clip-text text-transparent font-semibold">
        We blend industry expertise, advanced IT solutions, and powerful AI technologies to help businesses grow, adapt, and stay ahead in an ever-evolving world.
      </p>
      <div ref={sectionRef} className={styles.servicesGrid}>
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.08, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1, duration: 0.5 }}
            className={styles.servicesCard}
          >
            <h3 className={styles.servicesTitle}>
              <AnimatedGradientText>{solution.title}</AnimatedGradientText>
            </h3>
            <p className={styles.servicesDescription}>{solution.description}</p>
            {solution.number && (
              <span className={styles.servicesLink}>{solution.number}</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

