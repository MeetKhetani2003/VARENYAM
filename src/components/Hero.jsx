"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-line", 
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power1.out" }
      );

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="hero-line flex items-center gap-4 mb-6 text-brand-primary">
              <div className="w-8 h-[1px] bg-brand-primary" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold">Neurocare Centre</span>
            </div>
            
            <h1 className="hero-line text-4xl md:text-6xl font-semibold leading-[1.2] mb-8 tracking-tighter text-brand-dark">
              Restoring <span className="text-brand-primary">Movement</span>, <br />
              Rebuilding Lives.
            </h1>
            
            <p className="hero-line text-base text-slate-500 font-normal leading-relaxed mb-10 max-w-xl">
              Varenyam provides evidence-based precision neurorehabilitation with a patient-centered approach to help you regain functional independence.
            </p>
            
            <div className="hero-line flex flex-wrap gap-6">
              <Link href="/services" className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-3 rounded-lg text-[10px] uppercase tracking-widest font-semibold hover:bg-brand-primary transition-all">
                Explore Treatments <MoveRight size={14} />
              </Link>
            </div>
          </div>

          <div className="hero-line relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
              <img 
                ref={imgRef}
                src="/hero.png" 
                alt="Modern Neurorehabilitation"
                className="w-full h-[120%] object-cover absolute top-[-10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
