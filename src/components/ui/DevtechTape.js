"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function DevtechTape() {
  const tapeRef = useRef(null);
  const sparkel = <span className="text-black font-bold text-4xl">✦</span>;
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ticker", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }, tapeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={tapeRef} className="relative w-full py-5 overflow-hidden bg-white border-y-4 border-[#211951]">
      <div className="whitespace-nowrap flex ticker text-[#211951] font-bold uppercase text-4xl tracking-widest">
        {Array(10)
          .fill("PROTECH INNOVATION")
          .map((text, i) => (
            <span key={i} className="mx-4">
              {text} {sparkel}
            </span>
          ))}
      </div>

    </div>
    
  );
}
