"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Globe, Share2 } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-8 bg-brand-muted/30 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <h3 className="text-sm font-medium text-brand-dark tracking-tighter uppercase">VARENYAM</h3>
            </div>
            <p className="text-[10px] text-brand-dark/50 font-light leading-relaxed mb-6 max-w-xs">
              Specialized neurorehabilitation center providing evidence-based precision care in Ankleshwar.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <Globe size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <Share2 size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[8px] uppercase tracking-[0.25em] text-brand-primary font-medium mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <MapPin size={14} className="text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-[10px] text-brand-dark/60 font-light leading-tight">
                    G-46, Ganesh Square Complex, 500 Quarter Road, Ankleshwar GIDC – 393002
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={14} className="text-brand-primary shrink-0" />
                  <p className="text-[10px] text-brand-dark/60 font-light">+91 12345 67890</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail size={14} className="text-brand-primary shrink-0" />
                  <p className="text-[10px] text-brand-dark/60 font-light">info@varenyamneuro.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[8px] uppercase tracking-[0.25em] text-brand-primary font-medium mb-4">Hours</h4>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <Clock size={14} className="text-brand-primary shrink-0" />
                  <p className="text-[10px] text-brand-dark/60 font-light">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[8px] text-slate-400 font-light uppercase tracking-widest">
                    Sunday: Closed (Deep Sanitization)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[8px] text-slate-300 uppercase tracking-widest">© 2026 Varenyam Neurocare Center</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[8px] text-slate-300 uppercase tracking-widest hover:text-brand-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[8px] text-slate-300 uppercase tracking-widest hover:text-brand-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
