"use client";

import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const neuroConditions = [
  { title: "Stroke", description: "When blood supply to the brain is affected, leading to weakness, speech, or movement problems." },
  { title: "Brain Injury", description: "Damage to the brain due to accident, fall, or illness affecting daily function." },
  { title: "Spinal Cord Injury", description: "Injury to the spine that may affect movement or sensation in the body." },
  { title: "Balance & Vertigo Problems", description: "Conditions causing dizziness, spinning sensation, or unsteadiness." },
  { title: "Facial Palsy", description: "Weakness or loss of movement on one side of the face." },
  { title: "Nerve Problems (Peripheral Neuropathy)", description: "Damage to nerves causing numbness, tingling, or weakness." },
  { title: "Parkinsonism & Walking Difficulties", description: "Conditions causing slow movement, stiffness, or difficulty in walking." },
  { title: "Post-Hospital Weakness", description: "Loss of strength and stamina after a hospital stay or illness." }
];

const pediatricConditions = [
  { title: "Developmental Delay", description: "When a child takes longer than expected to achieve milestones like sitting, walking, or talking." },
  { title: "Low or High Muscle Tone (Hypotonia / Hypertonia)", description: "When a child feels unusually floppy or stiff, affecting movement and posture." },
  { title: "Cerebral Palsy", description: "A condition that affects movement, muscle control, and posture from early childhood." },
  { title: "Muscular Dystrophy", description: "A group of conditions where muscles gradually become weak over time." },
  { title: "Genetic or Birth-Related Movement Difficulties", description: "Movement challenges present from birth or due to genetic conditions." },
  { title: "Torticollis", description: "When a baby’s neck tilts or turns to one side due to muscle tightness." },
  { title: "Down Syndrome", description: "A genetic condition that may affect physical growth, muscle tone, and development." },
  { title: "Motor Coordination Difficulties", description: "When a child finds it hard to balance, coordinate, or perform smooth movements." }
];

export default function ConditionsFAQ() {
  const [activeTab, setActiveTab] = useState("neuro"); // 'neuro' or 'pediatric'
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const containerRef = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(
      ".faq-header",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  const currentConditions = activeTab === "neuro" ? neuroConditions : pediatricConditions;

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section ref={containerRef} className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 faq-header">
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 tracking-tight">
            Conditions We Treat
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Our comprehensive rehabilitation programs are tailored to address a wide range of neurological and developmental conditions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 faq-header">
          <div className="inline-flex bg-white p-2 rounded-2xl shadow-sm border border-slate-100 relative">
            <button
              onClick={() => {
                setActiveTab("neuro");
                setExpandedIndex(null);
              }}
              className={`relative z-10 px-8 py-4 text-sm md:text-base font-semibold transition-all duration-300 rounded-xl ${
                activeTab === "neuro" ? "text-white shadow-md shadow-brand-primary/20" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              Neuro Rehabilitation
              {activeTab === "neuro" && (
                <div className="absolute inset-0 bg-brand-primary rounded-xl -z-10" />
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("pediatric");
                setExpandedIndex(null);
              }}
              className={`relative z-10 px-8 py-4 text-sm md:text-base font-semibold transition-all duration-300 rounded-xl ${
                activeTab === "pediatric" ? "text-white shadow-md shadow-brand-primary/20" : "text-slate-500 hover:text-brand-dark"
              }`}
            >
              Paediatric Rehabilitation
              {activeTab === "pediatric" && (
                <div className="absolute inset-0 bg-brand-primary rounded-xl -z-10" />
              )}
            </button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 faq-header">
          {currentConditions.map((condition, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isExpanded ? "border-brand-primary/30 shadow-lg shadow-brand-primary/5" : "border-slate-100 shadow-sm hover:border-brand-primary/20 hover:shadow-md"
                }`}
                onClick={() => handleToggle(index)}
              >
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-muted/20 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${isExpanded ? "text-brand-primary" : "text-brand-dark"}`}>
                        {condition.title}
                      </h3>
                      
                      <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-slate-500 font-light text-base leading-relaxed">
                            {condition.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`flex-shrink-0 transition-transform duration-300 mt-1 ${isExpanded ? "rotate-180" : ""}`}>
                    {isExpanded ? (
                      <Minus size={20} className="text-brand-primary" />
                    ) : (
                      <Plus size={20} className="text-slate-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
