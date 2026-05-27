"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    time: "2 weeks ago",
    text: "The personalized care I received at Varenyam was exceptional. Dr. Khushi's expertise in stroke rehab helped me walk again within months.",
    rating: 5,
    avatarColor: "bg-blue-100 text-blue-600"
  },
  {
    name: "Sneha Patel",
    time: "1 month ago",
    text: "Finding a specialist for my son's CP was difficult until we found Varenyam. Their pediatric setup and patient approach are world-class.",
    rating: 5,
    avatarColor: "bg-green-100 text-green-600"
  },
  {
    name: "Amit Shah",
    time: "3 months ago",
    text: "Evidence-based therapy and professional guidance. They focus on functional independence which was exactly what I needed.",
    rating: 5,
    avatarColor: "bg-amber-100 text-amber-600"
  },
  {
    name: "Priya Sharma",
    time: "4 months ago",
    text: "Varenyam has significantly improved my mobility and quality of life. The clinical environment is very supportive.",
    rating: 5,
    avatarColor: "bg-purple-100 text-purple-600"
  },
  {
    name: "Vikram Mehta",
    time: "5 months ago",
    text: "The team here is incredible. They understood my specific limitations and pushed me safely toward full recovery.",
    rating: 5,
    avatarColor: "bg-rose-100 text-rose-600"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <GoogleIcon />
              <span className="text-sm font-semibold text-slate-700">Google Verified Reviews</span>
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Hear from our <span className="text-brand-primary italic">Patients.</span>
            </h2>
            <p className="text-lg text-slate-500 mt-4 font-normal leading-relaxed">
              Real stories of recovery and renewed independence from people who trusted Varenyam.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all duration-300 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all duration-300 disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-6 px-6 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.avatarColor}`}>
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">{t.name}</h4>
                        <p className="text-sm text-slate-500">{t.time}</p>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

