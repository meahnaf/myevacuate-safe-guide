
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-montserrat font-bold text-2xl text-white">
              My<span className="text-disaster-500">Evacuate</span>
            </span>
            <p className="text-gray-500 mt-2">AI-Powered Disaster Evacuation Assistant</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-disaster-500 mx-1" /> by Team MidNighters
            </p>
            <p className="text-gray-600 text-sm mt-2">
              &copy; {new Date().getFullYear()} MyEvacuate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
