"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const approaches = [
  {
    id: 1,
    title: "Rood’s Sensory–Motor Approach",
    description: "Sometimes, the body just needs the right kind of input to respond. Through gentle sensory techniques, we help muscles “switch on” or relax—so movement begins to feel possible again.",
    image: "/treatments/neuro/treat1.png",
    category: "Foundational Approaches"
  },
  {
    id: 2,
    title: "Brunnstrom Movement Therapy",
    description: "Recovery doesn’t happen all at once—and that’s okay. This approach respects your body’s natural pace, guiding it step-by-step towards more controlled movement.",
    image: "/treatments/neuro/treat2.png",
    category: "Foundational Approaches"
  },
  {
    id: 3,
    title: "PNF (Proprioceptive Neuromuscular Facilitation)",
    description: "With guided support and natural movement patterns, we help your body rediscover strength and coordination—often in ways that feel surprisingly intuitive.",
    image: "/treatments/neuro/treat3.png",
    category: "Foundational Approaches"
  },
  {
    id: 4,
    title: "Bobath / Neurodevelopmental Treatment (NDT)",
    description: "When movement feels difficult or unbalanced, we gently guide the body towards better posture and smoother control—making everyday actions feel more stable.",
    image: "/treatments/neuro/treat4.png",
    category: "Foundational Approaches"
  },
  {
    id: 5,
    title: "Carr & Shepherd – Motor Relearning Programme",
    description: "Because real recovery is about real life, this approach focuses on helping you regain everyday movements with confidence and clarity.",
    image: "/treatments/neuro/treat5.png",
    category: "Foundational Approaches"
  },
  {
    id: 6,
    title: "Task-Oriented / Functional Training",
    description: "Therapy is built around what truly matters to you—so every session brings you closer to doing daily activities more independently.",
    image: "/treatments/neuro/treat6.png",
    category: "Contemporary & Task-Specific Approaches",
    isHeader: true
  },
  {
    id: 7,
    title: "Motor Control & Motor Learning Approach",
    description: "The brain is capable of relearning at any stage. With the right practice and guidance, movements become easier, smoother, and more natural over time.",
    image: "/treatments/neuro/treat7.png",
    category: "Contemporary & Task-Specific Approaches"
  },
  {
    id: 8,
    title: "Constraint-Induced Movement Therapy (CIMT)",
    description: "Sometimes, progress comes from gently challenging the body. By encouraging the affected side, we help rebuild strength, trust, and function.",
    image: "/treatments/neuro/treat8.png",
    category: "Contemporary & Task-Specific Approaches"
  },
  {
    id: 9,
    title: "Mirror Therapy & Graded Motor Imagery (GMI)",
    description: "Recovery isn’t only physical—it’s also in the brain. This approach helps rebuild those connections in subtle yet powerful ways.",
    image: "/treatments/neuro/treat9.png",
    category: "Specialized & Targeted Therapies",
    isHeader: true
  },
  {
    id: 10,
    title: "Sensory Integration (Neuro applications)",
    description: "When the brain learns to process sensations better, the whole body responds differently—leading to improved coordination and comfort.",
    image: "/treatments/neuro/treat10.png",
    category: "Specialized & Targeted Therapies"
  },
  {
    id: 11,
    title: "Vestibular Rehabilitation Approach",
    description: "Feeling dizzy or off-balance can be unsettling. These exercises gently retrain your system, helping you feel steady and in control again.",
    image: "/treatments/neuro/treat11.png",
    category: "Specialized & Targeted Therapies"
  },
  {
    id: 12,
    title: "Frenkel’s Exercises (for Ataxia)",
    description: "Through slow and focused movements, we help bring back a sense of control and confidence in coordination.",
    image: "/treatments/neuro/treat12.png",
    category: "Specialized & Targeted Therapies"
  },
  {
    id: 13,
    title: "Cognitive Orientation to Daily Occupational Performance",
    description: "We don’t just guide movement—we help you understand it. This approach builds independence by strengthening problem-solving and confidence.",
    image: "/treatments/neuro/treat13.png",
    category: "Cognitive & Technology-Based Approaches",
    isHeader: true
  },
  {
    id: 14,
    title: "Biofeedback & Neurofeedback Approaches",
    description: "Seeing how your body responds in real-time can be empowering—helping you gain better control over your movements.",
    image: "/treatments/neuro/treat14.png",
    category: "Cognitive & Technology-Based Approaches"
  },
  {
    id: 15,
    title: "Virtual Reality–Based Neurorehabilitation",
    description: "Blending technology with therapy creates engaging, precise, and motivating experiences—making recovery both effective and encouraging.",
    image: "/treatments/neuro/treat15.png",
    category: "Cognitive & Technology-Based Approaches"
  }
];

export default function NeuroApproaches() {
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
            Advanced Clinical Approaches
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            We utilize a comprehensive range of evidence-based neurorehabilitation techniques tailored to your specific recovery needs.
          </p>
        </div>

        <div className="space-y-32">
          {approaches.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative approach-row">
                {item.isHeader && (
                  <div className="flex items-center gap-6 mb-16 -mt-10">
                    <span className="text-sm uppercase tracking-[0.3em] font-bold text-slate-300 whitespace-nowrap">
                      {item.category}
                    </span>
                    <div className="h-[1px] w-full bg-slate-100" />
                  </div>
                )}
                
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-black text-slate-100 leading-none select-none">
                        {item.id.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark tracking-tight leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-500 font-light leading-relaxed pl-4 border-l border-brand-primary/20">
                      {item.description}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-slate-50 group">
                      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <div className="relative aspect-[4/3] w-full mix-blend-multiply">
                        <Image 
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
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
