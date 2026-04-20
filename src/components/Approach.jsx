"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HeartPulse, BrainCircuit, Users2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".reveal-up", 
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
            }
          }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  const principles = [
    { title: "Patient-Centered", icon: HeartPulse },
    { title: "Evidence-Based", icon: BrainCircuit },
    { title: "Family Support", icon: Users2 }
  ];

  return (
    <section ref={sectionRef} className="py-1 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-slate-50 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-up">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-brand-dark">
              A Holistic <span className="text-brand-primary">Philosophy.</span>
            </h2>
            <p className="text-sm text-brand-dark/60 font-light max-w-lg mb-8 leading-relaxed">
              We combine specialized techniques with clinical science to provide a path towards independent movement.
            </p>
            
            <div className="space-y-1">
              {principles.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-50 group">
                  <span className="text-[12px] text-brand-primary font-medium">0{i+1}</span>
                  <h3 className="text-base font-medium text-brand-dark">{item.title}</h3>
                  <div className="ml-auto">
                    <item.icon size={16} className="text-brand-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="/approach.png" 
                alt="Clinical Precision Assessment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
