import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import { Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 bg-brand-muted/30 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
            About <span className="text-gradient">Varenyam</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A center dedicated to evidence-based neurorehabilitation and pediatric excellence.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              To provide evidence-based neurorehabilitation with a patient-centered approach, focusing on improving functional independence and quality of life.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600 mb-8">
              <Eye size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              To be the leading center for neurological recovery, where innovation meets empathy to rebuild lives and restore movement.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100">
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-600 mb-8">
              <Heart size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Integrity, Empathy, Scientific Precision, and a deep commitment to the long-term recovery of every patient we serve.
            </p>
          </div>
        </div>
      </div>

      <About />
      <Marquee />
      <Contact />
    </main>
  );
}
