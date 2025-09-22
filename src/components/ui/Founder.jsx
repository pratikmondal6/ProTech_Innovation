// components/Founder.jsx
"use client";

import Image from "next/image";
import founders from "@/data/objects/Founders";
import { motion } from "framer-motion";
import styles from "./Founder.module.css";

export default function Founder() {
    return (
        <section
            id="founders"
            className="relative w-full py-24 px-6 bg-gradient-to-b from-[#eaf0fb] via-[#ede9fe] to-[#ffe4ef] overflow-hidden"
        >
            {/* Animated background blobs for fluidity */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.25, scale: 1 }} transition={{ duration: 1.2 }} className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full blur-3xl" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1.4 }} className="absolute -bottom-32 -right-24 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.15, scale: 1 }} transition={{ duration: 1.6 }} className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-300 to-blue-200 rounded-full blur-2xl" />

            {/* Title */}
            <div className="mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Meet Our Expert Founders
                </h2>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                    Our founders are dynamic leaders, driving innovation and excellence across technology, design, and strategy. Their expertise and vision shape our culture and fuel our growth.
                </p>
            </div>

            {/* Founder Cards with animation */}
            <div className={styles.foundersList + " max-w-6xl mx-auto relative z-10"}>
                {founders.map((founder, idx) => (
                    <motion.div
                        key={founder.id}
                        className={styles.founderCard}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Profile Image */}
                        <div className={styles.founderImageWrap}>
                            <Image
                                src={founder.img}
                                alt={founder.name}
                                width={160}
                                height={160}
                                className={styles.founderImage}
                            />
                        </div>

                        {/* Name & Role */}
                        <h3 className={styles.founderName + " bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"}>
                            {founder.name}
                        </h3>
                        <p className={styles.founderRole}>{founder.role}</p>

                        {/* Underline animation */}
                        <div className={styles.underline}></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
