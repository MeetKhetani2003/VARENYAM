"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pediatricApproaches = [
  {
    id: 1,
    title: "Bobath / NDT",
    tagline: "Helping your child move with confidence and control.",
    description: "We gently guide your child’s body to learn better posture and movement—making everyday activities like sitting, standing, and walking easier and more natural.",
    image: "/treatments/pedeatric/treat1.png"
  },
  {
    id: 2,
    title: "Rood’s Sensory–Motor Approach",
    tagline: "Activating muscles. Calming movement. Restoring balance.",
    description: "Using simple touch techniques like tapping and vibration, we help muscles either “wake up” or relax—so your child can move more smoothly.",
    image: "/treatments/pedeatric/treat2.png"
  },
  {
    id: 3,
    title: "Sensory Integration (SI)",
    tagline: "Where play becomes powerful therapy.",
    description: "Through fun activities like swings and balance play, we help your child’s brain better understand their body—improving focus, behavior, and coordination.",
    image: "/treatments/pedeatric/treat3.png"
  },
  {
    id: 4,
    title: "Motor Learning / Task-Oriented Approach",
    tagline: "Learning by doing, growing with confidence.",
    description: "We practice real-life activities like reaching, walking, and playing—helping your child become more independent in daily life.",
    image: "/treatments/pedeatric/treat4.png"
  },
  {
    id: 5,
    title: "Developmental Sequence Approach",
    tagline: "Building strong foundations, one step at a time.",
    description: "We follow your child’s natural growth journey—rolling, sitting, crawling, and walking—to ensure each milestone is strong and stable.",
    image: "/treatments/pedeatric/treat5.png"
  },
  {
    id: 6,
    title: "Neuro-Sequential Model",
    tagline: "Calm mind first, better learning next.",
    description: "We focus on helping your child feel safe and regulated first—because a calm brain learns, behaves, and moves better.",
    image: "/treatments/pedeatric/treat6.png"
  }
];

export default function PediatricApproaches() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".approach-row").forEach((row) => {
      gsap.fromTo(row,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 approach-row">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-semibold text-brand-primary">Our Expertise</span>
            <div className="w-12 h-[1px] bg-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 tracking-tight">
            Specialized Pediatric Approaches
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            We use gentle, play-based methodologies to help your child achieve developmental milestones with confidence and joy.
          </p>
        </div>

        <div className="space-y-32">
          {pediatricApproaches.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative approach-row">
                
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-black text-slate-100 leading-none select-none">
                        {item.id.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="pl-4 border-l border-brand-primary/20 mt-6">
                      <p className="text-[17px] font-medium text-brand-primary mb-3">
                        {item.tagline}
                      </p>
                      <p className="text-lg text-slate-500 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-slate-50 group flex items-center justify-center">
                      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      {/* Using aspect ratio and object-contain ensures images fit perfectly regardless of original dimensions */}
                      <div className="relative aspect-[4/3] w-full mix-blend-multiply flex items-center justify-center">
                        <Image 
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
