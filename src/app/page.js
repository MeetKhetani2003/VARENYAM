import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesPreview from "@/components/ServicesPreview";
import ConditionsFAQ from "@/components/ConditionsFAQ";
import Approach from "@/components/Approach";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactStrap from "@/components/ContactStrap";
import Contact from "@/components/Contact";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Approach />
      <ServicesPreview />
      <ConditionsFAQ />
      <WhyChooseUs />
      <GalleryCarousel />
      <Testimonials />
      <ContactStrap />
      <Contact />
    </main>
  );
}
