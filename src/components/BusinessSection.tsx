
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Building, 
  Store, 
  Database,
  Award
} from "lucide-react";

const BusinessSection = () => {
  const businessModels = [
    {
      title: "B2G",
      description: "Government Dashboards for disaster monitoring and management",
      icon: <Building2 className="text-blue-500" size={36} />
    },
    {
      title: "B2B",
      description: "Solutions for NGOs, Insurance companies and corporate safety teams",
      icon: <Building className="text-green-500" size={36} />
    },
    {
      title: "Sponsored Emergency Listings",
      description: "Premium listings for emergency service providers",
      icon: <Store className="text-yellow-500" size={36} />
    },
    {
      title: "Data-as-a-Service",
      description: "Anonymized disaster data API for research and planning",
      icon: <Database className="text-purple-500" size={36} />
    },
    {
      title: "CSR / NGO Grant Funding",
      description: "Partnerships with humanitarian organizations and CSR initiatives",
      icon: <Award className="text-disaster-500" size={36} />
    }
  ];

  return (
    <section id="business" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Business <span className="text-disaster-500">Model</span>
          </h2>
          <div className="w-20 h-1 bg-disaster-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sustainable revenue streams while keeping our core services accessible to all
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businessModels.map((model, index) => (
            <Card 
              key={index}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 hover-scale">{model.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{model.title}</h3>
                <p className="text-gray-400">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
