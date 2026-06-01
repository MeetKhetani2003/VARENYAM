"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play, Maximize2, X } from "lucide-react";
import Link from "next/link";

const carouselAssets = [
  "/gallery/image-1.jpeg",
  "/gallery/image-2.jpeg",
  "/gallery/image-3.jpeg",
  "/gallery/image-4.jpeg",
  "/gallery/image-5.jpeg",
  "/gallery/image-6.jpeg",
  "/gallery/image-7.jpeg",
  "/gallery/video-1.mp4",
  "/gallery/image-8.jpeg",
  "/gallery/video-2.mp4"
];

const isVideo = (path) => {
  return /\.(mp4|webm|ogg|mov)$/i.test(path);
};

const GalleryCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [filter, setFilter] = useState("all");

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const filteredAssets = carouselAssets.filter((asset) => {
    if (filter === "all") return true;
    if (filter === "photos") return !isVideo(asset);
    if (filter === "videos") return isVideo(asset);
    return true;
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, filter]);

  return (
    <section className="py-24 px-6 bg-brand-muted overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-4 font-medium">
              Visual Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark tracking-tight">
              Our Clinic <span className="text-brand-secondary">& Environment.</span>
            </h3>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SWITCHER / FILTER */}
        <div className="flex justify-center md:justify-start mb-10">
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

        {/* Carousel */}
        <div className="overflow-hidden -mx-6 px-6 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {filteredAssets.map((asset, index) => (
              <div 
                key={`${filter}-${index}`} 
                className="flex-[0_0_80%] min-w-0 sm:flex-[0_0_40%] lg:flex-[0_0_25%] relative group overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedAsset(asset)}
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
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                        <Play size={20} fill="white" />
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
        </div>
        
        <div className="mt-12 text-center md:text-left flex justify-center md:justify-start">
           <Link 
             href="/gallery"
             className="inline-block px-8 py-3 rounded-full border border-brand-primary/20 text-brand-primary text-xs uppercase tracking-widest font-medium hover:bg-brand-primary hover:text-white transition-all duration-500 group"
           >
             View Full Gallery
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

export default GalleryCarousel;
