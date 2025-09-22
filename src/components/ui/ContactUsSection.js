import { LuMail, LuPhone } from "react-icons/lu";
import { ValidationError, useForm } from "@formspree/react";

import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import styles from "./ContactUsSection.module.css";

export default function ContactUs() {
  const contactdetails = [
    {
      id: 1,
      icon: <LuMail />,
      title: "Email",
      description: "Our friendly team is here to help.",
      link: "protech@gmail.com",
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      description: "Mon-Fri from 9am to 6pm.",
      link: ["+880 1619 109909", "+49 1575 4255758"],
    },
  ];

  return (
    <section className={styles.contactSection}>
      {/* Vibrant background blobs */}
      <div className={`${styles.bgBlob} ${styles.bgBlob1}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob2}`}></div>
      <div className={`${styles.bgBlob} ${styles.bgBlob3}`}></div>
      <div className={styles.contactGrid}>
        <div>
          <h2 className="text-2xl sm:text-4xl md:text-3xl 2xl:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in touch with our team
          </h2>
          <p className="text-gray-600 text-center lg:text-left mt-2 text-sm sm:text-base">
            We&apos;d love to hear from you. Please fill out this form or shoot us an email.
          </p>
          <div style={{ marginTop: "2rem" }}>
            {contactdetails.map((contact, idx) => {
              const links = Array.isArray(contact.link) ? contact.link : [contact.link];
              return (
                <div
                  key={contact.id}
                  className={styles.contactCard}
                  style={idx === 0 ? { marginBottom: "2rem" } : {}}
                >
                  <span className="text-[#211951] text-xl sm:text-2xl">{contact.icon}</span>
                  <h3 className={styles.contactTitle}>{contact.title}</h3>
                  <p className={styles.contactDescription}>{contact.description}</p>
                  <div className="flex flex-col mt-1 space-y-1">
                    {links.map((item, idx2) => (
                      <a
                        key={idx2}
                        href={
                          contact.id === 1
                            ? "mailto:" + item
                            : "https://wa.me/" + item.replace(/\D/g, "")
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.contactFormWrap}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

// components/ContactForm.jsx

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mqapgqro"
      method="POST"
      className={styles.contactFormWrap + " redesigned-contact-form"}
      style={{ boxShadow: "0 8px 32px rgba(33,25,81,0.10)", borderRadius: "1.5rem", background: "#fff", padding: "2.5rem 2rem", maxWidth: 480, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span style={{ fontSize: "2rem", color: "#2563eb", fontWeight: 700, display: "inline-block", marginBottom: "0.5rem" }}>Contact Us</span>
        <div style={{ color: "#555", fontSize: "1rem" }}>We’re here to help. Fill out the form and our team will get back to you soon.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
        <div className="form-group">
          <input type="text" name="firstName" id="firstName" required placeholder=" " />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-group">
          <input type="text" name="lastName" id="lastName" required placeholder=" " />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="form-group" style={{ marginTop: "1.2rem" }}>
        <input type="email" name="email" id="email" required placeholder=" " />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-group" style={{ marginTop: "1.2rem" }}>
        <textarea name="message" id="message" required rows={4} placeholder=" "></textarea>
        <label htmlFor="message">Message</label>
      </div>
      <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center" }}>
        <input type="checkbox" id="privacy" name="policy" required style={{ marginRight: "0.5rem" }} />
        <label htmlFor="privacy" style={{ fontSize: "0.95rem", color: "#211951" }}>
          You agree to our <a href="/privacy" style={{ color: "#2563eb", textDecoration: "underline" }}>privacy policy</a>.
        </label>
      </div>
      <button type="submit" style={{ width: "100%", background: "linear-gradient(90deg, #7c3aed 0%, #e11d48 100%)", color: "#fff", fontWeight: 700, fontSize: "1.1rem", border: "none", borderRadius: "999px", boxShadow: "0 2px 8px rgba(33,25,81,0.10)", padding: "1rem 2rem", marginTop: "1.5rem", cursor: "pointer", letterSpacing: "1px" }}>
        Send Message
      </button>
      <style jsx>{`
        .form-group {
          position: relative;
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1rem 0.5rem 1rem;
          border: 1.5px solid #eaf0fb;
          border-radius: 0.75rem;
          background: #f8fafc;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #e11d48;
          box-shadow: 0 0 0 2px #e11d4833;
          outline: none;
        }
        .form-group label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: #7c3aed;
          font-size: 1rem;
          font-weight: 500;
          pointer-events: none;
          transition: 0.2s;
          background: transparent;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -0.7rem;
          left: 0.8rem;
          font-size: 0.85rem;
          color: #e11d48;
          background: #fff;
          padding: 0 0.2rem;
        }
      `}</style>
    </form>
  );
}
