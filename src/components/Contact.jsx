"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Globe, Share2 } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-medium text-brand-dark mb-6 tracking-tighter">VARENYAM</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-xs">
              Specialized neurorehabilitation center providing evidence-based precision care in Ankleshwar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-primary font-medium mb-8">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-slate-300 shrink-0 mt-1" />
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    G-46, Ganesh Square Complex, 500 Quarter Road, Ankleshwar GIDC – 393002
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone size={18} className="text-slate-300 shrink-0" />
                  <p className="text-sm text-slate-500 font-light">+91 12345 67890</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={18} className="text-slate-300 shrink-0" />
                  <p className="text-sm text-slate-500 font-light">info@varenyamneuro.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-primary font-medium mb-8">Operational Hours</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <Clock size={18} className="text-slate-300 shrink-0" />
                  <p className="text-sm text-slate-500 font-light">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
                <div className="pt-4 border-t border-slate-200/50">
                  <p className="text-[10px] text-slate-400 font-light uppercase tracking-widest leading-loose">
                    Sunday: Closed for deep sanitization <br />
                    Emergency: On Call Basis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">© 2026 Varenyam Neurocare Center</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] text-slate-400 uppercase tracking-widest hover:text-brand-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] text-slate-400 uppercase tracking-widest hover:text-brand-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
