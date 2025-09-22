"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Mission from "@/assets/Mission.png";
import { motion } from "framer-motion";
import styles from "./MilestoneSection.module.css";

export default function MilestoneSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.milestoneSection}>
      {/* Vibrant background blobs */}
      <div className={`${styles.bgBlob} ${styles.bgBlob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob2}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob3}`}></div>
      <div className={styles.milestoneGrid}>
        <div className={styles.milestoneImageWrap}>
          <Image src={Mission} alt="Mission" style={{ borderRadius: "1rem", boxShadow: "0 8px 32px rgba(74,144,226,0.12)" }} />
        </div>
        <div className={styles.milestoneText}>
          <p className={styles.milestoneSubtitle}>We’ve helped hundreds of companies</p>
          <h2 className={styles.milestoneTitle + ' text-center'}>
            We’re only just getting started on our journey
          </h2>
          <div className={styles.milestoneStats}>
            {[{ end: 5, suffix: "+", text: "Projects Completed" },
              { end: 10, suffix: "", text: "Secured worldwide" },
              { end: 4, suffix: "", text: "Professional Members" },
              { end: 5, suffix: "+", text: "5-star Reviews" }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className={styles.milestoneStatCard}
              >
                <CountUp end={item.end} suffix={item.suffix} /> <span> {item.text} </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(start);
      }, 50); // Adjust speed here (smaller = faster)
  
      return () => clearInterval(interval);
    }, [end]);

  return <span className="text-[#211951]  md:text-3xl 2xl:text-4xl text-center font-bold mb-3 block">{count}{suffix}</span>;
}
