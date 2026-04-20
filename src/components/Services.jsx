"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Activity, 
  Baby, 
  Target, 
  ShieldCheck, 
  Zap, 
  Hand, 
  Move, 
  Users, 
  Accessibility 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Neuro Physiotherapy", desc: "Stroke, SCI, TBI, Parkinson's rehab.", icon: Activity },
    { title: "Pediatric Neuro Rehab", desc: "Care for CP, GDD, and Autism.", icon: Baby },
    { title: "Task-Oriented Therapy", desc: "Improving functional independence.", icon: Target },
    { title: "Vibration Therapy", desc: "Whole body vibration training.", icon: Zap },
    { title: "Spasticity Management", desc: "Hand function and motor control.", icon: Move },
    { title: "Caregiver Training", desc: "Empowering families for recovery.", icon: Users },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="service-card p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-normal text-brand-dark mb-4">{service.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
