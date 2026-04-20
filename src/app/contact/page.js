"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { gsap } from "gsap";

export default function ContactPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".reveal", 
          { y: 5, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contact Hero - Matching Home/Services Style */}
      <div className="pt-32 pb-4 px-6 bg-brand-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl reveal">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-brand-primary mb-4 font-semibold">Get in Touch</h2>
            <h1 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-4 tracking-tighter">
              Clinical <span className="text-brand-primary">Consultation.</span>
            </h1>
            <p className="text-base text-slate-500 font-normal max-w-xl">
              We're here to help you navigate your journey to recovery. Reach out to our team for consultations or questions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-2 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-1 border-t border-slate-50 pt-8">
          <div className="reveal space-y-1">
            <div className="flex gap-4 items-center p-8 bg-white border border-slate-50">
              <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                <p className="text-sm text-brand-dark font-medium">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-8 bg-white border border-slate-50">
              <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-slate-400 mb-1">Email</p>
                <p className="text-sm text-brand-dark font-medium">info@varenyamneuro.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center p-8 bg-white border border-slate-50">
              <div className="w-10 h-10 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-slate-400 mb-1">Location</p>
                <p className="text-sm text-brand-dark font-medium max-w-xs">G-46, Ganesh Square Complex, Ankleshwar</p>
              </div>
            </div>
          </div>

          <div className="reveal bg-brand-muted/30 p-10 md:p-12 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-semibold text-brand-dark mb-8">Send a Clinical Message</h2>
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-primary transition-colors text-xs font-normal"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-primary transition-colors text-xs font-normal"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-primary transition-colors text-xs font-normal"
              />
              <textarea 
                placeholder="Briefly describe the clinical requirement..."
                rows={4}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-brand-primary transition-colors text-xs font-normal resize-none"
              />
              <button className="bg-brand-dark text-white py-4 rounded-lg text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-primary transition-all flex items-center justify-center gap-3 shadow-sm">
                Send Message <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Marquee />
      <Contact />
    </main>
  );
}
