"use client";

import React, { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Stroke Recovery Patient",
    text: "The personalized care I received at Varenyam was exceptional. Dr. Khushi's expertise in stroke rehab helped me walk again within months.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Mother of Pediatric Patient",
    text: "Finding a specialist for my son's CP was difficult until we found Varenyam. Their pediatric setup and patient approach are world-class.",
    rating: 5
  },
  {
    name: "Amit Shah",
    role: "SCI Rehabilitation",
    text: "Evidence-based therapy and professional guidance. They focus on functional independence which was exactly what I needed.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        // Use fromTo for rock-solid reliability
        gsap.fromTo(".testimonial-card", 
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

  return (
    <section ref={containerRef} className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Patient Stories</h2>
          <h3 className="text-3xl md:text-5xl font-medium text-brand-dark mb-6 tracking-tight">Trust Built on Results.</h3>
          <p className="text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Real stories of recovery and hope from the people who have experienced our personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 relative"
            >
              <div className="absolute top-10 right-10 text-brand-primary/5">
                <Quote size={64} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-slate-500 font-light italic mb-10 relative z-10 leading-relaxed text-sm">
                "{t.text}"
              </p>

              <div className="pt-8 border-t border-slate-50">
                <h4 className="font-medium text-brand-dark">{t.name}</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
