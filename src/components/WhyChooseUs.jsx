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
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power1.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 95%",
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
    <section ref={containerRef} className="py-1 px-6 bg-white">
      <div className="max-w-7xl mx-auto border-t border-slate-50 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-item">
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-brand-primary mb-4 font-medium">Why Choose Us</h2>
            <h3 className="text-2xl md:text-4xl font-medium text-brand-dark mb-4 tracking-tight">
              Evidence-Based <span className="text-gradient">Precision Care.</span>
            </h3>
            <p className="text-sm text-brand-dark/60 font-light leading-relaxed mb-8 max-w-lg">
              Our multidisciplinary approach combines the latest scientific research with compassionate care.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-medium text-brand-dark mb-1">{stat.val}</p>
                  <p className="text-[8px] uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-item relative">
            <div className="aspect-[16/9] rounded-2xl bg-brand-muted/30 flex items-center justify-center p-8 overflow-hidden border border-slate-100">
              <ShieldCheck size={80} className="text-brand-primary opacity-5" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="text-base text-brand-dark/50 font-light italic leading-relaxed">
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
