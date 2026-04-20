"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Target, Clock, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".reveal-item", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const stats = [
    { label: "Successful Cases", val: "500+", icon: Activity },
    { label: "Years Experience", val: "10+", icon: Clock },
    { label: "Patient Satisfaction", val: "100%", icon: Target }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-item">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark mb-8 tracking-tight">
              Evidence-Based <br />
              <span className="text-gradient">Precision Care.</span>
            </h3>
            <p className="text-base text-slate-500 font-light leading-relaxed mb-12 max-w-lg">
              Our multidisciplinary approach combines the latest scientific research with compassionate care to ensure the best possible outcomes for our patients.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-medium text-brand-dark mb-1">{stat.val}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-item relative">
            <div className="aspect-square rounded-[3rem] bg-slate-50 flex items-center justify-center p-12 overflow-hidden border border-slate-100 shadow-sm">
              <ShieldCheck size={120} className="text-brand-primary opacity-5" />
              <div className="absolute inset-0 flex items-center justify-center p-20 text-center">
                <p className="text-lg text-slate-400 font-light italic leading-relaxed">
                  "Dedicated to restoring movement and independence for every patient we serve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
