"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import { Target, Eye, Heart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(".mission-card", 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-grid",
            start: "top 90%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium About Hero */}
      <section className="relative pt-48 pb-12 overflow-hidden">
        <div className="absolute top-40 left-0 w-full text-center select-none pointer-events-none opacity-[0.02]">
          <span className="text-[15vw] font-bold text-brand-dark tracking-tighter uppercase">Our Story</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="hero-reveal flex items-center gap-4 mb-6 text-brand-primary">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[11px] uppercase tracking-[0.5em] font-semibold">About Varenyam</span>
              </div>
              <h1 className="hero-reveal text-4xl md:text-6xl font-semibold text-brand-dark tracking-tighter leading-[1.2] mb-8">
                Compassion Meets <br />
                <span className="text-brand-primary italic font-medium">Precision.</span>
              </h1>
            </div>
            <div className="hero-reveal pb-4">
              <p className="text-[12.5px] text-slate-400 font-normal max-w-xs leading-relaxed border-l border-brand-primary/20 pl-6">
                A center dedicated to evidence-based neurorehabilitation and pediatric excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Mission/Vision/Values */}
      <div className="py-2 px-6 mission-grid">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
          {[
            { icon: Target, title: "Our Mission", text: "To provide evidence-based neurorehabilitation with a patient-centered approach, focusing on functional independence." },
            { icon: Eye, title: "Our Vision", text: "To be the leading center for neurological recovery, where innovation meets empathy to rebuild lives." },
            { icon: Heart, title: "Our Values", text: "Integrity, Empathy, Scientific Precision, and a deep commitment to the long-term recovery of every patient." }
          ].map((item, i) => (
            <div key={i} className="mission-card p-10 bg-white border border-slate-50 group hover:bg-brand-muted/30 transition-all duration-500">
              <div className="w-12 h-12 bg-brand-dark text-white rounded-lg flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-primary transition-all">
                <item.icon size={20} />
              </div>
              <h4 className="text-xl font-semibold text-brand-dark mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-[13px] font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <About />
      <Marquee />
      <Contact />
    </main>
  );
}
