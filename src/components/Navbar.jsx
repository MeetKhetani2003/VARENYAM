"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Scroll Progress Logic - Lightweight
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledVal = (winScroll / height) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = scrolledVal + "%";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[110] transition-all duration-300 px-4 md:px-10",
          scrolled ? "py-2" : "py-4 md:py-6"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
          scrolled ? "bg-white/95 backdrop-blur-md border border-slate-100 px-6 py-2 rounded-xl shadow-sm" : "px-0"
        )}>
          <Link href="/" className="flex items-center gap-3 relative z-[110]">
            <img src="/logo.png" alt="Varenyam Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-semibold tracking-tighter text-brand-dark leading-none">VARENYAM</span>
              <span className="text-[8px] md:text-[10px] text-brand-secondary font-medium uppercase tracking-widest mt-0.5">Neurocare Centre</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[12.5px] uppercase tracking-[0.2em] transition-all duration-300 relative py-1 font-semibold",
                  isActive(link.href) ? "text-brand-primary" : "text-brand-dark/60 hover:text-brand-dark"
                )}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-[110]">
            <Link
              href="/contact"
              className="hidden sm:block bg-brand-primary text-white px-5 py-2 rounded-lg text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-dark transition-all shadow-sm"
            >
              Book Now
            </Link>

            <button 
              className={cn(
                "w-10 h-10 flex items-center justify-center transition-all rounded-lg",
                mobileMenuOpen ? "text-brand-dark bg-slate-50" : "text-brand-dark bg-white shadow-sm border border-slate-100 md:hidden"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Scroll Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100 overflow-hidden rounded-full">
            <div ref={progressRef} className="h-full bg-brand-primary w-0 transition-all duration-150 ease-out" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white z-[105] transition-all duration-500 md:hidden flex flex-col",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
      )}>
        <div className="h-20 border-b border-slate-50 flex-shrink-0" /> {/* Spacer for the fixed navbar */}

        <div className="flex-1 flex flex-col justify-center px-10 gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-3xl font-semibold tracking-tighter transition-all duration-300 flex items-center gap-4",
                isActive(link.href) ? "text-brand-primary" : "text-brand-dark/30"
              )}
            >
              <span className="text-xs font-medium text-slate-300">0{i+1}</span>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="p-10 bg-slate-50 mt-auto border-t border-slate-100 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-500">
              <Phone size={16} className="text-brand-primary" />
              <span className="text-xs font-normal">+91 12345 67890</span>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <Mail size={16} className="text-brand-primary" />
              <span className="text-xs font-normal">info@varenyamneuro.com</span>
            </div>
          </div>
          
          <Link
            href="/contact"
            className="block w-full bg-brand-dark text-white text-center py-4 rounded-xl text-[11px] uppercase tracking-[0.2em] font-semibold"
          >
            Book Clinical Consultation
          </Link>

          <div className="flex gap-4 pt-4">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <Globe size={14} />
            </div>
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <Share2 size={14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
