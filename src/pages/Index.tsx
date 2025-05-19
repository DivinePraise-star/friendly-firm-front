
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MapSection from "@/components/sections/MapSection";
import DataSection from "@/components/sections/DataSection";
import MethodologySection from "@/components/sections/MethodologySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <DataSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
