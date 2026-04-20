"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Magnetic from "./Magnetic";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        // Snappier entrance - duration reduced to 0.8s
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } });
        
        tl.fromTo(".hero-line", 
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05 }
        )
        .fromTo(".hero-sub", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.5"
        )
        .fromTo(".hero-visual", 
          { scale: 1.05, opacity: 0, filter: "blur(10px)" },
          { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1 },
          "-=0.6"
        );

        if (visualRef.current) {
          gsap.to(visualRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          });
        }
      }, containerRef);
      
      ScrollTrigger.refresh();
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="relative pt-48 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">
          <div>
            <div className="hero-line flex items-center gap-4 mb-10 text-brand-primary">
              <div className="w-10 h-[1px] bg-brand-primary" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Neurocare Center</span>
            </div>
            
            <h1 className="hero-line text-5xl md:text-7xl lg:text-[5rem] font-medium leading-[1.1] mb-12 tracking-tighter text-brand-dark">
              Restoring <span className="text-gradient">Movement</span>, <br />
              Rebuilding Lives.
            </h1>
            
            <p className="hero-sub text-lg text-slate-400 font-light leading-relaxed mb-16 max-w-xl">
              Varenyam provides evidence-based precision neurorehabilitation with a patient-centered approach to help you regain functional independence.
            </p>
            
            <div className="hero-sub flex flex-wrap gap-10">
              <Link href="/services" className="inline-flex items-center gap-4 group">
                <span className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                  <MoveRight size={20} />
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-dark font-medium">Explore Treatments</span>
              </Link>
            </div>
          </div>

          <div className="hero-sub relative">
            <div ref={visualRef} className="hero-visual relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Varenyam Therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
