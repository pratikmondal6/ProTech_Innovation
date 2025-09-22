// components/Founder.tsx
"use client";
import Image from "next/image";
import founders from "@/data/objects/Founders";
export default function Founder() {
    return (
        <section
            id="founders"
            className="relative w-full py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
        >
            {/* Background motion blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl animate-spin-slow"></div>

            {/* Title */}
            <div className="mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Meet Our Professional Members
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-center">
                    4 Professional Members who inspire innovation, leadership, and impact.
                </p>
            </div>

            {/* Founder Cards */}
            <div className={styles.foundersList + " max-w-6xl mx-auto relative z-10"}>
                {founders.map((founder) => (
                    <div
                        key={founder.id}
                        className={styles.founderCard}
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
                        <h3 className={styles.founderName}>{founder.name}</h3>
                        <p className={styles.founderRole}>{founder.role}</p>
                        {/* Underline animation */}
                        <div className={styles.underline}></div>
                    </div>
                ))}
            </div>
        </section>
    );

