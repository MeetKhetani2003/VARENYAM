"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight, ChevronRight, Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const IconMap = {
  Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users
};

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        // Snappy Hero Reveal - 0.7s
        gsap.fromTo(".reveal-up", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power2.out",
          }
        );

        // Faster List Reveal - 0.6s
        gsap.fromTo(".service-row", 
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".services-list",
              start: "top 95%",
              toggleActions: "play none none none"
            }
          }
        );
      }, containerRef);
      
      ScrollTrigger.refresh();
      return () => ctx.revert();
    }
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Services Hero */}
      <div className="pt-48 pb-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal-up">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Expertise & Treatments</h2>
            <h1 className="text-4xl md:text-7xl font-medium text-brand-dark mb-8 tracking-tighter leading-[1.1]">
              A Path to <span className="text-gradient">Functional Independence.</span>
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed">
              We provide 10 specialized neurorehabilitation services tailored for complex neurological conditions in both adults and children.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Services List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto services-list">
          <div className="grid gap-4">
            {services.map((service, i) => {
              const Icon = IconMap[service.icon] || Activity;
              return (
                <Link 
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="service-row group flex flex-col md:flex-row md:items-center justify-between p-10 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:bg-brand-dark hover:border-brand-dark transition-all duration-500"
                >
                  <div className="flex items-center gap-8 mb-8 md:mb-0">
                    <span className="text-[10px] uppercase tracking-widest text-slate-300 group-hover:text-white/40">0{i+1}</span>
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-white/10 group-hover:text-brand-accent transition-colors">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium text-brand-dark group-hover:text-white transition-colors mb-2">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, j) => (
                          <span key={j} className="text-[9px] uppercase tracking-widest text-slate-400 group-hover:text-white/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-12">
                    <p className="hidden lg:block text-sm text-slate-400 group-hover:text-white/60 font-light max-w-[300px]">
                      {service.shortDesc}
                    </p>
                    <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-brand-dark group-hover:border-white/20 group-hover:text-white transition-all group-hover:bg-white/10">
                      <MoveRight size={20} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-50 border border-slate-100 rounded-[4rem] p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-brand-dark mb-8 tracking-tight">Need a Clinical Consultation?</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Every recovery is unique. Speak with our clinical experts to determine the best treatment roadmap for you or your loved ones.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-brand-dark text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10">
            Book Appointment <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <Marquee />
      <Contact />
    </main>
  );
}
