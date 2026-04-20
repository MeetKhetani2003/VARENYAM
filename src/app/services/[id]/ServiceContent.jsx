"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckCircle2, MoveRight, ChevronRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceContent({ service }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (service && containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-reveal", 
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );

        gsap.fromTo(".section-reveal", 
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".section-reveal",
              start: "top 85%",
            }
          }
        );
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, [service]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Service Detail Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-slate-50/30">
        <div className="absolute top-32 left-0 w-full text-center select-none pointer-events-none opacity-[0.02]">
          <span className="text-[12vw] font-bold text-brand-dark tracking-tighter uppercase whitespace-nowrap">{service.title}</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="hero-reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-12">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-300" />
            <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-brand-primary">Case Study</span>
          </nav>
          
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="hero-reveal">
              <div className="flex items-center gap-4 mb-6 text-brand-primary">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[11px] uppercase tracking-[0.4em] font-semibold">Service Detail</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold text-brand-dark mb-8 tracking-tighter leading-[1.1]">
                {service.title.split(' ')[0]} <br />
                <span className="text-brand-primary italic font-medium">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-[15px] text-slate-500 font-normal leading-relaxed mb-10 max-w-xl border-l border-brand-primary/20 pl-6">
                {service.longDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-white border border-slate-100 text-[10px] uppercase tracking-widest text-brand-primary font-bold rounded-lg shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="hero-reveal relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt={service.title}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Methodology */}
      <section className="py-24 px-6 section-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-6 tracking-tight">Clinical Methodology</h2>
                <div className="space-y-6 text-[15px] text-slate-500 font-normal leading-relaxed">
                  <p>
                    Our approach to {service.title} is rooted in the latest neurological research and evidence-based practice. We focus on neuroplasticity—the brain's ability to reorganize itself—to help patients recover lost motor functions through precision mapping and intensive therapy.
                  </p>
                  <p>
                    By combining intensive manual therapy with task-specific training, we ensure that the progress made in our clinic translates directly to better quality of life and independence at home.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-muted/30 p-10 md:p-12 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />
              <h3 className="text-xl font-semibold text-brand-dark mb-8 relative z-10">Core Recovery Pillars</h3>
              <div className="space-y-6 relative z-10">
                {[
                  "Accelerated motor recovery & reflex mapping",
                  "Improved functional independence in daily tasks",
                  "Expert clinical supervision by specialists",
                  "Evidence-based neurological protocols",
                  "Data-driven personalized goal setting"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured CTA */}
      <section className="pb-24 px-6 section-reveal">
        <div className="max-w-7xl mx-auto bg-brand-dark p-12 md:p-20 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-brand-dark/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <h3 className="text-3xl md:text-5xl font-semibold mb-8 relative z-10 tracking-tight leading-tight text-slate-100">
            Ready to Begin <br /> Your <span className="text-brand-primary italic">Recovery Path?</span>
          </h3>
          <p className="text-slate-400 font-normal max-w-xl mx-auto mb-12 text-base relative z-10">
            Consult with our multidisciplinary team to build a precision roadmap for your independence through {service.title}.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-brand-primary text-white px-10 py-5 rounded-xl text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white hover:text-brand-dark transition-all relative z-10 shadow-xl shadow-brand-primary/20">
            Schedule Clinical Assessment <MoveRight size={14} />
          </Link>
        </div>
      </section>

      <Marquee />
      <Contact />
    </main>
  );
}
