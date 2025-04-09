
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Server, 
  Router,
  Smartphone,
  Shield,
  Cpu
} from "lucide-react";

const TechStackSection = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Smartphone className="text-blue-500" size={36} />,
      techs: ["Flutter"],
    },
    {
      category: "Backend",
      icon: <Server className="text-green-500" size={36} />,
      techs: ["Flask (Python)", "Docker"],
    },
    {
      category: "Database",
      icon: <Database className="text-yellow-500" size={36} />,
      techs: ["Firebase Firestore"],
    },
    {
      category: "Cloud",
      icon: <Code className="text-purple-500" size={36} />,
      techs: ["Google Cloud"],
    },
    {
      category: "APIs",
      icon: <Router className="text-disaster-500" size={36} />,
      techs: ["Postman", "Razorpay"],
    },
    {
      category: "IoT",
      icon: <Cpu className="text-red-500" size={36} />,
      techs: ["MQ135 (gas sensor)", "NEO-6M (GPS)"],
    },
    {
      category: "Security",
      icon: <Shield className="text-blue-500" size={36} />,
      techs: ["Firebase Authentication"],
    },
  ];

  const openSourceTools = [
    "Python",
    "Docker",
    "Flutter",
    "Firebase",
    "OpenStreetMap",
    "Flask",
    "React",
    "Git",
  ];

  return (
    <section id="tech" className="py-20 bg-black relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-disaster-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tech <span className="text-disaster-500">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-disaster-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="bg-secondary/50 backdrop-blur-sm border-border/20 hover:border-disaster-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-disaster-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 hover-scale">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.techs.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background/50 text-gray-300">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-disaster-500/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            <span className="text-disaster-500">Open Source</span> First
          </h3>
          <p className="text-gray-300 text-center mb-8">
            "We chose tools that are open-source and free to build an affordable, scalable, and globally deployable disaster solution."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {openSourceTools.map((tool, index) => (
              <Badge 
                key={index}
                className="text-sm py-2 px-4 bg-black/50 hover:bg-disaster-500 transition-colors duration-300 hover-scale"
              >
                {tool}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-gray-400 text-center italic">
            "From the ground up, our stack respects budget limits and promotes open collaboration."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
