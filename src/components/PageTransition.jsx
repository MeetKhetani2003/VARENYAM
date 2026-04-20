"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in and subtle lift
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 10, filter: "blur(5px)" },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)", 
          duration: 1, 
          ease: "expo.out" 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
