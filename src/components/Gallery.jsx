"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { Maximize2, Play, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// SIMPLIFIED MEDIA ASSETS
// Just add your image or video paths here!
const mediaAssets = [
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.06 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.06 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.07 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.07 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.07 AM (3).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.07 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.08 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.08 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.08 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.09 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.09 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.09 AM (3).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.09 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.10 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.10 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.10 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.11 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.11 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.11 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.12 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.44 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.45 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.45 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.45 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.46 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 10.29.46 AM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.07 PM.jpeg",
  "/gallery/WhatsApp Video 2026-04-21 at 12.15.07 PM.mp4",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.08 PM.jpeg",
  "/gallery/WhatsApp Video 2026-04-21 at 12.15.08 PM.mp4",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.09 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.09 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.09 PM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.10 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.10 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.10 PM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.11 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.11 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.11 PM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.12 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.12 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.12 PM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.13 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.13 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.13 PM.jpeg",
  "/gallery/WhatsApp Image 2026-04-21 at 12.15.14 PM.jpeg",
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".gallery-item", {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });

        gsap.from(".gallery-header", {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const isVideo = (path) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(path);
  };

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 bg-brand-muted relative">
      <div className="max-w-7xl mx-auto">
        <div className="gallery-header mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">
            Visual Journey
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium text-brand-dark mb-6 tracking-tight leading-tight">
            Our Clinic <span className="text-brand-secondary">& Environment.</span>
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Step into our world of professional care and advanced rehabilitation. 
            We've designed every corner to foster healing, comfort, and progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaAssets.map((asset, index) => (
            <div
              key={index}
              onClick={() => setSelectedAsset(asset)}
              className="gallery-item relative group overflow-hidden rounded-[2rem] aspect-square border border-white/20 shadow-sm cursor-pointer"
            >
              {isVideo(asset) ? (
                <div className="w-full h-full relative">
                  <video
                    src={asset}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={asset}
                  alt={`Clinic media ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-xl">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link 
             href="/gallery"
             className="inline-block px-10 py-4 rounded-full border border-brand-primary/20 text-brand-primary text-xs uppercase tracking-widest font-medium hover:bg-brand-primary hover:text-white transition-all duration-500 group"
           >
             View All Media
             <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedAsset && (
        <div 
          className="fixed inset-0 z-[200] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedAsset(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedAsset(null)}
          >
            <X size={32} />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {isVideo(selectedAsset) ? (
              <video 
                src={selectedAsset} 
                className="max-w-full max-h-full rounded-2xl shadow-2xl" 
                controls 
                autoPlay 
              />
            ) : (
              <img 
                src={selectedAsset} 
                alt="Selected asset" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" 
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
