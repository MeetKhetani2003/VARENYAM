"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users, 
  ArrowRight 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IconMap = {
  Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users
};

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Snappier grid reveal
        gsap.fromTo(".reveal-up", 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );

        gsap.fromTo(".minimal-card", 
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".minimal-grid",
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl reveal-up">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Expertise & Treatments</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark tracking-tight leading-tight">
              Specialized Care <br />
              <span className="text-gradient">Designed for Recovery.</span>
            </h3>
          </div>
          <Link href="/services" className="reveal-up text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 pb-2 border-b border-slate-100">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="minimal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service) => {
            const Icon = IconMap[service.icon] || Activity;
            return (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="minimal-card group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 bg-white"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>
                <h4 className="text-lg font-medium text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Discover <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
