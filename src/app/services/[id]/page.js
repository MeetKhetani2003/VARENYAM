"use client";

import React, { useEffect, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowLeft, CheckCircle2, MoveRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    if (service && containerRef.current) {
      const ctx = gsap.context(() => {
        // Use fromTo for absolute reliability
        gsap.fromTo(".reveal", 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out",
          }
        );

        gsap.fromTo(".reveal-scroll", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".reveal-scroll",
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, containerRef);
      
      ScrollTrigger.refresh();
      return () => ctx.revert();
    }
  }, [service]);

  if (!service) {
    return notFound();
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Detail Hero */}
      <div className="pt-48 pb-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors mb-12">
            <ArrowLeft size={14} /> Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h1 className="text-4xl md:text-6xl font-medium text-brand-dark mb-8 tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-xl">
                {service.longDesc}
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-white border border-slate-100 text-[10px] uppercase tracking-widest text-brand-primary shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits / Information */}
      <section className="py-32 px-6 reveal-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-medium text-brand-dark mb-10 tracking-tight">Clinical Methodology</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                Our approach to {service.title} is rooted in the latest neurological research and evidence-based practice. We focus on neuroplasticity—the brain's ability to reorganize itself—to help patients recover lost motor functions.
              </p>
              <p className="text-slate-500 font-light leading-relaxed">
                By combining intensive manual therapy with task-specific training, we ensure that the progress made in our clinic translates directly to better quality of life and independence at home.
              </p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
              <h3 className="text-xl font-medium text-brand-dark mb-8">Why this treatment?</h3>
              <div className="space-y-6">
                {[
                  "Accelerated motor recovery",
                  "Improved functional independence",
                  "Expert clinical supervision",
                  "Evidence-based protocols",
                  "Personalized goal setting"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle2 size={20} className="text-brand-primary" />
                    <span className="text-sm text-slate-500 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="pb-32 px-6 reveal-scroll">
        <div className="max-w-7xl mx-auto bg-brand-dark p-12 md:p-24 rounded-[4rem] text-white text-center">
          <h3 className="text-3xl md:text-5xl font-medium mb-8">Ready to Start?</h3>
          <p className="text-slate-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Take the first step towards recovery with a comprehensive clinical assessment for {service.title}.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-accent text-brand-dark px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-all shadow-2xl">
            Request Assessment <MoveRight size={18} />
          </Link>
        </div>
      </section>

      <Marquee />
      <Contact />
    </main>
  );
}
