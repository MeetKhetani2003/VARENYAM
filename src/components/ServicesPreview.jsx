"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Activity, Baby, Target, Zap, ShieldCheck, Hand, Accessibility, Users, 
  ChevronRight 
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
        gsap.fromTo(".reveal-up", 
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
            }
          }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-1 px-6 bg-white">
      <div className="max-w-7xl mx-auto border-t border-slate-50 pt-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="max-w-2xl reveal-up">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-2 font-medium">Expertise & Treatments</h2>
            <h3 className="text-2xl md:text-3xl font-medium text-brand-dark tracking-tight leading-tight">
              Specialized Care <span className="text-gradient">Designed for Recovery.</span>
            </h3>
          </div>
          <Link href="/services" className="reveal-up text-[10px] uppercase tracking-[0.2em] text-brand-primary hover:text-brand-dark transition-colors flex items-center gap-2 pb-1 border-b border-brand-primary/20">
            View All <ChevronRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.slice(0, 8).map((service, i) => {
            const Icon = IconMap[service.icon] || Activity;
            return (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="reveal-up group p-6 bg-white border border-slate-50 hover:bg-brand-muted/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Icon size={16} />
                </div>
                <h4 className="text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-[10px] text-brand-dark/50 font-light leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
