"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Optimized Lenis Settings for Zero Lag
    const lenis = new Lenis({
      duration: 1.0, // Snappier
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly faster response
      lerp: 0.12, // More reactive
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Dynamic ScrollTrigger Refresh
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Force reset and refresh on navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
