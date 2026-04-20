"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10",
          scrolled ? "py-4" : "py-6 md:py-10"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
          scrolled ? "bg-white/90 backdrop-blur-xl border border-slate-100 px-6 md:px-8 py-3 rounded-full shadow-lg shadow-slate-100/50" : "px-0"
        )}>
          <Link href="/" className="flex items-center gap-2 group relative z-[110]">
            <Activity size={20} className="text-brand-primary" />
            <span className="text-base md:text-lg font-medium tracking-tighter text-brand-dark">VARENYAM</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] lg:text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative py-1",
                  pathname === link.href ? "text-brand-primary" : "text-slate-400 hover:text-brand-dark"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:block bg-brand-dark text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-brand-primary transition-all"
            >
              Contact
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-brand-dark relative z-[110]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white z-[105] transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-2xl uppercase tracking-[0.2em] transition-all duration-300",
              pathname === link.href ? "text-brand-primary" : "text-slate-400"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 bg-brand-dark text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em]"
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
};

export default Navbar;
