"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GraduationCap, Award, Stethoscope, Heart, ShieldAlert } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Deepu M. Upadhyay",
    image: "/doctor_deepu.png",
    credentials: "MPT (Sports Physiotherapy)",
    roles: [
      "Owner & Director – Vardani Physiocare",
      "Owner & Director – Varenyam Neuro Care",
      "Lead Musculoskeletal Physiotherapist",
      "Certified Pilates Instructor & Clinical Dietician"
    ],
    expertise: [
      "Orthopaedic & Sports Physiotherapy",
      "Sports Injuries & Return-to-Sport Rehab",
      "Post-surgical Rehab (ACL, Meniscus, Rotator Cuff)",
      "Ligament, Muscle Injury & Spine Conditions",
      "Shoulder, Knee, Hip & Ankle Rehabilitation",
      "Chronic Pain & Biomechanics Disorders"
    ],
    training: [
      "Manual Therapy & Soft Tissue Mobilization",
      "Dry Needling & Strength & Conditioning",
      "Posture Correction & Mobility Restoration",
      "Biomechanical Assessment & Technique Correction"
    ],
    approach: [
      "Structured, progressive rehab protocols",
      "Movement-analysis & technique-driven corrections",
      "Holistic integration of exercise, Pilates & diet"
    ],
    philosophy: "Dr. Deepu is committed to delivering affordable, ethical, and evidence-based physiotherapy. She focuses on restoring movement, strength, and confidence through a disciplined, scientific, and patient-centered approach."
  },
  {
    name: "Dr. Khushi Joshi",
    image: "/doctor.png",
    credentials: "BPT | Neurophysiotherapist",
    roles: [
      "Lead Neurorehabilitation Therapist",
      "Pediatric Specialist"
    ],
    expertise: [
      "Stroke Rehabilitation & Brain Injury Recovery",
      "Cerebral Palsy (CP) & Developmental Disorders",
      "Spinal Cord Injury (SCI) Rehabilitation",
      "Pediatric Physiotherapy & Early Intervention",
      "Advanced Neurorehabilitation Techniques"
    ],
    training: [
      "Sensory Integration & Neurodevelopmental Therapy (NDT)",
      "Gait & Functional Mobility Training",
      "Scientific Movement Therapy & Coordination Exercises",
      "Precision Pediatric Motor Milestones Recovery"
    ],
    approach: [
      "Customized patient-centered recovery protocols",
      "Active patient and family involvement",
      "Scientific techniques for maximum functional gains"
    ],
    philosophy: "Dr. Khushi is dedicated to helping patients rebuild lives and regain independence. She integrates empathy with cutting-edge neurological and pediatric rehabilitation methods."
  }
];

const DoctorCard = ({ doctor }) => {
  const [activeTab, setActiveTab] = useState("expertise");

  return (
    <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-100/50 relative group flex flex-col justify-between h-full hover:border-slate-200 transition-all duration-500">
      <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div>
        <div className="w-full h-80 bg-slate-100 rounded-3xl mb-8 overflow-hidden relative">
          <img 
            src={doctor.image} 
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
        </div>
        
        <h4 className="text-2xl md:text-3xl font-medium text-brand-dark mb-1 tracking-tight">{doctor.name}</h4>
        <p className="text-brand-primary text-xs uppercase tracking-widest font-semibold mb-6">{doctor.credentials}</p>
        
        {/* Roles */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-6">
          {doctor.roles.map((role, idx) => (
            <span key={idx} className="bg-slate-50 border border-slate-100 text-[9px] tracking-wider uppercase text-slate-500 px-3 py-1.5 rounded-lg font-medium">
              {role}
            </span>
          ))}
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-100 mb-6 gap-6">
          {["expertise", "training", "philosophy"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] uppercase tracking-widest font-bold pb-3 relative transition-colors duration-300 ${
                activeTab === tab ? "text-brand-primary" : "text-slate-400 hover:text-brand-dark"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[180px]">
          {activeTab === "expertise" && (
            <ul className="space-y-3">
              {doctor.expertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-500 font-light text-[13px] leading-relaxed">
                  <Stethoscope size={16} className="text-brand-primary shrink-0 mt-0.5 animate-pulse" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === "training" && (
            <ul className="space-y-3">
              {doctor.training.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-500 font-light text-[13px] leading-relaxed">
                  <GraduationCap size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === "philosophy" && (
            <div className="flex flex-col justify-between h-full">
              <p className="text-slate-500 font-light text-[13px] leading-relaxed italic">
                "{doctor.philosophy}"
              </p>
              {doctor.approach && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mb-2">Therapeutic Approach</p>
                  <p className="text-slate-500 font-light text-[12px] leading-relaxed">
                    {doctor.approach.join(" • ")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".reveal-up", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content */}
          <div className="reveal-up">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark mb-8 tracking-tight leading-tight">
              Evidence-Based Care <br />
              <span className="text-gradient">with Empathy.</span>
            </h3>
            
            <div className="space-y-6 text-slate-500 font-light leading-relaxed mb-12">
              <p>
                Varenyam Neurocare Center was started with the aim of providing evidence-based neurorehabilitation with a patient-centered approach. 
                We focus on improving functional independence, quality of life, and long-term recovery through personalized therapy plans.
              </p>
              <p>
                We specialize in neurorehabilitation and pediatric physiotherapy. Our approach is based on customized treatment plans, scientific techniques, and active family involvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                <Heart size={24} className="text-brand-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Patient Centered</h4>
                  <p className="text-xs text-slate-400">Tailored plans for individuals.</p>
                </div>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                <Stethoscope size={24} className="text-brand-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-brand-dark mb-1">Evidence Based</h4>
                  <p className="text-xs text-slate-400">Scientifically backed protocols.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Graphical Component */}
          <div className="reveal-up relative">
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[3rem] rotate-2 scale-105" />
            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 shadow-xl shadow-slate-100/50 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full filter blur-3xl -translate-y-10 translate-x-10" />
              <h4 className="text-2xl font-semibold text-brand-dark mb-6 tracking-tight">Our Rehabilitation Approach</h4>
              <ul className="space-y-4 text-slate-500 font-light text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>Precision neurological evaluation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>Customized multidisciplinary therapy plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>Advanced exercise sciences & Pilates training</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>Holistic nutrition & clinical dietary guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <span>Continuous monitoring & return-to-sport rehab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clinical Leadership section */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-6 font-medium">Our Clinical Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-brand-dark tracking-tight leading-tight">
              Meet Our <span className="text-gradient">Specialists</span>
            </h3>
            <p className="text-slate-500 font-light mt-4 leading-relaxed text-[15px]">
              Highly qualified professionals committed to delivering ethical, evidence-based care tailored to your unique recovery path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch reveal-up">
            {doctors.map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
