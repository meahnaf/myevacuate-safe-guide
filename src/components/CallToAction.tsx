
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-disaster-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-16 h-16 text-disaster-500 mx-auto mb-8 animate-pulse" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-disaster-400 to-yellow-500 bg-clip-text text-transparent">
            Join us in building a safer world, powered by open-source tech and human-first design.
          </h2>
          
          <p className="text-xl text-gray-300 mb-10">
            Together, we can save lives and create resilient communities prepared for any disaster.
          </p>
          
          <Button className="bg-disaster-500 hover:bg-disaster-600 text-white font-medium px-8 py-6 rounded-lg text-lg hover-scale">
            Let's Collaborate
          </Button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
