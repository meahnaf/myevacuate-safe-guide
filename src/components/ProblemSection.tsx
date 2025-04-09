
import { AlertCircle, AlertTriangle, Flame, CloudRain } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-black relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            The <span className="text-disaster-500">Problem</span>
          </h2>
          <div className="w-20 h-1 bg-disaster-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-disaster-500/20 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-disaster-500/20 text-disaster-500">
                <AlertTriangle size={48} />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 md:w-2/3">
              "Disasters strike without warning. From the LA wildfires to floods in India – many lives are lost due to poor evacuation plans and lack of real-time data."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-white/10 hover-scale">
              <Flame className="text-disaster-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Wildfires</h3>
              <p className="text-gray-400">Unpredictable and fast-moving</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-white/10 hover-scale">
              <CloudRain className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Floods</h3>
              <p className="text-gray-400">Devastating communities worldwide</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg border border-white/10 hover-scale">
              <AlertCircle className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">No Warning</h3>
              <p className="text-gray-400">Lack of real-time alert systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
