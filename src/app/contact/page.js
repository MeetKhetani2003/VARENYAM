"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ContactStrap from "@/components/ContactStrap";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(".contact-card", 
        { x: -20, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 90%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium Contact Hero */}
      <section className="relative pt-48 pb-12 overflow-hidden">
        <div className="absolute top-40 left-0 w-full text-center select-none pointer-events-none opacity-[0.02]">
          <span className="text-[15vw] font-bold text-brand-dark tracking-tighter uppercase">Connect</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="hero-reveal flex items-center gap-4 mb-6 text-brand-primary">
                <div className="w-12 h-[1px] bg-brand-primary" />
                <span className="text-[11px] uppercase tracking-[0.5em] font-semibold">Contact Varenyam</span>
              </div>
              <h1 className="hero-reveal text-4xl md:text-6xl font-semibold text-brand-dark tracking-tighter leading-[1.2] mb-8">
                Clinical <br />
                <span className="text-brand-primary italic font-medium">Consultation.</span>
              </h1>
            </div>
            <div className="hero-reveal pb-4">
              <p className="text-[12.5px] text-slate-400 font-normal max-w-xs leading-relaxed border-l border-brand-primary/20 pl-6">
                Start your recovery journey with a professional consultation from our expert clinical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-2 px-6 contact-grid">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-1 border-t border-slate-50 pt-8">
          {/* Contact Methods */}
          <div className="space-y-1">
            {[
              { icon: Phone, label: "Phone", value: "+91 12345 67890" },
              { icon: Mail, label: "Email", value: "info@varenyamneuro.com" },
              { icon: MapPin, label: "Location", value: "G-46, Ganesh Square Complex, Ankleshwar" }
            ].map((item, i) => (
              <div key={i} className="contact-card flex gap-6 items-center p-10 bg-white border border-slate-50 hover:bg-brand-muted/30 transition-all duration-500">
                <div className="w-12 h-12 bg-brand-dark text-white rounded-lg flex items-center justify-center shadow-sm">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-primary font-bold mb-1">{item.label}</p>
                  <p className="text-base text-brand-dark font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="hero-reveal bg-brand-muted/30 p-12 md:p-16 rounded-[2.5rem] border border-slate-100">
            <h2 className="text-2xl font-semibold text-brand-dark mb-10 tracking-tight">Send a Clinical Message</h2>
            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-2">Patient Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Rajesh Kumar"
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-[13px] font-normal shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-2">Contact Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-[13px] font-normal shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-2">Clinical Requirement</label>
                <input 
                  type="text" 
                  placeholder="Subject of consultation"
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-[13px] font-normal shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-2">Detailed Message</label>
                <textarea 
                  placeholder="Briefly describe the clinical condition or requirements..."
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-[13px] font-normal resize-none shadow-sm"
                />
              </div>
              <button className="bg-brand-dark text-white py-5 rounded-xl text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-primary transition-all flex items-center justify-center gap-4 shadow-xl shadow-brand-dark/5 mt-4">
                Send Consultation Request <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Marquee />
      <ContactStrap />
      <Contact />
    </main>
  );
}
