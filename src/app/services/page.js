"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ContactStrap from "@/components/ContactStrap";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight, Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IconMap = {
  Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users
};

export default function ServicesPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(".hero-reveal", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );

      // Section reveals with staggered child elements
      services.forEach((service) => {
        const selector = `.service-section-${service.id}`;
        if (document.querySelector(selector)) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: selector,
              start: "top 90%",
            }
          });

          tl.fromTo(`${selector} .service-img`, 
            { scale: 1.05, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
          )
          .fromTo(`${selector} .service-content`, 
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          );
        }
      });
    }, containerRef);
    
    const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 100);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium Minimalist Hero - Normalized Font Size */}
      <section className="relative pt-48 pb-12 overflow-hidden">
        <div className="absolute top-40 left-0 w-full text-center select-none pointer-events-none opacity-[0.02]">
          <span className="text-[15vw] font-bold text-brand-dark tracking-tighter">EXCELLENCE</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="hero-reveal flex items-center gap-4 mb-6 text-brand-primary">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[11px] uppercase tracking-[0.5em] font-semibold">Our Expertise</span>
              </div>
              <h1 className="hero-reveal text-4xl md:text-6xl font-semibold text-brand-dark tracking-tighter leading-[1.2] mb-8">
                Precision <br />
                <span className="text-brand-primary italic font-medium">Rehabilitation.</span>
              </h1>
            </div>
            <div className="hero-reveal pb-4">
              <p className="text-sm text-slate-400 font-normal max-w-xs leading-relaxed border-l border-brand-primary/20 pl-6">
                Ten specialized clinical programs engineered for neurological recovery and functional independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Alternating Sections with Layered UI */}
      <div className="space-y-1">
        {services.map((service, i) => {
          const Icon = IconMap[service.icon] || Activity;
          const isEven = i % 2 === 0;

          return (
            <section 
              key={service.id} 
              className={cn(
                `service-section-${service.id} py-2 px-6`,
                isEven ? "bg-white" : "bg-brand-muted/20"
              )}
            >
              <div className="max-w-7xl mx-auto border-t border-slate-50 pt-10 pb-8">
                <div className={cn(
                  "flex flex-col lg:flex-row items-center gap-16",
                  !isEven && "lg:flex-row-reverse"
                )}>
                  <div className="w-full lg:w-3/5 service-img relative group">
                    <div className="absolute -inset-4 bg-brand-primary/5 rounded-2xl group-hover:bg-brand-primary/10 transition-all duration-500" />
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5 service-content">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-brand-dark text-white rounded-lg flex items-center justify-center shadow-lg">
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-brand-primary font-semibold uppercase tracking-widest leading-none">Varenyam Clinical</span>
                        <span className="text-[11px] text-slate-300 font-medium uppercase tracking-widest mt-1">Specialization 0{i+1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-6 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-slate-500 font-normal leading-relaxed mb-8">
                      {service.longDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-widest px-4 py-1.5 bg-white border border-slate-100 text-brand-secondary font-semibold rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-4 group text-brand-dark hover:text-brand-primary transition-all"
                    >
                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <MoveRight size={16} />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">View Case Study</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-2 px-6">
        <div className="max-w-7xl mx-auto bg-brand-dark rounded-[2.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tight relative z-10">
            Ready to Begin <br /> Your <span className="text-brand-primary italic">Recovery?</span>
          </h2>
          <p className="text-slate-400 font-normal max-w-xl mx-auto mb-12 text-lg relative z-10">
            Consult with our multidisciplinary team to build a precision roadmap for your independence.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-4 rounded-xl text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white hover:text-brand-dark transition-all relative z-10 shadow-xl shadow-brand-primary/20">
            Schedule Consultation <MoveRight size={14} />
          </Link>
        </div>
      </section>

      <Marquee />
      <ContactStrap />
      <Contact />
    </main>
  );
}
