"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Activity, Baby, ChevronRight, MoveRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IconMap = { Activity, Baby };

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".reveal-up", 
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
            }
          }
        );

        gsap.fromTo(".treatment-card",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".treatment-cards-grid",
              start: "top 85%",
            }
          }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl reveal-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-brand-primary" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary font-semibold">Expertise & Treatments</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark tracking-tight leading-[1.15]">
              Specialized Care{" "}
              <span className="text-brand-primary italic font-medium">Designed for Recovery.</span>
            </h2>
          </div>
          <Link href="/treatments" className="reveal-up text-[10px] uppercase tracking-[0.2em] text-brand-primary hover:text-brand-dark transition-colors flex items-center gap-2 pb-1 border-b border-brand-primary/20 hover:border-brand-dark/20">
            View All <ChevronRight size={12} />
          </Link>
        </div>

        {/* Treatment Image Cards */}
        <div className="treatment-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon] || Activity;
            return (
              <Link 
                key={service.id}
                href={`/treatments/${service.id}`}
                className="treatment-card group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent transition-all duration-500 group-hover:from-brand-dark/95 group-hover:via-brand-dark/40" />

                {/* Floating Icon Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-semibold">Varenyam Clinical</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-5 max-w-md">
                    {service.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 3).map((tag, j) => (
                      <span key={j} className="text-[9px] uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-white group-hover:text-brand-primary transition-colors">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <MoveRight size={16} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
                      Explore Treatment
                    </span>
                  </div>
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
