"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import { Target, Eye, Heart } from "lucide-react";
import { gsap } from "gsap";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".reveal", 
          { y: 5, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* About Hero - Matching Home/Services Style */}
      <div className="pt-32 pb-4 px-6 bg-brand-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-4 font-semibold">Our Story</h2>
            <h1 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-4 tracking-tighter">
              About <span className="text-brand-primary">Varenyam.</span>
            </h1>
            <p className="text-base text-slate-500 font-normal max-w-xl">
              A center dedicated to evidence-based neurorehabilitation and pediatric excellence, where precision meets empathy.
            </p>
          </div>
        </div>
      </div>

      <div className="py-2 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
          <div className="reveal p-8 bg-white border border-slate-50">
            <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary mb-6">
              <Target size={20} />
            </div>
            <h4 className="text-lg font-semibold text-brand-dark mb-3">Our Mission</h4>
            <p className="text-slate-500 leading-relaxed text-xs font-normal">
              To provide evidence-based neurorehabilitation with a patient-centered approach, focusing on improving functional independence.
            </p>
          </div>
          <div className="reveal p-8 bg-white border border-slate-50">
            <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary mb-6">
              <Eye size={20} />
            </div>
            <h4 className="text-lg font-semibold text-brand-dark mb-3">Our Vision</h4>
            <p className="text-slate-500 leading-relaxed text-xs font-normal">
              To be the leading center for neurological recovery, where innovation meets empathy to rebuild lives and restore movement.
            </p>
          </div>
          <div className="reveal p-8 bg-white border border-slate-50">
            <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary mb-6">
              <Heart size={20} />
            </div>
            <h4 className="text-lg font-semibold text-brand-dark mb-3">Our Values</h4>
            <p className="text-slate-500 leading-relaxed text-xs font-normal">
              Integrity, Empathy, Scientific Precision, and a deep commitment to the long-term recovery of every patient we serve.
            </p>
          </div>
        </div>
      </div>

      <About />
      <Marquee />
      <Contact />
    </main>
  );
}
