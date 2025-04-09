
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Bell, 
  Ambulance,
  AlarmSmoke,
  Compass, 
  Globe, 
  Users 
} from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      title: "Evacuation Routes",
      description: "AI-optimized escape routes based on real-time disaster data",
      icon: <MapPin className="text-disaster-500" size={36} />,
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications about developing emergency situations",
      icon: <Bell className="text-yellow-500" size={36} />,
    },
    {
      title: "Nearby Help Services",
      description: "Locate hospitals, shelters, and emergency services quickly",
      icon: <Ambulance className="text-blue-500" size={36} />,
    },
    {
      title: "Real-Time Smoke Detection",
      description: "IoT sensors that detect smoke and alert before fires spread",
      icon: <AlarmSmoke className="text-red-500" size={36} />,
    },
    {
      title: "GPS for Rescue Teams",
      description: "Location tracking to help rescuers find people in danger",
      icon: <Compass className="text-green-500" size={36} />,
    },
    {
      title: "AI-Powered Emergency Guide",
      description: "Step-by-step guidance during emergencies tailored to your situation",
      icon: <Globe className="text-purple-500" size={36} />,
    },
    {
      title: "Community Support System",
      description: "Connect with neighbors and volunteers during crisis events",
      icon: <Users className="text-pink-500" size={36} />,
    },
  ];

  return (
    <section id="solution" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Our <span className="text-disaster-500">Solution</span>
          </h2>
          <div className="w-20 h-1 bg-disaster-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive AI-powered disaster management platform to save lives and coordinate emergency response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 hover-scale">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
