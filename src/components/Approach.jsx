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
        // Snappier scroll reveal - duration 0.8s, trigger sooner at 90%
        gsap.fromTo(".reveal-up", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play none none none"
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
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-up">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              A Holistic <br />
              <span className="text-gradient">Philosophy.</span>
            </h2>
            <p className="text-base text-slate-500 font-light max-w-lg mb-12 leading-relaxed">
              We combine specialized techniques with clinical science to provide a path towards independent movement.
            </p>
            
            <div className="space-y-2">
              {principles.map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-6 border-b border-slate-100 group">
                  <span className="text-[10px] text-brand-primary opacity-40">0{i+1}</span>
                  <h3 className="text-xl font-medium group-hover:translate-x-3 transition-transform duration-500">{item.title}</h3>
                  <div className="ml-auto">
                    <item.icon size={18} className="text-brand-primary opacity-30" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
                alt="Therapy"
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
