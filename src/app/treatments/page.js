"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactStrap from "@/components/ContactStrap";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { services } from "@/data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight, Activity, Baby } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IconMap = { Activity, Baby };

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
              toggleActions: "play none none none"
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

    // Robust Refresh Cycle for dynamic content/images
    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    const timers = [
      setTimeout(refresh, 100),
      setTimeout(refresh, 500),
      setTimeout(refresh, 1000),
      setTimeout(refresh, 2000)
    ];

    return () => {
      ctx.revert();
      window.removeEventListener("load", refresh);
      timers.forEach(clearTimeout);
    };
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
                Specialized Care <br />
                <span className="text-brand-primary italic font-medium">Designed for Recovery.</span>
              </h1>
            </div>
            <div className="hero-reveal pb-4">
              <p className="text-sm text-slate-400 font-normal max-w-xs leading-relaxed border-l border-brand-primary/20 pl-6">
                Two specialized clinical programs engineered for neurological recovery and functional independence.
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
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
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
                        <span className="text-[11px] text-slate-300 font-medium uppercase tracking-widest mt-1">Specialization 0{i + 1}</span>
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
                      href={`/treatments/${service.id}`}
                      className="inline-flex items-center gap-4 group text-brand-dark hover:text-brand-primary transition-all"
                    >
                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <MoveRight size={16} />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">View Treatment Detail</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Our Approach Section with Image */}
      <section className="py-24 px-6 bg-brand-muted/20 border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-[11px] uppercase tracking-[0.5em] font-semibold text-brand-primary">Our Philosophy</span>
                <div className="w-12 h-[1px] bg-brand-primary/50" />
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-8 tracking-tight leading-[1.2]">
                Therapy is not just exercise—it is <br className="hidden xl:block" />
                <span className="text-brand-primary italic">brain training</span> through movement, <br className="hidden xl:block" />
                play, and meaningful activities.
              </h2>

              <p className="text-lg text-slate-500 leading-relaxed font-light mb-10">
                We aim to help every individual reach their maximum functional independence in a supportive and encouraging environment. By leveraging neuroplasticity, we create new pathways for recovery and growth.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white p-4">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-muted/10">
                  <Image
                    src="/neuroplasticity-infographic.png"
                    alt="Neuroplasticity - How the brain changes with learning and experience"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Healing & Progress */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 pt-16 border-t border-brand-primary/10">
            <div className="w-full lg:w-1/2">
              
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tight">
                  Healing After Injury or Trauma
                </h3>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-6">
                  Sometimes after a difficult experience, the brain becomes more alert or sensitive. Therapy helps the brain:
                </p>
                <ul className="space-y-3">
                  {[
                    "Feel safe again",
                    "Respond appropriately to surroundings",
                    "Reduce unnecessary fear or stiffness",
                    "Build healthy, functional responses"
                  ].map((item, idx) => (
                    <li key={`healing-${idx}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/10 text-brand-primary flex flex-shrink-0 items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tight flex items-center gap-3">
                  <span className="text-2xl">🧩</span> How We Create Progress
                </h3>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-6">
                  Recovery is not random—it follows a structured process:
                </p>
                <ul className="space-y-3">
                  {[
                    "Focused attention during therapy",
                    "Repeated practice of meaningful activities",
                    "Gradual challenge to improve skills",
                    "Rest and recovery to strengthen learning"
                  ].map((item, idx) => (
                    <li key={`progress-${idx}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-secondary/10 text-brand-secondary flex flex-shrink-0 items-center justify-center mt-0.5">
                        <span className="text-[10px] font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white p-4 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-muted/10">
                  <Image 
                    src="/learning-neuron.png"
                    alt="Neuron Learning Process - Before and After"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: Brain Chemicals */}
          <div className="flex flex-col lg:flex-row items-center gap-16 pt-16 border-t border-brand-primary/10">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tight">
                The Role of Brain Chemicals
              </h3>
              <p className="text-base text-slate-500 leading-relaxed font-light mb-6">
                Our brain uses natural chemicals (called neurotransmitters) to function:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E5F1F6] text-[#3D84A8] flex flex-shrink-0 items-center justify-center mt-0.5">
                    <span className="text-[10px] font-bold">1</span>
                  </div>
                  <span className="text-sm text-slate-600"><strong className="text-slate-800">Serotonin</strong> helps with mood and calmness</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFF3E6] text-[#E58F40] flex flex-shrink-0 items-center justify-center mt-0.5">
                    <span className="text-[10px] font-bold">2</span>
                  </div>
                  <span className="text-sm text-slate-600"><strong className="text-slate-800">Dopamine</strong> supports motivation and learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFF8E1] text-[#D8B024] flex flex-shrink-0 items-center justify-center mt-0.5">
                    <span className="text-[10px] font-bold">3</span>
                  </div>
                  <span className="text-sm text-slate-600"><strong className="text-slate-800">Acetylcholine</strong> improves memory and movement control</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3E5F5] text-[#8E24AA] flex flex-shrink-0 items-center justify-center mt-0.5">
                    <span className="text-[10px] font-bold">4</span>
                  </div>
                  <span className="text-sm text-slate-600"><strong className="text-slate-800">GABA & Glutamate</strong> help balance brain activity</span>
                </li>
              </ul>
              <p className="text-base font-medium text-brand-primary leading-relaxed bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/10">
                Therapy helps regulate these, improving both physical and emotional well-being.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white p-4 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-muted/10">
                  <Image 
                    src="/neurotransmitters-infographic.png"
                    alt="Meet Your Neurotransmitters"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Row: Healing & Growth */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 pt-16 border-t border-brand-primary/10">
            <div className="w-full lg:w-1/2">
              
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tight">
                  How Therapy Helps the Brain Heal & Grow
                </h3>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-4">
                  Our brain is not fixed—it is constantly changing, adapting, and healing. This ability is called <span className="font-medium text-brand-primary">neuroplasticity</span>, and it is the foundation of all rehabilitation.
                </p>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-6">
                  After injury, developmental delay, or emotional stress, the brain may form patterns that affect movement, behavior, or learning. But with the right therapy, these patterns can be reshaped.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4 tracking-tight flex items-center gap-3">
                  <span className="text-2xl">🌱</span> What Happens During Therapy?
                </h3>
                <ul className="space-y-4">
                  {[
                    "The brain learns new pathways through guided movement and repetition",
                    "Muscles and nerves begin to work together more efficiently",
                    "The patient develops better control, balance, and coordination",
                    "Confidence and independence gradually improve"
                  ].map((item, idx) => (
                    <li key={`therapy-${idx}`} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex flex-shrink-0 items-center justify-center mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/5 bg-white p-4 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-brand-muted/10">
                  <Image 
                    src="/brain-trauma-infographic.png"
                    alt="Brain Changes & Trauma"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

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
