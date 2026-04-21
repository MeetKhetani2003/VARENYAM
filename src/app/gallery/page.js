"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ContactStrap from "@/components/ContactStrap";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-brand-dark mb-6 tracking-tight">
            Our Media <span className="text-brand-primary">Gallery.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Explore the facilities, technology, and moments that define Varenyam Neurocare Centre. 
            We believe in transparency and excellence in every detail.
          </p>
        </div>
      </div>
      
      {/* Reuse the Gallery component but maybe with more items in a real scenario */}
      <Gallery />
      
      {/* We could add more specific category sections here if needed */}
      
      <ContactStrap />
      <Contact />
    </main>
  );
}
