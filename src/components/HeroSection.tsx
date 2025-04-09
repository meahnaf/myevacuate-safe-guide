
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-0"></div>
      
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-disaster-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-disaster-700 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-white">MyEvacuate: </span>
            <span className="bg-gradient-to-r from-disaster-400 to-yellow-500 bg-clip-text text-transparent">
              Your Guide to Safety During Natural Disasters
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-in animation-delay-200">
            Built with AI, Open-Source Tech, and Passion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button className="bg-disaster-500 hover:bg-disaster-600 text-white font-medium px-8 py-6 rounded-lg text-lg hover-scale">
              Learn More
            </Button>
            <Button variant="outline" className="border-disaster-500 text-white hover:bg-disaster-500/10 font-medium px-8 py-6 rounded-lg text-lg hover-scale">
              See Demo
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#team" className="text-white/70 hover:text-white transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
