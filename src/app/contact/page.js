"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { gsap } from "gsap";

export default function ContactPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".reveal", {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out"
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div ref={containerRef} className="pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20">
            <div className="reveal">
              <h1 className="text-4xl md:text-6xl font-normal text-brand-dark mb-8 tracking-tight">
                Connect <br />
                <span className="text-gradient">With Us.</span>
              </h1>
              <p className="text-base text-slate-400 font-light mb-12 leading-relaxed">
                We're here to help you navigate your journey to recovery. Reach out to our team for consultations or questions.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Direct Line</p>
                    <p className="text-base text-slate-600 font-light">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Email Address</p>
                    <p className="text-base text-slate-600 font-light">info@varenyamneuro.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100">
              <h2 className="text-2xl font-normal text-brand-dark mb-10">Send a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-sm font-light"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-sm font-light"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-sm font-light"
                />
                <textarea 
                  placeholder="Tell us about your requirement..."
                  rows={5}
                  className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-sm font-light resize-none"
                />
                <button className="w-full bg-brand-dark text-white py-5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-brand-primary transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
      <Contact />
    </main>
  );
}
