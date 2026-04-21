"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { Maximize2, Play, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// SIMPLIFIED MEDIA ASSETS
const mediaAssets = [
  "/gallery/image-1.jpeg",
  "/gallery/image-2.jpeg",
  "/gallery/image-3.jpeg",
  "/gallery/image-4.jpeg",
  "/gallery/image-5.jpeg",
  "/gallery/image-6.jpeg",
  "/gallery/image-7.jpeg",
  "/gallery/image-8.jpeg",
  "/gallery/image-9.jpeg",
  "/gallery/image-10.jpeg",
  "/gallery/image-11.jpeg",
  "/gallery/image-12.jpeg",
  "/gallery/image-13.jpeg",
  "/gallery/image-14.jpeg",
  "/gallery/image-15.jpeg",
  "/gallery/image-16.jpeg",
  "/gallery/image-17.jpeg",
  "/gallery/image-18.jpeg",
  "/gallery/image-19.jpeg",
  "/gallery/image-20.jpeg",
  "/gallery/image-21.jpeg",
  "/gallery/image-22.jpeg",
  "/gallery/image-23.jpeg",
  "/gallery/image-24.jpeg",
  "/gallery/image-25.jpeg",
  "/gallery/image-26.jpeg",
  "/gallery/image-27.jpeg",
  "/gallery/image-28.jpeg",
  "/gallery/image-29.jpeg",
  "/gallery/image-30.jpeg",
  "/gallery/image-31.jpeg",
  "/gallery/image-32.jpeg",
  "/gallery/image-33.jpeg",
  "/gallery/image-34.jpeg",
  "/gallery/image-35.jpeg",
  "/gallery/image-36.jpeg",
  "/gallery/image-37.jpeg",
  "/gallery/image-38.jpeg",
  "/gallery/image-39.jpeg",
  "/gallery/image-40.jpeg",
  "/gallery/image-41.jpeg",
  "/gallery/image-42.jpeg",
  "/gallery/image-43.jpeg",
  "/gallery/image-44.jpeg",
  "/gallery/video-1.mp4",
  "/gallery/video-2.mp4"
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all', 'photos', 'videos'

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        // Animation for items whenever filter changes
        gsap.fromTo(".gallery-item", 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: "power3.out",
            overwrite: true
          }
        );

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
  }, [filter]);

  const isVideo = (path) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(path);
  };

  const filteredAssets = mediaAssets.filter((asset) => {
    if (filter === "all") return true;
    if (filter === "photos") return !isVideo(asset);
    if (filter === "videos") return isVideo(asset);
    return true;
  });

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 bg-brand-muted relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="gallery-header mb-12 text-center max-w-2xl mx-auto">
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

        {/* SWITCHER / FILTER */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white flex gap-1 shadow-sm">
            {["all", "photos", "videos"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-semibold transition-all duration-300
                  ${filter === type 
                    ? "bg-brand-primary text-white shadow-md scale-105" 
                    : "text-slate-400 hover:text-brand-dark hover:bg-white/80"
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset, index) => (
            <div
              key={`${filter}-${index}`}
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
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
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
