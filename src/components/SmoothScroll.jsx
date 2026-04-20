"use client";

import { useEffect, useLayoutEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when images or fonts load
    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);
    
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    // Initial refresh after a short delay to ensure DOM is settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener("load", refresh);
      clearTimeout(timer);
    };
  }, []);

  // Force refresh on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
