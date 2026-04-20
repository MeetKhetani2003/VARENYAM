"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(".marquee-inner", {
          xPercent: -50,
          ease: "none",
          duration: 40,
          repeat: -1,
        });
      }, marqueeRef);
      return () => ctx.revert();
    }
  }, []);

  const taglines = [
    "RESTORING MOVEMENT",
    "REBUILDING LIVES",
    "RECOVERY MEETS HOPE",
    "SMALL STEPS. BIG RECOVERIES."
  ];

  return (
    <div ref={marqueeRef} className="py-16 md:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden whitespace-nowrap marquee-container">
      <div className="marquee-inner inline-flex gap-20 md:gap-40 items-center">
        {[...taglines, ...taglines, ...taglines].map((text, i) => (
          <span 
            key={i} 
            className="text-brand-dark text-4xl md:text-6xl lg:text-[8vw] font-medium tracking-tighter flex items-center gap-12 md:gap-20 opacity-[0.03] select-none"
          >
            {text}
            <div className="w-2 h-2 md:w-4 md:h-4 bg-brand-primary rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
