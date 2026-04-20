"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Phone } from "lucide-react";

const ContactStrap = () => {
  return (
    <div className="bg-brand-primary py-8 px-6 overflow-hidden relative group">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-full bg-white/10 skew-x-[-20deg] translate-x-32 group-hover:translate-x-20 transition-transform duration-1000" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white shadow-inner">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Ready to start your recovery journey?
            </h3>
            <p className="text-white/80 text-[13px] font-medium uppercase tracking-widest mt-1">
              Consult with our clinical experts today
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="bg-brand-dark text-white px-8 py-4 rounded-xl text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-dark/10 flex items-center gap-3"
          >
            Book Appointment <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactStrap;
