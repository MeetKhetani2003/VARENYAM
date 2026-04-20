"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  },
  {
    name: "Priya Sharma",
    role: "Parkinson's Care",
    text: "Varenyam has significantly improved my mobility and quality of life. The clinical environment is very supportive.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "Post-Surgical Rehab",
    text: "The team here is incredible. They understood my specific limitations and pushed me safely toward full recovery.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate total width of one set of testimonials
      const totalWidth = sliderRef.current.scrollWidth / 3; // divided by 3 because we tripled the items

      const animation = gsap.to(sliderRef.current, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        onReverseComplete: () => {
          gsap.set(sliderRef.current, { x: 0 });
        }
      });

      containerRef.current.addEventListener("mouseenter", () => animation.pause());
      containerRef.current.addEventListener("mouseleave", () => animation.play());

      gsap.fromTo(".testimonial-header", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 10%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Triple the array for seamless infinite looping
  const loopedItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={containerRef} className="py-12 px-6 bg-brand-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="testimonial-header max-w-2xl">
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-brand-primary mb-3 font-semibold">Success Stories</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tighter">Voices of <span className="text-brand-primary italic">Recovery.</span></h3>
          <p className="text-base text-slate-500 font-normal leading-relaxed">
            Restoring hope and independence through precision neuro-rehabilitation.
          </p>
        </div>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative w-full overflow-hidden select-none">
        <div 
          ref={sliderRef}
          className="flex gap-6 w-max"
        >
          {loopedItems.map((t, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[calc(33.333vw-24px)] lg:w-[calc(33.333vw-48px)] flex-shrink-0"
            >
              <div className="bg-white p-6 md:p-6 rounded-[1.5rem] border border-slate-100 shadow-sm relative h-full  flex flex-col justify-between hover:border-brand-primary/20 transition-colors duration-300">
                <div className="absolute top-6 right-6 text-brand-primary/10">
                  <Quote size={32} />
                </div>
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-brand-accent text-brand-accent" />
                    ))}
                  </div>

                  <p className="text-sm text-brand-dark font-medium leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-muted flex items-center justify-center text-brand-primary font-bold text-base border border-brand-primary/5">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-dark">{t.name}</h4>
                    <p className="text-[9px] text-brand-primary font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subtle Side Fades for Premium Look */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-muted/30 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
