
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TechStackSection from "@/components/TechStackSection";
import BusinessSection from "@/components/BusinessSection";
import PrototypeSection from "@/components/PrototypeSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <ProblemSection />
      <SolutionSection />
      <TechStackSection />
      <BusinessSection />
      <PrototypeSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
