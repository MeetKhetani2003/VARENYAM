"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GraduationCap, Award, Stethoscope, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".reveal-up", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="reveal-up">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark mb-8 tracking-tight leading-tight">
              Evidence-Based Care <br />
              <span className="text-gradient">with Empathy.</span>
            </h3>
            
            <div className="space-y-6 text-slate-500 font-light leading-relaxed mb-12">
              <p>
                Varenyam Neurocare Center was started with the aim of providing evidence-based neurorehabilitation with a patient-centered approach. 
                We focus on improving functional independence, quality of life, and long-term recovery through personalized therapy plans.
              </p>
              <p>
                We specialize in neurorehabilitation and pediatric physiotherapy. Our approach is based on customized treatment plans, scientific techniques, and active family involvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                <Heart size={24} className="text-brand-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Patient Centered</h4>
                  <p className="text-xs text-slate-400">Tailored plans for individuals.</p>
                </div>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                <Stethoscope size={24} className="text-brand-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Evidence Based</h4>
                  <p className="text-xs text-slate-400">Scientifically backed protocols.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Card */}
          <div className="reveal-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] rotate-2 scale-105 group-hover:rotate-0 transition-transform duration-700" />
              <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-2xl shadow-slate-100 relative">
                <div className="w-24 h-24 bg-slate-100 rounded-3xl mb-8 overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=300" 
                    alt="Dr. Khushi Joshi"
                    className="w-full h-full object-cover"
                   />
                </div>
                
                <h4 className="text-3xl font-medium text-brand-dark mb-2 tracking-tight">Dr. Khushi Joshi</h4>
                <p className="text-brand-primary text-sm font-medium mb-8">Neurophysiotherapist & Pediatric Specialist</p>
                
                <div className="space-y-4 mb-8 border-t border-slate-50 pt-8">
                  <div className="flex items-center gap-4 text-slate-500">
                    <GraduationCap size={18} className="text-brand-primary" />
                    <span className="text-sm font-light">Specialist in Stroke Rehab & CP</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <Award size={18} className="text-brand-primary" />
                    <span className="text-sm font-light">Advanced Neurorehabilitation</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-10 italic font-light">
                  "Expertise in stroke rehab, cerebral palsy, developmental disorders, and advanced neurorehabilitation techniques."
                </p>

                <button className="w-full border border-slate-200 text-slate-600 py-4 rounded-full text-[10px] uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
                  View Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
