
import React from "react";

const PrototypeSection = () => {
  return (
    <section id="prototype" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Expected <span className="text-disaster-500">Prototype</span>
          </h2>
          <div className="w-20 h-1 bg-disaster-500 mx-auto mb-8"></div>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-4xl w-full animate-fade-in">
            <img 
              src="/lovable-uploads/dcde8764-6903-44ce-ab44-f5bf763d8416.png" 
              alt="MyEvacuate App Prototype showing emergency services, evacuation map, and fire safety features" 
              className="w-full h-auto rounded-lg shadow-2xl border border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
