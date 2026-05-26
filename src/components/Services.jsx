"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { services } from "@/data/services";
import { Activity, Baby, MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IconMap = { Activity, Baby };

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon] || Activity;
            return (
              <Link
                key={service.id}
                href={`/treatments/${service.id}`}
                className="service-card group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent group-hover:from-brand-dark/90 transition-all duration-500" />
                
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-semibold mb-2 block">Varenyam Clinical</span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-4 max-w-md">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center gap-3 text-white group-hover:text-brand-primary transition-colors">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <MoveRight size={14} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Explore</span>
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

export default Services;
