"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, MoveRight } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 text-brand-dark overflow-hidden relative border-t border-slate-100">
      {/* Subtle Background Watermark */}
      <div className="absolute -bottom-5 -right-5 select-none pointer-events-none opacity-[0.03]">
        <span className="text-[12vw] font-bold tracking-tighter uppercase whitespace-nowrap text-brand-dark">VARENYAM</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <h3 className="text-base font-bold tracking-tighter uppercase text-brand-dark">VARENYAM</h3>
            </Link>
            <p className="text-[12px] text-slate-500 font-normal leading-relaxed mb-8 max-w-xs">
              Specialized neurorehabilitation center providing evidence-based precision care and pediatric excellence in Ankleshwar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-[13px] text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-brand-primary group-hover:w-4 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-primary mb-8">Clinical Inquiry</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                    <p className="text-[13px] text-brand-dark font-medium">+91 12345 67890</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">Email</p>
                    <p className="text-[13px] text-brand-dark font-medium">info@varenyamneuro.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="text-[13px] text-brand-dark font-medium leading-relaxed">
                    G-46, Ganesh Square Complex, <br />
                    Ankleshwar, Gujarat - 393002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 font-normal uppercase tracking-widest">
            © 2026 Varenyam Neurocare Centre.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[11px] text-slate-400 hover:text-brand-dark uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[11px] text-slate-400 hover:text-brand-dark uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
