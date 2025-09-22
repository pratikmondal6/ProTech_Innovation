import React from "react";
import styles from "./TestimonialsSection.module.css";
import testimonials from "@/data/objects/Testimonials";

export default function TestimonialSection() {
  return (
    <section className={styles.milestoneSection}>
      {/* Vibrant background blobs */}
      <div className={`${styles.bgBlob} ${styles.bgBlob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob2}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob3}`}></div>
      <div className="mb-10" style={{ position: "relative", zIndex: 2 }}>
        <h2
          className={styles.gradientHeadline}
        >
          What Our Clients Say
        </h2>
      </div>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={styles.testimonialCard}
          >
            <p className={styles.testimonialRole}>{testimonial.role}</p>
            <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <span className={styles.testimonialName}>{testimonial.name}</span>
            <span className={styles.testimonialCompany}>{testimonial.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

